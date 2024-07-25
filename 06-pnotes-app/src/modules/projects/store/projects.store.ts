import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', []));

  const addProject = (projectName: string) => {
    if (projectName.trim().length === 0) return;
    if (projects.value.some((project) => project.name === projectName.trim())) return;

    projects.value.push({
      id: uuidv4(),
      name: projectName.trim(),
      tasks: [],
    });
  };

  const addTaskToProject = (projectUUID: string, taskName: string) => {
    const project = projects.value.find((project) => project.id === projectUUID)!;

    if (!project) return;
    if (taskName.trim().length === 0) return;
    if (project?.tasks.some((task) => task.name === taskName.trim())) return;

    project.tasks.push({
      id: uuidv4(),
      name: taskName.trim(),
    });
  };

  const toggleTaskCompletion = (projectUUID: string, taskUUID: string) => {
    const project = projects.value.find((project) => project.id === projectUUID)!;
    if (!project) return;

    const task = project.tasks.find((task) => task.id === taskUUID)!;
    if (!task) return;

    task.completionAt = task.completionAt ? undefined : new Date();
  };

  return {
    // Properties
    // _projects: projects,

    // Getters
    projectList: computed(() => [...projects.value]),
    areThereProjects: computed(() => projects.value.length !== 0),
    projectsWithCompletion: computed(() => {
      return projects.value.map((project) => {
        const tasksCompleted = project.tasks.filter((task) => !!task.completionAt).length;
        const totalTasks = project.tasks.length;
        const completion = tasksCompleted === 0 ? 0 : (tasksCompleted / totalTasks) * 100;

        return {
          id: project.id,
          name: project.name,
          taskCount: project.tasks.length,
          completion: completion,
        };
      });
    }),

    // Actions
    addProject,
    addTaskToProject,
    toggleTaskCompletion,
  };
});
