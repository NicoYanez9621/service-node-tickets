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
