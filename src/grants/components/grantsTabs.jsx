import { useState } from 'react';
//COMPONENTS
import { Container, Row } from 'react-bootstrap';
import GrantsList from './grantsList';
import ContributorItem from './contributorItem';
import GrantDescription from './grantDescription';

//CSS
import '../../shared/css/tabs.css';

const GrantsTabs = ({
  grant,
}) => {
  const [component, setComponent] = useState(0);

  const changeComponent = (index) => {
    setComponent(index);
  };

  const tabs = [
    {
      title: 'Description',
      component: (
        <GrantDescription
          grant={grant}
        />
      ),
      disabled: false,
      className: 'tabs-one',
    },
    {
      title: 'Contributions',
      component: (
        <ContributorItem
          grant={grant}
        />
      ),
      disabled: false,
      className: 'tabs-two',
    },
    {
      title: 'Similar Grants',
      component: (
        <GrantsList/>
      ),
      disabled: false,
      className: 'tabs-three',
    },
  ];

  return (
    <Container className="pt-5">
      <ul className="tabs-general">
        {tabs.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              return tabs[index].disabled ? null : changeComponent(index);
            }}
            className={
              `${
                tabs[component].title === item.title && !item.disabled
                  ? 'active-tab-'
                  : item.disabled
                  ? 'tab-disabled'
                  : ''
              }` + item.className
            }
          >
            <a className={item.disabled ? 'disabled-cursor' : undefined}>{item.title}</a>
          </li>


        ))}
        <div className="tabs-underline"></div>
        <hr className="tabs-hr" />
      </ul>
      <Row>{!tabs[component].disabled && tabs[component].component}</Row>
    </Container>
  );
};

export default GrantsTabs;
