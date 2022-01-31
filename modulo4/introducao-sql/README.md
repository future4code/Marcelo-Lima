CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;
DESCRIBE Actor;

# Exercício 1

# a)  VARCHAR é o limite de caracteres, PRIMARY KEY é o identificador unico, not null faz não aceitar valores nulos.

# b)  SHOW DATABASES mostra as informções do USE
#    SHOW TABLES mostra todas as tabelas criadas

# c) Descreve a tabela e seus parâmetros

# EXERCÍCIO 2

# a)

# Exercício 2

# b) Mensagem de erro
# 15:53:38	INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(  "002",     "Jennifer Lawrence",     3000000,     "1990-08-15",     "female" )	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.188 sec

# O erro diz que o primary key está duplicado e por isso não pôde prosseguir com a operação.

# c) Erro Fernanda Montenegro
# 15:56:57	INSERT INTO Actor (id, name, salary) VALUES(   "003",    "Fernanda Montenegro",   300000,   "1929-10-19",    "female" )	Error Code: 1136. Column count doesn't match value count at row 1	0.188 sec

# Está sinalizando que está faltando parâmetros

# d) 
# 16:00:16	INSERT INTO Actor (id, salary, birth_date, gender) VALUES(   "004",   400000,   "1949-04-18",    "male" )	Error Code: 1364. Field 'name' doesn't have a default value	0.172 sec

# Está sinalizando que está faltando o campo name

# e)
# 16:02:51	INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "005",    "Juliana Paes",   719333.33,   1979-03-26,    "female" )	Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0.172 sec

# Mostrando que o valor de birth_date tem alguma coisa errada


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"006",
    "Jennifer Lawrence",
    3000000,
    "1990-08-15",
    "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007",
  "Caio Castro",
  800000,
  "1989-01-22", 
  "male"
);

# EXERCÍCIO 3

# a)
SELECT * FROM Actor;
SELECT id, salary from Actor;
SELECT id, name from Actor WHERE gender = "male";
SELECT id, name from Actor WHERE gender = "female";

# b)
SELECT salary from Actor WHERE name = "Tony Ramos";

# c)
SELECT id, name, birth_date, gender from Actor WHERE gender = "invalid";

# d)
SELECT id, name, salary from Actor WHERE salary < 500000;

# e)
SELECT id, name from Actor WHERE id = "002";
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

# EXERCÍCIO 4

# b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

# c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%");

# d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00.
SELECT * FROM Actor WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;

# EXERCÍCIO 5

CREATE TABLE Film (
    id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR (255) NOT NULL UNIQUE,
    sinopse TEXT NOT NULL,
    data_de_lancamento DATE NOT NULL,
    avaliacoes INT NOT NULL
);

DESCRIBE Films;
SELECT * FROM Films;

# b)
INSERT INTO Film (id, titulo, sinopse, data_de_lancamento, avaliacoes)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006/01/06", 
  7
);

# c)
INSERT INTO Film (id, titulo, sinopse, data_de_lancamento, avaliacoes)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012/12/27", 
  10
);

# d)
INSERT INTO Film (id, titulo, sinopse, data_de_lancamento, avaliacoes)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017/11/02", 
  8
);

# e)
INSERT INTO Film (id, titulo, sinopse, data_de_lancamento, avaliacoes)
VALUES(
  "004",
  "O Auto da Compadecida",
  "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
  "2000/09/10", 
  10
);

# EXERCÍCIO 6

# a)
SELECT id, titulo, avaliacoes from Film WHERE id = "004";

# b)
SELECT * from Film WHERE titulo = "Doce de mãe";

# c)
SELECT id, titulo, sinopse from Film WHERE avaliacoes >= 7;

# EXERCÍCIO 7

# a)
SELECT * from Film WHERE titulo LIKE "%vida%";

# b)
SELECT * from Film WHERE titulo LIKE "%vida%" AND sinopse LIKE "%flor%";

# c)
SELECT * from Film WHERE data_de_lancamento < "2022/01/31";

# d)
SELECT * from Film WHERE data_de_lancamento < "2022/01/31" AND (titulo LIKE "%vida%" OR sinopse LIKE "%flor%") AND avaliacoes >= 7;