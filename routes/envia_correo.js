var express = require('express');
var nodemailer = require("nodemailer");

var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
	var input = JSON.parse(JSON.stringify(req.body));
	
	var nombre = input.txtNombre;
	var correo = input.txtCorreo;
	var asunto = input.txtAsunto;
	var mensaje = input.txtMensaje;

	var textoMail = "Hola, has recibido un correo de "+nombre+" ("+correo+")."
	+" Asunto: "+asunto
	+" Mensaje: "
	+mensaje; 

	var smtpConfig = {
	    host: 'wo28.wiroos.host',
	    port: 25,
	    secure: false, // upgrade later with STARTTLS
	    auth: {
	        user: 'temporal@lariat.com.ar',
	        pass: 'XgoS2lsz)KVU'
	    }
	};
	var smtpTransport = nodemailer.createTransport(smtpConfig);

	smtpTransport.sendMail({
	   from: "Node Test <temporal@lariat.com.ar>", // sender address
	   to: "guidopardo@gmail.com", // comma separated list of receivers
	   subject: "Hola, tienes un nuevo contacto", // Subject line
	   text: textoMail // plaintext body
	}, function(error, response){
	   if(error){
	       console.log(error);
	   }else{
	       console.log("Message sent: " + response.message);
	   }
	});

	res.render('contacto', { title: 'Contactenos', mnuOption: "4", status: "1" });
});

module.exports = router;
