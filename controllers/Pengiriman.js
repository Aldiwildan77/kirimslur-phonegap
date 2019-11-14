//TODO:
//-fun read

const models = require('../models/crud')
const TABLE = 'invoice'

const add = async (req, res, next) => {
    const invoice = req.invoice
    try {
        const insertInvoice = await models.addModel(TABLE, invoice)
        if (!insertInvoice) {
            const error = new Error('Failed to add invoice')
            res.status = 406
            return next(error)
        }

        return res.status(201).json({
            status: 'success',
            data: invoice
        })
    } catch (error) {
        return next(error)
    }
}

const read = async (req, res, next) => {
    try {
        const getAllInvoice = await models.getModel(TABLE)
        if (!getAllInvoice) {
            const error = new Error('Failed to load kurir')
            res.statusCode = 409
            return next(error)
        }

        return res.status(200).json({
            status: 'success',
            data: getAllInvoice
        })
    } catch (error) {
        return next(error)
    }
}

const update = async (req, res, next) => {
    const invoice = req.body
    const invoiceId = req.params

    try {
        const updateInvoice = await models.updateModel(TABLE, invoice, invoiceId)
        if (!updateInvoice) {
            const error = new Error('Failed to update invoice')
            res.statusCode = 409
            return next(error)
        }

        return res.status(200).json({
            status: 'success',
            data: invoice
        })
    } catch (error) {
        return next(error)
    }
}

const del = async (req, res, next) => {
    const invoiceId = req.params
    try {
        const deleteInvoice = await models.deleteModel(TABLE, invoiceId)
        if (!deleteInvoice) {
            const error = new Error('Failed to delete invoice')
            res.statusCode = 409
            return next(error)
        }

        return res.status(204).json({})
    } catch (error) {
        return next(error)
    }
}

const readById = async (req, res, next) => {
    const invoiceId = req.params
    try {
        const getInvoiceById = await models.getModel(TABLE, invoiceId)
        if (!getInvoiceById) {
            const error = new Error('Kurir not found')
            res.statusCode = 404
            return next(error)
        }

        return res.status(200).json({
            status: 'success',
            data: getInvoiceById
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    add,
    read,
    update,
    del,
    readById
}