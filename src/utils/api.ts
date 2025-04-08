// src/utils/api.ts

const API_URL = "http://localhost:1337";

export const fetchData = async (endpoint: string) => {
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("Не авторизован");
    }

    try {
        const response = await fetch(`${API_URL}/api/${endpoint}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Добавляем токен в заголовок
            },
        });

        if (!response.ok) {
            throw new Error("Ошибка получения данных");
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw new Error("Ошибка при запросе");
    }
};
