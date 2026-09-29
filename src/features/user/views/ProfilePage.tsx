import {
    User,
    Calendar,
    Mail,
    Phone,
    CreditCard,
    Lock,
    UserX,
    LogOut
} from 'lucide-react';

import { Navbar } from '../../../shared/components/NavBar';
import Footer from '../../../shared/components/Footer';
import HeaderView from '../../../shared/components/HeaderView';
import ProfileField from '../../../shared/components/ProfileField';
import { useProfileViewModel } from '../viewModels/useProfileViewModel';
import { formatCPF, formatPhone, formatDateBR } from '../../../shared/utils/formatters';
import '../styles/ProfilePage.css';

export function ProfilePage() {
    const {
        profile,
        isLoading,
        isDeactivateModalVisible,
        setDeactivateModalVisible,
        handleDeactivateAccount,
        isSignOutModalVisible,
        setSignOutModalVisible,
        handleSignOutConfirm,
        handleEditData,
        handleChangePassword,
    } = useProfileViewModel();

    return (
        <>
            <Navbar />
            <div className="profile-page-container">
                <div className="main-container">
                    {/* Header da Página */}
                    <HeaderView
                        title="Perfil"
                        description="Gerencie suas informações pessoais de forma segura"
                    />
                    {isLoading ? (
                        <div className="profile-loading-container">
                            <div className="profile-spinner" />
                        </div>
                    ) : (
                        <div className="profile-cards-wrapper">
                            {/* INFORMAÇÕES PESSOAIS */}
                            <section className="profile-section-card">
                                <h2 className="profile-section-title">Informações Pessoais</h2>
                                <div className="profile-fields-grid">
                                    <ProfileField
                                        label="Nome Completo"
                                        value={profile?.fullName || ""}
                                        icon={User}
                                        thickness={1.8}
                                    />
                                    <ProfileField
                                        label="Data de Nascimento"
                                        value={formatDateBR(profile?.birthDate)}
                                        icon={Calendar}
                                        thickness={1.8}
                                    />
                                    <ProfileField
                                        label="E-mail"
                                        value={profile?.email || ""}
                                        icon={Mail}
                                        thickness={1.8}
                                    />
                                    <ProfileField
                                        label="Telefone"
                                        value={formatPhone(profile?.phoneNumber)}
                                        icon={Phone}
                                        thickness={1.8}
                                    />
                                    <ProfileField
                                        label="CPF"
                                        value={formatCPF(profile?.cpf)}
                                        icon={CreditCard}
                                        thickness={1.8}
                                    />
                                </div>
                                <button className="profile-btn-edit" onClick={handleEditData}>
                                    Editar Dados
                                </button>
                            </section>
                            {/* INFORMAÇÕES DA CONTA */}
                            <section className="profile-section-card">
                                <h2 className="profile-section-title">Informações da Conta</h2>
                                <div className="profile-actions-grid">
                                    <div className="profile-action-card">
                                        <Lock size={24} strokeWidth={1.8} className="icon-blue" />
                                        <div className="profile-action-info">
                                            <span className="title-blue">Alterar Senha</span>
                                            <p className="description-gray">Atualize sua senha de acesso.</p>
                                        </div>
                                        <button
                                            className="profile-click-overlay"
                                            onClick={handleChangePassword}
                                            aria-label="Alterar Senha"
                                        />
                                    </div>
                                    <div className="profile-action-card">
                                        <UserX size={24} strokeWidth={1.8} className="icon-red" />
                                        <div className="profile-action-info">
                                            <span className="title-red">Excluir Conta</span>
                                            <p className="description-gray">Remova sua conta permanentemente.</p>
                                        </div>
                                        <button
                                            className="profile-click-overlay"
                                            onClick={() => setDeactivateModalVisible(true)}
                                            aria-label="Excluir Conta"
                                        />
                                    </div>
                                    <div className="profile-action-card">
                                        <LogOut size={24} strokeWidth={1.8} className="icon-orange" />
                                        <div className="profile-action-info">
                                            <span className="title-orange">Sair da Conta</span>
                                            <p className="description-gray">Desconecte da sua conta.</p>
                                        </div>
                                        <button
                                            className="profile-click-overlay"
                                            onClick={() => setSignOutModalVisible(true)}
                                            aria-label="Sair da Conta"
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                    {/* MODAIS DE CONFIRMAÇÃO */}
                    {isDeactivateModalVisible && (
                        <div className="profile-modal-overlay">
                            <div className="profile-modal-box">
                                <h3>Desativar Conta</h3>
                                <p>Tem certeza que deseja desativar sua conta?</p>
                                <div className="profile-modal-buttons">
                                    <button
                                        className="btn-modal-cancel"
                                        onClick={() => setDeactivateModalVisible(false)}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="btn-modal-confirm"
                                        onClick={handleDeactivateAccount}
                                    >
                                        Confirmar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {isSignOutModalVisible && (
                        <div className="profile-modal-overlay">
                            <div className="profile-modal-box">
                                <h3>Sair da Conta</h3>
                                <p>Deseja realmente sair?</p>
                                <div className="profile-modal-buttons">
                                    <button
                                        className="btn-modal-cancel"
                                        onClick={() => setSignOutModalVisible(false)}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="btn-modal-confirm"
                                        onClick={handleSignOutConfirm}
                                    >
                                        Sair
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}