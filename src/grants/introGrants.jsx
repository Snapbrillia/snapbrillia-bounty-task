import React, { useState, createContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeaturedGrantDes from './components/featuredGrantDes';
import Featured from './components/featured';
import './css/featuredGrantDes.css';
import './css/introGrants.css';
import GrantsList from './components/grantsList';
import NavBar from '../shared/menus/navBar';
import GrantSideMenu from './components/grantSideMenu';
import CartModalIcon from './components/cartModalIcon';
import CartModal from './components/cartModal';
import GrantReview from './components/grantReview';
import { useCart } from '../context/cartContext';
import * as grantAPI from '../api/grant';
import { toast } from 'react-toastify';

export const IntroGrantsContext = createContext();
export default function IntroGrants() {
  const { cart, cartModal, setCartModal } = useCart();
  const [grantFilterQuery, setGrantFilterQuery] = useState({
    search: '',
    matchPools: [],
    sort: '',
  });
  const [grantId, setGrantId] = useState(null);
  const [grantsList, setGrantsList] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);

  const getAllGrants = async () => {
    try {
      const data = await grantAPI.getAllGrants();
      setGrantsList(data);
      setFeaturedData(data.slice(-2));
    } catch (err) {
      toast('Could not load grants');
    }
  };

  useEffect(async () => {
    await getAllGrants();
  }, []);

  return (
    <IntroGrantsContext.Provider
      value={{
        grantId,
        setGrantId,
        grantFilterQuery,
      }}
    >
      <div className="position-relative">
        <NavBar setGrantId={setGrantId} />
        {grantId ? (
          <GrantReview />
        ) : (
          <Container fluid>
            <FeaturedGrantDes />
            <Row>
              <Col md={3}>
                <GrantSideMenu
                  setGrantFilterQuery={setGrantFilterQuery}
                  grantFilterQuery={grantFilterQuery}
                />
              </Col>
              <Col>
                <Row>
                  <Featured featuredData={featuredData} />
                </Row>
                <Row>
                  <GrantsList grantsList={grantsList} />
                </Row>
              </Col>
            </Row>
          </Container>
        )}
        {cartModal && (
          <div className="cart-modal">
            <CartModal getAllGrants={getAllGrants} />
          </div>
        )}
        <div
          onClick={() => {
            setCartModal(true);
          }}
        >
          <CartModalIcon data={cart} />
        </div>
      </div>
    </IntroGrantsContext.Provider>
  );
}
