export default function SectionTitle({ children, color = "text-secondary", className = "" }) {
    const classNames = `text-4xl mt-10 mb-7 font-bold ${color} ${className || 'text-left'}`;
    return <h1 className={classNames}>{children}</h1>;
}