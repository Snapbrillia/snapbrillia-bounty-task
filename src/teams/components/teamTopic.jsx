import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../shared/css/textColors.css';
import '../css/teamTopic.css';
import Discussion from './discussion';
import CloseIcon from '../../assets/icon/snapbrillia_close_icon.svg';
import * as DiscussionAPI from '../../api/discussion';
import { toast } from 'react-toastify';
import { timeAgo } from '../../shared/utils.js';
import { format } from 'date-fns';

function TeamTopic({ bounty }) {
  // select topic
  const [selected, setSelected] = useState('');
  // pass selected topic data to discussion component
  const [discussions, setDiscussions] = useState([]);
  const [topics, setTopics] = useState([]);

  const loadTopics = async (id) => {
    try {
      const data = await DiscussionAPI.getAllTopicByBounty(id);
      setTopics(data)
    } catch (err) {
      toast(err.message);
    }
  }

  const loadDiscussions = async (id) => {
    try {
      const data = await DiscussionAPI.getAllDiscussionByTopic(id);
      setDiscussions(data)
    } catch (err) {
      toast(err.message);
    }
  }

  useEffect(() => {
    if (bounty?._id) {
      loadTopics(bounty._id);
    }
  }, [bounty]);

  const handleClick = async (item) => {
    await loadDiscussions(item._id)
    setSelected(item.title);
  };

  const handleClose = () => {
    setDiscussions([]);
  };

  return (
    <>
      {/* <NavBar /> */}
      <Container fluid className="team-topic-component-bg">
        <Row>
          <Col>
            {topics.map((item, idx) => (
              <Row
                onClick={() => handleClick(item)}
                key={idx}
                className="team-topic-row-bg"
              >
                <Col xs={12} md={3}>
                  <Row className="primary team-topic-title">{item.title}</Row>
                </Col>
                <Col xs={6} md={2}>
                  <Row className="small-text team-topic-subtitle">
                    Date Started:
                  </Row>
                  <Row className="team-topic-testcase">{format(new Date(Date(item.createdAt)), 'MM/dd/yyyy') }</Row>
                </Col>
                <Col xs={6} md={2}>
                  <Row className="small-text team-topic-subtitle">Topics:</Row>
                  <Row className="team-topic-testcase">{item.discussionId?.length}</Row>
                </Col>
                <Col xs={6} md={2}>
                  <Row className="small-text team-topic-subtitle">
                    Comments:
                  </Row>
                  <Row className="team-topic-testcase">{item.commentId?.length}</Row>
                </Col>
                <Col xs={6} md={2}>
                  <Row className="small-text team-topic-subtitle">
                    Activity:
                  </Row>
                  <Row className="team-topic-testcase">{timeAgo(item.updatedAt)}</Row>
                </Col>
              </Row>
            ))}
          </Col>
          {discussions?.length > 0 && (
            <Col className="mx-1">
              <Container className="discussion-root mt-2">
                <Row className="help-title px-4">
                  <div className="d-flex justify-content-between">
                    {selected}
                    <img
                      src={CloseIcon}
                      alt="close-icon"
                      onClick={handleClose}
                      className="mt-2 pointer"
                    />
                  </div>
                </Row>
                {discussions.map((data, idx) => (
                  <Discussion key={idx} discussionData={data} />
                ))}
              </Container>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}

export default TeamTopic;
