<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $phone   = $_POST['phone'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        // SMTP Setup
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;

        // YOUR GMAIL & APP PASSWORD
        $mail->Username = 'pixel4inch@gmail.com';
        $mail->Password = 'Bsrinivas090280@';

        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Email data
        $mail->setFrom('pixel4inch@gmail.com', 'Website Quote Request');
        $mail->addAddress('bojjapu.cri@gmail.com'); // where you receive data
        $mail->addReplyTo($email);

        $mail->isHTML(true);
        $mail->Subject = "New Quote Request from Website";

        $mail->Body = "
            <h2>Quote Request Details</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Message:</strong><br>$message</p>
        ";

        $mail->send();

        echo "<script>
          alert('Thank you! Your request has been sent.');
          window.location.href='index.html';
        </script>";

    } catch (Exception $e) {
        echo "Message could not be sent. Error: {$mail->ErrorInfo}";
    }
}
?>
