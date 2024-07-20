import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isAuthenticatedGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const userId = localStorage.getItem('userId');

  //? Guardar la última ruta que visitó el usuario para que cuando
  //? vuelva a ingresar, esté en el mismo lugar
  localStorage.setItem('lastPath', to.path);

  console.log(from.path); //? De donde viene
  console.log(to.path); //? A donde va

  if (!userId) {
    return next({
      name: 'login-page',
    });
  }

  return next();
};

export default isAuthenticatedGuard;
