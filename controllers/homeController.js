"use strict"

var aboutus = [
    {
        descryption: "located at  343 Depaul st chicago 00117"
    }
];
var health = [
    {
        descryption: "Doctor's are avaliable in store 9am-5pm"
    }
];
var training = [
    {
        descryption: "We are the best in the state at training dog's"
    }
];
var toys = [
    {
        title: "Dog Stuff toys",
        cost: 50
    },
    {
        title: "Chrismas Dog outfit",
        cost: 39
    },
    {
        title: "Frisbee",
        cost: 5
    },
    {
        title: "Cat Scratching Post",
        cost: 45
    }
];
var rating = [
    {
        descryption: "4 out of 5 star average based on 200 reviews."
    }
];
exports.showAboutUs=(req, res) =>{
    res.render("aboutus", {
        AboutUs: aboutus
    });
};
exports.showHealth=(req, res) =>{
    res.render("health", {
        Health: health
    });
};
exports.showTraining=(req, res) =>{
    res.render("training", {
        Training: training
    });
};
exports.showToys=(req, res) =>{
    res.render("toys", {
        Toys: toys
    });
};
exports.showRating=(req, res) =>{
    res.render("rating", {
        Rating: rating
    });
};
exports.showSignUp = (req, res) => {
    res.render("contact");
};
exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};
exports.logRequestPaths = (req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
};
