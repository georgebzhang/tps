const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../example'));

app.listen(80, () => {
	console.log('Listening at Port 80.');
});