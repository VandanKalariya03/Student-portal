const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const student = new Schema({
    id: {
        type: String
    },
    Email: {
        type: String
    },
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },

    
    Address: {
        type: String
    },
    City: {
        type: String
    },
    Number: {
        type: String
    }
   
})

student.methods.ADDff = async function(body) {

    try {
       console.log(body);
       this.Address=body.Address;
       this.City=body.City;
       this.Number=body.Number
       
       await this.save();
    
       
    } catch (err) {
        
    }

}
const Student = mongoose.model('student', student)



module.exports =Student;