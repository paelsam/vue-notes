<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        </a>
      </div>
      <nav class="flex flex-row ml-auto space-x-4 items-center justify-center h-10 sm:space-x-6">
        <div class="space-x-4">
          <RouterLink :to="{ name: 'home-page' }"> Home </RouterLink>
          <RouterLink :to="{ name: 'features-page' }"> Features </RouterLink>
          <RouterLink to="/pricing"> Pricing </RouterLink>
          <RouterLink to="/contact"> Contact </RouterLink>
        </div>
        <div
          class="flex justify-center items-center space-x-1 rounded-md h-8 bg-yellow-300 w-20 text-center font-bold"
        >
          <RouterLink :to="{ name: 'pokemon-page', params: { id: '1' } }"> Pokemon </RouterLink>
        </div>
        <div
          class="flex justify-center items-center space-x-4 rounded-md h-8 bg-green-600 w-20 text-center text-slate-200 font-bold"
        >
          <RouterLink to="/auth"> Login </RouterLink>
        </div>
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center">
      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} Derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>


