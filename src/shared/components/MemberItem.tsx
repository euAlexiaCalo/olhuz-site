import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface MemberItemProps {
    name: string;
    position: string;
    photo: string;
    alt: string;
    github?: string;
    linkedin: string;
}

export default function MemberItem({
    name,
    position,
    photo,
    alt,
    github,
    linkedin,
}: MemberItemProps) {
    return (
        <article style={styles.memberCard}>
            <img
                src={photo}
                alt={alt}
                style={styles.memberPhoto}
            />

            <div>
                <h3 style={styles.name}>{name}</h3>
                <p style={styles.position}>{position}</p>
            </div>

            <nav
                aria-label={`Redes sociais de ${name}`}
                style={styles.socialLinks}
            >
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub de ${name}`}
                        style={styles.socialLink}
                    >
                        <FaGithub style={styles.githubIcon} aria-hidden="true" />
                    </a>
                )}

                <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${name}`}
                    style={styles.socialLink}
                >
                    <FaLinkedinIn aria-hidden="true" />
                </a>
            </nav>
        </article>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    memberCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        gap: "16px",
    },

    memberPhoto: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        objectFit: "cover",
    },

    name: {
        margin: 0,
        fontSize: "20px",
        fontWeight: 600,
        color: "rgb(48, 48, 48)",
    },

    position: {
        margin: 0,
        fontSize: "16px",
        color: "rgb(100, 100, 100)",
    },

    socialLinks: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
    },

    socialLink: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        color: "rgb(255, 255, 255)",
        backgroundColor: "#002b5b",
    },

    githubIcon: {
        width: "20px",
        height: "20px",
    },
};