const { matchRoutes } = require('react-router-config');

function getRouteMatch(routes, location) {
  const branch = matchRoutes(routes, location);
  const exactMatch = branch.find(ocurrency => ocurrency.match.isExact === true);
  const result = exactMatch ? {
    ...exactMatch,
    params: exactMatch.match.params || {},
    url: exactMatch.match.url,
  } : {};
  return result;
}

module.exports = getRouteMatch;
