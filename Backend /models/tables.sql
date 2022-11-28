Create table users (id serial primary key,
                    username varchar(30),
                    password varchar(30));

Create table students (id serial primary key,
                       name varchar(30),
                       surname varchar(30),
                       studentNo Number(10),
                       Gender varchar(7));