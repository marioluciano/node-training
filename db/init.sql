USE nodedb;
-- initdb.sql
CREATE TABLE people (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  PRIMARY KEY (id)
);