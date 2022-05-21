const ReviewRepository  = require('../repository/reviewRepository')

class ReviewService {
    async create(review) {
        return await ReviewRepository.create(review)
    }
}

module.exports = new ReviewService()