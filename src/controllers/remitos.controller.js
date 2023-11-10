import Productos from "../models/Productos.js";
import Remitos from "../models/Remitos.js";

export const getRemitos = async (req, res) => {
  try {
    const remitos = await Remitos.findAll();
    // console.log(users);
    res.json(remitos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRemito = async (req, res) => {
  const { idRemito } = req.params;
  try {
    const remitoFind = await Remitos.findOne({
      where: {
        id_remito: idRemito,
      },
    });
    // console.log(users);
    !remitoFind
      ? res.status(404).json({ message: "Remito no encontrado" })
      : res.json(remitoFind);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRemitoProductos = async (req, res) => {
  const { idRemito } = req.params;
  try {
    const productosFind = await Productos.findAll({
      where: {
        remito_id: idRemito,
      },
    });
    // console.log(users);
    !productosFind.length
      ? res.status(404).json({
          message: "No se encontraron Productos asociados a este Remito.",
        })
      : res.json(productosFind);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createRemito = async (req, res) => {
  const { firstNameEmisor_remito, firstNameReceptor_remito } = req.body;
  try {
    const newRemito = await Remitos.create({
      firstNameEmisor_remito,
      firstNameReceptor_remito,
    });
    // console.log(newUser);
    res.json(newRemito);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateRemito = async (req, res) => {
  const { idRemito } = req.params;
  const { firstNameEmisor_remito, firstNameReceptor_remito } = req.body;
  try {
    let remitoFind = await Remitos.findByPk(idRemito);
    remitoFind.firstNameEmisor_remito = firstNameEmisor_remito;
    remitoFind.firstNameReceptor_remito = firstNameReceptor_remito;
    await remitoFind.save();
    res.json(remitoFind);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteRemito = async (req, res) => {
  const { idRemito } = req.params;
  try {
    await Remitos.destroy({
      where: {
        id_remito: idRemito,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
