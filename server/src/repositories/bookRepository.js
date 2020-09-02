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

exports.update = async(_id, { imageUrl, author, title, theme, description, createdAt }) => {
    await Book.findByIdAndUpdate(_id, {
        $set: {
            imageUrl,
            author, 
            title, 
            theme, 
            description,
            createdAt 
        }
    })
}

exports.delete = async(_id) => {
    await Book.findByIdAndRemove(_id)
}