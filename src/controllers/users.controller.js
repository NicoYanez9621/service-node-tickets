import Users from "../models/Users.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    // console.log(users);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    const userFind = await Users.findOne({
      where: {
        id_user: idUser,
      },
    });
    // console.log(users);
    !userFind
      ? res.status(404).json({ message: "Usuario no encontrado" })
      : res.json(userFind);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  const { firstName_user, lastName_user } = req.body;
  try {
    const newUser = await Users.create({
      firstName_user,
      lastName_user,
    });
    // console.log(newUser);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { firstName_user, lastName_user } = req.body;
  try {
    let userFind = await Users.findByPk(idUser);
    userFind.firstName_user = firstName_user;
    userFind.lastName_user = lastName_user;
    await userFind.save();
    res.json(userFind);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    await Users.destroy({
      where: {
        id_user: idUser,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
