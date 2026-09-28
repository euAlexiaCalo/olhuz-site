import React from "react";
import { Link } from "react-router-dom";
import Input from "../../../shared/components/Input";
import Button from "../../../shared/components/Button";

import { FcGoogle } from "react-icons/fc";

import LogoOlhuz from "../../../assets/logoOlhuz.png";
import { useLoginViewModel } from "../viewModels/useLoginViewModel";
import "../styles/LoginPage.css";
export function LoginPage() {
  const {
    formData,
    isLoading,
    errorMessage,
    handleInputChange,
    handleLogin,
  } = useLoginViewModel();

  return (
    <main className="login-page">
      <Link to="/">
        <img src={LogoOlhuz} alt="Logo Olhuz" className="login-logo" />
      </Link>
      <div className="container">
        <form onSubmit={handleLogin} className="login-form">
          <h1>Acesse sua conta Olhuz</h1>
          {errorMessage && (
            <div
              className="error-message-box"
              style={{
                color: "red",
                marginBottom: "15px",
                textAlign: "center",
              }}
            >
              {errorMessage}
            </div>
          )}
          <div>
            <Input
              label="Email"
              type="email"
              placeholder="email@email.com"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange("email", e.target.value)
              }
              autoComplete="email"
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
            <Link to="/recuperar-senha">Esqueceu sua senha?</Link>
          </div>
          <div className="login-container-buttons">
            <Button
              text="Entrar"
              type="submit"
              disabled={isLoading}
              color="#ffffff"
              bgColor="#1A3672"
            />
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
              <FcGoogle className="icon-google" />
            </Button>
          </div>
          <div>
            <p>Não tem uma conta?</p>
            <Link to="/cadastro">Crie sua conta Olhuz</Link>
          </div>
        </form>
      </div>
    </main>
  );
}