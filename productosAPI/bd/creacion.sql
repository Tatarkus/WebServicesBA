create database anwo;
use anwo;

create table producto (
id int not null AUTO_INCREMENT,
descripcion varchar(30) not null,
stock int,
precio int,
primary key(id));
