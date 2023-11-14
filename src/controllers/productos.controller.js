import Productos from "../models/Productos.js";

export const getProductos = async (req, res) => {
  try {
    const productos = await Productos.findAll();
    // console.log(productos);
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProducto = async (req, res) => {
  const { idProducto } = req.params;
  try {
    const productoFind = await Productos.findOne({
      where: {
        id_producto: idProducto,
      },
    });
    // console.log(users);
    !productoFind
      ? res.status(404).json({ message: "Producto no encontrado" })
      : res.json(productoFind);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProductos = async (req, res) => {
  const { descripcion_producto, valor_producto, remito_id } = req.body;
  try {
    const newProducto = await Productos.create({
      descripcion_producto,
      valor_producto,
      remito_id,
    });
    // console.log(newUser);
    res.json(newProducto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProducto = async (req, res) => {
  const { idProducto } = req.params;
  const { descripcion_producto, valor_producto, remito_id } = req.body;
  try {
    let productoFind = await Productos.findByPk(idProducto);
    productoFind.descripcion_producto = descripcion_producto;
    productoFind.valor_producto = valor_producto;
    productoFind.remito_id = remito_id;
    await productoFind.save();
    res.json(productoFind);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProducto = async (req, res) => {
  const { idProducto } = req.params;
  try {
    await Productos.destroy({
      where: {
        id_producto: idProducto,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
