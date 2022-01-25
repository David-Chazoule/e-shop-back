
const {
  getAll,
  getOneById,
  createOne,
  authentication
  
} = require('../models/connect');

const handlePost = async ( req, res) => {
  try {
    const result = await createOne(req.body);
    res.status(201).json(result[0]);
  } catch {
    res.status(500).send()
  }

  
}

const handleGetAll = async (req, res) => {
  const result = await getAll();
  res.status(200).json(result)
}

const handleGetOne = async (req, res) => {
  const result = await getOneById(req.params.id);
  res.status(200).json(result)
}

const handleAuthenticate = async (req, res) => {
  const token = await authentication(req.body);
  res.set('accessToken', token)
  res.status(204).send()
}

module.exports = {
  handlePost,
  handleGetAll,
  handleGetOne,
  handleAuthenticate
}