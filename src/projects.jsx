import React, {useState} from "react";

import { ReactComponent as PunchHole } from './res/icon1.svg';
import { ReactComponent as LinkIcon } from './res/icon2.svg';
import './App.css';

function Projects() {

  const [Snum, setSnum] = useState(0);

  const skillHandle0 = () => {setSnum(0);}

  const skillHandle1 = () => {setSnum(1);}
  const skillHandle2 = () => {setSnum(2);}
  const skillHandle3 = () => {setSnum(3);}
  const skillHandle4 = () => {setSnum(4);}

  const categories = ['All', 'Full stack', 'Front end', 'Back end', 'Dev Ops', 'Platform', 'AI/ML'];

  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };


  return (
    <div>
      <div className="journeySection">
        <h1 className="heading">Skills</h1>
      </div>

      <div className="main-width mx-auto">
        <div className="flex justify-between items-center w-9/10 mx-auto">
          <button className="btn1" onClick={skillHandle0}>All</button>
          <div className="btn1s" >|</div>
          <button className="btn1" onClick={skillHandle1}>Programming Languages</button>
          <div className="btn1s" >|</div>
          <button className="btn1 ml-2" onClick={skillHandle2}>Frameworks</button>
          <div className="btn1s" >|</div>
          <button className="btn1 ml-2" onClick={skillHandle3}>Technologies</button>
          <div className="btn1s" >|</div>
          <button className="btn1 ml-2" onClick={skillHandle4}>Database</button>
        </div>
      </div>



      <div className="main-width mx-auto skills">


        {
          Snum === 0 ? (
            <div>

              <div className="w-full charts">
                <div className="h-5"></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">C++</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">Python</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">Javascript</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">HTML/CSS</span></div>
                <div className="colorbar block w-4/5"><span className="font7 ml-4">Java</span></div>
                <div className="colorbar block w-4/5"><span className="font7 ml-4">Typescript</span></div>
                <div className="colorbar block w-4/5"><span className="font7 ml-4">Kotlin</span></div>
                <div className="colorbar block w-3/5"><span className="font7 ml-4">x86</span></div>
                <div className="colorbar block w-3/5"><span className="font7 ml-4">MIPS</span></div>
                <div className="colorbar block w-2/5"><span className="font7 ml-4">C#</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">React</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">Django</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">SpringBoot</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">Node.js</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">Bootstrap</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">Tailwind CSS</span></div>
                <div className="colorbar block w-4/5"><span className="font7 ml-4">Firebase</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">Git</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">REST API</span></div>
                <div className="colorbar block w-4/5"><span className="font7 ml-4">Redis</span></div>
                <div className="colorbar block w-4/5"><span className="font7 ml-4">Elasticsearch</span></div>
                <div className="colorbar block w-4/5"><span className="font7 ml-4">AWS</span></div>
                <div className="colorbar block w-3/5"><span className="font7 ml-4">Docker</span></div>
                <div className="colorbar block w-2/5"><span className="font7 ml-4">Kubernetes</span></div>
                <div className="colorbar block w-2/5"><span className="font7 ml-4">GCP</span></div>
                <div className="colorbar block w-2/5"><span className="font7 ml-4">Kafka</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">MySQL</span></div>
                <div className="colorbar block w-4/5"><span className="font7 ml-4">Oracle</span></div>
                <div className="colorbar block w-3/5"><span className="font7 ml-4">MongoDB</span></div>
                <div className="h-5"></div>
              </div>

              <div>

                <div className="w-full lines">
                  <div className="greyline left20"></div>
                </div>

                <div className="w-full lines">
                  <div className="greyline left40"></div>
                </div>

                <div className="w-full lines">
                  <div className="greyline left60"></div>
                </div>

                <div className="w-full lines">
                  <div className="greyline left80"></div>
                </div>
              </div>

            </div>

          ) : null
        }


        {
          Snum === 1 ? (
            <div>

              <div className="w-full charts">
                <div className="h-5"></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">C++</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">Python</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">Javascript</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">HTML/CSS</span></div>
                <div className="colorbar block w-4/5"><span className="font7 ml-4">Java</span></div>
                <div className="colorbar block w-4/5"><span className="font7 ml-4">Typescript</span></div>
                <div className="colorbar block w-4/5"><span className="font7 ml-4">Kotlin</span></div>
                <div className="colorbar block w-3/5"><span className="font7 ml-4">x86</span></div>
                <div className="colorbar block w-3/5"><span className="font7 ml-4">MIPS</span></div>
                <div className="colorbar block w-2/5"><span className="font7 ml-4">C#</span></div>
                <div className="h-5"></div>
              </div>

              <div>

                <div className="w-full lines">
                  <div className="greyline left20"></div>
                </div>

                <div className="w-full lines">
                  <div className="greyline left40"></div>
                </div>

                <div className="w-full lines">
                  <div className="greyline left60"></div>
                </div>

                <div className="w-full lines">
                  <div className="greyline left80"></div>
                </div>
              </div>

            </div>

          ) : null
        }










        {
          Snum === 2 ? (
            <div>

              <div className="w-full charts">
                <div className="h-5"></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">React</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">Django</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">SpringBoot</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">Node.js</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">Bootstrap</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">Tailwind CSS</span></div>
                <div className="colorbar block w-4/5"><span className="font7 ml-4">Firebase</span></div>
                <div className="h-5"></div>
              </div>

              <div>

                <div className="w-full lines">
                  <div className="greyline left20"></div>
                </div>

                <div className="w-full lines">
                  <div className="greyline left40"></div>
                </div>

                <div className="w-full lines">
                  <div className="greyline left60"></div>
                </div>

                <div className="w-full lines">
                  <div className="greyline left80"></div>
                </div>
              </div>

            </div>

          ) : null
        }



        {
          Snum === 3 ? (
            <div>

              <div className="w-full charts">
                <div className="h-5"></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">Git</span></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">REST API</span></div>
                <div className="colorbar block w-4/5"><span className="font7 ml-4">Redis</span></div>
                <div className="colorbar block w-4/5"><span className="font7 ml-4">Elasticsearch</span></div>
                <div className="colorbar block w-4/5"><span className="font7 ml-4">AWS</span></div>
                <div className="colorbar block w-3/5"><span className="font7 ml-4">Docker</span></div>
                <div className="colorbar block w-2/5"><span className="font7 ml-4">Kubernetes</span></div>
                <div className="colorbar block w-2/5"><span className="font7 ml-4">GCP</span></div>
                <div className="colorbar block w-2/5"><span className="font7 ml-4">Kafka</span></div>
                <div className="h-5"></div>
              </div>

              <div>

                <div className="w-full lines">
                  <div className="greyline left20"></div>
                </div>

                <div className="w-full lines">
                  <div className="greyline left40"></div>
                </div>

                <div className="w-full lines">
                  <div className="greyline left60"></div>
                </div>

                <div className="w-full lines">
                  <div className="greyline left80"></div>
                </div>
              </div>

            </div>

          ) : null
        }


        {
          Snum === 4 ? (
            <div>

              <div className="w-full charts">
                <div className="h-5"></div>
                <div className="colorbar block w-full"><span className="font7 ml-4">MySQL</span></div>
                <div className="colorbar block w-4/5"><span className="font7 ml-4">Oracle</span></div>
                <div className="colorbar block w-3/5"><span className="font7 ml-4">MongoDB</span></div>
                <div className="h-5"></div>
              </div>

              <div>

                <div className="w-full lines">
                  <div className="greyline left20"></div>
                </div>

                <div className="w-full lines">
                  <div className="greyline left40"></div>
                </div>

                <div className="w-full lines">
                  <div className="greyline left60"></div>
                </div>

                <div className="w-full lines">
                  <div className="greyline left80"></div>
                </div>
              </div>

            </div>

          ) : null
        }








      </div>


      <div className="journeySection">
        <h1 className="heading">Projects</h1>
      </div>


      <div className="mx-auto main-width mb-10">

        <div>
          {
            /*
          <label>Filter by categories:</label>
          <div>
            {categories.map((category) => (
              <div key={category} className="form-check inline mr-10">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />
                <label className="form-check-label" htmlFor={category}>
                  {category}
                </label>
              </div>
            ))}
          </div>

            */
          }

          {
            /*
          <div><strong>Selected Categories:</strong> {selectedCategories.join(', ')}</div>
            */
          }
          <div className="mt-6 card">
            <div className="card-main py-2">

              <div className="flex items-center">
                <PunchHole className = "inline" style={{ width: '23px', height: '23px', color: 'blue', opacity: 0.65 }} />
                <h3 className="font2 ml-2">High-Performance Student Service System</h3>
              </div>

              <div className="font4">
                <p>Keywords: SpringBoot, Backend, Mysql, Redis, Elasticsearch, Kafka, Spring Cloud</p>
              </div>
              <p className="dotpara font3">
                Implemented distributed <b>MySQL clusters</b>  with master-slave replication and database sharding
                and partition by <b>Sharding-JDBC</b> to handle requests in <b>high-concurrency</b> scenarios
              </p>
              <p className="dotpara font3">
                Ensured data <b>consistency</b> between <b> Redis and MySQL using Kafka </b> for double delete operation.
              </p>
              <p className="dotpara font3">
                Integrated <b>Spring Cloud Gateway</b> and <b>Zookeeper</b> in Spring Cloud to manage microservices.
              </p>
              <p className="dotpara font3">
                Incorporated <b>Elasticsearch</b> to enhance the search service with fuzzy search functionality.
              </p>


            </div>
          </div>


          <div className="mt-6 card">
            <div className="card-main py-2">
              <div className="flex items-center">
                <PunchHole className = "inline" style={{ width: '23px', height: '23px', color: 'blue', opacity: 0.65 }} />
                <h3 className="font2 ml-2">Health Tracker</h3>
                <a href="https://github.com/yuanchenmeng/React-Django-Health-app">
                  <LinkIcon className = "ml-6" style={{ width: '20px', height: '20px', color: 'red', opacity: 0.85 }} />
                </a>


              </div>

              <div className="font4">
                <p>Keywords: Fullstack, React, Django, Mysql, AWS, Stryker, Jest</p>
              </div>
              <p className="dotpara font3">
                Built an interactive dashboard with data visualization by<b> Syncfusion, Tailwind CSS, and ReactJS</b> .
              </p>
              <p className="dotpara font3">
                Followed <b>Django MVT</b> and utilized Django's built-in authentication for user authentication.
              </p>
              <p className="dotpara font3">
                Attained test coverage and mutation testing scores over <b>85%</b>, leveraging <b>Jest and Stryker</b> for
                frontend testing and Django's testing frameworks for backend testing.
              </p>
              <p className="dotpara font3">
                Deployed on an <b>AWS EC2</b>  instance and integrated <b>AWS SNS</b>  to control notifications.
              </p>

            </div>

          </div>



          <div className="mt-6 card">
            <div className="card-main py-2">
              <div className="flex items-center">
                <PunchHole className = "inline" style={{ width: '23px', height: '23px', color: 'blue', opacity: 0.65 }} />
                <h3 className="font2 ml-2">COVID-19 Survival Random Forest Classifier</h3>
              </div>

              <div className="font4">
                <p>Keywords: scikit-learn, Machine Learning, Python, Random Forest Model</p>
              </div>
              <p className="dotpara font3">
                Developed random forest models from scratch.
              </p>
              <p className="dotpara font3">
                Achieved an accuracy comparable to the  <b>scikit-learn</b>   library and obtained over
                <b> 80%</b> accuracy for the test data.
              </p>

            </div>
          </div>



          <div className="mt-6 card">
            <div className="card-main py-2">

              <div className="flex items-center">
                <PunchHole className = "inline" style={{ width: '23px', height: '23px', color: 'blue', opacity: 0.65 }} />
                <h3 className="font2 ml-2">Pipelined CPU in PyRTL</h3>
              </div>

              <div className="font4">
                <p>Keywords: CPU, PyTRL, LRU</p>
              </div>
              <p className="dotpara font3">
                Built pipelined CPU using Python’s <b>PyTRL</b> library, implementing IEEE 754
                Standard floatingpoint calculations, a branch predictor,
                and a set-associate cache with the <b>LRU</b> algorithm.
              </p>
            </div>
          </div>


          <div className="mt-6 card">
            <div className="card-main py-2">

              <div className="flex items-center">
                <PunchHole className = "inline" style={{ width: '23px', height: '23px', color: 'blue', opacity: 0.65 }} />
                <h3 className="font2 ml-2">CSimple Compiler</h3>
              </div>

              <div className="font4">
                <p>Keywords: Compiler, C, flex, bison, Abstract Syntax Tree</p>
              </div>
              <p className="dotpara font3">
                Designed a two-pass compiler utilizing <b>flex and bison</b>  for scanning and parsing.
              </p>
              <p className="dotpara font3">
                Implemented in <b>C</b>, the compiler encompasses building an abstract syntax tree, type checking, semantic analysis, and
                code generation. The ultimate output is <b>x86</b>  assembly code.
              </p>
            </div>
          </div>

          <div className="mt-6 card">
            <div className="card-main py-2">

              <div className="flex items-center">
                <PunchHole className = "inline" style={{ width: '23px', height: '23px', color: 'blue', opacity: 0.65 }} />
                <h3 className="font2 ml-2">Credit Card Approval System</h3>
              </div>

              <div className="font4">
                <p>Keywords: scikit-learn, Python, Perceptron Model, PCA</p>
              </div>
              <p className="dotpara font3">
                Employed <b>PCA</b>  dimension reduction to handle imbalanced data in the credit card dataset.
              </p>
              <p className="dotpara font3">
                Trained a <b>multilayer perceptron model</b>  using the <b>scikit-learn</b> library.
              </p>
              <p className="dotpara font3">
                Achieved a prediction accuracy exceeding <b>93%</b>  and an F1 score of over 60.
              </p>
            </div>
          </div>

          <div className="mt-6 card">
            <div className="card-main py-2">

              <div className="flex items-center">
                <PunchHole className = "inline" style={{ width: '23px', height: '23px', color: 'blue', opacity: 0.65 }} />
                <h3 className="font2 ml-2">Realtime Tide Height Android App</h3>
              </div>

              <div className="font4">
                <p>Keywords: Android, Fullstack, Dagger Hilt, Jetpack</p>
              </div>
              <p className="dotpara font3">
                Developed an Android app in Kotlin utilizing <b>Dagger Hilt</b>  for dependency injection.
              </p>
              <p className="dotpara font3">
                Utilized <b>retrofit2</b>  library to implement <b>RESTful APIs</b>  to fetch online open real-time data.
              </p>
              <p className="dotpara font3">
                Implemented Model-View architecture and user interface components by <b>Jetpack</b>.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Projects;