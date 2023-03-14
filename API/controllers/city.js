import { City } from "../models/city.js";

export const getCities = async (req, res) => {
  try {
    const city = await City.findAll();
    res.json(city);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await City.findOne({
      where: {
        id,
      },
    });
    res.json(city);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCity = async (req, res) => {
  const { name, country, description } = req.body;

  const newCity = await City.create({
    name,
    country,
    description,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  res.json(newCity);
};

export const updateCity = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, country, description } = req.body;

    const city = await City.findByPk(id);
    city.name = name,
    city.country = country,
    city.description = description,

    await city.save();

    res.json(city);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCity = async (req, res) => {
  try {
    const { id } = req.params;
    await City.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
