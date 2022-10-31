const User = require("../../models/users/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json");


function generateTokenUser(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 32400,
    });
}

module.exports = {
    async post(req, res, next) {
        try {
            const { email, password } = req.body;
            console.log(email, password);
            const user = await User.findOne({email})

            if(!user){
                return res.status(400).send({ error: 'User not found' });
            }

            const checkPass = await bcrypt.compare(password, user.password);

            if(!checkPass){
                return res.status(400).send({ error: 'Invalid password'});
            }

            return res.status(200).send({
                user,
                token: generateTokenUser({ id: user.id })
            });

        } catch (error) {
            next(error);
        }
    },
    async checkUser(req, res, next) {
        try {
            const { token } = req.body;
            const decoded = jwt.verify(token, authConfig.secret);

            const user = await User.findById(decoded.id);
            return res.status(200).send({user});
        } catch (error) {
            next(error);
        }
    }
}