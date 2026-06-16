import ButtonLink from '../common/ButtonLink';

export default function WorkshopsCta({ title, description, buttonText, buttonLink }) {
    return (
        <div className="bg-secondary-dark text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-black mb-3">{title}</h2>
                <p className="text-lg text-neutral-200">{description}</p>
            </div>
            <div className="w-fit transform transition hover:-translate-y-1">
                <ButtonLink text={buttonText} link={buttonLink} />
            </div>
        </div>
    );
}
