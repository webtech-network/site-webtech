import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faLinkedin, faInstagram, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function RedesSociais() {
    return (
        <>
            <h2 className="text-xl font-bold mb-5">
                <FontAwesomeIcon icon={faGlobe} className="opacity-30 mr-3" />Redes Sociais
            </h2>

            <div className="flex gap-5 justify-center md:justify-start mt-2">
                <Link href="/discord" target="_blank">
                    <FontAwesomeIcon icon={faDiscord} className="text-3xl" />
                </Link>

                <a href="https://www.linkedin.com/company/webtech-puc-minas/mycompany/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
                </a>

                <a href="https://www.instagram.com/webtech.pucminas/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
                </a>

                <a href="https://github.com/WebTech-PUC-Minas" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                </a>

                <a href="https://www.youtube.com/@Webtech.PUCMinas" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} className="text-3xl" />
                </a>
            </div>

        </>
    );

}