import flipCoin from "./flipCoin";

function FlipButton() {
    return (
        <div>
            <button onClick={flipCoin}>Flip a Coin!</button>
        </div>
    )
}

export default FlipButton;