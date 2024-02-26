var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/contact.html', function (req, res) {
	res.sendFile('porcodio');
})

app.post('/process_post', urlencodedParser, function (req, res) {
	// Prepare output in JSON format
	response = {
		name:req.body.name,
		email:req.body.email,
		subject:req.body.subject,
		message:req.body.message,
	};
	console.log(response);
	res.send('<div>ti risponderemo al più presto</div>'+req.body.name);

	const nodemailer = require("nodemailer");


	async function main() {

		let testAccount = await nodemailer.createTestAccount();


		let transporter = nodemailer.createTransport({
			sendmail:true,
			host: "smtp.ethereal.email",
			port: 587,
			secure: false,
			auth: {
				user: 'bettye.schultz80@ethereal.email',
				pass: 'YUf8DwSKxBEZzCj89z',
			},
		});


		let info = await transporter.sendMail({
			from: 'bettye.schultz80@ethereal.email',
			to: "ricevidatiprogetto@gmail.com",
			subject:'RISPONDERE A QUESTA RICHIESTA',
			text: 'RICHIESTA NUMERO ',
			html:"<p style='color: red'>NOME: </p>"+req.body.name+"<p style='color: red'>EMAIL: </p>"+req.body.email+"<p style='color: red'>OGGETTO: </p>"+req.body.subject+"<p style='color: red'>MESSAGGIO: </p>"+req.body.message
		});

		console.log("Message sent: %s", info.messageId);

		console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

	}

	main().catch(console.error);

})

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
})









