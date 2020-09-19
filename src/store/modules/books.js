import axios from "axios";

const baseURL = 'https://books-backend-api.herokuapp.com/api/books'

import Swal from "sweetalert2";

const state = {
    books: [],
    book: null,
    errorMessage: [],
};

const getters = {
    allBooks: state => state.books,
    getBook: state => state.book,
    errorMessage: state => state.errorMessage
};

const actions = {
    async fetchBooks({ commit }) {
        const response = await axios.get(baseURL)
        commit('setBooks', response.data)
    },
    async getBookBySlug({ commit }, slug) {
        const response = await axios.get(`${baseURL}/${slug}`)
        commit("getBookBySlug", response.data)
    },
    async addBook({ commit }, book) {
        await axios.post(`${baseURL}`, book)
            .then(response => {
                Swal.fire({
                    icon: "success",
                    title: "Cadastro realizado com sucesso!",
                    showConfirmButton: false,
                    timer: 1700,
                });
                commit('newBook', response.data)
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: 'Erro no cadastro!',
                    showConfirmButton: false,
                    timer: 1700,
                });
                commit('errorMessage', error.response.data.message)
            });
    },
    async updateBook({ commit }, newBook) {
        const response = await axios.put(`${baseURL}/${newBook.id}`, newBook)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Livro atualizado com sucesso!",
                    showConfirmButton: false,
                    timer: 1700
                });
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Erro na hora de atualizar o livro!",
                    showConfirmButton: false,
                    timer: 1700
                });
            });
        commit('updateBook', response.data)
    },
    async deleteBook({ commit }, id) {
        await axios.delete(`${baseURL}/${id}`)
            .then(() => {
                commit("deleteBook", id)
                Swal.fire({
                    icon: "success",
                    title: "Livro apagado com sucesso!",
                    showConfirmButton: false,
                    timer: 1700,
                });
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Erro na hora de apagar o livro!",
                    showConfirmButton: false,
                    timer: 1700,
                });
            });
    }
};
const mutations = {
    setBooks: (state, books) => (state.books = books),
    getBookBySlug: (state, data) => (state.book = data),
    newBook: (state, book) => state.books.unshift(book),
    updateBook: (state, newBook) => {
        const index = state.books.findIndex(book => book.id === newBook.id);
        if (index >= 0) {
            state.books.splice(index, 1, newBook);
        }
    },
    deleteBook: (state, id) => (state.books = state.books.filter(book => book._id !== id)),
    errorMessage: (state, errorMessage) => state.errorMessage.unshift(errorMessage),
};

export default {
    state,
    getters,
    actions,
    mutations,
};