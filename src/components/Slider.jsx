import React from 'react';
import '../assets/css/Slider.css';

function Slider() {
    return (
        <div className="wrapper slider">
            <input type="radio" name="slide" id="one" defaultChecked />
            <input type="radio" name="slide" id="two" />
            <input type="radio" name="slide" id="three" />
            <input type="radio" name="slide" id="four" />
            <input type="radio" name="slide" id="five" />
            <div className="img img-1">
                <img src="./images/2.jpg" alt="Spider" />
            </div>
            <div className="img img-2">
                <img src="./images/3.jpg" alt="Image 23" />
            </div>
            <div className="img img-3">
                <img src="./images/5.jpg" alt="Spider" />
            </div>
            <div className="img img-4">
                <img src="./images/1.jpg" alt="Image 23" />
            </div>
            <div className="img img-5">
                <img src="./images/4.jpg" alt="Spider" />
            </div>
            <div className="sliders">
                <label htmlFor="one" className="one"></label>
                <label htmlFor="two" className="two"></label>
                <label htmlFor="three" className="three"></label>
                <label htmlFor="four" className="four"></label>
                <label htmlFor="five" className="five"></label>
            </div>
        </div>
    );
}

export default Slider;
