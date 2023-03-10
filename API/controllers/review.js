import { Review } from "../models/review.js";

export const getReviews = async (req, res) => {
  try {
    const review = await Review.findAll();
    res.json(review);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findOne({
      where: {
        id,
      },
    });
    res.json(review);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createReview = async (req, res) => {
  const { routeId, userId, message, tittle, grade } = req.body;

  const newReview = await Review.create({
    routeId,
    userId,
    message,
    tittle,
    grade,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  res.json(newReview);
};

export const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { routeId, userId, message, tittle, grade } = req.body

    const review = await Review.findByPk(id);
    (review.routeId = routeId),
      (review.userId = userId),
      (review.message = message),
      (review.tittle = tittle),
      (review.grade = grade),
      await review.save();

    res.json(review);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    await Review.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
