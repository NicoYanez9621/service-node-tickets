import ProveedoresProveedores from "../models/ProveedoresProveedores.js";

export const getProveedores = async (req, res) => {
  try {
    const proveedores = await ProveedoresProveedores.findAll();
    // console.log(Proveedores);
    res.json(proveedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProveedor = async (req, res) => {
  const { idProveedor } = req.params;
  try {
    const proveedorFind = await ProveedoresProveedores.findOne({
      where: {
        clienteId: idProveedor,
      },
    });
    // console.log(users);
    !proveedorFind
      ? res.status(404).json({ message: "Proveedor no encontrado" })
      : res.json(proveedorFind);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProveedor = async (req, res) => {
  const { nombre, cuit, domicilio, mail, telefono } = req.body;
  try {
    const newProveedor = await ProveedoresProveedores.create({
      nombre,
      cuit,
      domicilio,
      mail,
      telefono,
    });
    // console.log(newUser);
    res.json(newProveedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProveedor = async (req, res) => {
  const { idProveedor } = req.params;
  const { nombre, cuit, domicilio, mail, telefono } = req.body;
  try {
    let proveedorFind = await ProveedoresProveedores.findByPk(idProveedor);
    proveedorFind.nombre = nombre;
    proveedorFind.cuit = cuit;
    proveedorFind.domicilio = domicilio;
    proveedorFind.mail = mail;
    proveedorFind.telefono = telefono;
    await proveedorFind.save();
    res.json(proveedorFind);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProveedor = async (req, res) => {
  const { idProveedor } = req.params;
  try {
    await ProveedoresProveedores.destroy({
      where: {
        clienteId: idProveedor,
      },
    });
    // res.sendStatus(204);
    res.status(204).json({ message: "Proovedor eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
