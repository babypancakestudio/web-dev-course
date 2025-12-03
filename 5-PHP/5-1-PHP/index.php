<?php
    if($_POST){
        $family = array("Henry", "Ellen", "Jack", "Shane");

        $isKnown = false;

        foreach ($family as $value) {
            if($value == $_POST["name"]){
                $isKnown = true;
                break;
            }
        }
        if($isKnown){
            echo "hi there, ".$_POST["name"].'!';
            echo "How old are you?";
        }
        else{
            echo "Sorry, I don't know you.";
        }

    }

?>

<form method="post">
    <p>What is your name?</p>

    <p><input type="text" name="name" autocomplete="off"></p>
    <p><input type="submit" value="Submit"></p>

</form>


