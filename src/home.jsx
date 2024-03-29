import React, {useState, useEffect} from "react";
import './App.css';

import ucsbimg from "./res/ucsbimg.jpg";
import aptitudeimg from "./res/apt.png";
import lsit from "./res/lsit.jpg";

function Home() {

  return (
    <div>
      { (
        <section>

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
                    <div className="flex-shrink-0">Jun 2022 - Sep 2023</div>
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

export default Home;