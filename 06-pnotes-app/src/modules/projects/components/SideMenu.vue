<template>
  <aside class="bg-base-content w-80 xl:min-w-[15%] min-h-screen pt-4">
    <RouterLink to="/projects" class="text-xl mx-4">📚 Projects</RouterLink>
    <p v-if="!projectsStore.areThereProjects" class="text-sm text-white mx-4 my-3">
      There's no projects yet 😿
    </p>

    <!-- Menu -->
    <ul v-else class="menu w-56">
      <li v-for="project in projectsStore.projectList" :key="project.id">
        <template v-if="project.tasks.length > 0">
          <details open>
            <summary>
              <RouterLink :to="`/project/${project.id}`">📕 {{ project.name }} </RouterLink>
            </summary>
            <ul>
              <li v-for="task in project.tasks" :key="task.id">
                <RouterLink :to="`/project/${project.id}`">📑 {{ task.name }}</RouterLink>
              </li>
            </ul>
          </details>
        </template>

        <template v-else>
          <RouterLink :to="`/project/${project.id}`">
            {{ project.name }}
          </RouterLink>
        </template>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { useProjectsStore } from '../store/projects.store';

const projectsStore = useProjectsStore();
</script>

<style lang="css" scoped>
.router-link-active,
.router-link-exact-active {
  @apply text-neutral-content !important;
}

aside {
  @apply text-white font-semibold;
}
</style>
