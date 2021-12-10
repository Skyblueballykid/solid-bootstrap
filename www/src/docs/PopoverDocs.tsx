import { Component } from "solid-js";
import {
  Button,
  Card,
  OverlayTrigger,
  Placement,
  Popover,
} from "solid-bootstrap";
import GithubSource from "./GithubSource";
import PopoverApi from "./PopoverApi";

export const PopoverDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <GithubSource name="PopoverDocs" />
        <h2>Popovers</h2>
        <p class="lead">A popover component, like those found in iOS.</p>
      </div>
      <div>
        <Card>
          <Card.Header>Examples</Card.Header>
          <Card.Body>
            <OverlayTrigger
              trigger="click"
              offset={[0, 8]}
              placement="right"
              overlay={
                <Popover id="popover-basic">
                  <Popover.Header as="h3">Popover right</Popover.Header>
                  <Popover.Body>
                    And here's some <strong>amazing</strong> content. It's very
                    engaging. right?
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant="success">Click me to see</Button>
            </OverlayTrigger>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Placement options</Card.Header>
          <Card.Body>
            {["top", "bottom", "left", "right"].map((placement) => (
              <OverlayTrigger
                trigger="click"
                offset={[0, 8]}
                placement={placement as Placement}
                overlay={
                  <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                    <Popover.Body>
                      <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="secondary" className="me-2">
                  Popover on {placement}
                </Button>
              </OverlayTrigger>
            ))}
          </Card.Body>
        </Card>
      </div>
      <PopoverApi />
    </div>
  );
};

export default PopoverDocs;
