import React from 'react';
import './css/menteePage.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../shared/menus/navBar';
import MenteeIntro from './components/menteeIntro';
import MentorsPersonalInfo from './components/mentorsPersonalInfo';
import MentorsLinkedAccounts from './components/mentorsLinkedAccounts';
import SaveAndContinue from '../shared/button/saveAndContinue';
import { useAuth } from '../context/authContext';
import { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import { useParams } from "@reach/router"
import { uploadFile } from '../api/files';
import { useBounty } from '../hooks/useBounty';
import { toast } from 'react-toastify';

const MenteePage = () => {
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

  const updateUserProfile = async () => {
    const updateInfo = {};
    if (!auth.user || !auth.user.githubId) {
      toast('Please link your github account');
      return;
    }
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
    navigate(`/bounties/${id}/jointeam`)
  }

  return (
    <>
      <NavBar />
      <Container fluid className="px-5 pb-5">
        <Row>
          <MenteeIntro bounty={bounty}/>
        </Row>
        <Row className="mt-4"></Row>
        <Row style={{ marginTop: '50px' }}>
          <Col xs={12} md={6}>
            <MentorsPersonalInfo
              user={auth.user}
              newLocation={newLocation}
              setNewLocation={setNewLocation}
              resumeFile={resumeFile}
              setResumeFile={setResumeFile}
            />
          </Col>
          <Col xs={12} md={6} className="mentee_page_linked_accounts_col">
            <MentorsLinkedAccounts user={auth.user} bounty={bounty}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ marginTop: '100px' }} className="float-end d-flex">
              <button className="mentee_page_cancel_button">
                <Link to={`/bounties/${id}`}>Cancel</Link>
              </button>
              <SaveAndContinue
                style={{ fontSize: '12px' }}
                onClick={() => {
                  updateUserProfile();
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MenteePage;
