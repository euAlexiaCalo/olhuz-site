import { Navbar } from "../../../shared/components/NavBar";
import { Footer } from "../../../shared/components/Footer";
import ImgOlhoPc from "../../../assets/olhoPc.png";
import ImgHardware from "../../../assets/equipamentosHardware.png";
import { TEAM } from "../data/teamData";
import MemberItem from "../../../shared/components/MemberItem";
import "../styles/AboutPage.css";
export function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="about-container">
                <section className="about-hero">
                    <div>
                        <div>
                            <h1>Nossa História</h1>
                            <p>A Olhuz nasceu no coração do curso Técnico em Desenvolvimento de Sistemas do Senac, impulsionada por mentes apaixonadas por tecnologia e inovação social. O que começou nas salas de aula como um projeto acadêmico focado em criar soluções reais evoluiu rapidamente para um compromisso profundo com a acessibilidade e a inclusão digital.</p>
                            <p>Unindo inteligência artificial, engenharia de software e design centrado no usuário, a Olhuz foi concebida para romper as barreiras visuais no mundo digital. Nossa missão vai além de desenvolver código: trabalhamos para traduzir o contexto visual em autonomia diária, devolvendo a liberdade de navegação e a inclusão a quem mais precisa.</p>
                        </div>
                        <img src={ImgOlhoPc} alt="Imagem do Olho do PC" />
                    </div>
                </section>
                <section className="about-founders">
                    <div>
                        <h2>Nossos Fundadores</h2>
                        <ul>
                            {TEAM.map((member) => (
                                <li key={member.id}>
                                    <MemberItem
                                        name={member.name}
                                        position={member.position}
                                        photo={member.photo}
                                        alt={member.alt}
                                        github={member.github}
                                        linkedin={member.linkedin}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className="about-mission">
                    <div>
                        <div>
                            <h2>Nossa Missão</h2>
                            <p>Estamos aqui para criar um mundo digital acessível para todos. Acreditamos que a tecnologia deve ser uma ponte, não uma barreira, e estamos dedicados a desenvolver soluções que empoderem pessoas com deficiência visual a navegar, explorar e interagir com o mundo digital de forma independente.</p>
                        </div>
                        <p><em>"Transformar tecnologia em liberdade"</em></p>
                    </div>
                </section>
                <section className="about-innovation">
                    <div>
                        <img src={ImgHardware} alt="Imagem de Equipamentos de Hardware" />
                        <div>
                            <h2>Inovação com Propósito</h2>
                            <p>Nossa equipe trabalha incansavelmente para manter o Olhuz no topo da inovação. Cada linha de código é escrita pensando na experiência real do usuário, garantindo que a tecnologia de IA seja, acima de tudo, humana e empática.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}