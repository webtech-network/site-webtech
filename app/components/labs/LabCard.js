import ButtonCard from "../common/ButtonCard";

const RepoCard = ({ repo }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg w-64 h-64 md:w-72 lg:w-80 flex flex-col justify-between">
            <div className="p-4">
                <h5 className="text-lg text-primaria">{repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h5>
                <p>{repo.description}</p>
            </div>
            <div className="p-4 mt-auto">
                <ButtonCard link={repo.html_url} className="btn btn-primary w-full" />
            </div>
        </div>
    );
};

export default RepoCard;
