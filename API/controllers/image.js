import { Img } from "../models/image.js";
// import sharp from "sharp";

export const getImages = async (req, res) => {
  try {
    const image = await Img.findAll();
    res.json(image);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Img.findOne({
      where: {
        id,
      },
    });
    res.json(image);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createImage = async (req, res) => {
  const { img } = req.body;

  const image = req.file;

  const newImg = await Img.create({
    img: image.buffer,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  // sharp(image.buffer);

  console.log(newImg);

  res.json(newImg);
};

export const updateImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { imgFile } = req.body;

    const image = await Img.findByPk(id);
    (image.imgFile = imgFile), await image.save();

    res.json(image);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    await Img.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
