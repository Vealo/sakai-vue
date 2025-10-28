// Функция для применения гвардов к роутеру
export function applyGuards(router) {
    router.beforeEach((to, from, next) => {
        // Простая проверка аутентификации (замените на реальную логику, напр. из Pinia/Vuex)
        const isAuthenticated = localStorage.getItem('token') !== null; // Пример

        // Защищённые маршруты (например, под AppLayout)
        if (to.path.startsWith('/') && !to.path.startsWith('/auth') && !isAuthenticated) {
            next({ name: 'login' }); // Редирект на логин
        } else {
            next(); // Продолжить навигацию
        }
    });

    // Опциональный afterEach для логирования или аналитики
    router.afterEach((to, from) => {
        console.log(`Переход с ${from.path} на ${to.path}`); // Пример
    });
}
