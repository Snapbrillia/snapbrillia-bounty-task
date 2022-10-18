import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../shared/css/textColors.css';
import '../css/teamList.css';
import PeerReviewIndividual from './peerReviewIndividual';

function PeerReviewComponent() {
    return (
        <Container fluid className="peer-review-team-list-component">
            <Row>
                <Col xs={12} sm={12} md={8} lg={8} xl={10} xxl={10}>
                    <Row className="Write a peer review">
                        <p style={{ color: "#2D2B6F", fontSize: "28px", fontWeight: "bold" }}>Write a peer review </p>
                    </Row>
                </Col>
            </Row>
            <Row className="mentee-list-container-large">
                {/* add the required linkns in all the href and image instead of placeholder img*/}
                <Col md={4}>
                     {/* container of  mentee 1*/}
                    <Row className="mentee-list-container">
                        <Col md={4} className="mentee-list-col-spaceing">
                            <img
                                src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
                                className="mentee-list-logo align-self-center"
                                alt="MenteeImg"
                            ></img>
                        </Col>
                        <Col md={7}>
                            <p className="name">James Bond</p>
                            <p className="title">Team Member</p>
                        </Col>
                    </Row>
                    {/* container of  mentee 2*/}
                    <Row className="mentee-list-container">
                        <Col md={4} className="mentee-list-col-spaceing">
                            <img
                                src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
                                className="mentee-list-logo align-self-center"
                                alt="MenteeImg"
                            ></img>
                        </Col>
                        <Col md={7}>
                            <p className="name">John Wick</p>
                            <p className="title">Team Member</p>
                        </Col>
                    </Row>
                    {/* container of  mentee 3*/}
                    <Row className="mentee-list-container">
                        <Col md={4} className="mentee-list-col-spaceing">
                            <img
                                src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
                                className="mentee-list-logo align-self-center"
                                alt="MenteeImg"
                            ></img>
                        </Col>
                        <Col md={7}>
                            <p className="name">Susan Boyle</p>
                            <p className="title">Team Member</p>
                        </Col>
                    </Row>
                    {/* container of  mentee 4*/}
                    <Row className="mentee-list-container">
                        <Col md={4} className="mentee-list-col-spaceing">
                            <img
                                src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
                                className="mentee-list-logo align-self-center"
                                alt="MenteeImg"
                            ></img>
                        </Col>
                        <Col md={7}>
                            <p className="name">Paul Scalin</p>
                            <p className="title">Team Member</p>
                        </Col>
                    </Row>
                    {/* container of  mentee 5*/}
                    <Row className="mentee-list-container">
                        <Col md={4} className="mentee-list-col-spaceing">
                            <img
                                src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
                                className="mentee-list-logo align-self-center"
                                alt="MenteeImg"
                            ></img>
                        </Col>
                        <Col md={7}>
                            <p className="name">Sara D. Roosavelt</p>
                            <p className="title">Team Member</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={8} >
                    <PeerReviewIndividual />    
                </Col>
            </Row>
        </Container>
    );
}

export default PeerReviewComponent;