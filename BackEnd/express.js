const bodyParser = require('body-parser');
const userRoutes = require('./RestAPI/Routes/users');

const express =  require ('express');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users',userRoutes);


app.listen(5000, () => {
    console.log("Listening on the port 5000");
})

//to start the backend the command is npm run start