const User = require('../models/User')

module.exports = {

    async getUser(req, res){
        try{
            const { email } = req.query;

            const emails = await User.find({ email: email});

            return res.status(200).json(emails);
        }catch(err){
            return res.status(400).json({error: err.message});
        }   
    },


    async registerUser(req, res) {
        const { name, email, bithday, type } = req.body;
        try{        
            let user = await User.findOne({ email })   
        
            if (!user) {
            user = await User.create({ name, email, bithday, type });
            }
            return res.json(user);

        }catch(error){
            console.log(error.message);
    } 
        
}
};