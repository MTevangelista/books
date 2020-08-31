const Book = require('../models/book')

exports.getAll = async() => {
    const res = await Book.find()
    return res
}

exports.getAllByFilter = async(filter) => {
    const res = await Book.find({
        theme: filter.theme
    })

    return res
}


exports.getBySlug = async(slug) => {
    const res = await Book.findOne({
        slug
    })

    return res
}

exports.create = async(data) => { 
    let book = new Book(data)
    await book.save()
}