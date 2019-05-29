'use strict';

module.exports.canary_deployment = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      api: 'canary',
      version: 1.0,
      message: 'Canary Deployment'
    }, null, 2),
  };
};

module.exports.linear_deployment = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      api: 'linear',
      version: 1.0,
      message: 'Linear Deployment'
    }, null, 2),
  };
};
