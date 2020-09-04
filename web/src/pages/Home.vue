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
        <BookCard v-for="book in allBooks" :key="book.id" :book="book" />
      </b-card-group>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import PageHeader from "../components/PageHeader";
import BookCard from "../components/BookCard";

export default {
  name: "Home",
  components: {
    PageHeader,
    BookCard
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchBooks"]),
  },
  computed: mapGetters(["allBooks"]),
  created() {
    this.fetchBooks();
  }
};
</script>

<style scoped>
@media (max-width: 415px) {
  .image-style {
    width: 250px;
  }
}
</style>