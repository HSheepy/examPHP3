<?php

namespace Model;

//require_once "core/database.php";

class Restaurant extends Model
{
    protected $pdo;
    protected $table;

    public function __construct(){
         $this->pdo = \Database::getPdo();
    }

    public function indexApi(){

        $modelUser = new \Model\User();
  
        $user = $modelUser->getUser();
  
        $restaurant = $this->model->findAll($this->modelName);
  
  
        header("Access-Control-Allow-Origin: *");
  
  
        echo json_encode($restaurant);
    }  
}