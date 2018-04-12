const express = require('express');
const chalk = require('chalk');

const app = express();
const makeResponseMiddleware = (req, res) => res.json({ date: Date.now() });

app.use('/route-1', makeResponseMiddleware);
app.use('/route-2', makeResponseMiddleware);
app.use('/route-3', makeResponseMiddleware);
app.use('/route-1/:slug', makeResponseMiddleware);
app.use('/route-2/:slug', makeResponseMiddleware);
app.use('/route-3/:slug', makeResponseMiddleware);

app.listen(3000, () => {
  process.stdout.write(chalk.bold.green('Server started at port 3000\n\n\n'));
});
