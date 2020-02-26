<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require '../vendor/autoload.php';

if ( isset($_POST['email']) && isset($_POST['name']) && isset($_POST['subject']) && isset($_POST['message']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {

  $test = "/(content-type|bcc:|cc:|to:)/i";
  foreach ( $_POST as $key => $val ) {
    if ( preg_match( $test, $val ) ) {
      exit;
    }
  }
    $mail = new PHPMailer;

    $mail->isSMTP();
    $mail->SMTPDebug = 0;
    $mail->ContentType = 'text/plain';
    $mail->IsHTML(false);
    $mail->Host = 'nearshoregm.com';
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->Username = 'office@nearshoregm.com';
    $mail->Password = 'nearshoregm1234';
    $mail->setFrom('office@nearshoregm.com');
    $mail->addReplyTo($_POST['email']);
    $mail->addAddress("office@nearshoregm.com");
    $mail->Subject =  $_POST['subject'];
    $mail->Body = $_POST['message'];
    $mail->createHeader();

    if ($mail->send()) {
        echo "SUCCESS";
    } else {
        echo "ERROR";
    }
}
?>
