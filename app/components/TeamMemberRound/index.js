const TeamMemberRound = ({ id, picture, name, gitlink }) => {
  return (
    <div className="flex flex-col items-center mt-5" key={id}>
      <a href={gitlink}>
        <img src={picture} alt={name} className="w-32 h-32 rounded-full" />
        <p className="text-center">{name}</p>
      </a>
    </div>
  );
};

export default TeamMemberRound;
