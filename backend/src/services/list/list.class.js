const { Service } = require('feathers-knex');

exports.List = class List extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'list'
    });
  }
};
