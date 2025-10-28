import { createRouter, createWebHistory } from 'vue-router';

// Импорты недиемо-маршрутов (для корня /management/)
import { appRoutes } from './appRoutes.js';      // Должен иметь абсолютные пути с '/'
import { authRoutes } from './authRoutes.js';   // Аналогично
// Если есть landingRoutes.js, импортируйте: import { landingRoutes } from './landingRoutes.js';

// Гварды
// import { applyGuards } from './guards.js';

const router = createRouter({
    history: createWebHistory('/management/'),
    routes: [
        ...appRoutes,
        ...authRoutes,
    ]
});

// Применение гвардов (раскомментировано)
// applyGuards(router);

export default router;
