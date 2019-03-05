const app = require('express')();
const bodyParser = require('body-parser');
const port = +process.argv.slice(2)[0] ||  process.env.PORT || 8080;
require('./config/mongoose');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

app.use('/team', require('./routes/team'));
app.use('/user', require('./routes/user'));
app.use('/role', require('./routes/role'));
app.use('/city', require('./routes/city'));

app.use('/login', require('./routes/login'));

app.listen(port, () => console.log(`Servidor escuchando en http://localhost:${port}`))
