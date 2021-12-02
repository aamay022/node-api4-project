const Hub = require('./hubs-model');


function errorHandling(err, req, res, next) { // eslint-disable-line
  res.status(err.status || 500).json({
    message: `Horror in the router: ${err.message}`,
    stack: err.stack,
  });
}

async function checkId(req, res, next) {
  // pull the hub from the db
  // if it comes back, we'll tack it to the req
  // object and continue...
  // if not, we'll send a 404 to the err handling
  try {
    const hub = await Hub.findById(req.params.id);
    if (hub) {
      req.hub = hub; // saves other middlewarws a db trip
      next();
    } else {
      next({ status: 404, message: 'not found!' });
    }
  } catch (error) {
    next(error);
  }
}

function checkHubPayload(req, res, next) {
  // this is you!
  // if req.body.name legit proceed
  // otherwise send clinet packeing with 422
  if (!req.body.name || !req.body.name.trim()) {
    next({ status: 422, message: 'I need a name MAN!' });
  } else {
    next();
  }
}

module.exports = {
  errorHandling,
  checkId,
  checkHubPayload,
};
