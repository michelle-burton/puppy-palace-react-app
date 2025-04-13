// src/components/ContributorCard.jsx
const ContributorCard = ({ dog }) => (
  <div className="card">
    <a href={dog.github} target="_blank" rel="noopener noreferrer">
      <img src={dog.image} alt={dog.caption} />
    </a>
    <h3>{dog.name}</h3>
    <p>{dog.caption}</p>
    <a
      href={dog.github}
      target="_blank"
      rel="noopener noreferrer"
      className="github-link"
    >
      <i className="fab fa-github"></i> View Human on GitHub
    </a>
  </div>
);

export default ContributorCard;
