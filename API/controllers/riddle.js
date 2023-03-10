import { Riddle } from "../models/riddle.js";

export const getRiddles = async (req, res) => {
  try {
    const riddle = await Riddle.findAll();
    res.json(riddle);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRiddle = async (req, res) => {
  try {
    const { id } = req.params;
    const riddle = await Riddle.findOne({
      where: {
        id,
      },
    });
    res.json(riddle);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createRiddle = async (req, res) => {
  const { monument_id, question, hint, answer } = req.body;

  const newRiddle = await Riddle.create({
    monument_id,
    question,
    hint,
    answer,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  res.json(newRiddle);
};

export const updateRiddle = async (req, res) => {
  try {
    const { id } = req.params;
    const { monument_id, question, hint, answer } = req.body;

    const riddle = await Riddle.findByPk(id);
    (riddle.monument_id = monument_id),
      (riddle.question = question),
      (riddle.hint = hint),
      (riddle.answer = answer),
      await riddle.save();

    res.json(riddle);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteRiddle = async (req, res) => {
  try {
    const { id } = req.params;
    await Riddle.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
