import axios from "axios";

const baseURL = 'http://localhost:3333'

const state = {
    books: []
};

const getters = {
    allBooks: state => state.books
};

const actions = {
    async fetchBooks({ commit }) {
        const response = await axios.get(baseURL)
        commit('setBooks', response.data)
    },
    async addBook({ commit }, book) {
        const response = await axios.post(`${baseURL}/books`, book)
        commit('newBook', response.data)
    },
    async deleteBook({ commit }, id) {
        await axios.delete(`${baseURL}/books/${id}`);
        commit("deleteBook", id)
    }
};
const mutations = {
    setBooks: (state, books) => (state.books = books),
    newBook: (state, book) => state.books.unshift(book),
    deleteBook: (state, id) => ( state.books.filter(book => book.id !== id), state.books.splice(book => book.id, 1))
};

export default {
    state,
    getters,
    actions,
    mutations,
};