<?php include 'header.php';?>
<style><?php include 'contactstyle.css'; ?></style>


<div class="contact-container">
    <h2> Contact Us</h2>

    <form method="post" action="send_form.php" class="contact-form" autocomplete="off">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="What's your name?" required>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email Address" required>

        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="What's up?" required></textarea><br>

        <!-- Honeypot field (hidden from users) -->
        <div class="hidden-field">
            <label>Leave this field empty</label>
            <input type="text" name="website">
        </div>

        <button type="submit">Send Message</button>
    </form>
</div>


<?php include 'footer.php';?>

