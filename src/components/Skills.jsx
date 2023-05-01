// import content
import { createElement, useState } from "react";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {/* <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>Experience building scalable and high-performance web applications using Node.js and its ecosystem of tools and libraries..</li>
          <li>Strong proficiency in JavaScript and experience with server-side templating languages such as Handlebars or Pug.</li>
          <li>Expertise in working with databases such as MongoDB and MySQL, including database modeling, schema design, and query optimizationr</li>
          <li>
            Knowledge of Node.js web frameworks such as Express.js, and an understanding of RESTful API design principles..
          </li>
          <li>
            Familiarity with Git and experience with version control, branching, and merging strategies.
          </li>
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div> */}



        {selectSkill?.name == 'Node js' && (
          <>
            <div className="flex items-center gap-2">
              <img className="h-10" src={selectSkill?.logo} alt="..." />
              <h6>{selectSkill?.name}</h6>
            </div>
            <br />
            <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
              <li>Experience building scalable and high-performance web applications using Node.js and its ecosystem of tools and libraries..</li>
              <li>Strong proficiency in JavaScript and experience with server-side templating languages such as Handlebars or Pug.</li>
              <li>Expertise in working with databases such as MongoDB and MySQL, including database modeling, schema design, and query optimization.</li>
              <li>
                Knowledge of Node.js web frameworks such as Express.js, and an understanding of RESTful API design principles.
              </li>
              <li>
                Familiarity with Git and experience with version control, branching, and merging strategies.
              </li>
            </ul>
            <br />
            <div className="flex justify-end">
              <button onClick={closeModal} className="btn">
                Close
              </button>
            </div>
          </>

        )}

        {selectSkill?.name == 'React js' && (
          <>
            <div className="flex items-center gap-2">
              <img className="h-10" src={selectSkill?.logo} alt="..." />
              <h6>{selectSkill?.name}</h6>
            </div>
            <br />
            <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
              <li>Proficient in building complex and interactive user interfaces using ReactJS library.</li>
              <li>Skilled in writing efficient and reusable code through the use of ReactJS components.</li>
              <li>Experienced in working with other popular front-end technologies such as Redux, React Router, and Material UI.r</li>
              <li>
                Knowledgeable in optimizing ReactJS application performance through the use of the virtual DOM and other techniques.
              </li>
              <li>
                Strong understanding of ReactJS best practices and design patterns, and able to apply them effectively in projects
              </li>
            </ul>
            <br />
            <div className="flex justify-end">
              <button onClick={closeModal} className="btn">
                Close
              </button>
            </div>
          </>
        )}

        {selectSkill?.name == 'Figma' && (
          <>
            <div className="flex items-center gap-2">
              <img className="h-10" src={selectSkill?.logo} alt="..." />
              <h6>{selectSkill?.name}</h6>
            </div>
            <br />
            <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
              <li>Basic Knowledge in using Figma to create wireframes, prototypes, and designs for web and mobile applications..</li>
              <li>Skilled in using Figma's vector editing tools to create and manipulate shapes, icons, and other design elements.</li>
              <li>Knowledgeable in using Figma to collaborate with other designers and stakeholders, by sharing designs, gathering feedback, and making revisions.</li>
              <li>
                Familiar with Figma plugins and integrations, and able to use them to extend Figma's functionality and streamline design workflows.
              </li>
            </ul>
            <br />
            <div className="flex justify-end">
              <button onClick={closeModal} className="btn">
                Close
              </button>
            </div>
          </>
        )}

        {selectSkill?.name == 'Javascript' && (
          <>
            <div className="flex items-center gap-2">
              <img className="h-10" src={selectSkill?.logo} alt="..." />
              <h6>{selectSkill?.name}</h6>
            </div>
            <br />
            <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
              <li>Proficient in developing dynamic and interactive web applications using JavaScript, HTML, and CSS.</li>
              <li>Experienced in using JavaScript library React to build scalable and maintainable front-end applications.</li>
              <li>Skilled in using JavaScript libraries such as jQuery, D3.js, or Chart.js to add interactivity and data visualization to web applications.</li>
              <li>
                Knowledgeable in using Node.js to build server-side applications and APIs using JavaScript.
              </li>
              <li>
                Familiar with JavaScript tools and technologies such as Webpack, Babel, TypeScript, or ES6+ syntax, and able to use them effectively in projects.
              </li>
            </ul>
            <br />
            <div className="flex justify-end">
              <button onClick={closeModal} className="btn">
                Close
              </button>
            </div>
          </>
        )}


      </Modal>

      {/* content */}
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {/* maping skills */}
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div
                  onClick={() => {
                    setSelectSkill(skill);
                    openModal();
                  }}
                  className="text-xl absolute top-3 right-3"
                >
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Skills;
