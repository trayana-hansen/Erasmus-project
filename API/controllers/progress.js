import { Progress } from "../models/progress.js";

export const getProgresses = async (req, res) => {
  try {
    const progress = await Progress.findAll();
    res.json(progress);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProgress = async (req, res) => {
  try {
    const { userId, routeId } = req.params;
    const progress = await Progress.findOne({
      where: {
        userId,
        routeId,
      },
    });
    res.json(progress);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProgress = async (req, res) => {
  const { percentage, userId, routeId } = req.body;

  const newProgress = await Progress.create(
    {
      percentage,
      userId,
      routeId,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    { fields: ["percentage", "userId", "routeId"] }
  );

  res.json(newProgress);
};

export const updateProgress = async (req, res) => {
  try {
    const { id } = req.params;
    const { percentage, userId, routeId } = req.body;

    const progress = await Progress.findByPk(id);
    (progress.percentage = percentage),
      (progress.userId = userId),
      (progress.routeId = routeId),
      await percentage.save();

    res.json(progress);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProgress = async (req, res) => {
  try {
    const { id } = req.params;
    await Progress.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
