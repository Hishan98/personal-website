<?php
$mailSubject = "Contact Us";
$mailAltBody = $email . "(" . $name . ") said " . $message;
$mailBody = '

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <div
        style="width: 40%;height:10%;background-color: #ededed; text-align: center;padding: 50px 50px;border: 1px solid rgb(165, 165, 165); border-radius: 15px;">
        <p style="font-size: 20px;font-weight: 500;margin: auto;">
            ' . $message . '
        </p>
        <p style="font-size: 14px;margin: auto;padding-top: 10px;font-weight: bold;">~ ' . $name . ' ~</p>
        <p style="font-size: 14px;margin: auto;padding-top: 0px;">(' . $email . ')</p>
    </div>
</body>

</html>


';
