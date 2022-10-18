import { Modal, Row, Col } from 'react-bootstrap';
import OnChainIcon from '../../assets/icon/snapbrillia_on_chain_icon.png';
import ResumeIcon from '../../assets/icon/snapbrillia_resume_icon.svg';
import LinkedInIcon from '../../assets/icon/snapbrillia_linkedin_actual_icon.png';
import DiscordIcon from '../../assets/icon/snapbrillia_discord_actual_icon.png';
import GitHubIcon from '../../assets/icon/snapbrillia_github_actual_icon.png';
import StarIcon from '../../assets/icon/snapbrillia_add_favorites_icon.svg';
import '../css/mentorConfirmationModal.css';
import * as bountyApi from '../../api/bounty';
import { toast } from 'react-toastify';
import { navigate } from '@reach/router';
import { UserImage } from '../../shared/images';
import { buildCalendarUrl } from '../../shared/calendar';
import { format } from 'date-fns';
import { useAuth } from '../../context/authContext';
import { snapbrilliaFile } from '../../api/files';

export default function MentorConfirmationModal({
  show,
  setShowSummary,
  bountyId,
  events,
}) {
  const weekday = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  const weekdayFull = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const { auth } = useAuth();

  const expressInterest = async () => {
    try {
      await bountyApi.expressInterest(bountyId, {
        position: 'mentor',
      });
      navigate(`/bounties/${bountyId}/teams`);
      toast('Express successfully');
    } catch (error) {
      toast(error.message);
    }
  };
  return (
    <Modal
      size="xl"
      show={show}
      onHide={() => setShowSummary(false)}
      dialogClassName="mentor-conf-modal-content"
    >
      <Modal.Header className="border-0 bg-light pb-0" closeButton>
        <Modal.Title className="fs-2 bold text-black">Summary</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light">
        <Row>
          <Col
            lg="3"
            className="mentor-conf-modal-border-radius-1 bg-white p-2"
          >
            <div className="mentor-conf-modal-height-100 d-flex flex-column justify-content-between">
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center">
                  <img
                    className="w-25 rounded-circle me-1"
                    src={UserImage(auth.user)}
                    alt="..."
                  />
                  <div className="d-flex flex-column">
                    <span className="mentor-conf-modal-username-text primary bold">
                      {auth.user?.fullName}
                    </span>
                    <span className="mentor-conf-modal-purple-text bold">
                      {/*Premier Mentor*/}
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-1">
                  {[true, true, true, true, false].map((e, i) => (
                    <span key={i}>
                      <img
                        src={StarIcon}
                        alt="star-icon"
                        width={12}
                        height={12}
                        fill={e ? '#ffd800' : '#fff'}
                      />
                    </span>
                  ))}
                  {/* <img
                    src={StarIcon}
                    alt="star-icon"
                    className="mentor-conf-modal-cursor-default"
                    size={25}
                    value={rating}
                    halfStars
                    disabled
                  /> */}
                  <span className="mentor-conf-modal-rating-text-fs fst-italic small-text ps-4">
                    120 reviews
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={ResumeIcon}
                  alt="resume-icon"
                  width="16"
                  height="16"
                />
                <a
                  className="mentor-conf-modal-resume-btn-fs border-0 bg-white primary semi-bold text-wrap me-2"
                  href={snapbrilliaFile(auth.user?.resume)}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
                <img
                  src={OnChainIcon}
                  alt="onchain-icon"
                  width="14"
                  height="17"
                />
                <input
                  className="mentor-conf-modal-resume-btn-fs border-0 bg-white primary semi-bold text-wrap"
                  type="button"
                  value="On-Chain Reputation"
                />
              </div>
            </div>
          </Col>
          <Col className="d-flex flex-column justify-content-between ms-2">
            <Row className="ps-2">
              <Col className="p-0">
                <span className="h2 text-black">Your Schedule</span>
              </Col>
            </Row>
            <Row className="flex-grow-1 ps-2 mb-2">
              {events?.map((schedule, index) => {
                const days = schedule.recurring.days
                  .map((x) => {
                    return x?.getDay() ? weekdayFull[x?.getDay()] : null;
                  })
                  .filter(Boolean)
                  .join(' and ');
                const currentSchedule = {
                  ...schedule,
                };
                currentSchedule.recurring.byDay = schedule.recurring.days
                  .map((x) => {
                    return x?.getDay() ? weekday[x?.getDay()] : null;
                  })
                  .filter(Boolean)
                  .join(',');
                return (
                  <Col className="lh-1 p-2" key={index} xs={4}>
                    <span className="small-text mentor-conf-modal-schedule-text-fs">
                      {`${days} at ${format(
                        schedule.startTime,
                        "hh:mm aaaaa'm'"
                      )}`}{' '}
                      <br />
                      <a
                        className="mentor-conf-modal-calendar-link border-0 bg-light underline p-0"
                        target="_blank"
                        rel="noreferrer"
                        href={buildCalendarUrl(currentSchedule, 'google')}
                      >
                        Click here to add to calendar
                      </a>
                    </span>
                  </Col>
                );
              })}
            </Row>
            <Row className="mt-4">
              <Col lg="7" className="ps-2">
                <div className="mentor-conf-modal-border-radius-1 d-flex justify-content-around p-1 bg-white">
                  <div className="underline semi-bold text-nowrap">
                    <img
                      src={LinkedInIcon}
                      alt="linkedIn-icon"
                      className="mentor-conf-modal-icon"
                    />
                    <span className="mentor-conf-modal-cursor-pointer mentor-conf-modal-btn-link-fs ms-1">
                      LinkedIn
                    </span>
                  </div>
                  <div className="underline semi-bold text-nowrap">
                    <img
                      src={DiscordIcon}
                      alt="discord-icon"
                      className="mentor-conf-modal-icon"
                    />
                    <span className="mentor-conf-modal-cursor-pointer mentor-conf-modal-btn-link-fs ms-1">
                      Discord
                    </span>
                  </div>
                  <div className="underline semi-bold text-nowrap">
                    <img
                      src={GitHubIcon}
                      alt="github-icon"
                      className="mentor-conf-modal-icon"
                    />
                    <span className="mentor-conf-modal-cursor-pointer mentor-conf-modal-btn-link-fs ms-1">
                      GitHub
                    </span>
                  </div>
                </div>
              </Col>
              <Col className="d-flex align-items-center justify-content-end">
                <div>
                  <input
                    className="btn-primary"
                    type="button"
                    value="Confirm"
                    onClick={expressInterest}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
