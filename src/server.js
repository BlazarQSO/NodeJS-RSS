const { PORT } = require('./common/config');
const app = require('./app');
const { db } = require('./database');

app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`App is running on http://localhost:${PORT}`, db)
);
