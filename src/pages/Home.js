import React from "react";
import { ReactTyped} from "react-typed"; 
import "./Home.css";

function Home() {
  return (
    <div className="page home">
      <h1>
        Hello, I'm <span className="name">Sugeshan S</span>
      </h1>

      <ReactTyped
        strings={[
          "A passionate Computer Science student 💻",
          "A creative Web Developer 🌐",
          "An enthusiastic learner 🚀",
          "A problem solver 🧩",
          "An Aspiring Full-Stack Developer 🌟",
        ]}
        typeSpeed={60}
        backSpeed={30}
        loop // ✅ this enables continuous looping
        showCursor={true}
        cursorChar="|"
      />
    </div>
  );
}

export default Home;
