<template>
  <b-container>
    <PageHeader />

    <b-card
    :key="getBook._id"
    :title="getBook.title"
    :sub-title="getBook.theme"
    :img-src="getBook.imageUrl"
    :img-alt="getBook.title"
    img-height="200px"
    class="card"
  >
    <small>Autor: {{ getBook.author }}</small>

    <b-card-text class="mt-2">{{ getBook.description }}</b-card-text>

    <small>Lançamento: {{ getBook.createdAt }}</small>

    
    <b-card-text class="mt-2">
      <router-link class="btn-link" :to="{ name: 'Home' }">
        <b-button block variant="outline-info">Voltar</b-button>
      </router-link>
    </b-card-text>
  </b-card>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import PageHeader from "../components/PageHeader";

export default {
  name: "BookDetails",
  components: {
    PageHeader,
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: mapGetters(["getBook"]),
  methods: {
    ...mapActions(["getBookBySlug"]),
  },
  created() {
    this.getBookBySlug(this.slug)
  }
};
</script>

<style scoped>
.btn-link {
  text-decoration: none;
}
.card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 150px auto;
  min-width: 24rem;
  max-width: 45%;
}

@media (max-width: 415px) {
  .card {
    min-width: 18rem;
    max-width: 35%;
  }
}
</style>