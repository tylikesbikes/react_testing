import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const [leftIsShowing, setLeftIsShowing] = useState(false);
  const [rightIsShowing, setRightIsShowing] = useState(true);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  function updateArrows(idx) {
    /*set defaults = visible*/
    setLeftIsShowing(true);
    setRightIsShowing(true);

    /*hide arrows based on currCardIdx*/
    if (idx === 0) {
      setLeftIsShowing(false);
    }
    if (idx === total-1) {
      setRightIsShowing(false)
    }
  }


  function goForward() {
    let idx = 0;
    setCurrCardIdx(currCardIdx+1);
    idx = currCardIdx+1;
    
    updateArrows(idx);
  }

  
  function goBack() {
    let idx = 0;
    setCurrCardIdx(currCardIdx-1);
    idx = currCardIdx-1;
    updateArrows(idx);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className="bi bi-arrow-left-circle"
          onClick={goBack}
          style={{visibility: leftIsShowing ? "visible":"hidden"}}
          
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
          style={{visibility: rightIsShowing ? "visible":"hidden"}}
        />
      </div>
      <p>ctr new test</p>
    </div>
  );
}

export default Carousel;
