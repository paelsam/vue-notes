import { computed, ref } from 'vue';

//! Si definimos una variable reactiva afuera de la función
//! podemos usarla como gestor global de estado dentro de la función
// const globalCounter = ref(0);

export const useCounter = (initialValue: number) => {
  const counter = ref(initialValue);

  return {
    counter,

    //! Read-only
    squaredCounter: computed(() => counter.value * counter.value),
  };
};
