const grammarSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true
    },
    rule: {
      type: String,
      required: [true, 'Grammar rule is required']
    },
    examples: [{
      type: String,
      required: [true, 'At least one example is required']
    }],
    explanation: {
      type: String,
      required: [true, 'Explanation is required']
    },
    difficulty: {
      type: String,
      required: true,
      enum: ['beginner', 'intermediate', 'advanced']
    },
    category: {
      type: String,
      required: true,
      enum: ['tenses', 'articles', 'pronouns', 'prepositions', 'syntax', 'other']
    }
  }, {
    timestamps: true
  });
  
  const Grammar = mongoose.model('Grammar', grammarSchema);
  
  module.exports = { Vocabulary, Grammar };