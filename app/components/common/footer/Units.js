import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Units() {
    return (
        <>
            <h2 className="text-xl font-bold mb-5">
                <FontAwesomeIcon icon={faLocationDot} className="opacity-30 mr-3" />Unidades
            </h2>
            <p className="font-bold">Coreu</p>
            <p>PUC Minas - Coração Eucarístico</p>
            <p>Av. Dom José Gaspar, 500 - Coração Eucarístico</p>
            <p>Prédio 34 - HackerSpace</p>
            <br />
            <p className="font-bold">Praça</p>
            <p>PUC Minas - Unidade Praça da Liberdade</p>
            <p>R. Cláudio Manoel, 1162 - Savassi</p>
            <p>Prédio 4 - Sala 1106</p>
        </>
    );

}