<?php
if ( isset($_POST['email']) && isset($_POST['name']) && isset($_POST['subject']) && isset($_POST['message']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {

  $test = "/(content-type|bcc:|cc:|to:)/i";
  foreach ( $_POST as $key => $val ) {
    if ( preg_match( $test, $val ) ) {
      exit;
    }
  }

$headers = 'From: ' . $_POST["name"] . '<' . $_POST["email"] . '>' . "\r\n" .
    'Reply-To: ' . $_POST["email"] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  if(mail( "marko@nearshoregm.com", $_POST['subject'], $_POST['message'], $headers )){
      echo "SUCCESS";
  } else {
      echo "ERROR";
  }
}
?>