/*****
 *
 * Refactored PHP Code to NodeJs June 2014
 *
 *****/

var  express     = require('express')
    ,routes      = require('./routes')
    ,http        = require('http')
    ,path        = require('path')
    ,handlebars  = require('express3-handlebars')
    ,app         = express();

var port        = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var domain      = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";


app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', handlebars());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

if ('development' == app.get('env'))
{
    app.use(express.errorHandler());
}

app.get('/',          routes.index);
app.get('/preludes',  routes.preludes);
app.get('/studies',   routes.studies);
app.get('/songs',     routes.songs);
app.get('/films',     routes.films);
app.get('/news',      routes.news);
app.get('/contact',   routes.contact);
app.get('/about',     routes.about);
//app.get('/news',    routes.news);

app.post('/contact_success', routes.contact_success);

console.log("PaulTuckerMusic is ready to serve you now");
http.createServer(app).listen(port, domain);


