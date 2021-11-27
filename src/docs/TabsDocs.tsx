import { Component } from "solid-js";
import Card from "../../packages/bootstrap/src/Card";
import Tabs from "../../packages/bootstrap/src/Tabs";
import Tab from "../../packages/bootstrap/src/Tab";
import Row from "../../packages/bootstrap/src/Row";
import Col from "../../packages/bootstrap/src/Col";
import Nav from "../../packages/bootstrap/src/Nav";
import Sonnet from "./Sonnet";

export const TabsDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>Tabbed components</h3>
        <p class="lead">Dynamic tabbed interfaces.</p>
      </div>
      <div>
        <Card>
          <Card.Header>Examples</Card.Header>
          <Card.Body>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Home">
                <Sonnet />
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <Sonnet />
              </Tab>
              <Tab eventKey="contact" title="Contact" disabled>
                <Sonnet />
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Custom Tab Layout</Card.Header>
          <Card.Body>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Sonnet />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Sonnet />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};