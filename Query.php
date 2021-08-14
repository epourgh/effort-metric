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
        if (count($params) == 0) {
            echo '$params is empty';
        }

        if ($id == '') {
            echo '$id is empty';
        }

        if (substr($table, -1) != 's' && $id != '') {
            $table = $table . 's WHERE id=' . $id;
        }

        $this->db->query('SELECT * FROM '. $table.';');
        $rows = $this->db->fetchAll();

        $data = [
            'users' => $rows
        ];
        return $data;
    }

}
