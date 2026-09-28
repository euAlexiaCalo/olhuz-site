import React from 'react';
import { Link } from 'react-router-dom';
import { LuCheck } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import Input from "../../../shared/components/Input";
import Button from "../../../shared/components/Button";

import { useRegisterViewModel } from '../viewModels/useRegisterViewModel';
import "../styles/RegisterPage.css";

export function RegisterPage() {
  const {
    formData,
    isLoading,
    errorMessage,
    acceptTerms,
    setAcceptTerms,
    handleInputChange,
    handleRegister
  } = useRegisterViewModel();

  return (
    <main className="register-page">
      <div className="register-container">
        <div className="register-content">
          <div>
            <h1>Crie sua conta gratuita</h1>
            <p>Explore os principais recursos do Olhuz</p>
          </div>
          <details>
            <summary className="register-summary">Veja o que está incluido</summary>
            <ul className="register-resources-list">
              <li>
                <div>
                  <LuCheck className="icon-check" />
                  <strong>Leitura de Telas e Contexto Digital</strong>
                </div>
                <p>
                  Entenda interfaces complexas em segundos. Autonomia completa
                  para sua navegação.
                </p>
              </li>
              <li>
                <div>
                  <LuCheck className="icon-check" />
                  <strong>Descrição Inteligente de Imagens</strong>
                </div>
                <p>
                  Converta o visual em áudio detalhado com IA. Comece agora no
                  plano gratuito.
                </p>
              </li>
              <li>
                <div>
                  <LuCheck className="icon-check" />
                  <strong>IA de Reconhecimento Visual</strong>
                </div>
                <p>Descrições precisas de cenas e ambientes em tempo real.</p>
              </li>
              <li>
                <div>
                  <LuCheck className="icon-check" />
                  <strong>Configurações de Voz e Narrativa</strong>
                </div>
                <p>
                  Escolha a velocidade e o tom da narração que preferir. Seu
                  Olhuz, do seu jeito.
                </p>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div className="register-container">
        <div className="register-content">
          <h1>Cadastre-se no Olhuz</h1>
          <form onSubmit={handleRegister} className="register-form">
            {errorMessage && (
              <div
                className="error-message-box"
                style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>
                {errorMessage}
              </div>
            )}
            <div className="register-inputs">
              <div>
                <Input
                  label="Nome Completo"
                  type="text"
                  placeholder="Digite o seu nome completo"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("fullName", e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  label="CPF"
                  type="text"
                  placeholder="000.000.000-00"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("cpf", e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  label="Data de Nascimento"
                  type="date"
                  placeholder="dd/mm/aaaa"
                  id="birthdate"
                  name="birthdate"
                  value={formData.birthDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("birthDate", e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  label="Telefone"
                  type="phone"
                  placeholder="(00) 00000-0000"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("phoneNumber", e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  label="Email"
                  type="email"
                  placeholder="email@email.com"
                  id="email"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  label="Senha"
                  type="password"
                  placeholder="********"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("password", e.target.value)
                  }
                  autoComplete="current-password"
                  required
                />
                <p>A senha deve ter no mínimo 8 caracteres, incluindo um número, uma letra maiúscula e uma letra minúscula.</p>
              </div>
              <Input
                label="Confirmar Senha"
                type="password"
                placeholder="********"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                autoComplete="current-password"
                required
              />
            </div>
            <Button
              text="Cadastrar"
              disabled={isLoading}
              type="submit"
              color="#ffffff"
              bgColor="#1E3C88"
            ></Button>
          </form>
          <div className="alternative-register">
            <div className="divider">
              <hr />
              <p>ou</p>
              <hr />
            </div>
            <Button
              text="Entrar com Google"
              type="button"
              onClick={() => { }}
              color="#000000"
              bgColor="#ffffff"
              borderColor="#EBEBEB"
            >
              <FcGoogle className="icon-google"/>
            </Button>
            <p style={{ marginTop: '15px' }}>
              Já tem uma conta? <Link to="/login" style={{ color: '#1E3C88', fontWeight: 'bold' }}>Faça Login</Link>
            </p>

            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', fontSize: '15px', marginTop: '10px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                style={{ marginTop: '4px', width: '34px', height: '34px' }}
              />
              <span style={{ textAlign: 'left' }}>
                Ao criar uma conta, você concorda com os{' '}
                <Link to="/termos">Termos de Serviço</Link> e{' '}
                <Link to="/privacidade">Declaração de Privacidade</Link>.
              </span>
            </label>
          </div>
        </div>
      </div>
    </main>
  );
}