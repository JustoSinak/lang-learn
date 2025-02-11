const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  quizResults: [{
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz'
    },
    score: Number,
    totalQuestions: Number,
    completedAt: {
      type: Date,
      default: Date.now
    }
  }],
  flashcardProgress: [{
    flashcardId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Flashcard'
    },
    masteryLevel: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    lastReviewed: Date
  }],
  vocabularyProgress: {
    wordsLearned: {
      type: Number,
      default: 0
    },
    masteredWords: {
      type: Number,
      default: 0
    }
  },
  grammarProgress: {
    rulesLearned: {
      type: Number,
      default: 0
    },
    masteredRules: {
      type: Number,
      default: 0
    }
  },
  streakDays: {
    type: Number,
    default: 0
  },
  lastActivityDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;