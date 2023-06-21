import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Certificate for",
      description: "Design & DevelopmentGoogle Cloud Big Data and Machine Learning Fundamentals",
      imgUrl: projImg1,
      externalLink: "https://example.com/certificate1"
    },
    {
      title: "Certificate for",
      description: "The Fundamentals of Digital Marketing",
      imgUrl: projImg2,
    },
    {
      title: "Certificate for",
      description: "Machine Learning A-Z™: AI, Python & R in Data Science[2023]",
      imgUrl: projImg3,
    },
    {
      title: "Certificate for",
      description: "Python for Data Science and Machine Learning Bootcamp",
      imgUrl: projImg4,
    },
    {
      title: "Certificate for",
      description: "Completion of C training",
      imgUrl: projImg5,
    },
    {
      title: "Certificate for",
      description: "Completion of Advanced C++ training",
      imgUrl: projImg6,
    },
    {
      title: "Certificate for",
      description: "Completion of Python 3.4.3 Training",
      imgUrl: projImg7,
    },
    {
      title: "Certificate for",
      description: "Tableau 2022 Advanced: Master Tableau in Data Science",
      imgUrl: projImg8,
    },
    {
      title: "Certificate for",
      description: "SQL - MySQL for Data Analytics and Business Intelligence",
      imgUrl: projImg9,
    },
    {
      title: "Certificate for",
      description: "Tableau 2022 A-Z: Hands-On Tableau Training for Data Science",
      imgUrl: projImg10,
    },
    {
      title: "Certificate for",
      description: "Statistics for Data Science and Business Analytics",
      imgUrl: projImg11,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Certificates, Projects & Achievements</h2>
                <p>This section will contain the certificates I have received, the projects I have worked on and my achievements</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Certificates</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Achievements</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>This section will be containing the certificates I have recieved.</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>This section will be containing few of the projects I have worked on or contributed to.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>This section will be containing my achievements.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
