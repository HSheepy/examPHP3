<?php

namespace Controllers;

class Restaurant extends Controller
{

    protected $modelName = \Model\Restaurant::class;


    public function indexApi(){

        $modelUser = new \Model\User();

        $user = $modelUser->getUser();

        $restaurant = $this->model->findAll($this->modelName);

        header("Access-Control-Allow-Origin: *");
        
        echo json_encode($restaurant);

    }
}