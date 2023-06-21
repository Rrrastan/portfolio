import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, externalLink }) => {
  const linkStyle = {
    textDecoration: "none",
    color: "white"
  };
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <a href={externalLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
        <img src={imgUrl} />
      </a>
        <div className="proj-txtx">
        <a href={externalLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <h4>{title}</h4>
          <span>{description}</span>
        </a>
        </div>
      </div>
    </Col>
  )
}
