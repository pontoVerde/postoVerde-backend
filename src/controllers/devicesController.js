const Devices = require('../models/devices/devices');

module.exports = {
    async find(req, res, next) {
        try {
            const { id } = req.params;
            console.log(id)
            const devices = await Devices.find({user_id: id}).select('name status').sort({'createdAt' : 1 });
            return res.status(200).send(devices);
        } catch (error) {
            next(error);
        }
            
    },
    async post(req, res, next) {
        try {
            const { name, status, user_id } = req.body;
            const devices = await Devices.create({ name, status, user_id });
            return res.status(201).send(devices);
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {

        try {
            const { _id } = req.params;
            const data = req.body;
            const devices = await Devices.findByIdAndUpdate(_id, {data}, { new: true });
            return res.status(202).send(devices);
        }
        catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            await Devices.findByIdAndRemove(req.params._id);
            return res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}
