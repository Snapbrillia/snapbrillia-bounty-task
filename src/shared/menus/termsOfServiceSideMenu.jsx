import { useState } from 'react';
import '../css/sharedStyles.css';
import '../../policyPage/css/policyComponents.css';

export default function TermsOfServiceSideMenu({ setPolicy, setTitle }) {
  const [active, setActive] = useState(0);

  const handleClick = (policy, title) => {
    setPolicy(policy);
    setActive(policy);
    setTitle(title);
  };

  return (
    <div className="menulabel">
      <div
        className={
          active === 0
            ? 'menu_item_selected left-align-side-bar'
            : 'left-align-side-bar'
        }
        onClick={() => handleClick(0, 'Use Policies')}
      >
        <p style={{ marginLeft: '15px' }}>Terms of Use</p>
      </div>
      <div
        className={
          active === 1
            ? 'menu_item_selected left-align-side-bar'
            : 'left-align-side-bar'
        }
        onClick={() => handleClick(1, 'General Privacy Policy')}
      >
        <p style={{ marginLeft: '15px' }}>General Privacy Policy</p>
      </div>
      <div
        className={
          active === 2
            ? 'menu_item_selected left-align-side-bar'
            : 'left-align-side-bar'
        }
        onClick={() => handleClick(2, 'Cookie Policy')}
      >
        <p style={{ marginLeft: '15px' }}>Cookie Policy</p>
      </div>
      <div
        className={
          active === 3
            ? 'menu_item_selected left-align-side-bar'
            : 'left-align-side-bar'
        }
        onClick={() => handleClick(3, 'California Consumer Privacy Notice')}
      >
        <p style={{ lineHeight: '1', marginLeft: '15px' }}>
          California Consumer
          <br />
          Privacy Notice
        </p>
      </div>
      <div
        className={
          active === 4
            ? 'menu_item_selected left-align-side-bar'
            : 'left-align-side-bar'
        }
        onClick={() => handleClick(4, 'EU User Privacy Policy')}
      >
        <p style={{ marginLeft: '15px' }}>EU User Privacy Policy</p>
      </div>
      <div
        className={
          active === 5
            ? 'menu_item_selected left-align-side-bar'
            : 'left-align-side-bar'
        }
        onClick={() => handleClick(5, 'Data Processing and Security Addendum')}
      >
        <p style={{ lineHeight: '1', marginLeft: '15px' }}>
          Data Processing and
          <br />
          Security Addendum
        </p>
      </div>
      <div
        className={
          active === 6
            ? 'menu_item_selected left-align-side-bar'
            : 'left-align-side-bar'
        }
        onClick={() => handleClick(6, 'Vulnerability Disclosure')}
      >
        <p style={{ marginLeft: '15px' }}>Vulnerability Disclosure</p>
      </div>
    </div>
  );
}
