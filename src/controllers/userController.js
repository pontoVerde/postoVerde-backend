const User = require("../models/user/user");

module.exports = {
    async get(req, res, next) {
        try {
            const user = await User.find().select('').sort({'createdAt' : 1 });

            return res.status(201).send(user);
        } catch (error) {
            next(error);
        }
    },
    async post(req, res, next) {
        try {
            const user = await User.create(req.body);

            return res.status(201).send(user);
        } catch (error) {
            next(error);
        }
    },
    async update(req, res, next) {
        try {
            const user = await User.findByIdAndUpdate(req.params._id, req.body, { new: true });

            return res.status(201).send(user);
        } catch (error) {
            next(error);
        }
    },
    async delete(req, res, next) {
        try {
            await User.findByIdAndRemove(req.params._id);

            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    }
}