import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import Coin from "./Coin";

beforeEach(() => {
    jest.spyOn(Math,"random")
    .mockReturnValueOnce(0.25)
    .mockReturnValueOnce(0.75);
});

it('should pass smoke test for main App', () => {
    render(<App />);
});

it('should pass smoke test for Coin app', ()=> {
    render(<Coin />);
});



it('should display no photos initlally, just certain text', () => {
    const {getByText, container} = render(<Coin />);
    const txt = getByText("Coin has not yet been flipped");

    expect(txt).toBeInTheDocument();

    expect(container.querySelector('img')).not.toBeInTheDocument();
    
});

it('should display a coin image after clicking the button', () => {
    const {container} = render(<Coin />);
    const btn = container.querySelector('button');

    /* first pass should be heads */
    fireEvent.click(btn);
    const pennyImageHeads = container.querySelector('img[alt="Penny: Heads"');
    expect(pennyImageHeads).toBeInTheDocument();

    /* second pass should be tails */
    fireEvent.click(btn);
    const pennyImageTails = container.querySelector('img[alt="Penny: Tails"');
    expect(pennyImageTails).toBeInTheDocument();
});