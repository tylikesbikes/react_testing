import React, {useState} from 'react';
import Stats from './Stats';
import PennyImages from './PennyImages';

function Coin() {
    const [flipped, setFlipped] = useState(false);
    const [numHeads, setHeads] = useState(0);
    const [numTails, setTails] = useState(0);
    const [latestFlip, setLatestFlip] = useState(0);
    
    function flipCoin() {
        setFlipped(true);
        const thisFlip = Math.random() < 0.5 ? 0:1;
        
        thisFlip < 0.5 ? setHeads(numHeads+1):setTails(numTails+1);
        
        setLatestFlip(thisFlip);
        return thisFlip;
    }



    return (
        <div className="coin">
            {flipped ? <img src={PennyImages[latestFlip][0]} alt = {PennyImages[latestFlip][1]}/>: <p>Coin has not yet been flipped</p>}
            <button onClick = {flipCoin}>Flip Coin</button>
            <Stats numHeads={numHeads} numTails={numTails}/>
        </div>
    )

}

export default Coin;