export default function Member({ id, picture, name, gitlink }) {
    return (
        <div className="flex flex-col items-center mt-5" key={id}>
            <a href={gitlink}>
                <img src={picture} alt={name} className="w-32 h-32 rounded-full mb-3" />
                <p className="text-center text-lg">{name}</p>
            </a>
        </div>
    );
};
