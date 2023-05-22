const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://admin:admin123@formdata.dorve5l.mongodb.net/FormData?retryWrites=true&w=majority", 
    (err) => {
        if(err){
            console.log("Connection Failed", err)
        }
        else{
            console.log("Connection Success");
        }
    }
)