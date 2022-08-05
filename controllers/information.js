const { getAllInformation, getInformationById, createOne } = require("../models/information");

const HandleGetAllInformation = async (req, res) => {
  try {
    const result = await getAllInformation();
    res.status(200).json(result);
  } catch {
    res.status(500).send("Internal server error");
  }
};

const HandleGetInformationById = async (req, res) => {
  try {
    const result = await getInformationById(req.params.id);
    res.status(200).json(result[0]);
  } catch {
    res.status(500).send("Internal server error");
  }
};

const handlePost = async (req, res) => {
  try {
    const result = await createOne(req.body);
    
    res.status(201).json(result[0]);
  } catch {
    res.status(500).send();
  }
};

module.exports = {
  HandleGetAllInformation,
  HandleGetInformationById,
  handlePost
};