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

                $query = "INSERT INTO {$table}s (";

                $i = 0;
                foreach ($params as $key => $value) {
                    $i++;
                    $query .= "{$key}";
                    $query .= ($i !== count($params)) ? ", " : " ";
                }

                $query .= ') VALUES (';

                $i = 0;
                foreach ($params as $key => $value) {
                    $i++;
                    $query .= "'{$value}'";
                    $query .= ($i !== count($params)) ? ", " : " ";
                }

                $query .= ");";

                break;
            case('PUT'):

                $query = "UPDATE {$table}s SET ";

                $i = 0;

                foreach ($params as $key => $value) {
                    $i++;
                    $query .= "{$key} = '{$value}'";
                    $query .= ($i !== count($params)) ? ", " : " ";
                }

                $query .= "WHERE id={$id};";

                break;
            case('DELETE'):
                $query = 'DELETE FROM ' . $table . 's WHERE id=' . $id;
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
