<?php include 'header.php';?>
<style><?php include 'meyerweb-reset.css'; ?></style>
<style><?php include 'contactstyle.css'; ?></style>



<h2 id="contact"> Contact Us</h2>
<form method="post" action="send_form.php">
    <label>First Name</label>
    <input type="text" name="firstname" placeholder="First Name"><br>
    <label>Last Name</label>
    <input type="text" name="lastname" placeholder="Last Name"><br>
    <label>Email</label>
    <input type="email" name="email" placeholder="Email Address"><br>
    <label>Subject</label>
    <input type="text" name="subject" placeholder="Subject"><br>
    <label>Message</label>
    <textarea name="What would you like to ask" cols="30" rows="10"></textarea><br>
    <input type="submit" value="Submit">
</form>

<?php include 'footer.php';?>

