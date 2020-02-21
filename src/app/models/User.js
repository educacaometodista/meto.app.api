import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        cpf: Sequelize.INTEGER,
        ra: Sequelize.INTEGER,
        password_hash: Sequelize.STRING,
        graduated: Sequelize.BOOLEAN,
        avatar_id: Sequelize.INTEGER,
        phone: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
