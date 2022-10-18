import React,{useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../shared/css/textColors.css';
import '../css/peerReviewIndividual.css';
import { Rating } from 'react-simple-star-rating';
import Save from '../../shared/button/save';

const PeerReviewIndividual = () =>{
    const [rating, setRating] = useState(0)
    return(
        <Container className="peer-review-container">
            <Row>
                <Col md = {2} lg ={2} className = "peer-review-photo"></Col>
                <Col md ={4} lg ={3} className="test">
                    <Row className ="peer-name">
                        James Bond
                    </Row>
                    <Row className ="peer-role">
                        Team member
                    </Row>
                </Col>
                <Col md={6} lg ={4} className= "stars">
                    <Rating
                        size ={50}
                        onClick={(rate) => setRating(rate)}
                        ratingValue={rating}
                        allowHalfIcon={true}
                    />
                </Col>
            </Row>
            <Row>
                <textarea className = "text-box-entry" placeholder = "Let everyone know what you think of this teammate">
                </textarea>
            </Row>
            <br/>
            <Row>
                <Col xs = {8}sm ={8} md = {8} lg ={9}/>
                <Col className ="button" xs ={1} sm = {1} md={1} lg = {1}>
                    <Save/>
                </Col>
            </Row>
        </Container>

    )
}

export default PeerReviewIndividual;