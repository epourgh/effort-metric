<?php

require_once("{$_SERVER['DOCUMENT_ROOT']}/Database.php");

class Query
{
    private $db;

    public function __construct()
    {
        $this->db = Database::getInstance();
    }

    function getIndex()
    {
        $this->db->query('SELECT * FROM users;');
        $rows = $this->db->fetchAll();

        $data = [
            'users' => $rows
        ];
        return $data;
    }

    function getSpecific($requestMethod, $table, $id, $params)
    {
        if (count($params) == 0) { echo '$params is empty'; }
        if ($id == '') { echo '$id is empty'; }

        echo $requestMethod;

        switch($requestMethod) {
            case('GET'):

                if (substr($table, -1) != 's' && $id != '') {
                    $table = $table . 's WHERE id=' . $id;
                }

                $query ='SELECT * FROM ' . $table . ';';

                break;
            case('POST'):
                break;
            case('PUT'):

                $query = "UPDATE {$table}s SET ";

                $i=0;

                foreach ($params as $key => $value) {
                    $i++;
                    $query .= "{$key} = '{$value}'";
                    if ($i !== count($params)) {
                        $query .= ", ";
                    } else {
                        $query .= " ";
                    }
                }

                $query .= "WHERE id={$id};";

                echo $query;

                break;
            case('DELETE'):
                break;
        }

        $this->db->query($query);
        $rows = $this->db->fetchAll();

        $data = [
            'users' => $rows
        ];
        return $data;
    }

}
