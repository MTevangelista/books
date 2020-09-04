<template>
  <b-container>
    <b-navbar class="navbar-style" fixed="top" toggleable="lg">
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
  </b-container>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style scoped>
.navbar-style {
  background: rgb(32, 32, 71);
  border-radius: 0px 0px 10px 10px;
  margin: 0 auto;
  width: 80%;
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
</style>