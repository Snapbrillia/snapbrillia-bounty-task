import { Container, Row, Col } from 'react-bootstrap';

const TeamsDescription = () => {
  return (
    <Container>
      <Row>
        <Col>Rasion D`&#39`etre</Col>
      </Row>
      <Row>
        <Col>
          The Solan compiler has a VSCode extension tool that allows developer
          to visualize errors and warnings directly on the editor. This
          extension works, but needs many improvements to become more useful for
          everyone.
        </Col>
      </Row>
      <br />
      <Row>
        <Col>What needs to be done?</Col>
      </Row>
      <Row>
        <Col>
          Some things are missing from the current VSCode extension. The tooltip
          does not support functions definitions and inline assembly. In
          addition, we would like to see some improvements to the existing
          implementation. The tooltip should contain a clickable link to go to
          the reference for every supported type and the description of the tip
          should be rewritten.
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          The C::S should be a link which sends the cursor to the definition.
          Hoevering over X within this tooltip should produce another tooltip
          for C::X with a similar content. When hovering over f2 or g1 in
          s.f2.g1 the definition of f2 or g1 should be given.
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          Hovering over warnings, informationals, and errors should give a
          tooltip with their message. All other variables and types, such as
          events, contracts, internal function, external functions, storage
          variables, variables, constant variables and enums, should have
          similar tooltip, listing their fields with a link to the type
          definition. Any doc comments for a type should also be given in a
          tooltip. For constants, their constant value should be displayed.
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col>What should be a completed project?</Col>
      </Row>
      <Row>
        <Col>Support function defnition in the VSCode extension</Col>
      </Row>
      <Row>
        <Col>Support inline assembly in the VSCode extension</Col>
      </Row>
      <Row>
        <Col>
          Add clickable links to the tooltip and fields for all types and
          variables
        </Col>
      </Row>
      <Row>
        <Col>Improve the description of the tooltip modal</Col>
      </Row>
      <Row>
        <Col>How will the PR be evaluated?</Col>
      </Row>
      <br />
    </Container>
  );
};
export default TeamsDescription;
