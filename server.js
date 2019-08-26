const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT http://localhost:${PORT}`);
});
