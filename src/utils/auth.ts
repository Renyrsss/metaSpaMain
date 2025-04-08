// src/utils/auth.ts

const API_URL = "http://localhost:1337"; // Убедись, что URL соответствует твоему серверу

export const login = async (username: string, password: string) => {
    try {
        // Отправляем запрос на авторизацию в Strapi
        const response = await fetch(`${API_URL}/api/auth/local`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                identifier: username, // Или email, если ты используешь email для авторизации
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error("Ошибка авторизации");
        }

        const data = await response.json();

        // Сохраняем токен в localStorage
        localStorage.setItem("token", data.jwt);

        return data.jwt; // Возвращаем JWT для использования в дальнейшем
    } catch (error) {
        console.error(error);
        throw new Error("Ошибка при получении токена");
    }
};

export const logout = () => {
    // Удаляем токен при выходе
    localStorage.removeItem("token");
};

export const isAuthenticated = () => {
    // Проверка наличия токена в localStorage
    const token = localStorage.getItem("token");
    return token !== null;
};
