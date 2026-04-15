import React from "react";
import MacWindow from "../MacWindow/MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

function Cli() {
  const commands = {
    about: {
      description: "About this portfolio",
      fn: () =>
        "Welcome to Jagrit's Mac OS Portfolio!\nThis interactive portfolio showcases my work and skills in a unique Mac OS-inspired interface.",
    },
    echo: {
      description: "Echo the arguments",
      fn: (...args) => args.join(" "),
    },
    date: {
      description: "Show current date and time",
      fn: () => new Date().toLocaleString(),
    },
    whoami: {
      description: "Show current user",
      fn: () => "jagritmadaan",
    },
    projects: {
      description: "Show portfolio projects",
      fn: () =>
        "🚀 Featured Projects:\n- Mac OS Portfolio (React)\n- E-commerce Website\n- Task Management App\n- Weather Dashboard\n- Blog Platform",
    },
    skills: {
      description: "Show technical skills",
      fn: () =>
        "💻 Technical Skills:\n- Frontend: React, Vue.js, HTML5, CSS3, JavaScript\n- Backend: Node.js, Express, Python, Django\n- Database: MongoDB, PostgreSQL, MySQL\n- Tools: Git, Docker, AWS, VS Code",
    },
    contact: {
      description: "Show contact information",
      fn: () =>
        "📧 Contact Information:\n- Email: jagrit@example.com\n- LinkedIn: linkedin.com/in/jagrit\n- GitHub: github.com/jagrit\n- Portfolio: jagrit.dev",
    },
  };
  return (
    <MacWindow width="55vw" height="60vh">
      <div className="cli-window">
        <Terminal
          commands={commands}
          className="terminal"
          welcomeMessage={`Welcome to My Portfolio CLI!
                        Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

                        Type 'help' to see all available commands,
                        or try:
                        • help - List all available commands
                        • about - Learn about this portfolio
                        • echo - Echo text back to you
                        • date - Show current date and time
                        • whoami - Show current user
                        • projects - View my featured projects
                        • skills - See my technical skills
                        • contact - Get my contact information`}
          promptLabel="jagritmadaan:~$"
          promptLabelStyle= {{color:"rgb(78, 237, 99)"}}
        />
      </div>
    </MacWindow>
  );
}

export default Cli;
