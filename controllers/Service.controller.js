import ServiceModel from "../models/service.js";

export const create = async (req, res) => {
  try {
    const doc = new ServiceModel({
      Name: req.body.Name, 
      description: req.body.description,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
    });

    const service = await doc.save();

    res.json(service);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const services = await ServiceModel.find()
    res.json(services);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};


