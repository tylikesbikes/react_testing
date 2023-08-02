import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";


render(<Carousel   
    photos = {TEST_IMAGES}
    title="images for testing"
    />);

/* smoke test for Card */
it ('passes the basic rendering smoke test -- Card', function() {
  render(<Card 
    caption={'testCaption'}
    src={TEST_IMAGES[0].src}
    currNum={0}
    totalNum={3}
    />);
});

/*snapshop test for Card */
it('should match snapshot', () => {
    const { asFragment } = render(<Card     
    caption={'testCaption'}
    src={TEST_IMAGES[0].src}
    currNum={0}
    totalNum={3}/>);

    expect(asFragment()).toMatchSnapshot();
});