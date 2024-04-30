export default function SectionTitle({ children, color = "text-primary" }) {
    const classNames = `text-4xl mt-10 mb-7 text-center font-bold ${color}`;
    return <h1 className={classNames}>{children}</h1>;
}