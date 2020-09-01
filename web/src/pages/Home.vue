<template>
  <b-container class="text-center mt-5">
    <b-navbar class="top-bar-container" fixed="top" toggleable="lg">
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
  font-size: 14px;
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

.top-bar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(32, 32, 71);
    border-radius: 0 0 1rem 1rem;
    box-shadow: 0 2px 4px 0 rgb(30, 32, 71);
    color: var(--color-text-in-primary);
    width: 90%;
    margin: 0 auto;
}


</style>