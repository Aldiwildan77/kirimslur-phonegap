const db = require('../database')

const addModel = (table, data) => {
  return db(table).insert(data).then(result => true).catch(error => false)
}

const updateModel = async (table, data, id) => {
  return db(table).where(id).update(data).then(result => true).catch(error => false)
}

const getModel = async (table, id) => {
  return id == null || id == undefined ? db(table).then(result => result).catch(error => false) : db(table).where(id).first().then(result => result).catch(error => false)
}

const deleteModel = async (table, where) => {
  return db(table).where(where).del().then(result => true).catch(error => false)
}

module.exports = { addModel, updateModel, getModel, deleteModel }