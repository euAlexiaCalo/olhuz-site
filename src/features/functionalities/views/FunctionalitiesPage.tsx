import { Navbar } from "../../../shared/components/NavBar";
import { Footer } from "../../../shared/components/Footer";
import Button from "../../../shared/components/Button";
import InfoCard from "../../../shared/components/InfoCard";

import { FUNCTIONALITIES } from "../data/functionalitiesData";
import { PLATFORMS } from "../data/platformsData";

import ImgFriends from "../../../assets/imgFriends.jpg";
import ImgIA from "../../../assets/imgIA.png";
import { HiOutlinePlay } from "react-icons/hi2";

import "../styles/FunctionalitiesPage.css";

export function FunctionalitiesPage() {
    return (
        <>
            <Navbar />
            <main className="functionalities-container container">
                <section className="functionalities-hero" aria-labelledby="functionalities-title">
                    <div>
                        <div>
                            <h1 id="functionalities-title">Inteligência Artificial que traduz o mundo visual em liberdade.</h1>
                            <p>Esqueça as descrições genéricas. Descubra como a nossa tecnologia analisa contexto, lê dados complexos e interpreta sentimentos em tempo real.</p>
                            <div>
                                <Button
                                    text="Experimente grátis"
                                    type="button"
                                    onClick={() => { }}
                                    color="#000000"
                                    bgColor="#fad02c"
                                />
                            </div>
                        </div>
                        <img src={ImgIA} alt="Ilustração abstrata e tecnológica sobre fundo branco, representando a Inteligência Artificial transformando elementos do mundo visual em ondas sonoras e dados digitais, simbolizando acessibilidade e liberdade." />
                    </div>
                </section>
                {/* Demonstração do funcionamento do Olhuz */}
                <section className="functionalities-simulator" aria-labelledby="simulator-title">
                    <div>
                        <h2 id="simulator-title">O Simulador Olhuz</h2>

                        <div>
                            <div className="functionalities-simulator-img">
                                <img src={ImgFriends} alt="Imagem de três amigos sorrindo e celebrando ao redor de uma mesa de madeira. No centro, há um bolo de aniversário de chocolate com velas acesas, criando uma atmosfera calorosa e festiva." />
                            </div>
                            <div className="functionalities-simulator-text">
                                <div>
                                    <h3>Como um leitor tradicional lê:</h3>
                                    <p>Imagem, Bolo de aniversário.</p>
                                </div>
                                <div>
                                    <div>
                                        <h3>Como o Olhuz interpreta:</h3>
                                        <p>Três amigos sorrindo e celebrando ao redor de uma mesa de madeira. No centro, há um bolo de aniversário de chocolate com velas acesas, criando uma atmosfera calorosa e festiva.</p>
                                    </div>
                                    <div>
                                        <HiOutlinePlay aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Funcionalidades */}
                <section className="functionalities-list" aria-labelledby="functionalities-list-title">
                    <div>
                        <h2 id="functionalities-list-title">
                            Recursos e Funcionalidades
                        </h2>
                        <ul aria-labelledby="functionalities-list-title">
                            {FUNCTIONALITIES.map((functionality) => (
                                <li key={functionality.id}>
                                    <InfoCard
                                        title={functionality.title}
                                        description={functionality.description}
                                        icon={functionality.icon}
                                        variant="default"
                                        bgColor="#FFF"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className="functionalities-platforms" aria-labelledby="functionalities-platforms-title">
                    <div>
                        <h2 id="functionalities-platforms-title">Onde você precisa, o Olhuz está lá.</h2>
                        <ul aria-labelledby="platforms-title">
                            {PLATFORMS.map((platform) => (
                                <li key={platform.id}>
                                    <InfoCard
                                        title={platform.title}
                                        description={platform.description}
                                        icon={platform.icon}
                                        variant="centered"
                                        bgColor="#FFF"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
