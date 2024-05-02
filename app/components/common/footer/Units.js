import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Units() {
    return (
        <>
            <h2 className="text-xl font-bold mb-5">
                <FontAwesomeIcon icon={faLocationDot} className="opacity-30 mr-3" />Unidades
            </h2>
            <p className="font-bold">Coreu</p>
            <p className="opacity-50">PUC Minas - Coração Eucarístico</p>
            <p className="opacity-50">Av. Dom José Gaspar, 500 - Coração Eucarístico</p>
            <p className="opacity-50">Prédio 34 - HackerSpace</p>
            <br />
            <p className="font-bold">Praça</p>
            <p className="opacity-50">PUC Minas - Unidade Praça da Liberdade</p>
            <p className="opacity-50">R. Cláudio Manoel, 1162 - Savassi</p>
            <p className="opacity-50">Prédio 4 - Sala 1106</p>
        </>
    );

}