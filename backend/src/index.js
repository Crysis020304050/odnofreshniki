const express = require( 'express' );
const cors = require( 'cors' );
const router = require( './router' );
const PORT = process.env.NODE_ENV || 50000;

const app = express();
app.use( cors() );
app.use( express.json() );

app.post('/api/sing_in', (req, res, next) => {
  res.send('6');
});

app.use('/api', router );
app.listen( PORT, () => {
  console.log( `Example app listening on port ${PORT}!` );
} );