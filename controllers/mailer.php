<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);


$sendersName = 'Hishan';
$sendersEmail = 'test@gmail.com';
$mailSubject = "asdasdasd";
$receiversAddress = "hishansjc@gmail.com";
$mailBody = 'asdasdasdawdwadsadwa';

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;

    $mail->isSMTP();
    $mail->Host       = 'mail.hishankavishka.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'admin@hishankavishka.com';
    $mail->Password   = 'myPassword';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // $mail->isSMTP();
    // $mail->Host = 'ssl0.ovh.net';
    // $mail->SMTPAuth = true;
    // $mail->Username = 'dev.test@cagliero.eu';
    // $mail->Password = 'Test@2022';
    // $mail->Port = 465;
    // $mail->SMTPSecure = 'ssl';

    // $mail->isSMTP();                                                     
    // $mail->Host       = 'mail.stfashion-dashboard.com';                  
    // $mail->SMTPAuth   = true;                                            
    // $mail->Username   = 'no-reply@stfashion-dashboard.com';              
    // $mail->Password   = '[i_pzB!]%1pY';                                  
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;                    
    // $mail->Port       = 465;                                             


    //Recipients
    $mail->setFrom($sendersEmail, $sendersName);
    $mail->addAddress($receiversAddress);               //Name is optional

    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');        
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg'); 

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
