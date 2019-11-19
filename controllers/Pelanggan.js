const models = require("../models/crud");
const TABLE = "pelanggan";

const add = async (req, res, next) => {
  const pelanggan = req.body;
  try {
    const insertPelanggan = await models.addModel(TABLE, pelanggan);
    if (!insertPelanggan) {
      const error = new Error("Failed to add pelanggan");
      res.statusCode = 406;
      return next(error);
    } else {
      return res.status(201).json({
        status: "success",
        data: pelanggan
      });
    }
  } catch (error) {
    return next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const getAllPelanggan = await models.getModel(TABLE);
    if (!getAllPelanggan) {
      const error = new Error("Failed to load pelanggan");
      res.statusCode = 409;
      return next(error);
    } else {
      return res.status(200).json({
        status: "success",
        data: getAllPelanggan
      });
    }
  } catch (error) {
    return next(error);
  }
};

const update = async (req, res, next) => {
  const pelanggan = req.body;
  const pelangganId = req.params;

  try {
    const updatePelanggan = await models.updateModel(TABLE, pelanggan, pelangganId);
    if (!updatePelanggan) {
      const error = new Error("Failed to update kurir");
      res.statusCode = 409;
      return next(error);
    } else {
      return res.status(200).json({
        status: "success",
        data: pelanggan
      });
    }
  } catch (error) {
    return next(error);
  }
};

const del = async (req, res, next) => {
  const pelangganId = req.params;
  try {
    const pelangganKurir = await models.deleteModel(TABLE, pelangganId);
    if (!pelangganKurir) {
      const error = new Error("Failed to delete pelanggan");
      res.statusCode = 409;
      return next(error);
    } else {
      return res.status(204).json({});
    }
  } catch (error) {
    return next(error);
  }
};

const readById = async (req, res, next) => {
  const pelangganId = req.params;
  try {
    const getPelangganById = await models.getModel(TABLE, pelangganId);
    if (!getPelangganById) {
      const error = new Error("Pelanggan not found");
      res.statusCode = 404;
      return next(error);
    } else {
      return res.status(200).json({
        status: "success",
        data: getPelangganById
      });
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = { add, read, update, del, readById };
