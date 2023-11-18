import ProductosProveedores from "../models/ProductosProveedores.js";

export const getProductos = async (req, res) => {
  try {
    const productos = await ProductosProveedores.findAll();
    // console.log(productos);
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProducto = async (req, res) => {
  const { idProducto } = req.params;
  try {
    const productoFind = await ProductosProveedores.findOne({
      where: {
        id: idProducto,
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

export const createProductosProveedores = async (req, res) => {
  const { descripcion, stock } = req.body;
  try {
    const newProducto = await ProductosProveedores.create({
      descripcion,
      stock,
    });
    // console.log(newUser);
    res.json(newProducto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProducto = async (req, res) => {
  const { idProducto } = req.params;
  const { descripcion, stock } = req.body;
  try {
    let productoFind = await ProductosProveedores.findByPk(idProducto);
    productoFind.descripcion = descripcion;
    productoFind.stock = stock;
    await productoFind.save();
    res.json(productoFind);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProducto = async (req, res) => {
  const { idProducto } = req.params;
  try {
    await ProductosProveedores.destroy({
      where: {
        id: idProducto,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
