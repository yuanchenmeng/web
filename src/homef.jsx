import React, {useState, useEffect} from "react";
import './App.css';

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

import ucsbimg from "./res/ucsbimg.jpg";
import aptitudeimg from "./res/apt.png";
import lsit from "./res/lsit.jpg";

function Homef() {

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

          <div>
            <div className="journeySection mb-2">
              <h1 className="heading">About Me</h1>
            </div>
            <div className="main-width mx-auto">
              <p className="font6">
                Hello there! I'm Yuanchen Meng, a third-year computer science student at UC Santa Barbara.
                Currently, I intern as a Software Engineer at Aptitude Medical System in Goleta, CA.
                Beyond the realm of code, I find joy in beach walks, jogging, engaging in soccer matches,
                and watching  science fiction films. Let's connect and share our passion for both
                technology and leisure pursuits!
              </p>
            </div>

            <div className="journeySection mb-2">
              <h1 className="heading">Fun Facts</h1>
            </div>

            <div className="main-width mx-auto ">
              <p className="font6">
                🍟: I never dip my french fries in ketchup.
              </p>
              <p className="font6">
                🌶: Despite my spice tolerance, I rarely find truly spicy food – it's like a cruise with mild breezes.
              </p>
              <p className="font6">
                ⚽: I'm a die-hard fan of Bayern München in clubs and Germany in the national soccer scene.
              </p>
              <p className="font6">
                🎞: Matrix is my top movie, showcasing the ultimate power of computers and algorithms.
              </p>
              <p className="font6">
                🧪: I collect more than 40 fragrances in different notes.
              </p>

            </div>
            <div className="journeySection">
              <h1 className="heading">Education</h1>
            </div>


            <div className="main-width mx-auto">
              <div className="flex mt-6">
                <div className="flex-shrink-0 w-60 h-40">
                  <img className="w-4/5 h-4/5 object-cover rounded-xl"  src={ucsbimg} alt=""/>
                </div>
                <div className="w-full ">
                  <div className="flex justify-between font5 flex-wrap">
                    <div className="flex-shrink-0">UC Santa Barbara</div>
                    <div className="flex-shrink-0 adj1"> Sep 2021 - Jun 2025</div>
                  </div>
                  <div className="flex justify-between font5 flex-wrap">
                    <div className="flex-shrink-0">B.S. in Computer Science</div>
                    <div className="flex-shrink-0 adj1"> GPA: 3.88</div>
                  </div>
                  <div className="font6">
                    <div> Dean's Honors</div>
                    <div> Fall 21, Spring 22, Fall 22, Spring 23, Fall 23</div>
                  </div>


                </div>
              </div>
            </div>

            <div className="journeySection">
              <h1 className="heading">Work Experience</h1>
            </div>

            <div className="main-width mx-auto mb-10">
              <div className="flex mt-6">
                <div className="flex-shrink-0 w-60 h-40">
                  <img className="w-4/5 h-4/5 object-cover rounded-xl"  src={aptitudeimg} alt=""/>
                </div>
                <div className="w-full">

                  <div className="flex justify-between font5 flex-wrap">
                    <div className="flex-shrink-0 ">Software Engineer Intern</div>
                    <div className="flex-shrink-0 mr-2"> Aptitude Medical Systems</div>
                  </div>

                  <div className="flex justify-between font5 flex-wrap">
                    <div className="flex-shrink-0 ">Oct 2023 - Present</div>
                    <div className="flex-shrink-0 mr-2"> Goleta, CA</div>
                  </div>

                  <p className="dotpara">
                    Reduced data querying time for selected dates in backend by 90% through tuning of MySQL queries, optimization of
                    indexes, and refinement of filter algorithms.
                  </p>
                  <p className="dotpara">
                    Spearheaded the development of API endpoints to receive and parse gene files in JSON or FASTA formats,
                    introducing a batch update feature after uploads, and facilitating efficient data import/export in CSV format.
                  </p>
                  <p className="dotpara">
                    Implemented data visualization of testing results along with gene sequence comparisons through D3.js and Plotly.js
                    in React, resulting in a notable 40% increase in data-driven decision-making capabilities
                  </p>
                  <p className="dotpara">
                    Leveraged Docker to containerize Frontend for scalability and deployment.
                  </p>
                  <p className="dotpara">
                    Work on an Agile team with regular standups, sprints, and retrospectives to ensure continuous improvement.
                  </p>
                </div>
              </div>

              <div className="flex mt-6">
                <div className="flex-shrink-0 w-60 h-40">
                  <img className="w-4/5 h-4/5 object-cover rounded-xl"  src={lsit} alt=""/>
                </div>
                <div className="w-full">

                  <div className="flex justify-between font5 flex-wrap">
                    <div className="flex-shrink-0">Operation Coordinator</div>
                    <div className="flex-shrink-0 mr-2"> UCSB Letters & Science IT Collaborate Student Support Center</div>
                  </div>

                  <div className="flex justify-between font5 flex-wrap">
                    <div className="flex-shrink-0">Jun. 2022 - Sep. 2023</div>
                    <div className="flex-shrink-0 mr-2">Santa Barbara, CA</div>
                  </div>

                  <p className="dotpara">
                    Oversaw 25+ consultants and managed operations of 20+ computer labs.
                  </p>
                  <p className="dotpara">
                    Led the benchmark project to create benchmarks for consultants to ensure service quality.
                  </p>
                  <p className="dotpara">
                    Resolved 800+ help tickets from student, staff, and faculty, achieving over 97% satisfaction rate
                    on Zendesk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>

  );
}

export default Homef;