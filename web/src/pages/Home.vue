<template>
  <b-container class="text-center mt-5">
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

    <img class="mt-5" src="../assets/logo.png" alt="Books logo" />
  </b-container>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
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
</style>