const vocabularySchema = new mongoose.Schema({
    word: { type: String, required: true },
    definition: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    nextReview: { type: Date, default: Date.now }, // For spaced repetition
    interval: { type: Number, default: 1 }
  });