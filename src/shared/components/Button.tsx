import React from "react";

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    color?: string;
    bgColor?: string;
    borderColor?: string;
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}

function Button({
    text,
    type = "button",
    onClick,
    color,
    bgColor,
    borderColor,
    disabled=false,
    children,
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{
                ...styles.button,
                color: color,
                backgroundColor: bgColor,
                border: borderColor
                    ? `2px solid ${borderColor}`
                    : "none",
            }}
        >
            {children}
            {text}
        </button>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    button: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        padding: "20px 40px",
        fontSize: "20px",
        fontWeight: 500,
        borderRadius: "10px",
        letterSpacing: "1px",
        cursor: "pointer",
        width: "100%",
    },
};

export default Button;