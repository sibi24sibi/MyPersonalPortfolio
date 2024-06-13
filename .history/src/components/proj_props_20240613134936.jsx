import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const proj_props = ({ title, para, github_link }) => {
  return (
    <section id="projects">
      <Tilt options={defaultOptions} style={{ height: 300, width: 300 }}>
        <div className="card-projects">
          <h6>{title}</h6>
          <p>{para}</p>
          <a href={github_link} target="_blank" rel="noreferrer">
            <i className="fab fa-github-square"></i>
          </a>
        </div>
      </Tilt>
    </section>
  );
};

export default proj_props;
