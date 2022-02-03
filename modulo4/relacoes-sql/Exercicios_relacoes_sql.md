CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Film(id)
);

DESCRIBE Rating;

SELECT * FROM Rating;
SELECT * FROM Film;
SELECT * FROM MovieCast;
SELECT * FROM Actor;

-- EXERCICIO 1

-- a) a chave estrangeira compara o elemento de uma tabela a um elemento de outra tabela

-- b)
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("000", "Tudo bom!", 8, "002");
 
-- c)
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("002", "Muito bom!", 8, "invalid");

-- 14:48:46	INSERT INTO Rating (id, comment, rate, movie_id)  VALUES ("002", "Muito bom!", 8, "005")
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-marcelo-maia-lima`.`Rating`, 
-- CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Film` (`id`))	0.203 sec

-- O erro ocorre por não achar nenhum id correspondente na tabela de filmes

-- d)
ALTER TABLE Film DROP COLUMN avaliacoes;

-- e)
DELETE FROM Film WHERE id = "003";

-- 15:07:26	DELETE FROM Film WHERE id = "004"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint 
-- fails (`carver-marcelo-maia-lima`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Film` (`id`))	0.188 sec

-- O erro ocorreu por o filme está sendo referencia da tabela rating

-- EXERCÍCIO 2

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Film(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- a) ela vai ter um id de um filme e de um ator e referenciar um filme e um ator

-- b)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES ("002", "000"),("002", "002"),("002", "003"), ("004", "005"), ("004", "006"), ("004", "007");

-- c)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES ("002", "001");

-- 15:21:29	INSERT INTO MovieCast(movie_id, actor_id) VALUES ("002", "001")	Error Code: 1452. Cannot add or update a child row: 
-- a foreign key constraint fails (`carver-marcelo-maia-lima`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`)
-- REFERENCES `Actor` (`id`))	0.187 sec

-- Deu erro por não conseguir achar o foregn key do filme

-- d)
DELETE FROM Actor WHERE id = "002";

-- 15:23:22	DELETE FROM Actor WHERE id = "002"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails 
-- (`carver-marcelo-maia-lima`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.188 sec

-- Erro por não conseguir deletar ou atualizar por causa da foreign key

-- EXERCÍCIO 3

SELECT * FROM Film
INNER JOIN Rating ON Film.id = Rating.movie_id;

-- a) O operador ON serve como condição para retorno da tabela

SELECT Film.id, titulo, rate FROM Film
INNER JOIN Rating ON Film.id = Rating.movie_id;

-- DESAFIO 1

-- a)
SELECT titulo, Film.id, Rating.rate, Rating.comment FROM Film
LEFT JOIN Rating
ON Film.id = Rating.movie_id;

-- b)
SELECT Film.id, titulo, actor_id FROM Film
LEFT JOIN MovieCast
On MovieCast.Movie_id = Film.id;

-- c)
SELECT AVG(Rating.rate), Film.id, titulo FROM Film
LEFT JOIN Rating
ON Film.id = Rating.movie_id
GROUP BY (Film.id);

-- DESAFIO 2

-- a) Para ter a comparação de mais de duas tabelas, mas só compara de par em par
SELECT * FROM Film f
LEFT JOIN MovieCast mc ON f.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

-- b)
SELECT f.id as movie_id, titulo, a.id as actor_id, a.name FROM Film f
LEFT JOIN MovieCast mc ON f.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

-- c) Deu certo
SELECT f.id as movie_id, titulo, a.id as actor_id, a.name FROM Film f
LEFT JOIN MovieCast mc ON f.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

-- d)
SELECT a.name as actor_name, r.rate, r.comment FROM Film f
LEFT JOIN Actor a ON f.id = a.id
LEFT JOIN Rating r ON r.id = f.id;