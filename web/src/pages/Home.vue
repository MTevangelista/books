<template>
  <b-container class="mt-5">
    <b-navbar type="dark" variant="dark" fixed="top" toggleable="lg">
      <b-navbar-nav class="ml-5">
        <b-nav-item class="nav-item-style">
          <router-link class="router-link-navbar" :to="{ name: 'Home' }">Home</router-link>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto mr-5">
        <b-nav-item class="nav-item-style">
          <router-link class="router-link-navbar" :to="{ name: 'BookForm' }">Novo Livro</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <b-row>
      <b-col class="text-center">
        <img class="mt-5" src="../assets/logo.png" alt="Books logo" />
      </b-col>
    </b-row>

    <b-card-group deck class="test">
      <b-card
        title="Código Limpo"
        sub-title="Tecnologia"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Código Limpo"
        img-top
        tag="article"
        class="cards"
      >
        <b-card-text
          class="mt-4"
        >Mesmo códigos ruins podem funcionar. Mas se o código não estiver limpo, ele pode deixar uma organização de desenvolvimento de joelhos. Todos os anos, incontáveis horas e recursos significativos são perdidos devido a códigos mal escritos. Mas não precisa ser assim.</b-card-text>

        <small>Lançamento: 02/11/2020</small>

        <b-card-text class="buttons-container">
          <b-button align-v="start" variant="outline-info">Editar</b-button>
          <b-button align-v="end" variant="outline-danger">Apagar</b-button>
        </b-card-text>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style>
.test {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav-item-style {
  font-size: 20px;
}

.router-link-navbar {
  color: whitesmoke;
  text-decoration: none;
  transition: 0.2s;
}

.router-link-navbar:hover {
  color: whitesmoke;
  text-decoration: none;
  opacity: 0.5;
}

.cards {
  margin-top: 40px;
  min-width: 320px;
  max-width: 320px;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
</style>