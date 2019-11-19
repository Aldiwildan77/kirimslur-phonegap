const models = require('../models/crud')
const TABLE = 'kurir'

const add = async (req, res, next) => {
  const kurir = req.body
  try {
    const insertKurir = await models.addModel(TABLE, kurir)
    if (!insertKurir) {
      const error = new Error('Failed to add kurir')
      res.statusCode = 406
      return next(error)
    } else {
      return res.status(201).json({
        status: 'success',
        data: kurir
      })
    }
  } catch (error) {
    return next(error)
  }
}

const read = async (req, res, next) => {
  try {
    const getAllKurir = await models.getModel(TABLE)
    if (!getAllKurir) {
      const error = new Error('Failed to load kurir')
      res.statusCode = 409
      return next(error)
    } else {
      return res.status(200).json({
        status: 'success',
        data: getAllKurir
      })
    }
  } catch (error) {
    return next(error)
  }
}

const update = async (req, res, next) => {
  const kurir = req.body
  const kurirId = req.params

  try {
    const updateKurir = await models.updateModel(TABLE, kurir, kurirId)
    if (!updateKurir) {
      const error = new Error('Failed to update kurir')
      res.statusCode = 409
      return next(error)
    } else {
      return res.status(200).json({
        status: 'success',
        data: kurir
      })
    }
  } catch (error) {
    return next(error)
  }
}

const del = async (req, res, next) => {
  const kurirId = req.params
  try {
    const deleteKurir = await models.deleteModel(TABLE, kurirId)
    if (!deleteKurir) {
      const error = new Error('Failed to delete kurir')
      res.statusCode = 409
      return next(error)
    } else {
      return res.status(204).json({})
    }
  } catch (error) {
    return next(error)
  }
}

const readById = async (req, res, next) => {
  const kurirId = req.params
  try {
    const getKurirById = await models.getModel(TABLE, kurirId)
    if (!getKurirById) {
      const error = new Error('Kurir not found')
      res.statusCode = 404
      return next(error)
    } else {
      return res.status(200).json({
        status: 'success',
        data: getKurirById
      })
    }
  } catch (error) {
    return next(error)
  }
}

module.exports = { add, read, update, del, readById }