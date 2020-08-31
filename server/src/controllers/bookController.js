const repository = require('../repositories/bookRepository')

exports.getAll = async(req, res) => {
    try {
        let books = await repository.getAll()
        return res.json({ books })
    } catch (e) {
        return res.status(400).json({
            error: 'Unexpected error while listing book by slug'
        })
    }
}

exports.getBySlug = async(req, res) => {
    const { slug } = req.params

    try {
        let book = await repository.getBySlug(slug)
        return res.json(book)
    } catch (e) {
        return res.status(400).json({
            error: 'Unexpected error while listing all books'
        })
    }
}

exports.create = async(req, res) => {
    const { imageUrl, author, title, slug, theme, description, price, publisher, isbn, totalPages } = req.body

    const book = {
        imageUrl,
        author,
        title,
        slug,
        theme,
        description,
        price,
        publisher,
        isbn,
        totalPages
    }

    try {
        await repository.create(book)
        return res.status(201).send()
    } catch (e) {
        return res.status(400).json({
            error: 'Unexpected error while creating a new book'
        })
    }
}