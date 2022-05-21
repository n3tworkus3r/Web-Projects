const UserRepository = require("../repository/userRepository");
const jwt = require("jwt-simple");
const AuthConfig = require("../config/AuthConfig.json");

class UserService {
  async Register(user, userInfo) {
    let userDB = await UserRepository.GetOneByLogin(user.login);
    if (userDB != null) {
      return "Already exists";
    }
    user = await UserRepository.Create(user, userInfo);
    return 'ok';
  }

  async Login(user) {
    const password = user.password;
    user = await UserRepository.GetOneByQuery({ login: user.login });

    if (!user) {
      throw new NotFoundError("No such user");
    }

    let payload = {
      userId: user.id,
    };

    let token = jwt.encode(payload, AuthConfig.SecretKey);

    return { token: token };
  }

  
  async getById(userId) {
    return await UserRepository.getById(userId)
  }

  async addUser(user) {
    return await UserRepository.addUser(user);
  }
}

module.exports = new UserService();
