import React, { useEffect } from 'react';
import '../style (3).css';

function NewClock() {
    useEffect(() => {
        const hourHand = document.querySelector('.hourHand');
        const minuteHand = document.querySelector('.minuteHand');
        const secondHand = document.querySelector('.secondHand');
        const time = document.querySelector('.time');

        function setDate() {
            const today = new Date();

            const second = today.getSeconds();
            const secondDeg = ((second / 60) * 360) + 360;
            secondHand.style.transform = `rotate(${secondDeg}deg)`;

            const minute = today.getMinutes();
            const minuteDeg = ((minute / 60) * 360);
            minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

            const hour = today.getHours();
            const hourDeg = ((hour / 12) * 360);
            hourHand.style.transform = `rotate(${hourDeg}deg)`;

            time.innerHTML = '<span>' + '<strong>' + hour + '</strong>' + ' : ' + minute + ' : ' + '<small>' + second + '</small>' + '</span>';
        }

        const intervalId = setInterval(setDate, 1000);

        return () => clearInterval(intervalId); // Cleanup the interval on unmount
    }, []); // Empty dependency array to run only once after mount

    return (
        <div>
            <div className="clock">
                <div className="hourHand"></div>
                <div className="minuteHand"></div>
                <div className="secondHand"></div>
                <div className="center"></div>
                <div className="time"></div>
                <ul>
        {/* <li><span>1</span>
         <div className="tick"></div></li>
        <li><span>2</span>
         <div className="tick"></div></li>
        <li><span>3</span>
         <div className="tick"></div></li>
        <li><span>4</span>
         <div className="tick"></div></li>
        <li><span>5</span>
         <div className="tick"></div></li>
        <li><span>6</span>
         <div className="tick"></div></li>
        <li><span>7</span>
         <div className="tick"></div></li>
        <li><span>8</span>
         <div className="tick"></div></li>
        <li><span>9</span>
         <div className="tick"></div></li>
        <li><span>10</span>
         <div className="tick"></div></li>
        <li><span>11</span>
         <div className="tick"></div></li>
        <li><span>12</span>
         <div className="tick"></div></li> */}
    </ul>
            </div>
        </div>
    );
}

export default NewClock;
