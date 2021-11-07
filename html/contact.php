<?php
	/*
	|--------------------------------------------------------------------------
	| Mailer module
	|--------------------------------------------------------------------------
	|
	| These module are used when sending email from contact form
	|
	*/
	
	//Get your email address
	$contact_email = 'zindoc@gmail.com'; //Example : zindoc@gmail.com
	
	//Enter your email address, email from contact form will send to this addresss. Please enter inside quotes ('myemail@email.com')
	define('DEST_EMAIL', $contact_email);
	
	//Change email subject to something more meaningful
	define('SUBJECT_EMAIL', 'Email from contact form');
	//Success Message
	define('SUCCESS_MESSAGE', '<h4 class="form_thanks">Thanks! Our Team will get in touch in next 24 hours</h4>');
	
	//Error message when message can't send
	define('ERROR_MESSAGE', '<h4 class="form_thanks">Oops! something went wrong, please try to submit later.</h4>');
	
	
	/*
	|
	| Begin sending mail
	|
	*/
	$from_name = $_POST['name'];
	$from_email = $_POST['email'];
	$mime_boundary_1 = md5(time());
    $mime_boundary_2 = "1_".$mime_boundary_1;
    $mail_sent = false;
 
    # Common Headers
    $headers = "";
    $headers .= 'From: '.$from_name.'<'.$from_email.'>'.PHP_EOL;
    $headers .= 'Reply-To: '.$from_name.'<'.$from_email.'>'.PHP_EOL;
    $headers .= 'Return-Path: '.$from_name.'<'.$from_email.'>'.PHP_EOL;        // these two to set reply address
    $headers .= "Message-ID: <".date('Y-m-d H:i:s')."webmaster@".$_SERVER['SERVER_NAME'].">";
    $headers .= "X-Mailer: PHP v".phpversion().PHP_EOL;                  // These two to help avoid spam-filters

    # Boundry for marking the split & Multitype Headers
    $headers .= 'MIME-Version: 1.0'.PHP_EOL;
    $headers .= "Content-Type: multipart/mixed;".PHP_EOL;
    $headers .= "   boundary=\"".$mime_boundary_1."\"".PHP_EOL;
	
	$message = 'Name: '.$from_name.PHP_EOL;
	$message.= 'Email: '.$from_email.PHP_EOL.PHP_EOL;
	$message.= 'Message: '.PHP_EOL.$_POST['comment'].PHP_EOL.PHP_EOL;
	
	if(isset($_POST['website']))
	{
		$message.= 'Website: '.$_POST['website'].PHP_EOL;
	}
	if(isset($_POST['phone']))
	{
		$message.= 'Phone: '.$_POST['phone'].PHP_EOL;
	}
	if(isset($_POST['address']))
	{
		$message.= 'Address: '.$_POST['address'].PHP_EOL;
	}
	
	if(!empty($from_name) && !empty($from_email) && !empty($message))
	{
		mail(DEST_EMAIL, SUBJECT_EMAIL, $message, $headers);
		echo SUCCESS_MESSAGE;
	}
	else
	{
		echo ERROR_MESSAGE;
	}
	
	/*
	|
	| End sending mail
	|
	*/
?>