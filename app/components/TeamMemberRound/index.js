const TeamMemberRound = ({ id, picture, name, gitlink }) => {
  return (
    <div className="flex flex-col items-center" key={id}>
      <a href={gitlink}>
        <img src={picture} alt={name} className="w-32 h-32 rounded-full" />
        <p>{name}</p>
      </a>
    </div>
  );
};

export default TeamMemberRound;
