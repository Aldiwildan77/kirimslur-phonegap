// instansiasi class model
const models = require('../models/crud')
const TABLE = 'barang'

//membuat fungsi add untuk menambahkan barang
const add = async (req, res, next) => {
	//mengambil data req body yang berisi json barang yang disimpan variable barang
	const barang = req.body

	try {
		const insertBarang = await models.addModel(TABLE, barang)
		if (!insertBarang) {
			const error = new Error('Failed to add barang')
			res.statusCode = 406
			return next(error)
		} else {
			return res.status(201).json({
				status: 'success',
				data: barang
			})
		}
	} catch (error) {
		return next(error)
	}
}

//membuat fungsi del untuk menghapus barang
const del = async (req, res, next) => {
  const barangId = req.params
  try {
    const deleteBarang = await models.deleteModel(TABLE, barangId)
    if (!deleteBarang) {
      const error = new Error('Failed to delete barang')
      res.statusCode = 409
      return next(error)
    }else{
			return res.status(204).json({})	
		}
  } catch (error) {
    return next(error)
  }
}

const update = async (req, res, next) => {
  const barang = req.body
  const barangId = req.params

  try {
    const updateBarang = await models.updateModel(TABLE, barang, barangId)
    if (!updateBarang) {
      const error = new Error('Failed to update barang')
      res.statusCode = 409
      return next(error)
    } else {
			return res.status(200).json({
				status: 'success',
				data: barang
			})			
		}
  } catch (error) {
    return next(error)
  }
}

const read = async (req, res, next) => {
	try {
		const getAllBarang = await models.getModel(TABLE)
		if (!getAllBarang) {
			const error = new Error('Failed to load barang')
			res.statusCode = 409
			return next(error)
		} else {
			return res.status(200).json({
				status: 'success',
				data: getAllBarang
			})
		}
	} catch (error) {
		return next(error)
	}
}

const readById = async (req, res, next) => {
	const barangId = req.params
	try {
		const getBarangById = await models.getModel(TABLE, barangId)
		if (!getBarangById) {
			const error = new Error('Barang not found')
			res.statusCode = 404
			return next(error)
		} else {
			return res.status(200).json({
				status: 'success',
				data: getBarangById
			})
		}
	} catch (error) {
		return next(error)
	}
}
module.exports = { add, del, read, readById, update}