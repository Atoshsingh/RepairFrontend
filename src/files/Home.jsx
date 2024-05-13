import React, { useEffect, useState } from 'react'
import Header from '../Header'
import style from "./Home.module.css";
import image from "../assets/home-main.svg"
import ac from "../assets/ac.svg"
import phone from "../assets/phone.svg"
import watch from "../assets/watch.svg"
import tab from "../assets/tablet.svg"
import tv from "../assets/tv.svg"
import other from "../assets/other.svg";

import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useSearchParams, Link } from 'react-router-dom';




function Home() {
    const [currentImage, setImage] = useState({ value: false, imageNumber: 0 });

    useEffect(() => {

        console.log(currentImage.imageNumber);
    }, [currentImage])

    function imageClick(number) {
        event.preventDefault();
        setImage({ value: true, imageNumber: number });
    }

    const [typeEffect] = useTypewriter({
        words: [` Expert Repairs, Trusted Results. Welcome to Repair Pro, where we simplify your tech troubles with expert laptop, phone, and appliance repairs.
        We understand the value of your devices, which is why we offer a hassle-free experience.
        Take advantage of our home pickup service, allowing you to hand over your gadgets from the comfort of your home.
        Once the repairs are complete, enjoy the convenience of our home delivery service, bringing your fully restored devices right back to your doorstep.
        Our skilled team ensures quick and transparent fixes, using high-quality replacement parts.
        At Repair Pro, we simplify your digital life with expert laptop, phone, and appliance repairs, all while prioritizing your convenience.
        Trust us for a straightforward, competitive, and excellent repair experience – from pickup to delivery, your satisfaction is our commitment.`],
        loop:true,
        typeSpeed: 2,
        deleteSpeed: 5
    })
    return (
        <>
            <Header />
            <div className={style.mainDiv}>

                <div className={style.greetingDiv}>
                    <span>{typeEffect}</span>

                </div>


                <div className={style.firstDiv}>
                    <div className={style.innerleft}>
                        <Link to="/appliances/1">  <img className={style.image} onClick={() => imageClick(1)} src={watch} style={{ width: 200, borderRadius: 20 }} /></Link>
                    </div>
                    <div className={style.innerMiddle} >
                        <Link to="/appliances/2">
                            <img className={style.image} onClick={() => imageClick(2)} src={phone} style={{ width: 200, borderRadius: 20 }} />
                        </Link>
                        {/* <img className={style.image} onClick={() => imageClick(2)} src={phone} style={{ width: 200, borderRadius: 20 }} /> */}
                    </div>
                    <div className={style.innerRight} >
                        <Link to="/appliances/3">
                            <img className={style.image} onClick={() => imageClick(3)} src={ac} style={{ width: 200, borderRadius: 20 }} />
                        </Link>
                    </div>
                </div>
                {/* Second items  */}
                <div className={style.firstDiv}>
                    <div className={style.innerleft}>
                        <Link to="/appliances/4">
                            <img className={style.image} onClick={() => imageClick(4)} src={tab} style={{ width: 200, borderRadius: 20 }} />
                        </Link>

                    </div>
                    <div className={style.innerMiddle} >
                        <Link to="/appliances/5"><img className={style.image} onClick={() => imageClick(5)} src={tv} style={{ width: 200, borderRadius: 20 }} /></Link>

                    </div>
                    <div className={style.innerRight} >
                        <Link to="/appliances/6"><img className={style.image} onClick={() => imageClick(6)} src={other} style={{ width: 200, borderRadius: 20 }} /></Link>
                    </div>

                </div>


            </div>
        </>
    )
}
export default Home

// installed for text animation = npm i react-simple-typewriter 
