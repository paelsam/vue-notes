<template>
  <section class="w-full px-4 py-1">
    <section class="mt-2">
      <BredCrumbs :name="project?.name ?? 'No Name'" />
    </section>
    <section>
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Completada</th>
              <th>Tarea</th>
              <th>Completada en</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in project?.tasks" :key="task.id" class="hover">
              <th>
                <input
                  :checked="!!task.completionAt"
                  class="checkbox"
                  type="checkbox"
                  @change="projectStore.toggleTaskCompletion(project!.id, task.id)"
                />
              </th>
              <td>{{ task.name }}</td>
              <td>{{ task.completionAt ?? 'No completion date yet' }}</td>
            </tr>
            <tr class="hover">
              <th>{{ project!.tasks.length + 1 }}</th>
              <td>
                <input
                  type="text"
                  class="input border-2 border-base-content w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                  placeholder="Nueva tarea"
                  v-model="newTask"
                  @keypress.enter="addTask"
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import BredCrumbs from '@/modules/common/components/BredCrumbs.vue';
import { useProjectsStore } from '../store/projects.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { useRouter } from 'vue-router';

interface Props {
  id: string;
}

const router = useRouter();
const props = defineProps<Props>();
const projectStore = useProjectsStore();

const project = ref<Project | null>();
const newTask = ref('');

const addTask = () => {
  projectStore.addTaskToProject(project.value!.id, newTask.value);
  newTask.value = '';
};

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectList.find((project) => project.id == props.id);
    if (!project.value) {
      router.replace({ name: 'projects-view' });
    }
  },
  {
    immediate: true, //? Tan pronto se monte el componente se ejecuta
  },
);
</script>
