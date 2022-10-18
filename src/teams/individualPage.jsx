import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import NavBar from '../shared/menus/navBar';
import IndividualHeader from './components/individualHeader';
import MentorsPersonalInfo from './components/mentorsPersonalInfo';
// import MentorsYourResume from './components/mentorsYourResume';
import MentorsLinkedAccounts from './components/mentorsLinkedAccounts';
import SaveAndContinue from '../shared/button/saveAndContinue';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { Link } from '@reach/router';
import { useParams } from "@reach/router"
import { toast } from 'react-toastify';
import { navigate } from '@reach/router';
import { uploadFile } from '../api/files';
import * as bountyAPI from '../api/bounty';
import { useBounty } from '../hooks/useBounty';

const IndividualPage = () => {
  const { id } = useParams();
  const { auth, updateProfile } = useAuth();
  const [resumeFile, setResumeFile] = useState(null);
  const [newLocation, setNewLocation] = useState(auth.user?.location || '');
  const {bounty} = useBounty(id);

  useEffect(() => {
    if (auth) {
      setNewLocation(auth.user.location);
    }
  }, [auth])

  const expressInterest = async () => {
    if (!auth.user || !auth.user.githubId) {
      toast('Please link your github account');
      return;
    }
    try {
      await updateUserProfile();
      await bountyAPI.expressInterest(id, {
        position: 'individual',
      })
      navigate(`/bounties/${id}`);
      toast('You have successfully expressed interest to start as an individual! The gig owner will reach out soon to start. Please check your email for github invitation.');
    } catch (error) {
      toast(error.message);
    }
  }

  const updateUserProfile = async () => {
    const updateInfo = {};
    if (resumeFile) {
      const formData = new FormData();
      formData.append('type', 'resume');
      formData.append('file', resumeFile[0]);
      try {
        const fileInfo = await uploadFile(formData);
        if (fileInfo.url) {
          updateInfo.resume = fileInfo.url;
        }
      } catch (err){}
    }
    if (newLocation !== auth.user?.location) {
      updateInfo.location = newLocation;
    }
    if (Object.keys(updateInfo).length) {
      try {
        await updateProfile(updateInfo);
      } catch (err){}
    }
  }

  return (
    <>
      <NavBar />
      <Container fluid className="px-5 pb-5">
        <Row>
          <IndividualHeader bounty={bounty} />
        </Row>
        <Row style={{ marginTop: '100px' }}>
          <Col md={6} sm={12} xs={12}>
            <MentorsPersonalInfo
              user={auth.user}
              newLocation={newLocation}
              setNewLocation={setNewLocation}
              resumeFile={resumeFile}
              setResumeFile={setResumeFile}
            />
          </Col>
          <Col md={6} sm={12} xs={12}>
            <MentorsLinkedAccounts user={auth.user} bounty={bounty}/>
          </Col>
        </Row>
        <Row className="justify-content-center text-center justify-content-lg-end mt-5 pb-2">
          <Col xs={5} lg={3} xxl={1}>
            <button className="mentee_page_cancel_button">
              <Link to={`/bounties/${id}`}>Cancel</Link>
            </button>
          </Col>
          <Col xs={6} lg={4}>
            <SaveAndContinue
              onClick={expressInterest}
              style={{ fontSize: '12px' }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IndividualPage;
