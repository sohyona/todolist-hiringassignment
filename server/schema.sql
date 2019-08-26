DROP DATABASE todolist;
CREATE DATABASE todolist;
USE todolist;
CREATE TABLE users (
  task_id INT AUTO_INCREMENT,
  name VARCHAR(31),
  username VARCHAR(31),
  email VARCHAR(31),
  phone VARCHAR(31),
  website VARCHAR(31),
  province VARCHAR(31),
  city VARCHAR(31),
  district VARCHAR(31),
  street VARCHAR(31),
  zipcode VARCHAR(31),
  PRIMARY KEY (task_id)
);
CREATE TABLE todolist (
  task_id INT AUTO_INCREMENT,
  title VARCHAR(31),
  completed BOOLEAN,
  PRIMARY KEY (task_id)
)