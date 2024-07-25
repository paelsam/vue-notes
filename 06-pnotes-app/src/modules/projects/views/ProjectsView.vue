<template>
  <div class="overflow-x-auto w-full px-4">
    <table class="table text-center">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Project</th>
          <th>Tasks</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(project, index) in projectsStore.projectsWithCompletion"
          :key="project.id"
          class="hover"
        >
          <th>{{ index + 1 }}</th>
          <td class="text-left">{{ project.name }}</td>
          <td>{{ project.taskCount }}</td>
          <td>
            <progress class="progress w-56" :value="project.completion" max="100"></progress>
            {{ Math.round(project.completion) }}%
          </td>
        </tr>
      </tbody>
    </table>

    <InputModal
      :open="modalOpen"
      @close="modalOpen = false"
      @value="projectsStore.addProject"
      title="New Project"
      placeholder="New project name"
    />

    <!--? Multiple Slots -->
    <!-- <CustomModal :open="customModalOpen">
      <template #header>
        <h1>Modal Title</h1>
      </template>
      <template #body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur delectus sapiente
          porro quas dignissimos fuga, magni animi ducimus consectetur asperiores assumenda earum
          hic necessitatibus at beatae repellendus iure similique nemo.
        </p>
      </template>
      <template #footer-actions>
        <button class="btn" @click="customModalOpen = false">Close</button>
      </template>
    </CustomModal> -->

    <!--? Slots -->
    <FabButton @fab-btn-click="modalOpen = true" position="bottom-left">
      <AddCircle />
    </FabButton>

    <!-- <FabButton @fab-btn-click="customModalOpen = true" position="bottom-right">
      <AddCircle />
    </FabButton> -->
  </div>
</template>

<script lang="ts" setup>
import FabButton from '@/modules/common/components/FabButton.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
// import CustomModal from '@/modules/common/components/CustomModal.vue';
import { ref } from 'vue';
import { useProjectsStore } from '../store/projects.store';

const modalOpen = ref(false);
// const customModalOpen = ref(false);

const projectsStore = useProjectsStore();
</script>

<style lang="scss" scoped></style>
