const Book = require('../models/book')

exports.getAll = async() => {
    const books = await Book.find()
    return books
}

exports.create = async(data) => { 
    let book = new Book(data)
    await book.save()
}