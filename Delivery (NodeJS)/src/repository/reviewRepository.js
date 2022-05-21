const Review = require('../models/review')

class ReviewRepository {
    async create(review) {
        return Review.create(review);
    }
}

module.exports = new ReviewRepository();