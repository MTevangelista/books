<template>
  <b-container class="mt-5">
    <PageHeader />

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
import PageHeader from '../components/PageHeader'

export default {
  name: "Home",
  components: {
    PageHeader
  },
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