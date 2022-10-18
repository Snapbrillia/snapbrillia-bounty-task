import { Container, Row, Col } from 'react-bootstrap';
import '../../shared/css/textColors.css';
import '../css/viewCartPurchaseInfo.css';
import { useState, useEffect } from 'react';
import { Link, useParams } from '@reach/router';
import * as orderCandidateAPI from '../../api/order';
import { toast } from 'react-toastify';
import { GrantImage } from '../../shared/images';
import { formatPrefix, formatTrailingCurrency } from '../../shared/utils';
export default function ViewCartPurchaseInfo() {
  const { id } = useParams();
  const [order, setOrders] = useState({
    items: [],
  });

  const getOrderDetail = async () => {
    try {
      const data = await orderCandidateAPI.getOrder(id);
      setOrders(data);
    } catch (err) {
      toast(err.message);
    }
  };

  useEffect(() => {
    getOrderDetail();
  }, []);

  return (
    <>
      <Container fluid className="view-cart-purchase-info-container mt-5">
        {order.items.map((item, index) => {
          return (
            <Row key={index} className="px-2 py-5 view-cart-purchase-info-row">
              <Col>
                <Row>
                  <Col xs={4} md={'auto'} className="grant-list-col-spaceing">
                    <img
                      src={GrantImage(item.grant)}
                      className="cart-img"
                      alt="company logo"
                    />
                  </Col>
                  <Col xs={8} md={5} className="p-0">
                    <h5 className="primary bold mb-0">{item.grant?.name}</h5>
                    <p className="grey-title medium pointer">
                      {item.grant?.companyName}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={4} className="text-end">
                <Row>
                  <span className="small-text">Payment Method</span>
                </Row>
                <Row>
                  <span className="small-text bold">{item.payment?.name}</span>
                </Row>
                <Row>
                  <span className="fs-5 medium">
                    {formatPrefix(item.grant)}
                    {item.amount} {formatTrailingCurrency(item.grant)}
                  </span>
                </Row>
              </Col>
            </Row>
          );
        })}
      </Container>

      <Row className="d-flex justify-content-end">
        <Link
          className="btn-primary cart-confirm-btn cart-small-text mx-5 my-4"
          to="/grants"
        >
          Back to Grants
        </Link>
      </Row>
    </>
  );
}
