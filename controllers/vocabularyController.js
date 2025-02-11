export const updateReviewInterval = (card, performanceScore) => {
    let newInterval;
    if (performanceScore >= 3) {
      newInterval = card.interval * 2.5;
    } else {
      newInterval = 1; // Reset interval
    }
    
    card.interval = newInterval;
    card.nextReview = Date.now() + newInterval * 86400000; // Days to milliseconds
    await card.save();
  };