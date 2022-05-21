const User = require("../models/user");
const UserInfo = require("../models/userInfo");
const sequelize = require("../config/databaseConfig");

class UserInfoRepository {

  /*
  async Create(user, userInfo) {
    return await sequelize.transaction(async (t) => {
      user = await User.create(
        {
          login: user.login,
          password: user.password,
          role: 0,
        },
        { transaction: t }
      );

      userInfo = await UserInfo.create(
        {
          email: userInfo.email,
          address: userInfo.address,
          user_id: user.id,
        },
        { transaction: t }
      );

      // userInfo['id'] = userInfo['userId'] = undefined; // We already have id in 'user'
      // return {...user.get(), ...userInfo.get()};
      return user;
    });
  }

  // Добавление пользователя
  async add(user) {
    return User.create(user);
  }

  async updateUser(new_user, db_user) {
    await db_user.update({
      id: new_user.id,
      login: new_user.login,
      password: new_user.password,
      role: new_user.role,
    });
    return db_user;
  }

  async GetOneByQuery(query) {
    return await User.findOne({ where: query });
  }

  async GetOneByLogin(login) {
    const user = await User.findOne({ where: { login: login } });
    return user;
  }

  async getById(id) {
    const user = await User.findOne({ where: { id: id } });
    return user;
  }
  */
}

module.exports = new UserInfoRepository();
