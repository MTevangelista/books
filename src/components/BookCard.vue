<template>
  <b-card
    :key="book._id"
    :title="book.title"
    :sub-title="book.theme"
    :img-src="book.imageUrl"
    :img-alt="book.title"
    img-height="200px"
    class="card"
  >
    <router-link :to="{ name: 'BookDetails', params: { slug: book.slug } }">
      <b-icon variant="info" class="info-icon" scale="1.2" icon="info-circle"></b-icon>
    </router-link>

    <b-card-text>{{book.description}}</b-card-text>

    <small>Lançamento: {{ book.createdAt }}</small>

    <b-card-text>
      <small>Autor: {{ book.author }}</small>
    </b-card-text>

    <b-card-text class="buttons-container">
      <router-link :to="{ name: 'EditBook', params: { book } }">
        <b-button variant="outline-info">Editar</b-button>
      </router-link>
      <b-button variant="outline-danger" @click="deleteBook(book._id)">Apagar</b-button>
    </b-card-text>
  </b-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BookCard",
  components: {},
  props: {
    book: Object
  },
  methods: {
    ...mapActions(["deleteBook"])
  }
};
</script>

<style scoped>
.info-icon {
  margin: -4rem 0rem 3.8rem 28rem;
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
  .card {
    min-width: 18rem;
    max-width: 35%;
  }
}
</style>