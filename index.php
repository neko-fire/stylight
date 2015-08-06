<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Stylight task</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="/assets/css/app.css">
</head>
<body>
    <header>
        <h1>It's dangerous to go alone. Take this with you!</h1>

        <p>Sword+1 obtained. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
    </header>

    <section class="pin-content">
        some awesome content


        <?php

        // generate 20 items, yay!
        $items = 20;

        $imagesizes = [250, 450, 700];

        for($i = 1; $i <= $items; $i++) { ?>
            <div class="pin-item">
                <img src="/assets/img/<?php ?>.jpg" alt="">
            </div>
        <?php } ?>

    </section>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="/assets/js/vendor/jquery.min.js"><\/script>')</script>
</body>
</html>
