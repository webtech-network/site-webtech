// RepoCard.js
import BtnLink from "../BtnLink";

const RepoCard = ({ repo }) => {
  return (
    <div className="card sm:w-auto md:w-4/6 lg:w-4/8 h-48" key={repo.id}>
      <p className="text-wrap">
        <strong className="font-bold text-primaria">{repo.name} |</strong>{" "}
        {repo.description}
      </p>
      <BtnLink href={repo.html_url}>Ver no GitHub</BtnLink>
    </div>
  );
};

export default RepoCard;
