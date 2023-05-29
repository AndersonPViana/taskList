const Sequelize = require("sequelize");
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook("beforeSave", async (user) => {
      user.password_hash = await bcrypt.hash(user.password, 8);
    });
  }

  checkpassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

module.exports = User;
