<template>
  <b-container>
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
        <h1 class="mt-5">Cadastrar Livro</h1>
    </b-row>
    
  </b-container>
</template>

<script>
export default {
  name: "BookForm"
};
</script>

<style>
</style>