import React, { useState, useEffect, useRef, Scrollbars } from 'react';
import { Modal, Button } from 'react-bootstrap';
//import { Scrollbars } from 'react-custom-scrollbars';
import { Container, Row, Col } from 'react-bootstrap';
import Mentor from '../../assets/icon/snapbrillia_mentor_icon.svg';
import Mentee from '../../assets/icon/snapbrillia_mentee_icon.svg';
import Individual from '../../assets/icon/snapbrillia_individual_icon.png';

import '../../shared/css/sharedStyles.css';

import '../../shared/css/typography.css';
import '../../shared/menus/css/dropDownMenu.css';
import Dropdown from 'react-bootstrap/Dropdown';
import './css/expressInterest.css';
import { Link } from '@reach/router';

export default function DropDownMenu() {
  return (
    <Dropdown.Menu className="dropdown-menu-nav-bar" show>
      <Dropdown.Header className="dropdown-header-nav-bar">
        How Would you like to continue?
      </Dropdown.Header>
      <div className="container-dropdown-nav-bar">
        <Dropdown.Item className="dropdown-item-nav-bar" eventKey="1">
          <img
            src={Individual}
            alt="individual-icon"
            className="dropdown-individual-icon-mute"
          />
          <span className="text-muted p-3"> As an Individual </span>
        </Dropdown.Item>
        <Dropdown.Item className="dropdown-item-nav-bar" eventKey="2">
          <Link className="continue-as-link" to="/team-mentor">
            <img
              src={Mentor}
              alt="mentor-icon"
              className="dropdown-mentor-icon-mute"
            />
            <span className="text-muted p-3">As a Mentor </span>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="dropdown-item-nav-bar" eventKey="3">
          <Link className="continue-as-link" to="/mentee-page">
            <img
              src={Mentee}
              alt="mentee-icon"
              className="dropdown-mentee-icon-mute"
            />
            <span className="text-muted p-3 ">As a Mentee</span>
          </Link>
        </Dropdown.Item>
      </div>
    </Dropdown.Menu>
  );
}

{
  /*
const divStyles = {
  borderRadius: '20px',
  backgroundColor: 'white',
  height: '100%',
  left: '25%',
  width: '50%',
  minWidth: '800px',
  position: 'fixed',
  boxShadow: '0px 0px 20px -5px rgba(0, 0, 0, 0.25)',
};

const titleStyles = {
  position: 'absolute',
  left: '10%',
  top: '5%',
};

const iframeStyles = {
  position: 'absolute',
  left: '6.3%',
  top: '15%',
  width: '85%',
  height: '270%',
};

const closeSVGStyles = {
  position: 'absolute',
  right: '10%',
  top: '5.5%',
  transform: 'scale(1.5)',
  cursor: 'pointer',
  zIndex: '999',
};



export default function expressInterest( { show, closeModal, modalTitle, setShow }) {
   
    return(
    
  
    <Modal show={true} onHide={() => setShow(false)}> 
         
        {/*<Modal.Header closeButton> 
        <Modal.Header>
           <Modal.Title>
            <div className="h2 text-center extra-bold"> How Would you like to continue? </div>
            </Modal.Title>
        </Modal.Header>
 
        <Button onClick={() => setShow(false)} 
        style={{position: 'absolute', left: '90%', top: '5%'}}> <Close /> 
        </Button> 
        
        <Modal.Body>
          <h1 style={{position: 'center', left: '75%', top: '10%'}} > &nbsp; </h1> 
          <div class="container">
          <div class="row">
                <div class="col xs6 md3"> </div>
                <div class="col xs6 md3"> <Button  variant="light" style={{display: 'flex', left: '10%', top:'10%', float:'right', width: '205px', height: '35px'}}> <Individual /> 
                <span style={{'paddingLeft':'45px', 'fontWeight': '500', 'color': '#605F92'}}> As an Individual </span>
                </Button> </div> 
          </div>
          
          
          <div style={{ height: 10 }}> &nbsp;&nbsp; </div>
          
          <div class="row">      
             <div class = "col xs6 md3"> </div>            
                <div class="col xs6 md3"> <Button variant="light" style={{display:'flex',  left: '10%', top:'10%', float: 'right', width: '205px', height: '35px'}}> <Mentor /> 
          <span style={{'paddingLeft':'35px', 'fontWeight': '500', 'color': '#605F92'}}>  As a Mentor </span> </Button> </div>
          </div>
          
          <div style={{ height: 10 }}> &nbsp;&nbsp; </div>
          
          <div class="row">                       
                <div class = "col xs6 md3"> </div>             
                <div class="col xs6 md3"> <Button  variant="light" style={{display:'flex', left: '75%', top:'30%', float: 'right', width: '205px', height: '35px'}}> <Mentee /> 
          <span style={{'paddingLeft':'33px', 'fontWeight': '500', 'color': '#605F92'}}>  As a Mentee </span> </Button> </div>
          </div>
          </div>
          
          <Row>
            <Col xs={6} md={3}>
              .col-xs-6 .col-md-3
            </Col>
            <Col xs={6} md={3}>
              .col-xs-6 .col-md-3
            </Col>
          </Row>

          <Row>
            <Col xs={4} md={2}>
              .col-xs-4 .col-md-2
            </Col>
            <Col xs={4} md={2}>
              .col-xs-4 .col-md-2
            </Col>
            <Col xs={4} md={2}>
              .col-xs-4 .col-md-2
            </Col>
          </Row>
          
          <div class="container">
             <div class="row">
               <div class="col">left</div>
               <div class="col text-right">inline content needs to be right aligned</div>
             </div>
             <div class="row">
               <div class="col">left</div>
               <div class="col">
                  <div class="float-right">element needs to be right aligned</div>
               </div>
             </div>
          </div> 
      
        </Modal.Body>
          
        </Modal>    
        
    
    );
};


 <>
        <Container fluid="lg">
            <Row>
                <Col md={3}>
                    <Row>
                        <div className="h1 text-center extra-bold">
                        How Would you like to continue?
                        </div>
                    </Row>
                    <Row style={{
                             'display': 'flex',
                             'height': '400px',
                             'flex-flow': 'column wrap',
                             'align-content': 'flex-end'
                    }}>
                     Hello, flexend row
                     <span style={{ 'align-content': 'flex-end'}}>  <button> <Individual /> As an Individual </button> </span>
                     <span style={{ 'align-content': 'right'}}>  <button> <Mentor /> As a Mentor </button> </span>
                     <span style={{ 'align-content': 'right'}}>  <button> <Mentee /> As a Mentee </button> </span>
                    </Row>
                <Row
                    style={{
                        'width': '100px',
                        'margin': '10px',
                        'text-align': 'center',
                        'line-height': '75px',
                        'font-size': '30px',
                    }}
                >
                  Hello this is for div!

                </Row> 
                </Col>
            </Row>
        </Container>
*/
}
