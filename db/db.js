const mongoose = require('mongoose');
const db_url = 'mongodb+srv://arolevgeny:nijhuj-zepdyH-5bugke@coloss-gwun3.mongodb.net/coloss?retryWrites=true&w=majority';
mongoose.connect(db_url,{ useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
    console.log('mongoDB is connected sucessfully')
    })
    .catch((err) => {
    throw err
    })
    
module.exports = mongoose;