"use strict"

const Subscriber = require("../models/subscriber");

exports.getAllSubscribers = (req, res) => {
    Subscriber.find({})
    .exec()
    .then(subscribers => {
        res.render("subscribers", {
            subscribers:subscribers
        });
    })
    .catch(error => {
        console.log(error.message);
        return[];
    })
    .then(() => {
        console.log("promise complete");
    });
};

exports.getSubscriptionPage = (req, res) => {
    res.render("contact");
};

exports.saveSubscriber = (req, res) => {
    let newSubscriber = new Subscriber({
        name: req.body.name,
        phone: req.body.phone,
        type: req.body.type,
        feedback: req.body.feedback
    });
    newSubscriber.save()
    .then(() => {
        res.render("thanks");
    })
    .catch(error => {
        res.send(error);
    });
};

