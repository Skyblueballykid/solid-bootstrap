import { Component } from "solid-js";
import Carousel from "solid-bootstrap/Carousel";
import GithubSource from "./GithubSource";

const CarouselDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <GithubSource name="CarouselDocs" />
        <h2>Carousels</h2>
        <p class="lead">
          A slideshow component for cycling through elements—images or slides of
          text—like a carousel.
        </p>
        <Carousel>
          <Carousel.Item>
            <div
              className="d-block w-100 bg-secondary"
              style={{ height: "400px" }}
            />
            <Carousel.Caption>
              <h2>First slide label</h2>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="d-block w-100 bg-secondary"
              style={{ height: "400px" }}
            />

            <Carousel.Caption>
              <h2>Second slide label</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="d-block w-100 bg-secondary"
              style={{ height: "400px" }}
            />

            <Carousel.Caption>
              <h2>Third slide label</h2>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselDocs;
