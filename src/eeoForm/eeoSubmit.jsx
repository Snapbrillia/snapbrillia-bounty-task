import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { eeoFields } from './eeoFields';
import './css/eeoSubmitStyles.css';
import '../shared/css/typography.css';

export default function EeoSubmit({ selected }) {
  const keys = Object.keys(selected);
  const firstHalf = keys.slice(0, 4);
  const secondHalf = keys.slice(4);

  const formatAns = (ans) => {
    let data = ans;
    if (typeof ans === 'object') {
      data = ans.join(', ');
    }
    return data;
  };

  return (
    <div>
      <Row className="text-center mx-auto">
        <Col md={12}>
          <h3 className="h4 bold">
            Before submitting please verify that all of the information you
            provided below is correct.
          </h3>
        </Col>
        <Row>
          <Col md={6}>
            {firstHalf.map((question, i) => {
              return (
                <div className="eeo-submit-res" key={i}>
                  <p className="label semi-bold">{eeoFields[i]['label']}</p>
                  <h4
                    className={
                      formatAns(selected[question])
                        ? 'h3'
                        : 'h3 eeo-not-answered'
                    }
                  >
                    {formatAns(selected[question]) || 'Not answered'}
                  </h4>
                </div>
              );
            })}
          </Col>
          <Col md={6}>
            {secondHalf.map((question, i) => {
              return (
                <div className="eeo-submit-res" key={i}>
                  <p className="label semi-bold">{eeoFields[i + 4]['label']}</p>
                  <h4
                    className={
                      selected[question] ? 'h3' : 'h3 eeo-not-answered'
                    }
                  >
                    {selected[question] || 'Not answered'}
                  </h4>
                </div>
              );
            })}
          </Col>
        </Row>
      </Row>
    </div>
  );
}
