const { RefreshToken } = require('../db/models');
const Controller = require('../utils/controller');

class RefreshTokenController {

  constructor () {
    this._controller = new Controller(RefreshToken);
  }

  createRefreshToken = async (req, res, next) => {
    try {

      await this._controller.create({
                                      ...req.body,
                                      userId: req.authorization.id,
                                    });

    } catch (e) {
      next(e);
    }
  };
}

module.exports = new RefreshTokenController();