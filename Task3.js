var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'gollavijayakalyani@gmail.com',
        pass:'ijxishhtbyyleazm',
    }

    });
    var mailOptions={
        from:'gollavijayakalyani@gmail.com',
        to:'pravin.consensus@gmail.com',
        subject:'sending mail from 20A21A0548',
        text:'Task3',
    }
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log('error');
        }
        else{
            console.log('email sent :'+info.response);
        }
    })