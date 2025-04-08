// src/components/PrivateRoute.tsx

import React from "react";
import { Navigate } from "react-router-dom"; // Используем Navigate для редиректа
import { isAuthenticated } from "../utils/auth"; // Проверка авторизации

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    if (!isAuthenticated()) {
        // Если пользователь не авторизован, перенаправляем на страницу логина
        return <Navigate to='/login' replace />;
    }

    return <>{children}</>; // Если авторизован, рендерим дочерний элемент
};

export default PrivateRoute;
