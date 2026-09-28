import { Link, useNavigate, useLocation } from "react-router-dom";
import LogoOlhuz from "../../assets/logoOlhuz.png";
import { User } from "lucide-react";
import { useAuth } from "../../core/contexts/AuthContext";

export function Navbar() {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleUserIconClick = () => {
        if (isAuthenticated) {
            navigate("/perfil"); // Redireciona para o perfil se logado
        } else {
            navigate("/login"); // Redireciona para o login se deslogado
        }
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <header style={styles.header}>
            <div style={styles.headerContainer} className="container">
                <div style={styles.logoContainer}>
                    <Link to="/" style={styles.logoLink} aria-label="Página inicial Olhuz">
                        <img src={LogoOlhuz} alt="Logo Olhuz" style={styles.logoImage} />
                        <div style={styles.logoTextContainer}>
                            <span style={styles.logoTitle}>Olhuz</span>
                            <span style={styles.logoSubtitle}>A tecnologia que ilumina o invisível</span>
                        </div>
                    </Link>
                </div>
                <nav style={styles.nav} aria-label="Navegação principal">
                    <ul style={styles.navLinks}>
                        <li>
                            <Link
                                to="/"
                                style={{
                                    ...styles.navItem,
                                    color: isActive("/") ? "#0C59D6" : "#303030"
                                }}
                            >
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/funcionalidades"
                                style={{
                                    ...styles.navItem,
                                    color: isActive("/funcionalidades") ? "#0C59D6" : "#303030"
                                }}
                            >
                                Funcionalidades
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/sobre"
                                style={{
                                    ...styles.navItem,
                                    color: isActive("/sobre") ? "#0C59D6" : "#303030"
                                }}
                            >
                                Sobre
                            </Link>
                        </li>
                    </ul>
                    <button
                        onClick={handleUserIconClick}
                        style={styles.userIconButton}
                        title={isAuthenticated ? "Meu Perfil" : "Entrar / Cadastrar"}
                        aria-label="Área do Usuário"
                    >
                        <User size={22} color="#303030" strokeWidth={1.8} aria-hidden="true" />
                    </button>
                </nav>
            </div>
        </header>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    header: {
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: '0 24px',
    },
    headerContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nav: {
        height: '80px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoLink: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '16px',
        textDecoration: 'none',
    },
    logoImage: {
        height: '50px',
        width: 'auto',
    },
    logoTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '4px',
    },
    logoTitle: {
        fontSize: '1.6rem',
        fontWeight: 600,
        color: 'black',
        lineHeight: 1.1,
    },
    logoSubtitle: {
        fontSize: '0.9rem',
        fontWeight: 400,
        color: '#505050',
    },
    navLinks: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    navItem: {
        padding: '8px 12px',
        fontSize: '1.1rem',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'color 0.2s',
        fontWeight: 500,
    },
    userIconButton: {
        backgroundColor: '#F2F4FD',
        border: '1px solid #dadeec',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
    }
};