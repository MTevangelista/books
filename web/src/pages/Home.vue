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
        <img class="image-style mt-5" src="../assets/logo.png" alt="Books logo" />
      </b-col>
    </b-row>

    <b-row>
      <b-card-group deck>
        <b-card
          v-for="book in allBooks"
          :key="book.id"
          :title="book.title"
          :sub-title="book.theme"
          :img-src="book.imageUrl"
          :img-alt="book.title"
          img-height="200px"
          class="card"
        >
          <b-card-text>{{book.description}}</b-card-text>

          <small>Lançamento: {{ book.createdAt }}</small>

          <b-card-text class="buttons-container">
            <router-link :to="{ name: 'BookDetails', params: { book } }">
              <b-button variant="outline-info">Editar</b-button>
            </router-link>
            <b-button variant="outline-danger" @click="deleteBook(book._id)">Apagar</b-button>
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      theme: null,
      options: [
        { valor: null, text: "Buscar por tema" },
        { value: "Romance", text: "Romance" },
        { value: "Suspense", text: "Suspense" },
        { value: "Ação", text: "Ação" },
        { value: "Ficção", text: "Ficção" },
        { value: "Outros", text: "Outros" }
      ]
    };
  },
  methods: {
    ...mapActions(["fetchBooks", "deleteBook"]),
    searchBooks(event) {
      event.preventDefault();
      console.log("ok");
    }
  },
  computed: mapGetters(["allBooks"]),
  created() {
    this.fetchBooks();
  }
};
</script>

<style scoped>
.search-books {
  text-align: center;
}

.search-select {
  width: 60%;
  margin-right: 10px;
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

.card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px auto;
  min-width: 24rem;
  max-width: 45%;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

@media (max-width: 415px) {
  .image-style {
    width: 250px;
  }
  .card {
    min-width: 18rem;
    max-width: 35%;
  }
}
</style>