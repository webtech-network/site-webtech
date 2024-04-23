// RepoCard.js
import BtnLink from "../BtnLink";

const RepoCard = ({ repo }) => {
  return (
    <div className="card sm:w-auto lg:w-4/6 h-auto" key={repo.id}>
      <p className="text-wrap">
        <strong className="font-bold text-primaria">{repo.name} |</strong>{" "}
        {repo.description}
      </p>
      <BtnLink href={repo.html_url}></BtnLink>
    </div>
  );
};

export default RepoCard;
