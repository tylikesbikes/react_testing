function Stats(props) {
    return (
        <div id="counter">
            <p>You have flipped {props.numHeads} heads  and {props.numTails} tails</p>
        </div>
    )
}

export default Stats;