import { Monument } from "../models/monument.js";

export const getMonuments = async (req, res) => {
  try {
    const monument = await Monument.findAll();
    res.json(monument);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMonument = async (req, res) => {
  try {
    const { id } = req.params;
    const monument = await Monument.findOne({
      where: {
        id,
      },
    });
    res.json(monument);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createMonument = async (req, res) => {
  const { name, latitude, longitude, description, routeId } = req.body;

  const newMonument = await Monument.create({
    name,
    latitude,
    longitude,
    description,
    routeId,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  res.json(newMonument);
};

export const updateMonument = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, latitude, longitude, description, routeId } = req.body;

    const monument = await Monument.findByPk(id);
    (monument.name = name),
      (monument.latitude = name),
      (monument.longitude = latitude),
      (monument.location = longitude),
      (monument.description = description),
      (monument.routeId = routeId),
      await monument.save();

    res.json(monument);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteMonument = async (req, res) => {
  try {
    const { id } = req.params;
    await Monument.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
