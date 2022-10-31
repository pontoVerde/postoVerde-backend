const User = require("../models/users/user");
const bcrypt = require("bcrypt");

module.exports = {
    async get(req, res, next) {
        try {
            const user = await User.find().select('').sort({'createdAt' : 1 });

            return res.status(200).send(user);
        } catch (error) {
            next(error);
        }
    },
    async post(req, res, next) {
        try {
            const { name, email, password, role } = req.body;

            const checkUser = await User.findOne({ email })

            if(checkUser) {
                return res.status(400).send({ error: 'User already exists' });
            }

            const hash = await bcrypt.hash(password, 10);

            const user = await User.create({ 
                name,
                email, 
                password: hash, 
                role 
            });

            return res.status(201).send(user);
        } catch (error) {
            next(error);
        }
    },
    async update(req, res, next) {
        try {
            const user = await User.findByIdAndUpdate(req.params._id, req.body, { new: true });

            return res.status(202).send(user);
        } catch (error) {
            next(error);
        }
    },
    async delete(req, res, next) {
        try {
            await User.findByIdAndRemove(req.params._id);

            return res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}