<?php
$littleStuffCookieName = "lcookie";
$bigStuffCookieName = "bcookie";

if (isset($_GET["updateCookies"])) {
    setcookie($littleStuffCookieName, $_GET[$littleStuffCookieName]);
    setcookie($bigStuffCookieName, $_GET[$bigStuffCookieName]);
    echo $_COOKIE["littleStuffCookieName"];
}

if (isset($_GET["getCookies"])) {
    $cookies = array("lcookie" => $_COOKIE["lcookie"], "bcookie" => $_COOKIE["bcookie"]);
    echo json_encode($cookies);
}
?>