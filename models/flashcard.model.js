const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
  front: {
    type: String,
    required: [true, 'Front content is required']
  },
  back: {
    type: String,
    required: [true, 'Back content is required']
  },
  category: {
    type: String,
    required: true,
    enum: ['vocabulary', 'grammar', 'phrases', 'other']
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['beginner', 'intermediate', 'advanced']
  },
  lastReviewed: {
    type: Date,
    default: Date.now
  },
  nextReview: {
    type: Date,
    default: Date.now
  },
  reviewCount: {
    type: Number,
    default: 0
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

const Flashcard = mongoose.model('Flashcard', flashcardSchema);