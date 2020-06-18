import React from 'react';
import Style from './index';

function Card(props) {
    return (
        <React.Fragment>
            <div className="cards">
            <div className="card">
                <img src={props.imgsrc} className="card_img" />
                {/* <div className="card__info">
                    <span className="card__category">{props.title}</span>
                    <h3 className="card__title">{props.tname}</h3>
                    <button>Watch Now</button>
                </div> */}
                </div>
            </div>
        </React.Fragment>
    )
   }

export default Card;   