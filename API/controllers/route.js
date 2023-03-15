import { Route } from "../models/route.js";

export const getRoutes = async (req, res) => {
  try {
    const route = await Route.findAll();
    res.json(route);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRoutesByCity = async (req, res) => {
  try {
    const { cityId } = req.params;
    const route = await Route.findAll(
      {
        where: {
          cityId,
        },
      }
    );
    res.json(route);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRoute = async (req, res) => {
  try {
    const { id } = req.params;
    const route = await Route.findOne({
      where: {
        id,
      },
    });
    res.json(route);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createRoute = async (req, res) => {
  const { cityId, description, difficulty, duration, accesibility } = req.body;

  const newRoute = await Route.create({
    cityId,
    description,
    difficulty,
    duration,
    accesibility,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  res.json(newRoute);
};

export const updateRoute = async (req, res) => {
  try {
    const { id } = req.params;
    const { cityId, description, difficulty, duration, accesibility } =
      req.body;

    const route = await Route.findByPk(id);
    (route.cityId = cityId),
      (route.description = description),
      (route.difficulty = difficulty),
      (route.duration = duration),
      (route.accesibility = accesibility);

    await route.save();

    res.json(route);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteRoute = async (req, res) => {
  try {
    const { id } = req.params;
    await Route.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
