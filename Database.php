<?php
require_once("{$_SERVER['DOCUMENT_ROOT']}/config.php");

final class Database
{
    private static $instance;
    private $host = DB_HOST;
    private $user = DB_USER;
    private $pass = DB_PASS;
    private $dbname = DB_NAME;

    private $dbh;
    private $stmt;
    private $error;

    public function __construct() {}

    public function getInstance() {
        if (is_null(self::$instance)) {
            self::$instance = new Database();

            $dsn = "mysql:host={$this->host}';dbname={$this->dbname}";
            $options = array(PDO::ATTR_PERSISTENT => true, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);

            try {
                self::$instance->dbh = new PDO($dsn, self::$instance->user, self::$instance->pass, $options);
            } catch (PDOException $e) {
                self::$instance->error = $e->getMessage();
                echo self::$instance->error;
            }
        } 
        return self::$instance;
    }

    public function query($sql)
    {
        $this->stmt = $this->dbh->prepare($sql);
    }

    public function bind($param, $value, $type = null)
    {

        $type = is_int($value) == true ? PDO::PARAM_INT : (is_bool($value) == true ? PDO::PARAM_BOOL : (is_null($value) == true ? PDO::PARAM_NULL : PDO::PARAM_STR));

        $this->stmt->bindValue($param, $value, $type);
    }

    public function execute()
    {
        return $this->stmt->execute();
    }

    public function fetchAll()
    {
        $this->execute();
        return $this->stmt->fetchAll(PDO::FETCH_OBJ);
    }

    public function fetch()
    {
        $this->execute();
        return $this->stmt->fetch(PDO::FETCH_OBJ);
    }

    public function rowCount()
    {
        return $this->stmt->rowCount();
    }
}
