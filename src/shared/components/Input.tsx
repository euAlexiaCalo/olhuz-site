import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

type InputType = "text" | "email" | "password" | "cpf" | "phone"
    | "date";

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: InputType;
    id: string;
    error?: string;
}

export default function Input({
    label,
    type = "text",
    id,
    placeholder,
    required = false,
    ...rest
}: InputProps) {
    // Controla a visibilidade da senha
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    let inputType;

    if (isPassword) {
        if (showPassword) {
            inputType = "text";
        } else {
            inputType = "password";
        }
    } else if (type === "cpf" || type === "phone") {
        inputType = "text";
    } else {
        inputType = type;
    }

     return (
        <div style={styles.inputGroup}>

            {label && (
                <label htmlFor={id} style={styles.label}>
                    {label}
                    {required && (
                        <span aria-hidden="true"> *</span>
                    )}
                </label>
            )}

            <div style={styles.inputContainer}>

                <input
                    {...rest}
                    id={id}
                    type={inputType}
                    placeholder={placeholder}
                    required={required}
                    style={{
                        ...styles.input,
                        ...(isPassword ? styles.passwordInput : {}),
                    }}
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() =>
                            setShowPassword((previous) => !previous)
                        }
                        aria-label={
                            showPassword
                                ? "Ocultar senha"
                                : "Mostrar senha"
                        }
                        style={styles.passwordButton}
                    >
                        {showPassword ? (
                            <FiEye size={22} aria-hidden="true" />
                        ) : (
                            <FiEyeOff size={22} aria-hidden="true" />
                        )}
                    </button>
                )}

            </div>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {

    inputGroup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        gap: "8px",
    },

    label: {
        marginLeft: "8px",
        fontSize: "20px",
        fontWeight: 500,
        color: "rgb(46, 46, 46)",
        letterSpacing: "0.8px",
    },

    inputContainer: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "100%",
    },

    input: {
        width: "100%",
        padding: "12px 16px",
        border: "1px solid #DDD",
        borderRadius: "8px",
        backgroundColor: "#FFF",
        color: "rgb(54, 54, 54)",
        fontSize: "16px",
    },

    passwordInput: {
        paddingRight: "52px",
    },

    passwordButton: {
        position: "absolute",
        right: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "36px",
        height: "36px",
        padding: 0,
        border: "none",
        backgroundColor: "transparent",
        color: "#666",
        cursor: "pointer",
    },
};