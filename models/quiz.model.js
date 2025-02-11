const quizSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, 'Quiz title is required']
    },
    description: String,
    questions: [{
      question: {
        type: String,
        required: true
      },
      options: [{
        type: String,
        required: true
      }],
      correctAnswer: {
        type: String,
        required: true
      },
      explanation: String
    }],
    category: {
      type: String,
      required: true,
      enum: ['vocabulary', 'grammar', 'mixed']
    },
    difficulty: {
      type: String,
      required: true,
      enum: ['beginner', 'intermediate', 'advanced']
    },
    timeLimit: {
      type: Number,  // in minutes
      default: 10
    }
  }, {
    timestamps: true
  });
  
  const Quiz = mongoose.model('Quiz', quizSchema);
  
  module.exports = { Flashcard, Quiz };