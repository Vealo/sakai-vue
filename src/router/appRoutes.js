// src/router/routes/appRoutes.js
import AppLayout from '@/layout/AppLayout.vue'

export const appRoutes = [
  {
    path: '',
    component: AppLayout,
    children: [
      { path: '', name: '/dashboard',  component: () => import('@/views/Dashboard.vue') },
      
    ]
  }
]
