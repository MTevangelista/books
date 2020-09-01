<template>
  <b-container>
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

    <b-card bg-variant="light" class="card">
      <b-form>
        <b-form-group
          id="image-url"
          v-model.trim.lazy="book.imageUrl"
          label="Imagem"
          :label-for="book.imageUrl"
          style="width: 70%; margin: 0 auto"
        >
          <b-form-input
            id="input-image-url"
            type="text"
            name="imageUrl"
            required
            placeholder="Imagem (Url)"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="author"
          v-model.trim.lazy="book.auhtor"
          label="Autor"
          :label-for="book.auhtor"
          style="width: 70%; margin: 0 auto"
        >
          <b-form-input id="input-author" type="text" name="author" required placeholder="Autor"></b-form-input>
        </b-form-group>

        <b-form-group
          id="title"
          v-model.trim.lazy="book.title"
          label="Título do filme"
          :label-for="book.title"
          style="width: 70%; margin: 0 auto"
        >
          <b-form-input
            id="input-title"
            type="text"
            name="title"
            required
            placeholder="Título do filme"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="slug"
          v-model.trim.lazy="book.slug"
          label="Slug"
          :label-for="book.slug"
          style="width: 70%; margin: 0 auto"
        >
          <b-form-input id="input-slug" type="text" name="slug" required placeholder="Slug"></b-form-input>
        </b-form-group>

        <b-form-group
          id="select-theme"
          label="Tema"
          :label-for="book.theme"
          style="width: 70%; margin: 0 auto"
        >
          <b-form-select id="theme" v-model="book.theme" :options="themes" required></b-form-select>
        </b-form-group>

        <b-form-group
          id="description"
          v-model.trim.lazy="book.description"
          label="Descrição"
          :label-for="book.description"
          style="width: 70%; margin: 0 auto"
        >
          <b-form-textarea id="textarea" v-model="book.description" placeholder="Descrição"></b-form-textarea>
        </b-form-group>

        <b-form-group
          id="price"
          v-model.trim.lazy="book.price"
          label="Preço"
          :label-for="book.price"
          style="width: 70%; margin: 0 auto"
        >
          <b-form-input id="input-price" type="number" name="price" required placeholder="Preço"></b-form-input>
        </b-form-group>

        <b-form-group
          id="publisher"
          v-model.trim.lazy="book.publisher"
          label="Editora"
          :label-for="book.publisher"
          style="width: 70%; margin: 0 auto"
        >
          <b-form-input
            id="input-publisher"
            type="text"
            name="publisher"
            required
            placeholder="Editora"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="isbn"
          v-model.trim.lazy="book.isbn"
          label="Isbn"
          :label-for="book.isbn"
          style="width: 70%; margin: 0 auto"
        >
          <b-form-input id="input-isbn" type="number" name="isbn" required placeholder="Isbn"></b-form-input>
        </b-form-group>

        <b-form-group
          id="totalPages"
          v-model.trim.lazy="book.totalPages"
          label="Total de páginas"
          :label-for="book.totalPages"
          style="width: 70%; margin: 0 auto"
        >
          <b-form-input
            id="input-totalPages"
            type="number"
            name="totalPages"
            required
            placeholder="Total de páginas"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="outline-primary" class="mt-4">Cadastrar</b-button>
      </b-form>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "BookForm",
  data() {
    return {
      book: {
        imageUrl: "",
        author: "",
        title: "",
        slug: "",
        theme: null,
        description: "",
        price: 0,
        publisher: "",
        isbn: 0,
        totalPages: 0
      },
      themes: [
        { valor: null, text: "Selecione uma opção" },
        { value: "Romance", text: "Romance" },
        { value: "Suspense", text: "Suspense" },
        { value: "Ação", text: "Ação" },
        { value: "Ficção", text: "Ficção" },
        { value: "Outros", text: "Outros" }
      ]
    };
  }
};
</script>

<style scoped>
.card {
  margin-top: 100px;
}

textarea {
  min-height: 50px;
}
</style>