import ProductosProveedores from "../models/ProductosProveedores.js";
import RemitosProveedores from "../models/RemitosProveedores.js";
import ProveedoresProveedores from "../models/ProveedoresProveedores.js";
import ItemsProveedores from "../models/ItemsProveedores.js";

export const getRemitosProveedores = async (req, res) => {
  try {
    const remitos = await RemitosProveedores.findAll({
      include: [
        {
          model: ProveedoresProveedores,
          as: "proveedor",
        },
        {
          model: ProductosProveedores,
          as: "cliente",
          through: {
            model: ItemsProveedores,
            as: "item",
          },
        },
      ],
    });

    res.status(200).json(remitos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRemito = async (req, res) => {
  try {
    const { idRemito } = req.params;

    // Obtén un solo remito con sus asociaciones
    const remito = await RemitosProveedores.findByPk(idRemito, {
      include: [
        {
          model: ProductosProveedores,
          as: "productos",
          through: { attributes: ["cantidad", "unidad"] },
        },
        {
          model: ProveedoresProveedores,
          as: "proveedore",
        },
      ],
    });

    // Verifica si el remito existe
    if (!remito) {
      return res.status(404).json({ error: "Remito no encontrado" });
    }

    res.status(200).json(remito);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const getRemitoProductos = async (req, res) => {
//   const { idRemito } = req.params;
//   try {
//     const productosFind = await Productos.findAll({
//       where: {
//         id: idRemito,
//       },
//     });
//     // console.log(users);
//     !productosFind.length
//       ? res.status(404).json({
//           message: "No se encontraron Productos asociados a este Remito.",
//         })
//       : res.json(productosFind);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

export const createRemitoProveedor = async (req, res) => {
  try {
    const { clienteId, fechaEmision, items } = req.body;

    // Crea el remito
    const remito = await RemitosProveedores.create({
      clienteId,
      fechaEmision,
    });

    // Itera sobre los elementos del array 'items'
    for (const item of items) {
      // Asegúrate de que el producto exista antes de asociarlo al remito
      const producto = await ProductosProveedores.findByPk(item.productoId);
      if (!producto) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }

      // Crea un nuevo item y asócialo al remito y al producto
      const newItem = await ItemsProveedores.create(item);
      await remito.addProductosProveedore(producto, {
        through: { cantidad: item.cantidad, unidad: item.unidad },
      });

      producto.stock = Number(producto.stock) - Number(item.cantidad);
      // console.log("producto.stock: ", producto.stock);
      await producto.save();
    }

    // Asocia el remito al proveedor
    const proveedor = await ProveedoresProveedores.findByPk(clienteId);
    if (!proveedor) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    await remito.setProveedoresProveedore(proveedor);

    res.status(201).json(remito);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const updateRemito = async (req, res) => {
//   try {
//     const { idRemito } = req.params;
//     const { proveedorId, fechaEmision, items } = req.body;

//     // Busca el remito por su clave primaria
//     const remito = await Remitos.findByPk(idRemito, {
//       include: [Productos], // Incluye la relación con Productos para poder manipular los items
//     });

//     // Verifica si el remito existe
//     if (!remito) {
//       return res.status(404).json({ error: "Remito no encontrado" });
//     }

//     // Actualiza los campos del remito
//     remito.proveedorId = proveedorId;
//     remito.fechaEmision = fechaEmision;

//     // Actualiza los items asociados al remito
//     await Promise.all(
//       items.map(async (item) => {
//         const [producto, created] = await Productos.findOrCreate({
//           where: { id: item.productoId },
//         });

//         // Encuentra o crea un nuevo Item
//         const [dbItem, createdItem] = await Item.findOrCreate({
//           where: { idRemito, productoId: producto.id },
//         });

//         // Actualiza la cantidad y unidad del Item
//         dbItem.cantidad = item.cantidad;
//         dbItem.unidad = item.unidad;

//         // Guarda los cambios en el Item
//         await dbItem.save();
//       })
//     );

//     // Guarda los cambios en el remito
//     await remito.save();

//     res.status(200).json(remito);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

export const deleteRemito = async (req, res) => {
  try {
    const { idRemito } = req.params;

    // Busca el remito por su clave primaria
    const remito = await RemitosProveedores.findByPk(idRemito);

    // Verifica si el remito existe
    if (!remito) {
      return res.status(404).json({ error: "Remito no encontrado" });
    }

    // Elimina las relaciones con Productos y Proveedores
    await remito.removeProductos(remito.productos);
    await remito.setProveedore(null);

    // Elimina el remito
    await remito.destroy();

    res.status(204).end(); // Devuelve una respuesta sin contenido
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
