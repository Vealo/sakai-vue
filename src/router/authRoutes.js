// src/router/routes/authRoutes.js
export const authRoutes = [
  {
    path: '/pages/notfound',
    name: 'notfound',
    component: () => import('@/views/pages/NotFound.vue')
  },
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('@/views/pages/auth/Login.vue')
  },
  {
    path: '/auth/access',
    name: 'accessDenied',
    component: () => import('@/views/pages/auth/Access.vue')
  },
  {
    path: '/auth/error',
    name: 'error',
    component: () => import('@/views/pages/auth/Error.vue')
  }
]
