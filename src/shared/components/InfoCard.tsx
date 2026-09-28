import React from "react";

interface InfoCardProps {
    title: string;
    description: string;
    icon: React.ComponentType<{
        size?: number;
        strokeWidth?: number;
    }>;
    variant?: "default" | "centered";
    bgColor?: string;
    thickness?: number;
}

export default function InfoCard({
    title,
    description,
    icon: Icon,
    variant = "default",
    bgColor,
    thickness = 1.6,
}: InfoCardProps) {
    const isCentered = variant === "centered";

    return (
        <article
            style={{
                ...styles.card,
                ...(isCentered ? styles.centeredCard : styles.defaultCard),
                backgroundColor: bgColor,
            }}
        >
            <div
                style={{
                    ...styles.icon,
                    ...(isCentered ? styles.centeredIcon : styles.defaultIcon),
                }}
            >
                <Icon
                    size={isCentered ? 40 : 30}
                    strokeWidth={thickness}
                    aria-hidden="true"
                />
            </div>

            <div
                style={{
                    ...styles.content,
                    ...(isCentered
                        ? styles.centeredContent
                        : styles.defaultContent),
                }}
            >
                <h3
                    style={{
                        ...styles.title,
                        ...(isCentered
                            ? styles.centeredTitle
                            : styles.defaultTitle),
                    }}
                >
                    {title}
                </h3>

                <p
                    style={{
                        ...styles.description,
                        ...(isCentered
                            ? styles.centeredDescription
                            : styles.defaultDescription),
                    }}
                >
                    {description}
                </p>
            </div>
        </article>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "10px",
        border: "1px solid #e5e4e7",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.06)",
        height: "100%",
    },

    defaultCard: {
        alignItems: "flex-start",
        gap: "28px",
        padding: "30px 0",
    },

    centeredCard: {
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "8px",
        padding: "40px 24px",
    },

    icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    defaultIcon: {
        backgroundColor: "#002855",
        borderRadius: "0 32px 32px 0",
        padding: "12px 0",
        color: "white",
        width: "100px",
    },

    centeredIcon: {
        margin: "0 0 14px 0",
        color: "#041d3a",
    },

    content: {
        display: "flex",
        flexDirection: "column",
    },

    defaultContent: {
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "20px",
        padding: "0 30px",
    },

    centeredContent: {
        alignItems: "center",
        justifyContent: "center",
        gap: "14px",
    },

    title: {
        fontWeight: 600,
        lineHeight: "1.6rem",
    },

    defaultTitle: {
        fontSize: "24px",
        color: "#002855",
        textAlign: "left",
    },

    centeredTitle: {
        fontSize: "22px",
        textAlign: "center",
        color: "#041d3a",
    },

    description: {
        margin: 0,
        lineHeight: "1.5rem",
    },

    defaultDescription: {
        fontSize: "18px",
        textAlign: "left",
        color: "#646464",
    },

    centeredDescription: {
        fontSize: "16px",
        textAlign: "center",
        color: "#383838",
    },
};