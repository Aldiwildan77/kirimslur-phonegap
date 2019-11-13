const knex = require('../database')

const add = async (req, res, next) => {
    try {
        const {
            barang,
            pelanggan,
            kurir,
            kategori
        } = req.body
        knex('invoice').insert({
            noresi: noresi,
            tanggal: tanggal,
            pengirim: pengirim,
            penerima: penerima
        })
    } catch (error) {
        return next(error)
    }
}

const read = async (req, res, next) => {

}

const update = async (req, res, next) => {

}

const del = async (req, res, next) => {

}

module.exports = {
    add,
    read,
    update,
    del
}