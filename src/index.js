import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import image from "./potrait.jpg";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Ruth Mwende Nzuki</h1>
      <p>
        Front-end web developer. When I'm not perfectly curating my web
        applications, I like to take long walks, go hiking, baking and even
        settling down with a book to read.
      </p>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src={image} alt="Developer's Potrait Photo" />
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="🦾" color="#8B0000" />
      <Skill skill="CSS" emoji="🦾" color="#8B0000" />
      <Skill skill="JavaScript" emoji="💪🏽" color="orangered" />
      <Skill skill="ReactJS" emoji="🤏🏽" color="yellow" />
      <Skill skill="NextJS" emoji="👶🏽" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
