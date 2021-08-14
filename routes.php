<?php

require_once("{$_SERVER['DOCUMENT_ROOT']}/Router.php");

$route = new Route;

$route->get('/');

$route->get('/users');

$route->get('/user/:id');

$route->put('/user/:id?name=:name&password=:password&email=:email');