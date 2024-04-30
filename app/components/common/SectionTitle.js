export default function SectionTitle({ children, color = "text-secondary" }) {
    const classNames = `text-4xl mt-10 mb-7 text-center font-bold ${color}`;
    return <h1 className={classNames}>{children}</h1>;
}