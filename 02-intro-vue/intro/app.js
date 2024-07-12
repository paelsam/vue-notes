const { createApp, ref } = Vue;

const app = createApp({
  // template: 
  // `
  //   <h1>Hola Mundo en Vue</h1>
  //   <p>Tu nombre es: {{ nombre }}</p>
  //   <p>Autor: {{ author }}</p>
  // `,
  setup() {
    const frase = ref("Hola Mundo en Vue");
    const author = ref("Bruce Wayne");

    const changeQuote = () => {
      frase.value = "El que quiera perder su tiempo, que lo pierda";
      author.value = "Don Pollo";
    };

    // setTimeout(() => {
    //   nombre.value = "Samir Angulo";
    //   author.value = "Pablo Samuel";
    // }, 1000);

    return {
      frase,
      author,
      changeQuote,
    };
  },
});

app.mount("#app");
