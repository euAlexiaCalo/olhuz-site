import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

// Todas as Views
import { HomePage } from "../features/home/views/HomePage";
import { FunctionalitiesPage } from "../features/functionalities/views/FunctionalitiesPage";
import { AboutPage } from "../features/about/views/AboutPage";
import { LoginPage } from "../features/auth/views/LoginPage";
import { RegisterPage } from "../features/auth/views/RegisterPage";
import { ProfilePage } from "../features/user/views/ProfilePage";
import { EditProfilePage } from "../features/user/views/EditProfilePage";
import { PreferencesPage } from "../features/user/views/PreferencesPage";


export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* ================= ROTAS PÚBLICAS ================= */}
        <Route path="/" element={<HomePage />} />
        <Route path="/funcionalidades" element={<FunctionalitiesPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />

        {/* ================= ROTAS PRIVADAS ================= */}
        <Route
          path="/perfil"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/perfil/editar"
          element={
            <ProtectedRoute>
              <EditProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/preferences"
          element={
            <ProtectedRoute>
              <PreferencesPage />
            </ProtectedRoute>
          }
        />

        {/* Rota para redirecionar URLs inválidas */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};