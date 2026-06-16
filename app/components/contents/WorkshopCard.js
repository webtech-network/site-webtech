import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WorkshopCard({ icon, title, description }) {
    return (
        <div className="bg-[#FFC107] rounded-2xl p-6 text-center shadow-md transform transition hover:-translate-y-2 hover:shadow-lg">
            <div className="flex justify-center mb-4">
                <div className="w-14 h-14 flex items-center justify-center bg-white/25 rounded-full">
                    <FontAwesomeIcon icon={icon} className="text-white text-2xl" />
                </div>
            </div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
        </div>
    );
}
