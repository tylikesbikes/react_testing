import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

/*smoke test for 'can carousel render?'*/
it('passes the basic rendering smoke test -- Carousel', function() {
  render(<Carousel
          photos = {TEST_IMAGES}
          title="images for testing"
          />);
});



it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

/*snapshot test for Carousel*/
it('should match carousel snapshot', ()=> {
const {asFragment} = render(<Carousel photos={TEST_IMAGES} title="images for snapshop carousel"/>);
expect(asFragment()).toMatchSnapshot();
});

/*test that left arrow works to go to a previous image*/
it('tests left arrow shows a previous image', () => {
  const {container} = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing left arrow"
    />
  );

  expect(container.querySelector('img[alt="testing image 1"]'));
  const rightArrow = container.querySelector('.bi-arrow-right-circle');
  const leftArrow =  container.querySelector('.bi-arrow-left-circle');

  fireEvent.click(rightArrow);
  expect(container.querySelector('img[alt="testing image 2"]')).toBeInTheDocument();
  fireEvent.click(leftArrow);
  expect(container.querySelector('img[alt="testing image 2"]')).not.toBeInTheDocument();
  expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument();
});

/*test that when currCardIdx = 0, left arrow is not visible and right arrow is*/
it('checks that left arrow is not visible at the beginning of image array', () => {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);

    expect(container.querySelector('.bi-arrow-left-circle')).not.toBeVisible();
    expect(container.querySelector('.bi-arrow-right-circle')).toBeVisible();
});




/*test that when currCardIdx = total - 1, right arrow is not visible but left arrow is*/
it('checks that left arrow is not visible at the beginning of image array', () => {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);

    const rightArrow = container.querySelector('.bi-arrow-right-circle');

  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

    expect(container.querySelector('.bi-arrow-left-circle')).toBeVisible();
    expect(container.querySelector('.bi-arrow-right-circle')).not.toBeVisible();
});