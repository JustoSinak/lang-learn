const mongoose = require('mongoose');

const vocabularySchema = new mongoose.Schema({
  word: {
    type: String,
    required: [true, 'Word is required'],
    trim: true
  },
  definition: {
    type: String,
    required: [true, 'Definition is required']
  },
  examples: [{
    type: String
  }],
  partOfSpeech: {
    type: String,
    required: [true, 'Part of speech is required'],
    enum: ['noun', 'verb', 'adjective', 'adverb', 'preposition', 'conjunction', 'interjection']
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['beginner', 'intermediate', 'advanced']
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

const Vocabulary = mongoose.model('Vocabulary', vocabularySchema);