const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/db_gym_dev' ,{
            // useNeuUrlParser : true,
            // useUnifiedTopology : true   
        });
        console.log('ket noi thanh cong')

    }catch (error){
        console.log('ket noi that bai');
    }
}
 module.exports = {connect};