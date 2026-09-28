import { Navbar } from "../../../shared/components/NavBar";
import { Footer } from "../../../shared/components/Footer";
import Button from "../../../shared/components/Button";
import ImgCell from "../../../assets/celularOlhuz.jpg";
import InfoCard from "../../../shared/components/InfoCard";
import FeedbackItem from "../../../shared/components/FeedbackItem";
import { FEEDBACKS_MOCK } from "../data/feedbacksData";
import { RESOURCES } from "../data/resourcesData";
import { RiVolumeUpLine } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import "../styles/HomePage.css";

export function HomePage() {
    return (
        <>
            <Navbar />
            <main className="home-container">
                <section className="home-hero" aria-labelledby="hero-title">
                    <div>
                        <div className="home-hero-text">
                            <h1 id="hero-title">Sinta o mundo digital através das palavras.</h1>
                            <p>Muito além de um leitor de telas. O Olhuz reconhece, analisa e descreve cada detalhe visual, devolvendo a você a independência na navegação.</p>
                            <div>
                                <Button
                                    text="Experimente grátis"
                                    type="button"
                                    onClick={() => { }}
                                    color="#ffffff"
                                    bgColor="#1A3672"
                                />
                                <p>Disponível iOS / Android</p>
                            </div>
                        </div>
                        <img src={ImgCell} alt="Imagem de um celular com o Olhuz" className="home-image" />
                    </div>
                </section>
                <section className="home-why" aria-labelledby="why-title">
                    <div>
                        <h2 id="why-title">Por que os leitores de tela tradicionais não são suficientes?</h2>
                        <div>
                            <div>
                                <RiVolumeUpLine className="volume-icon" aria-hidden="true"/>
                                <h3>Leitores Atuais</h3>
                                <p>Fornecem descrições robóticas e genéricas como "Pessoa sentada". Eles ignoram o calor do momento e a complexidade visual do ambiente ao seu redor.</p>
                            </div>
                            <div>
                                <IoMdEye className="eye-icon" aria-hidden="true"/>
                                <h3>Olhuz IA</h3>
                                <p>"Seus três melhores amigos estão sorrindo em volta de um bolo de aniversário iluminado por velas, em uma sala com luz quente e acolhedora." Compreenda a emoção.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <hr aria-hidden="true"/>
                <section className="home-resources" aria-labelledby="resources-title">
                    <div>
                        <h2 id="resources-title">Tecnologia que Transforma Visão em Contexto.</h2>
                        <ul aria-label="Recursos oferecidos pelo Olhuz">
                            {RESOURCES.map((resource) => (
                                <InfoCard
                                    key={resource.id}
                                    title={resource.title}
                                    description={resource.description}
                                    icon={resource.icon}
                                    variant="centered"
                                    bgColor="#FFF"
                                    thickness={resource.thickness}
                                />
                            ))}
                        </ul>
                    </div>
                </section>
                <section className="home-feedbacks" aria-labelledby="feedbacks-title">
                    <div>
                        <h2 id="feedbacks-title">Vozes de Quem Conquistou Autonomia</h2>
                        <ul aria-label="Depoimentos de quem conquistou autonomia com o Olhuz">
                            {FEEDBACKS_MOCK.map((feedback) => (
                                <li key={feedback.id}>
                                    <FeedbackItem
                                        name={feedback.name}
                                        message={feedback.message}
                                        photo={feedback.photo}
                                        alt={feedback.alt}
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