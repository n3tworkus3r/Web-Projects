const UserService = require("../services/userService");

class UserController {
  async Register(req, res) {
    let user = {
      login: req.body.login,
      password: req.body.password,
    };

    let userInfo = {
      email: req.body.email ?? null,
      address: req.body.address ?? null,
    }; 

    const response = await UserService.Register(user, userInfo);
    if (response == "Already exists") {
      res.send("Already exists");
    }
    res.send("Ok");
  }

  async Login(req, res) {
    let user = {
      login: req.body.login,
      password: req.body.password,
    };

    res.send(await UserService.Login(user));
  }

  async createOne(req, res) {
    let user = {
      login: req.body.login,
      password: req.body.password,
      role: req.body.role,
    };
    res.send(await UserService.create(user));
  }

  async delById(req, res) {
    await UserService.delById(req.params.id);
    res.send("Ok");
  }

  async editById(req, res) {
    /*let userId = req.params.id;

    let productData = {
      name: req.body.name,
      price: req.body.price,
      discount: req.body.discount,
      img: req.body.img,
      supplier_id: req.body.supplier_id
    };

    res.send(await UserService.editById(userId,productData));*/
  }

  async getById(req, res, next) {
    try{

          let userId = await UserService.getById(req.params.id);
          res.json(userId)
      }
      catch (err) {
          return next(err);
      }
  }

  async getAll(req, res) {
    //let productId = await UserService.getById(req.params.id);
    //res.json(productId)
  }
}

module.exports = new UserController();
