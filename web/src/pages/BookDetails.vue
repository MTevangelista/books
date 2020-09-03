<template>
  <b-container>
    <h1 class="title">Editar Livro</h1>

    <b-card bg-variant="light">
      <b-form @submit="handleUpdateBook">
        <b-form-group
          id="image-url"
          label="Imagem"
          :label-for="book.imageUrl"
          style="width: 70%; margin: 0px auto"
        >
          <b-form-input
            id="input-image-url"
            v-model.trim.lazy="book.imageUrl"
            type="text"
            name="imageUrl"
            required
            placeholder="Imagem (Url)"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="author"
          label="Autor"
          :label-for="book.author"
          style="width: 70%; margin: 10px auto"
        >
          <b-form-input
            id="input-author"
            v-model.trim.lazy="book.author"
            type="text"
            name="author"
            required
            placeholder="Autor"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="title"
          label="Título"
          :label-for="book.title"
          style="width: 70%; margin: 10px auto"
        >
          <b-form-input
            id="input-title"
            v-model.trim.lazy="book.title"
            type="text"
            name="title"
            required
            placeholder="Título"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="select-theme"
          label="Tema"
          :label-for="book.theme"
          style="width: 70%; margin: 10px auto"
        >
          <b-form-select id="theme" v-model="book.theme" name="theme" :options="themes" required></b-form-select>
        </b-form-group>

        <b-form-group
          id="description"
          label="Descrição"
          :label-for="book.description"
          style="width: 70%; margin: 10px auto"
        >
          <b-form-textarea
            id="textarea"
            v-model="book.description"
            name="description"
            required
            placeholder="Descrição"
          ></b-form-textarea>
        </b-form-group>

        <b-form-group
          id="created-at"
          label="Data do lançamento"
          :label-for="book.createdAt"
          style="width: 70%; margin: 10px auto"
        >
          <b-form-datepicker
            id="created-at"
            :date-format-options="{
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            }"
            v-model="book.createdAt"
            description
            name="createdAt"
            placeholder="Data do lançamento"
            class="mb-2"
          ></b-form-datepicker>
        </b-form-group>

        <b-row>
          <b-col class="text-center">
            <b-button type="submit" variant="outline-success" class="mt-4">Salvar</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BookDetails",
  data() {
    return {
      book: {
        id: this.$route.params.book._id,
        imageUrl: this.$route.params.book.imageUrl,
        author: this.$route.params.book.author,
        title: this.$route.params.book.title,
        theme: this.$route.params.book.theme,
        description: this.$route.params.book.description,
        createdAt: this.$route.params.book.createdAt
      },
      themes: [
        { value: "Romance", text: "Romance" },
        { value: "Suspense", text: "Suspense" },
        { value: "Ação", text: "Ação" },
        { value: "Ficção", text: "Ficção" },
        { value: "Outros", text: "Outros" }
      ]
    };
  },
  computed: mapGetters(["getBook"]),
  methods: {
    ...mapActions(["getBookBySlug", "updateBook"]),
    handleUpdateBook(event) {
      event.preventDefault();

      const newBook = {
        id: this.book.id,
        imageUrl: this.book.imageUrl,
        author: this.book.author,
        title: this.book.title,
        theme: this.book.theme,
        description: this.book.description,
        createdAt: this.book.createdAt
      }

      this.updateBook(newBook)      
    }
  },
  created() {
    this.getBookBySlug(this.slug);
  }
};
</script>

<style scoped>
.title {
  margin-top: 100px;
  margin-bottom: 40px;
  text-align: center;
}

textarea {
  min-height: 80px;
}
</style>