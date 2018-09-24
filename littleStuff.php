<?php
    // Simulate delay
    $delay = rand(1,7); // 1 day to 1 week
    sleep($delay);
    echo $delay;
?>