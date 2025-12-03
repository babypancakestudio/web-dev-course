<?php
$emailTo = "";
$subject = "Email Test";
$message = "I sent this email with php!";
$sentBy = "";
$headers = "From: " . $sentBy . "\r\n";

if (mail($emailTo, $subject, $message, $headers)) {
    echo "Email sent! As far as I know what I do.";
}
else {
    echo "Sorry, your email was not sent.";
}

?>
