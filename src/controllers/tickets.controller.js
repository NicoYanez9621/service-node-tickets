import Tickets from "../models/Tickets.js";

export const getTickets = async (req, res) => {
  try {
    const ticket = await Tickets.findAll();
    // console.log(users);
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTicket = async (req, res) => {
  const { idTicket } = req.params;
  try {
    const ticketFind = await Tickets.findOne({
      where: {
        id_ticket: idTicket,
      },
    });
    // console.log(users);
    !ticketFind
      ? res.status(404).json({ message: "Ticket no encontrado" })
      : res.json(ticketFind);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTickets = async (req, res) => {
  const { firstName_ticket, lastName_ticket, state_ticket } = req.body;
  try {
    const newTicket = await Tickets.create({
      firstName_ticket,
      lastName_ticket,
      state_ticket,
    });
    // console.log(newUser);
    res.json(newTicket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTicket = async (req, res) => {
  const { idTicket } = req.params;
  const { firstName_ticket, lastName_ticket, state_ticket } = req.body;
  try {
    let ticketFind = await Tickets.findByPk(idTicket);
    ticketFind.firstName_ticket = firstName_ticket;
    ticketFind.lastName_ticket = lastName_ticket;
    ticketFind.state_ticket = state_ticket;
    await ticketFind.save();
    res.json(ticketFind);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTicket = async (req, res) => {
  const { idTicket } = req.params;
  try {
    await Tickets.destroy({
      where: {
        id_ticket: idTicket,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
