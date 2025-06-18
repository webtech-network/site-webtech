export default function StepCard({ badge, badgeColor, title, description }) {
  const badgeStyles =
    badgeColor === "yellow"
      ? "bg-[#F5C01A30] text-[#C59C19]"
      : "bg-[#0096D530] text-[#0096D5]";

  return (
    <div className="flex flex-col gap-2 justify-end">
      {badge && (
        <span
          className={`px-3 py-1 font-black rounded-md w-fit ${badgeStyles}`}
        >
          {badge}
        </span>
      )}
      <div>
        <h3 className="font-black text-neutral-900 text-lg">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
