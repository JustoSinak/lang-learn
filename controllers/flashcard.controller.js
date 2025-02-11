const { Flashcard } = require('../models/flashcard.model');

exports.createFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.create({
      ...req.body,
      userId: req.user._id
    });
    res.status(201).json({
      status: 'success',
      data: { flashcard }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find({ userId: req.user._id });
    res.status(200).json({
      status: 'success',
      data: { flashcards }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};
