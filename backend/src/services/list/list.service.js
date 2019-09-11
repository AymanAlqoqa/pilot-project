// Initializes the `list` service on path `/list`
const { List } = require('./list.class');
const createModel = require('../../models/list.model');
const hooks = require('./list.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/list', new List(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('list');

  service.hooks(hooks);
};
