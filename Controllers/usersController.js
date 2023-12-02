"use strict";
const { getUsers: getDbUsers } = require("../Models/users");
const { User } = require("../Models");
const getUsers = async (req, res) => {
  const users = await User.findAll({});
  res.send({ data: users });
};

const addUser = async (req, res) => {
  const user = req.body;
  const createdUser = await User.create(user);
  res.send({ result: 200, user: createdUser });
};

const deleteUser = async (req, res) => {
  await User.destroy({
    where: { userID: req.params.userID },
  });
  res.send({ result: 204 });
};

const updateUser = async (req, res) => {
  await User.update(req.body, {
    where: { userID: req.params.userID },
  });
  res.send({ result: 200, user: req.body });
};
module.exports = { getUsers, addUser, deleteUser, updateUser };
