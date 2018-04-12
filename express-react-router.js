const express = require('express');
const chalk = require('chalk');
const FooComponent = require('./components/FooComponent');
const getRouteMatch = require('./utils/getRouteMatch');

const app = express();
const makeResponseMiddleware = (req, res) => res.json({ date: Date.now() });

const routes = [{
  path: '/route-1/:slug',
  Component: FooComponent,
}, {
  path: '/route-2/:slug',
  Component: FooComponent,
}, {
  path: '/route-3/:slug',
  Component: FooComponent,
}, {
  path: '/route-1',
  Component: FooComponent,
}, {
  path: '/route-2',
  Component: FooComponent,
}, {
  path: '/route-3',
  Component: FooComponent,
}];

app.use((req, res) => {
  const { match } = getRouteMatch(routes, req.originalUrl);

  if (match) {
    makeResponseMiddleware(req, res);
  } else {
    res.status(404).json({ error: 404 });
  }
});

app.listen(3001, () => {
  process.stdout.write(chalk.bold.green('Server started at port 3001 \n\n\n'));
});
