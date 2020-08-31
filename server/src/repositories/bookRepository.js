const Book = require('../models/book')

exports.create = async(data) => { 
    let book = new Book(data)
    await book.save()
}