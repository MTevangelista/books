import axios from "axios";

const baseURL = 'http://localhost:3333'

import Swal from "sweetalert2";

const state = {
    books: [],
    book: null
};

const getters = {
    allBooks: state => state.books,
    getBook: state => state.book
};

const actions = {
    async fetchBooks({ commit }) {
        const response = await axios.get(baseURL)
        commit('setBooks', response.data)
    },
    async getBookBySlug({ commit }, slug) {
        const response = await axios.get(`${baseURL}/books/${slug}`)
        commit("getBookBySlug", response.data)
    },
    async addBook({ commit }, book) {
        const response = await axios.post(`${baseURL}/books`, book)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Cadastro realizado com sucesso!",
                    showConfirmButton: false,
                    timer: 1700,
                });
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Erro no cadastro!",
                    showConfirmButton: false,
                    timer: 1700,
                });
            });
        commit('newBook', response.data)
    },
    async updateBook({ commit }, newBook) {
        const response = await axios.put(`${baseURL}/books/${newBook.id}`, newBook)
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
        await axios.delete(`${baseURL}/books/${id}`);
        commit("deleteBook", id)
    }
};
const mutations = {
    setBooks: (state, books) => (state.books = books),
    getBookBySlug: (state, data) => (state.book = data),
    newBook: (state, book) => state.books.unshift(book),
    updateBook: (state, newBook) => {
        const index = state.books.findIndex(book => book.id === newBook.id);
        if (index >= 0) {
            state.comps.splice(index, 1, newBook);
        }
    },
    deleteBook: (state, id) => (state.books.filter(book => book.id !== id), state.books.splice(book => book.id, 1))
};

export default {
    state,
    getters,
    actions,
    mutations,
};