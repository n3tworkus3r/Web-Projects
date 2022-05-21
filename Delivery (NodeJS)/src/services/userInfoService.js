const UserInfoRepository = require("../repository/userInfoRepository");
const jwt = require("jwt-simple");
const AuthConfig = require("../config/AuthConfig.json");

class UserInfoService {

  /*
  async Register(user, userInfo) {
    let userDB = await UserInfoRepository.GetOneByLogin(user.login);
    if (userDB != null) {
      return "Already exists";
    }
    user = await UserInfoRepository.Create(user, userInfo);
    return 'ok';
  }

  async Login(user) {
    const password = user.password;
    user = await UserInfoRepository.GetOneByQuery({ login: user.login });

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
    return await UserInfoRepository.getById(userId)
  }

  async addUser(user) {
    return await UserInfoRepository.addUser(user);
  }

  */
}

module.exports = new UserInfoService();
