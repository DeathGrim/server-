import ApplicationModel from "../models/application.js";

export const create = async (req, res) => {
    try {
      const doc = new ApplicationModel({
        category: req.body.category,
        user: req.body.user,
        number: req.body.number,
      });
  
      const application = await doc.save();
      res.json(application);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Что-то пошло не так",
      });
    }
  };

  export const getAll = async (req, res) => {
    try {
      const application = await ApplicationModel.find()
        .populate("User", "firstName")
       
      res.json(application);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Что-то пошло не так",
      });
    }
  };

  export const getByUserId = async (req, res) => {
    try {
      const token = req.headers.authorization;
      const userId = req.params.userId;
      console.log(`Fetching application for user ID: ${userId}`);
  
      const application = await ApplicationModel.find({ user: userId })
       
      
  
      if (application.length === 0) {
        res.status(404).json({ message: "No application found for this user." });
      } else {
        res.json(application);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Something went wrong.",
      });
    }
  };

  export const remove = async (req, res) => {
    try {
      const application = await ApplicationModel.findOneAndDelete(req.params.id);
      res.json(application);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Что-то пошло не так",
      });
    }
  };
  export const update = async (req, res) => {
    try {
      const application = await ApplicationModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.json(application);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Что-то пошло не так",
      });
    }
  };