import isAuthenticatedGuard from '@/modules/authentication/guards/is-authenicated.guard';
import NotFound404 from '@/modules/common/pages/NotFound404.vue';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Landing
    {
      path: '/',
      name: 'landing-layout',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home-page',
          component: HomePage,
        },
        {
          path: '/features', //! Si le ponemos '/', entonces la tomará como una ruta principal (no anidada)
          name: 'features-page',
          component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact-page',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing-page',
          component: () => import('@/modules/landing/pages/PricingPage.vue'),
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon-page',
          beforeEnter: [isAuthenticatedGuard],
          props: (route) => {
            const id = Number(route.params.id);
            return Number.isNaN(id) ? { id: 1 } : { id };
          },
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        },
      ],
    },

    // Auth
    {
      path: '/auth',
      name: 'auth-layout',
      redirect: { name: 'login-page' },
      component: () => import('@/modules/authentication/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login', //! Sin el '/', entonces hará una ruta anidada
          name: 'login-page',
          component: () => import('@/modules/authentication/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register-page',
          component: () => import('@/modules/authentication/pages/RegisterPage.vue'),
        },
      ],
    },

    // Not found
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found-404-page',
      component: NotFound404,
    },
  ],
});

export default router;
