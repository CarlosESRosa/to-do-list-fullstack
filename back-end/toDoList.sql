DROP DATABASE IF EXISTS ToDoList;

CREATE DATABASE ToDoList;

USE ToDoList;

CREATE TABLE task (
    id INT NOT NULL auto_increment,
    text VARCHAR(200) NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
) ENGINE=INNODB;

INSERT INTO ToDoList.task (text, date) VALUES
    ("Estudar React", NOW()),
    ("Estudar Node", NOW()),
    ("Estudar MySQL", NOW());
