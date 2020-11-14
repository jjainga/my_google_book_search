const db = require("../models")

module.exports = {
    findAll: function(req,res) {
        db.book
            .find()
            .then(dbBook => res.json(dbBook))
            .catch(err => res.staus(422).json(err))
    },
    findById: function(req, res) {
        db.book
            .findById(req.params.id)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(er))
    },
    create: function({body}, res) {
        db.book
            .create(body)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err))
    },
    update: function({body, params}, res) {
        db.book
            .findOneAndUpdate({_id: params.id}, {$set: body})
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err))
    },
    remove: function(req,res) {
        db.book
            .findByIdAndRemove({_id: req.params.id})
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err))
    }
}