-- Creating table if one does not exists, resetting it each load
-- Seed files or schemas are just for production purposes
DROP TABLE IF EXISTS tableName;



CREATE TABLE IF NOT EXISTS tableName (
    id SERIAL PRIMARY KEY,
    column2 FLOAT,
    column3 DECIMAL,
    column4 INTEGER,
    column5 VARCHAR(15),
    column6 TEXT
);

INSERT INTO superheroes 
( column2, column3, column4, column5, column6 )
VALUES
(3.14, 0.543675, 54, 'type15Characters','unlimited text box');
