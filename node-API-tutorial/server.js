var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoder({extended:true}));

var artists = [
	{
		id: 1,
		name: 'Metallica'
	},
	{
		id: 2,
		name: 'Manowar'
	}
];

app.get('/', function (req, res) {
	res.send('Hello API, test boroda');
})

app.get('/artists', function (req, res) {
	res.send(artists);
})

app.get('/artists/:id', function (req, res) {
	console.log(req.params);
	var artist = artists.find(function (artist) {
		return artist.id === Number(req.params.id)
	});
	res.send(artist);
})

app.post('artists', function (req, res) {
	console.log(req.body);
	res.send('post data');
})

app.listen(8010);

console.log("server O"K);