export const getProgress = async (req, res) => {
    const progress = await Progress.findOne({ userId: req.user.id })
      .populate('completedQuizzes')
      .populate('vocabularyMastered');
  
    res.json({
      quizzesCompleted: progress.completedQuizzes.length,
      wordsMastered: progress.vocabularyMastered.length,
      successRate: (progress.correctAnswers / progress.totalAnswers) * 100
    });
  };