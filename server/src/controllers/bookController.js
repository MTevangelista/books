const ValidationContract = require('../validators/fluentValidator')
const repository = require('../repositories/bookRepository')

exports.create = async(req, res) => {
    const { imageUrl, author, title, slug, theme, description, price, publisher, isbn, totalPages } = req.body

        let contract = new ValidationContract()
        contract.hasMinLen(author, 2, 'The author must contain at least 3 characters')
        contract.hasMinLen(title, 3, 'The title must contain at least 3 characters')
        contract.hasMinLen(slug, 3, 'The slug must contain at least 3 characters')

        if (!contract.isValid) {
            return res.status(400).json(contract.errors()).end()
        }

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