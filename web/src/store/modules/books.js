import axios from "axios";

const baseURL = 'http://localhost:3333'

const state = {
    books: []
};

const getters = {
    allBooks: state => state.books
};

const actions = {
    async addBook({ commit }, book) {
        const response = await axios.post(`${baseURL}/books`, book)
        commit('newBook', response.data)
    }
};
const mutations = {
    newBook: (state, book) => state.books.unshift(book)
};

export default {
    state,
    getters,
    actions,
    mutations,
};