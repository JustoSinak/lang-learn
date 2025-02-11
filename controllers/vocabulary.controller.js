const { Vocabulary } = require('../models/vocabulary.model');

exports.createWord = async (req, res) => {
  try {
    const word = await Vocabulary.create({
      ...req.body,
      createdBy: req.user._id
    });
    res.status(201).json({
      status: 'success',
      data: { word }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.getWords = async (req, res) => {
  try {
    const words = await Vocabulary.find({ createdBy: req.user._id });
    res.status(200).json({
      status: 'success',
      data: { words }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};
