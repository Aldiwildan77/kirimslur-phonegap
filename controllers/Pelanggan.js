const knex = require("../database");

const add = async (req, res, next) => {
    
}

const read = async (req, res, next) => {
    try {
        let pelanggan = await knex('pelanggan');
        res.json(pelanggan)
    } catch (e) {
        console.log(e);
    }
}

const update = async (req, res, next) => {

}

const del = async (req, res, next) => {

}

const readById = async(req, res, next) => {

}

module.exports = { add, read, update, del, readById }