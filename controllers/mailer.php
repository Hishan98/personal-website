<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_POST['contactMessage'] && $_POST['contactMessage'] == true) {
    $name = $_POST['contact_name'];
    $email = $_POST['contact_email'];
    $message = $_POST['contact_message'];

    include_once 'PHPMailer/custom_mails/contact_usMail.php';

    sendMail($name, $mailSubject, $mailBody, $mailAltBody);
} else {
    echo json_encode(['status' => '0', 'msg' => "Error Occurred"]);
}


function sendMail($sendersName, $mailSubject, $mailBody, $mailAltBody)
{
    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);
    $sendersEmail = "admin@hishankavishka.com";
    $receiversAddress = "hishansjc@gmail.com";

    try {
        //Server settings
        $mail->Timeout       =   60;

        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host = 'us100.srilankahosting.com';
        $mail->SMTPAuth = true;
        $mail->Username   = 'admin@hishankavishka.com';
        $mail->Password   = 'if74q5bh76d';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        //Recipients
        $mail->setFrom($sendersEmail, $sendersName);
        $mail->addAddress($receiversAddress);

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = $mailSubject;
        $mail->Body    = $mailBody;
        $mail->AltBody = $mailAltBody;

        $mail->send();
        echo json_encode(['status' => '1', 'msg' => 'Message has been sent']);
    } catch (Exception $e) {
        // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        echo json_encode(['status' => '0', 'msg' => $mail->ErrorInfo]);
    }
}
