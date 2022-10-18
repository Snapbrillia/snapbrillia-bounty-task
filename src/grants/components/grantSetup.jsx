import { Row, Col, Container } from 'react-bootstrap';
import { useState, createContext } from 'react';
import { createGrantPayment } from '../../shared/utils';
//COMPONENTS
import NavBar from '../../shared/menus/navBar';
import NextBtn from '../../shared/button/next';
import BackBtn from '../../shared/button/back';
import GrantSetupStep from './grantSetupStep';
import GrantDetails from './grantDetails';
import GrantReview from './grantSetupReview';
import InviteTeamMembers from './inviteTeamMembers';
import InviteFunders from './inviteFunders';
import { uploadFile } from '../../api/files';
import * as grantAPI from '../../api/grant';

//CSS
import '../css/grantsSetup.css';
import '../../shared/css/typography.css';
import { navigate } from '@reach/router';
import { toast } from 'react-toastify';

export const GrantSetupContext = createContext();

const GrantSetUp = () => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [data, setData] = useState({
    name: '',
    description: '',
    fundraisingAmount: 0,
    matchPool: '',
    officeHour: '2022-01-01',
    officeLink: '',
    companyName: 'Snapbrillia',
    website: '',
    url: '',
    status: 'pending',
    projectLogo: null,
    tags: [],
    payment: {
      walletName: '',
      pubKeyAddress: '',
      _id: '',
    },
  });

  const [review, setReview] = useState(false);
  const [stepTracker, setStepTracker] = useState(0);
  const [teamMember, setTeamMember] = useState([{}]);
  const [funders, setFunders] = useState([{}]);
  const [throttle, setThrottle] = useState([-1, -1, -1, -1]);
  const [maxReached, setMaxReached] = useState(0);
  const [loading, setLoading] = useState(false);
  const [grantSetupSteps, setGrantSetupSteps] = useState([
    {
      label: 'Setup',
      active: true,
      complete: false,
      component: <GrantSetupStep />,
    },
    {
      label: 'Grant Details',
      active: false,
      complete: false,
      component: <GrantDetails />,
    },
    {
      label: 'Invite Team',
      active: false,
      complete: false,
      component: <InviteTeamMembers />,
    },
    {
      label: 'Invite Supporters',
      active: false,
      complete: false,
      component: <InviteFunders />,
    },
  ]);

  const createGrant = async () => {
    setLoading(true);
    let grantInfo = {
      ...data,
    };
    if (data.projectLogo) {
      const formData = new FormData();
      formData.append('type', 'grant_image');
      formData.append('file', data.projectLogo[0]);
      try {
        const fileInfo = await uploadFile(formData);
        if (fileInfo.url) {
          grantInfo.projectLogo = fileInfo.url;
        }
      } catch (err) {}
    }
    try {
      grantInfo = {
        ...grantInfo,
        cardanoPKH: data.payment.pubKeyAddress,
        currencyType: '₳DA',
      };
      let grant;
      if (process.env.NODE_ENV === 'development') {
        grant = await createGrantPayment(grantInfo);
      } else {
        grant = await grantAPI.createGrant(grantInfo);
      }
      setLoading(false);
      if (grant) {
        navigate('/grants');
        await teamMember
          .filter((x) => x.fullName && x.email)
          .map(async (member) => {
            await grantAPI.addMember({
              ...member,
              grantId: grant._id,
            });
          });
        await funders
          .filter((x) => x.fullName && x.email)
          .map(async (funder) => {
            await grantAPI.addFunder({
              ...funder,
              grantId: grant._id,
            });
          });
      }
    } catch (err) {
      setLoading(false);
      toast('Error creating grant');
    }
    return;
  };

  //Handlers
  const throttleSetter = () => {
    let temp = [...throttle];
    if (stepTracker === 0) {
      if (data.name === '' || data.url === '' || data.tags.length === 0) {
        temp[0] = 1;
        setThrottle(temp);
        // return true;
      } else {
        temp[0] = 0;
        setThrottle(temp);
        // return temp;
      }
    } else if (stepTracker === 1) {
      if (
        data.description === '' ||
        data.matchPool === '' ||
        data.fundraisingAmount === 0
      ) {
        temp[1] = 1;
        setThrottle(temp);
        // return temp;
      } else {
        temp[1] = 0;
        setThrottle(temp);
        // return temp;
      }
    } else if (stepTracker === 2) {
      temp[2] = 0;
      setThrottle(temp);
    }
    // }
    return temp;
  };
  const handleStepChange = (index) => {
    let temp = throttleSetter();
    if (temp[stepTracker] === 1 && stepTracker !== Math.max(index, maxReached))
      return;
    if (
      (temp.indexOf(-1) !== -1 && index > temp.indexOf(-1)) ||
      temp[index - 1] === 1
    )
      return;
    setStepTracker(index);
    setMaxReached(Math.max(maxReached, index));
    if (index === 0) {
      setGrantSetupSteps(
        grantSetupSteps.map((step, stepIndex) => {
          if (stepIndex !== 0) {
            return {
              ...step,
              active: true,
              complete: temp[stepIndex] === 0 ? true : false,
            };
          }
          return {
            ...step,
            active: true,
            complete: temp[stepIndex] === 0 ? true : false,
          };
        })
      );
    } else {
      setGrantSetupSteps(
        grantSetupSteps.map((step, stepIndex) => {
          if (stepIndex < index) {
            return {
              ...step,
              active: true,
              complete: temp[stepIndex] === 0 ? true : false,
            };
          } else if (stepIndex === index) {
            return {
              ...step,
              active: true,
              complete: temp[stepIndex] === 0 ? true : false,
            };
          }
          return {
            ...step,
            active: false,
            complete: temp[stepIndex] === 0 ? true : false,
          };
        })
      );
    }
  };
  const handleNextStep = (nextStep) => {
    // if (throttleSetter(nextStep)) return;
    let temp = throttleSetter(nextStep);
    if (
      temp[stepTracker] === 1 &&
      stepTracker !== Math.max(nextStep, maxReached)
    )
      return;
    if (
      (temp.indexOf(-1) !== -1 && nextStep > temp.indexOf(-1)) ||
      temp[nextStep - 1] === 1
    )
      return;
    setMaxReached(Math.max(maxReached, nextStep));
    setGrantSetupSteps(
      grantSetupSteps.map((step, stepIndex) => {
        if (stepIndex < nextStep) {
          return {
            ...step,
            active: true,
            complete: temp[stepIndex] === 0 ? true : false,
          };
        } else if (stepIndex === nextStep) {
          return {
            ...step,
            active: true,
            complete: temp[stepIndex] === 0 ? true : false,
          };
        } else if (stepIndex > nextStep) {
          return {
            ...step,
            active: false,
            complete: temp[stepIndex] === 0 ? true : false,
          };
        }
        return step;
      })
    );
    setStepTracker(nextStep);
  };

  const returnComponent = (stepTracker) => {
    if (stepTracker === 0) {
      return <GrantSetupStep data={data} setData={setData} />;
    } else if (stepTracker === 1) {
      return <GrantDetails data={data} setData={setData} />;
    } else if (stepTracker === 2) {
      return <InviteTeamMembers data={data} setData={setData} />;
    } else if (stepTracker === 3) {
      return (
        <InviteFunders
          data={data}
          setData={setData}
          funders={funders}
          setFunders={setFunders}
        />
      );
    }
  };
  return (
    <GrantSetupContext.Provider
      value={{
        data,
        setData,
        teamMember,
        setTeamMember,
        funders,
        setFunders,
        stepTracker,
        throttle,
        setThrottle,
        throttleSetter,
      }}
    >
      <>
        <NavBar />
        <Container className="grant-setup-container" fluid>
          {!review && (
            <>
              <Row>
                <Col>
                  <h1 className="h1 text-center mt-2 mb-4">Grant Setup</h1>
                </Col>
              </Row>
              <div className="stepper-wrapper">
                {grantSetupSteps.map((step, i) => {
                  const { label, complete, active } = step;
                  return (
                    <div
                      className={`stepper-item ${complete && 'completed'}`}
                      key={i}
                    >
                      <div
                        onClick={() => handleStepChange(i)}
                        className={`${i === stepTracker && 'active'} ${
                          i === maxReached && 'accessible'
                        } step-counter`}
                      ></div>
                      <div
                        className={`${
                          i === stepTracker && 'active-tab-text'
                        } step-name grey-title medium`}
                      >
                        {i === 0 && stepTracker > 0 ? 'Eligibility' : label}
                      </div>
                    </div>
                  );
                })}
              </div>
              <Row className="justify-content-center pt-3 ms-3 grant-setup-main">
                {returnComponent(stepTracker)}
              </Row>
            </>
          )}
          {review && (
            <GrantReview
              review={review}
              grant={data}
              setReview={setReview}
              createGrant={createGrant}
              teamMember={teamMember}
              loading={loading}
            />
          )}

          {!review && (
            <Row className="grant-setup-buttons justify-content-center text-center justify-content-lg-end mt-5 pb-2">
              <Col xs={5} lg={2} xxl={1}>
                {stepTracker === 0 ? (
                  <BackBtn
                    disabled={stepTracker < 0}
                    onClick={() => {
                      navigate('/grants');
                    }}
                  />
                ) : (
                  <BackBtn
                    disabled={stepTracker < 0}
                    onClick={() => {
                      handleNextStep(stepTracker - 1);
                    }}
                  />
                )}
              </Col>
              <Col xs={5} lg={2}>
                {stepTracker === 3 ? (
                  <NextBtn text={'Review'} onClick={() => setReview(true)} />
                ) : (
                  <NextBtn onClick={() => handleNextStep(stepTracker + 1)} />
                )}
              </Col>
            </Row>
          )}
        </Container>
      </>
    </GrantSetupContext.Provider>
  );
};

export default GrantSetUp;
