# APROFUNDAMENTO SQL


-- ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
-- ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- a) ALTER TABE adiciona, deleta ou modifica colunas em uma tabela existente / DROP COLUMN deleta a coluna

-- b) CHANGE muda o nome gender para sex e o valor para VARCHAR

-- c) CHANGE muda o gender para gender com o valor VARCHAR(255)

-- d) 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- EXERCÍCIO 2

-- a)
UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10" WHERE id = "003"; 

-- b)
UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";

-- c)
UPDATE Actor SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male" WHERE id = "005";

-- d) Não deu erro
UPDATE Actor SET name = "João" WHERE id = "invalid";

-- EXERCÍCIO 3

-- a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- b)
DELETE FROM Actor WHERE gender = "male" AND salary > "1000000";

-- EXERCÍCIO 4

-- a)
SELECT MAX(salary) FROM Actor;

-- b)
SELECT MIN(salary) FROM Actor WHERE gender = "female";

-- c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- d)
SELECT SUM(salary) FROM Actor;

-- EXERCÍCIO 5

-- a) Retornou a quantidade de cada gender e também a coluna gender.
SELECT COUNT(*), gender FROM Actor GROUP BY gender;

-- b)
SELECT id, name FROM Actor ORDER BY name ASC;

-- c)
SELECT name, salary FROM Actor ORDER BY salary ASC;

-- d)
SELECT name, salary FROM Actor ORDER BY salary DESC LIMIT 3;

-- e)
SELECT AVG(salary), gender FROM Actor GROUP BY gender;

-- EXERCÍCIO 6

-- a)
ALTER TABLE Film ADD playing_limit_date DATE;

-- b)
ALTER TABLE Film CHANGE avaliacoes avaliacoes FLOAT;

-- c)
UPDATE Film SET playing_limit_date = "2020-12-31" WHERE id = "001";
UPDATE Film SET playing_limit_date = "2022-02-15" WHERE id = "003";

-- d)
DELETE FROM Film WHERE id = "001";

-- O comando rodou mas não alterou nenhuma linha.
UPDATE Film SET sinopse = "teste" WHERE id = "001";