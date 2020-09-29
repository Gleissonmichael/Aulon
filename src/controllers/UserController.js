const User = require('../models/User')

module.exports = {
    async store(req, res) {
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