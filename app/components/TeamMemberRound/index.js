const TeamMemberRound = ({ id, picture, name }) => {
  return (
    <div className="flex flex-col items-center" key={id}>
      <img src={picture} alt={name} className="w-32 h-32 rounded-full" />
      <h5>{name}</h5>
    </div>
  );
};

export default TeamMemberRound;
