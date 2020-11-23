import Sequelize, { Model } from 'sequelize';

class Queue extends Model {
  static init(sequelize) {
    super.init(
      {
        product_id: Sequelize.STRING,
        validate: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  // static associate(models) {
  //   this.hasMany(models.Product, { as: 'products' });
  // }
}

export default Queue;
