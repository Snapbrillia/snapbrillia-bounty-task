import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/discussion.css';
import ThumbUp from '../../assets/icon/blue_thumbs_up.png';
import ThumbDown from '../../assets/icon/red_thumbs_down.svg';
import PaperClip from '../../assets/icon/paper_clip.svg';
import SnapbrilliaBlueUpChevron from '../../assets/icon/snapbrillia_blue_up_chevron.svg';
import Send from '../../shared/button/send.jsx';
import * as DiscussionAPI from '../../api/discussion';
import { toast } from 'react-toastify';
import { timeAgo } from '../../shared/utils.js';

const Discussion = ({ discussionData }) => {
  // State to keep track of the comments
  const [commentField, setCommentField] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const loadComments = async (id) => {
    try {
      const data = await DiscussionAPI.getAllCommentByDiscussion(id);
      setComments(data);
    } catch (err) {
      toast(err.message);
    }
  };

  const handleShowComments = () => {
    if (!showComments) {
      loadComments(discussionData._id);
    }
    setShowComments(!showComments);
  };

  const createNewComment = async () => {
    if(commentField) {
      const data = await DiscussionAPI.createComment({
        discussionId: discussionData._id,
        comment: commentField,
      });
      setCommentField('');
      await loadComments(discussionData._id);
    }
  }

  return (
    <div className="individual-discussion">
      <Row>
        <Col xs={3} sm={3} md={2} className="userInfo">
          <Row>
            <span className="discussion-individual-avatar">VS</span>
          </Row>
          <Row className="userName">{discussionData.userId?.fullName}</Row>
        </Col>
        <Col xs={9} sm={9} md={10} className="userQuestion">
          <Row style={{ color: 'blue' }}>
            <Col md={11} className="userIQuestion">
              {discussionData.title}
            </Col>
            <Col md={1}>
              <div onClick={handleShowComments} className="float-end pointer">
                <img
                  src={SnapbrilliaBlueUpChevron}
                  alt="snapbrillia-icon"
                  className={showComments && 'discussion-chevron-down'}
                  width={25}
                  heigh={25}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="discussion-text-gray">
              {discussionData.description}
            </Col>
          </Row>
          <br />
          <Row>
            <Container>
              <Row>
                <Col className="mb-2">Comments:</Col>
              </Row>
              {showComments &&
                comments.map((oCurr, oInd) => {
                  return (
                    <Row className="oComponent p-2" key={oInd}>
                      <Col
                        xs={2}
                        md={1}
                        className="discussion-comment-avatar1 pt-1 me-1"
                      >
                        <span className="discussion-comment-avatar position-relative">
                          VS
                        </span>
                      </Col>
                      <Col>
                        <Row className="discussion-comment-middle">
                          <Col className="oUserName">
                            {(oCurr.userId || oCurr.candidateId)?.fullName}
                          </Col>
                          <Col className="oUserTime">
                            <span className="oUserTime-inner">
                              {timeAgo(oCurr.createdAt)}
                            </span>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="oUserComment discussion-text-gray">
                            {oCurr.comment}
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <img
                              src={ThumbUp}
                              alt="thumbsup-icon"
                              className="discussion-comment-up mx-1"
                              width={20}
                            />
                            <img
                              src={ThumbDown}
                              alt="thumbdown-icon"
                              className="discussion-comment-down mx-1"
                              width={20}
                            />
                            <span className="discussion-reply-link">reply</span>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  );
                })}
            </Container>

            <Row className="p-0">
              <Col className="pe-0">
                <div className="comments-send-container">
                  <input
                    type="text"
                    placeholder="Comment"
                    className="comments-input-text"
                    value={commentField}
                    onChange={(e) => {
                      setCommentField(e.target.value);
                    }}
                  />
                  <span className="comments-paper-clip-span">
                    <img
                      src={PaperClip}
                      alt="paper-icon"
                      height={20}
                      width={20}
                    />
                  </span>
                  <Send onClick={createNewComment}/>
                </div>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Discussion;
