/*
 * GET home page
 */

//sendgrid email
var api_user  = 'unospark';
var api_key   = '1kdc2014Q1';
var sendgrid  = require('sendgrid') (api_user, api_key);

var name, email, comments;

exports.index = function(req, res)
{
    res.render('index', { });
};

exports.contact_success = function(req, res)
{
    name        = req.body.name;
    email       = req.body.email;
    comments    = req.body.comments;

    console.log("contact: " + name+email+comments);

    var myEmail     = new sendgrid.Email();

    myEmail.setFrom('PaulTuckerMusic');
    myEmail.to      = 'paultucker1@hotmail.com';
    myEmail.setSubject('PaulTuckerMusic: Contact');
    myEmail.setHtml('<p>From: ' + name  + ' </p> <p> Email: ' + email + '</p><p>comments: ' + comments + '</p>');                                                         +

    sendgrid.send(myEmail, function(err, json) { console.log(json);});

    res.render('contact_success', { name: name, email: email, comments: comments });
};

exports.about = function(req, res)
{
    res.render('about', { });
};

exports.preludes = function(req, res)
{
    res.render('preludes', { });
};

exports.studies = function(req, res)
{
    res.render('studies', { });
};

exports.songs = function(req, res)
{
    res.render('songs', { });
};

exports.films = function(req, res)
{
    res.render('films', { });
};

exports.about = function(req, res)
{
    res.render('about', { });
};


exports.news = function(req, res)
{
    res.render('news', { });
};


exports.contact = function(req, res)
{
    res.render('contact', {email: email });
};

