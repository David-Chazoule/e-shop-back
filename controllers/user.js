const {
  getAll,
  getOneById,
  createOne,
  authentication,
  getUserInfo,
  getOneByEmail
} = require("../models/user");

const handlePost = async (req, res) => {
  try {
    const result = await createOne(req.body);
    
    res.status(201).json(result[0]);
  } catch {
    res.status(500).send();
  }
};

const handleGetAll = async (req, res) => {
  const result = await getAll();
  res.status(200).json(result);
};

const handleGetOne = async (req, res) => {
  const result = await getOneById(req.params.id);
  res.status(200).json(result);
};

const handleAuthenticate = async (req, res) => {
  const token = await authentication(req.body);
  const [userInfo] = await getOneByEmail(req.body.email);
  delete userInfo.password
  res.set("AccessToken", token);
  res.set("Access-control-Expose-Headers", "AccessToken");
  res.status(200).json( userInfo);
};

const handleUserInfo = async (req, res) => {
  const token = req.headers.authorization.split("")[1];
  const result = await getUserInfo(token);
  res.status(200).json(result);
};

module.exports = {
  handlePost,
  handleGetAll,
  handleGetOne,
  handleAuthenticate,
  handleUserInfo,
};
