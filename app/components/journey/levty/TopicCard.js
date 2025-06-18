import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopicCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="w-32 h-32 flex items-center justify-center bg-[#1E273340] rounded-full">
        <FontAwesomeIcon icon={icon} className="text-[#1E2733] text-5xl" />
      </div>
      <div>
        <h3 className="font-black text-lg text-secondary-dark">{title}</h3>
        <p className="text-sm text-secondary-dark">{description}</p>
      </div>
    </div>
  );
}
