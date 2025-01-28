import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Part from "../../components/Part";
import Todo from "../../assets/Projects/Todo.jpg";
import PassGen from "../../assets/Projects/PassGen.png";
import PassManager from "../../assets/Projects/Passmanager.png";
import Tictactoe from "../../assets/Projects/Tictactoe.png";
import Calculator from "../../assets/Projects/Calculator.png";
import Iplprediction from "../../assets/Projects/Iplprediction.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Part />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tictactoe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="We Created a Tic Tac Toe game using HTML, CSS, and JavaScript. This game demonstrates the core concepts of the Web Development, including user interaction, event handling, and dynamic content updates."
              ghLink="https://github.com/Tivyatharshini/Tic-Tac-Toe-Game"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>
 
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Iplprediction}
              isBlog={false}
              title="Ipl Prediction App"
              description="This is machine learning project to find out the win probability of team in the IPL matches based current situtaion and deployed on 
                           flask web as the backend. This model analyzes the various match features, team performance, and player statistics to offer the
                           real-time predictions."
              ghLink="https://github.com/Sauravkr1806/IPL-Predictor"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PassGen}
              isBlog={false}
              title="Password-Generator"
              description="JavaScript generates a random password based on user-selected options (lowercase, uppercase, digits, and specials) and length. It allows copying the generated password to the clipboard. 
              Implement a function that generates a random password using the selected character types and lengths."

              ghLink="https://github.com/Tivyatharshini/Password-Generator"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="Todo List"
              description="A to-do list is simply a list of your tasks or errands that need to be accomplished for
               a specific time or specific project. It can be a quick list on a paper or as elaborate and collaborative
               as a digital to-do list in an online app for teams. Creating a to-do list gives clarity on your tasks and 
               helps you plan out your day or project."
              ghLink="https://github.com/Tivyatharshini/To-do-list"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calculator}
              isBlog={false}
              title="Console based Gaming System"
              description="Console based Gaming System with LeaderBoard that will update the leader board dynaically"
              ghLink="https://github.com/SECE-2023-2027/end-semester-project-leep-project-submission-Tivyatharshini"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
