<template>
  <b-container>
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

    <h1 class="test">Cadastrar Livro</h1>

    <b-card bg-variant="light">
      <b-form>
        <b-form-group
          id="image-url"
          v-model.trim.lazy="book.imageUrl"
          label="Imagem"
          :label-for="book.imageUrl"
          style="width: 70%; margin: 0px auto"
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
          style="width: 70%; margin: 10px auto"
        >
          <b-form-input id="input-author" type="text" name="author" required placeholder="Autor"></b-form-input>
        </b-form-group>

        <b-form-group
          id="title"
          v-model.trim.lazy="book.title"
          label="Título"
          :label-for="book.title"
          style="width: 70%; margin: 10px auto"
        >
          <b-form-input
            id="input-title"
            type="text"
            name="title"
            required
            placeholder="Título"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="slug"
          v-model.trim.lazy="book.slug"
          label="Slug"
          :label-for="book.slug"
          style="width: 70%; margin: 10px auto"
        >
          <b-form-input id="input-slug" type="text" name="slug" required placeholder="Slug"></b-form-input>
        </b-form-group>

        <b-form-group
          id="select-theme"
          label="Tema"
          :label-for="book.theme"
          style="width: 70%; margin: 10px auto"
        >
          <b-form-select id="theme" v-model="book.theme" :options="themes" required></b-form-select>
        </b-form-group>

        <b-form-group
          id="description"
          v-model.trim.lazy="book.description"
          label="Descrição"
          :label-for="book.description"
          style="width: 70%; margin: 10px auto"
        >
          <b-form-textarea id="textarea" v-model="book.description" placeholder="Descrição"></b-form-textarea>
        </b-form-group>

        <b-form-group
          id="created-at"
          v-model.trim.lazy="book.createdAt"
          label="Data do lançamento"
          :label-for="book.createdAt"
          style="width: 70%; margin: 10px auto"
        >
          <b-form-datepicker id="created-at" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" v-model="book.createdAt" placeholder="Data do lançamento" class="mb-2"></b-form-datepicker>
        </b-form-group>

        <b-row>
            <b-col class="text-center">
                <b-button type="submit" variant="outline-success" class="mt-4">Cadastrar</b-button>
            </b-col>
        </b-row>
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
        createdAt: "",
        slug: "",
        theme: null,
        description: "",
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
.test {
  margin-top: 100px;
  margin-bottom: 40px;
  text-align: center;
}

textarea {
  min-height: 50px;
}
</style>