interface FeedbackItemProps {
    message: string;
    name: string;
    photo: string;
    alt: string;
}

export default function FeedbackItem({ message, name, photo, alt }: FeedbackItemProps) {
    return (
        <article style={styles.feedbackCard} aria-label={`Depoimento de ${name}`}>
            <blockquote style={styles.blockquote}>
                <p style={styles.messageText}>
                    <em>"{message}"</em>
                </p>
            </blockquote>
            <div style={styles.userInfo}>
                <img src={photo} alt={alt} style={styles.userPhoto} />
                <h3 style={styles.userName}>
                    <cite style={styles.citeText}>{name}</cite>
                </h3>
            </div>
        </article>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    feedbackCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '32px',
        padding: '32px',
        borderRadius: '8px',
        border: '2px solid rgba(84, 105, 158, 0.52)',
        backgroundColor: '#00142b',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        color: '#5f8ec4',
        boxSizing: 'border-box',
    },
    blockquote: {
        margin: 0,
        padding: 0,
        width: '100%',
    },
    messageText: {
        fontSize: '1.25rem',
        textAlign: 'left',
        lineHeight: '1.5rem',
        margin: 0,
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '30px',
        width: '100%',
    },
    userPhoto: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    userName: {
        fontSize: '1.125rem',
        fontWeight: 500,
        margin: 0,
    },
    citeText: {
        fontStyle: 'normal',
    },
};