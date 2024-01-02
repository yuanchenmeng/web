import React, {useState, useEffect} from "react";

import p1 from "./res/ser/1.png";
import p2 from "./res/ser/2.png";
import p3 from "./res/ser/3.png";
import p4 from "./res/ser/4.png";
import p5 from "./res/ser/5.png";
import p6 from "./res/ser/6.png";
import p7 from "./res/ser/7.png";
import p8 from "./res/ser/8.png";
import p9 from "./res/ser/9.png";
import p10 from "./res/ser/10.png";
import p11 from "./res/ser/11.png";
import p12 from "./res/ser/12.png";
import p13 from "./res/ser/13.png";



function Film() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13
  ];

  const [showSecondSection, setShowSecondSection] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSecondSection(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    const t2 = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1800);

    const t3 = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2600);

    const t4 = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    const t5 = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3200);

    const t6 = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3400);

    const t7 = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3600);

    const t8 = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3800);

    const t9 = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4600);

    const t10 = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5400);

    const t11 = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6200);

    const t12 = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7200);


    // Cleanup timeouts on component unmount
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
      clearTimeout(t9);
      clearTimeout(t10);
      clearTimeout(t11);
      clearTimeout(t12);
    };

  }, []);
  const HandleSkip = () => {setShowSecondSection(true);}

  return (
    <div>
      <section className={`flex items-center justify-center starter-bg h-screen minus-header relative
       ${showSecondSection ? 'slide-out-from-top' : ''}`}>
        <div className="w-4/5 h-4/5">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-cover object-fill"
            />
          </div>
        </div>
        <button className="btn2" onClick={HandleSkip}>
          Skip
        </button>
      </section>
      {showSecondSection && (
        <section className={` ${showSecondSection ? '' : 'hidden'}`}>
          <div>hi?</div>
          <p>Welcome to Film</p>
        </section>
      )}
    </div>

  );
}

export default Film;