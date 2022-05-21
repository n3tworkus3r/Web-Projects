const ReviewService  = require('../services/reviewService');

class ReviewController {

  async addReview(req, res) {
    let review = {
      author_id : req.body.author_id,
      supplier_id : req.body.supplier_id,
      text : req.body.text
    };

    res.send(await ReviewService.create(review));
  }


}

module.exports = new ReviewController();