import { Col, Container, Form, Row } from 'react-bootstrap';
import {useState, useEffect } from 'react'
import '../css/reward.css'
import { UserImage } from '../../shared/images';

const Reward = ({team, receivedTeamPay, setReceivedTeamPay, receivePercent, setReceivePercent}) => {
    // Keep track of the percentage/fix usd pay delegated for each team member
    const handleChange = event => {
        setReceivePercent(event.target.value);
    };

    // Keep track of the actual value of pay delegated for each team member, in usd for simplicity
    const [errorTeamPay, setErrorTeamPay] = useState({});
    const [totalTeamPay, setTotalTeamPay] = useState(0);
    const [totalMyPay, setTotalMyPay] = useState(0);
    useEffect(() => {
        var teamPayCopy = {}
        team.mentees?.map((curr) => {
            teamPayCopy[curr._id] = 0
        })
        setReceivedTeamPay(Object.assign({}, teamPayCopy));
        setTotalTeamPay(0);
        setTotalMyPay(0);
    }, [team, receivePercent])

    const changeTeamAmount = (e) => {
        var {name, value} = e.target;
        if (!team.bountyId?.rewardAmount || team.bountyId?.rewardAmount <= 0) {
            return;
        }
        var newTotal = 0;
        const newValue = {
            ...receivedTeamPay,
            [name]: value
        }
        Object.values(newValue).map(curr => {
            if (receivePercent === 'percent') {
                newTotal += parseFloat(curr) * team.bountyId?.rewardAmount
            } else {
                newTotal += parseFloat(curr)
            }
        })
        if (newTotal <= team.bountyId?.rewardAmount)  {
            setReceivedTeamPay(e => ({
                ...e,
                [name]: value
            }));
            setTotalTeamPay(newTotal);
            setTotalMyPay(team.bountyId?.rewardAmount - newTotal);
            setErrorTeamPay({});
        } else {
            setErrorTeamPay({
                [name]: 'Invalid payment'
            })
        }
    }
    return(
        <Container className="ms-4">
            <Row>
                <h6 className="your_team_title">
                    Your Team
                </h6>
                <Row>
                    <Col md={9}></Col>
                    <Col md={3}>
                        <Form>
                            <Form.Check
                                inline
                                label="Percent"
                                name="percent-usd-group"
                                className="reward_radio_btn"
                                type={'radio'}
                                value={'percent'}
                                id={`percent-usd-group-1`}
                                onClick={handleChange}
                                checked={receivePercent === 'percent'}
                            />
                            <Form.Check
                                inline
                                label="USD"
                                name="percent-usd-group"
                                className="reward_radio_btn"
                                type={'radio'}
                                value={'usd'}
                                id={`percent-usd-group-2`}
                                onClick={handleChange}
                                checked={receivePercent === 'usd'}
                            />
                        </Form>
                    </Col>
                </Row>
                <Row>
                <hr className="divider-reward"></hr>
                </Row>
                {team.mentees?.length > 0 && (
                    team.mentees.map((mentee, ind) => {
                        return(
                            <div key={ind}>
                                <Row>
                                    <Col md={1}>
                                        <Row>
                                        <img
                                            src={UserImage(mentee)}
                                            alt="profile"
                                            height={90}
                                            width={90}
                                            className="reward_profile_img"
                                            />
                                        </Row>
                                    </Col>
                                    <Col md={10}>
                                        <Row>
                                            <Row className="reward_attribute_name">{mentee.fullName}</Row>
                                            <Row>
                                                <Col>
                                                    <Row className="reward_attribute_value">{mentee.codeCommits || 0}</Row>
                                                    <Row className="reward_attribute_txt">Code Commits</Row>
                                                </Col>
                                                <Col>
                                                    <Row className="reward_attribute_value">{mentee.pullRequest || 0}</Row>
                                                    <Row className="reward_attribute_txt">Pull Requests</Row>
                                                </Col>
                                                <Col>
                                                    <Row className="reward_attribute_value">{mentee.mergeRequest || 0}</Row>
                                                    <Row className="reward_attribute_txt">Merge Request</Row>
                                                </Col>
                                                <Col>
                                                    <Row className="reward_attribute_value">{mentee.discussionComment || 0}</Row>
                                                    <Row className="reward_attribute_txt">Discussion Comments</Row>
                                                </Col>
                                                <Col>
                                                    <Row className="reward_attribute_txt reward_attribute_will_receive">Will Receive</Row>
                                                    <Row>
                                                        <input
                                                            name={`${mentee._id}`}
                                                            type={"number"}
                                                            // value={receivedTeamPay[mentee._id]}
                                                            onChange={changeTeamAmount}
                                                        />
                                                        {errorTeamPay[mentee._id] && 'Invalid amount'}
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Row>
                                        <br />
                                    </Col>
                                </Row>
                            </div>
                        )
                    }))
                }
                <Row>
                    <Col md={10}></Col>
                    <Col md={2} className="reward_payout_given">${(totalTeamPay || 0).toFixed(2)}</Col>
                </Row>
                <Row>
                    <Col md={8} className="reward_agreement_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Col>
                    <Col md={4} className="reward_payout_container">
                        <Row className="reward_payout_text">Your reward is now</Row>
                        <Row className="reward_payout_get">$ {(totalMyPay || 0).toFixed(2)}</Row>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default Reward