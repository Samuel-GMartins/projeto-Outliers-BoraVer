-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: projeto_video
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrinho`
--

DROP TABLE IF EXISTS `carrinho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrinho` (
  `carrinho_id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) NOT NULL,
  `servico` varchar(100) NOT NULL,
  `produto` varchar(100) NOT NULL,
  `quantidade` int NOT NULL,
  `preco` int NOT NULL,
  `qtdTelas` int NOT NULL,
  PRIMARY KEY (`carrinho_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrinho`
--

LOCK TABLES `carrinho` WRITE;
/*!40000 ALTER TABLE `carrinho` DISABLE KEYS */;
INSERT INTO `carrinho` VALUES (1,'1','Aluguel','A Freira',1,10,1),(2,'2','Assinatura','Assinatura Mensal',1,10,1),(3,'1','Assinatura','Assinatura Semestral',1,50,1),(5,'2','Aluguel','Velozes e Furiosos',2,20,1),(6,'2','Aluguel','Skrek',3,30,1);
/*!40000 ALTER TABLE `carrinho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chamada`
--

DROP TABLE IF EXISTS `chamada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chamada` (
  `chamada_id` int NOT NULL AUTO_INCREMENT,
  `nome_usuario` varchar(100) NOT NULL,
  `tipo_chamada` varchar(50) NOT NULL,
  `valor_chamada` int NOT NULL,
  `descricao_chamada` varchar(500) NOT NULL,
  PRIMARY KEY (`chamada_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chamada`
--

LOCK TABLES `chamada` WRITE;
/*!40000 ALTER TABLE `chamada` DISABLE KEYS */;
INSERT INTO `chamada` VALUES (1,'Roberta Fernanda','Perguntas Frequentes',5,'Fiz a compra de um plano mensal e ainda nao caiu :('),(2,'Maria Do Rosario','Reembolso',3,'Não me senti satisfeito com o site. Não tem musical Japones'),(3,'Maria Do Rosario','Sugira/Elogie',5,'Gostei do site. Implementem O trailer do filme na pag principal');
/*!40000 ALTER TABLE `chamada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cupom`
--

DROP TABLE IF EXISTS `cupom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cupom` (
  `cupom_id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(30) NOT NULL,
  `desconto` int NOT NULL,
  `codigo` varchar(10) NOT NULL,
  PRIMARY KEY (`cupom_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cupom`
--

LOCK TABLES `cupom` WRITE;
/*!40000 ALTER TABLE `cupom` DISABLE KEYS */;
INSERT INTO `cupom` VALUES (1,'10%OFF',10,'12345'),(2,'20%OFF',20,'67890'),(3,'30%OFF',30,'BEMVINDO30');
/*!40000 ALTER TABLE `cupom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filmes`
--

DROP TABLE IF EXISTS `filmes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filmes` (
  `filmes_id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `genero` varchar(100) NOT NULL,
  `ano` int DEFAULT NULL,
  `sinopse` varchar(500) DEFAULT NULL,
  `fotos` varchar(100) NOT NULL,
  PRIMARY KEY (`filmes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filmes`
--

LOCK TABLES `filmes` WRITE;
/*!40000 ALTER TABLE `filmes` DISABLE KEYS */;
INSERT INTO `filmes` VALUES (1,'Aquaman','ação',2018,'Com a ajuda da princesa Mera, Aquaman precisa recuperar o lendário Tridente de Atlan e aceitar seu\ndestino como protetor das profundezas','aquaman.jpeg'),(2,'Bacurau','drama',2019,'Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não\nconsta mais em qualquer mapa','bacurau.jpeg'),(3,'O Esquadrão Suicida','ação',2021,'Um time dos mais perigosos e encarcerados supervilões são contratados por uma agência secreta do\ngoverno, para combater uma poderosa entidade','esquadraoSuicida.jpeg'),(4,'A Familia Addams 2: Pé na Estrada','comédia',2021,'Pegando a estrada para uma viagem assustadora, os Addams espalham caos e sustos por todo o país','familiaAdams2.jpeg'),(5,'Harry Potter e a Pedra Filosofal','fantasia',2001,'*Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos\namigos, Rony Weasley e Hermione Granger','harryPotterPedraFilosofal.jpeg'),(6,'Invocação do Mal','terror',2013,'Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por\numa entidade demoníaca em sua fazenda','invocacaoDoMal2.jpeg'),(7,'Michael Jackson This is It','documentario',2009,'Resultado de uma edição de mais de cem horas de gravação, o diretor Kenny Ortega revela cenas raras\nda intimidade de Michael Jackson','michaelJackson.jpeg'),(8,'Oito Mulheres e um Segredo','comedia',2018,'Recém-saída da prisão, Debbie Ocean logo procura sua ex-parceira Lou para realizar um elaborado\nassalto: roubar um colar de diamantes no valor de 150 milhões de dólares, que a empresa Cartier mantém\nem um cofre','oitoMulheres.jpeg'),(9,'Pânico 5','terror',2022,'Um novo assassino se apropria da máscara de Ghostface e começa a perseguir um grupo de adolescentes\npara trazer à tona segredos do passado mortal da cidade','panico5.jpeg'),(10,'Hotel Transilvania 3: Férias Monstruosas','fantasia',2018,'A família faz um cruzeiro para que Drácula possa sair de férias e abandonar por uns dias seu trabalho no\nHotel Transilvânia','hotelTransilvania3.jpeg'),(11,'Rambo: Programado para Matar','ação',1982,'Um veterano da Guerra do Vietnã usa todo seu treinamento e agressividade exercitada nos campos de\nbatalha quando é preso e torturado por policiais','rambo.jpeg'),(12,'Cinquenta Tons de Liberdade','romance',2018,'Christian Grey e sua nova esposa, Anastasia, abraçam completamente sua inseparável ligação, mas\neventos terríveis começam a comprometer seu final feliz antes mesmo de começar','tonsDeLiberdade.jpeg'),(13,'Como eu era antes de você','romance',2016,'De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de\nWill, um jovem tetraplégico depressivo e cínico','comoEuEra.jpeg'),(14,'A Freira','terror',2018,'Presa em um convento na Romênia, uma freira comete suicídio','afreira.jpeg'),(15,'A hora do Rush','ação',1998,'A filha de um diplomata chinês é sequestrada em Los Angeles e o cônsul chama o inspetor Lee em Hong\nKong para ajudar o FBI com o caso','aHoraDoRush.jpeg'),(16,'Corra','terror',2017,'Chris é um jovem fotógrafo negro que está prestes a conhecer os pais de Rose, sua namorada caucasiana.\nCom o tempo, ele percebe que a família dela esconde algo muito perturbador','corra.jpeg'),(17,'Em Defesa de Cristo','drama',2017,'Um jornalista investigativo, ateu convicto, parte em uma investida para desmentir a existência de Deus\napós sua esposa tornar-se cristã','cristo.jpeg'),(18,'Homem Aranha: Sem volta pra Casa','ação',2021,'O Homem-Aranha precisa lidar com as consequências da sua verdadeira identidade ter sido descoberta','semVoltaPraCasa.jpeg'),(19,'Shrek','comedia',2001,'Era uma vez um pântano distante, onde vivia um ogro chamado Shrek. De repente, seu sossego é\ninterrompido pela invasão de personagens de contos de fadas que foram banidos de seu reino pelo\nmaldoso Lorde Farquaad','shrek.jpeg'),(20,'Valozes e Furiosos 9','ação',2021,'Dominic Toretto e Letty vivem uma vida pacata ao lado do filho. Mas eles logo são ameaçados pelo\npassado de Dom, seu irmão desaparecido Jakob, que retorna e está trabalhando ao lado de Cipher. Cabe a\nDom reunir a equipe novamente para enfrentá-los','velozeseFuriosos.jpeg'),(21,'Tô Ryca ','comédia',2016,'Selminha é uma frentista que recebe uma herança de família, mas somente se cumprir o desafio de gastar\n30 milhões de reais em 30 dias, sem acumular nada','toryca.jpeg');
/*!40000 ALTER TABLE `filmes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicos`
--

DROP TABLE IF EXISTS `servicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicos` (
  `servicos_id` int NOT NULL AUTO_INCREMENT,
  `nome_usuario` varchar(100) NOT NULL,
  `tipo_servico` varchar(50) NOT NULL,
  `valor_servico` int NOT NULL,
  `descricao_servico` varchar(500) NOT NULL,
  PRIMARY KEY (`servicos_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicos`
--

LOCK TABLES `servicos` WRITE;
/*!40000 ALTER TABLE `servicos` DISABLE KEYS */;
INSERT INTO `servicos` VALUES (1,'Maria Do Rosario','Assinatura Mensal',20,'Assinatura do Plano FIlmes Mensal - 1 tela'),(2,'Pedro henrique','Assinatura Semestral',20,'Assinatura do Plano FIlmes Semestral - 1 tela'),(3,'Roberta Fernanda','Aluguel Filme',50,'Aluguel do Filme ...'),(4,'Maria Do Rosario','Aluguel Filme',10,'Aluguel do Filme - Veloses e Furiosos'),(5,'Fernando Vieira','Aluguel Filme Anual',30,'Aluguel de 1 ano do Filme - Veloses e Furiosos'),(6,'Fernando Vieira','Assinatura Mensal Familia - 3 telas',50,'Assinatura Mensal do Plano Familia 3 telas');
/*!40000 ALTER TABLE `servicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `usuario_id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `data_nascimento` date NOT NULL,
  `data_cadastro` date NOT NULL,
  `telefone` int DEFAULT NULL,
  `senha` varchar(50) NOT NULL,
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Enzo Henrique Filho','enzinhomatadorhacker@yahoo.com.br','2008-11-11','2022-05-20',31933227,'123456'),(2,'Maria Do Rosario','mariajesus@yahoo.com.br','2077-12-21','2022-05-17',98761345,'771413'),(3,'Pollyahnee Stephanye ','pollypolly@gmail.com','1995-02-02','2022-05-19',992939143,'fdsdcCc34'),(4,'Alexandre Rodrigues','xandao06@gmail.com','1975-05-01','2022-05-20',88334572,'lasanhadepalmito');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendas`
--

DROP TABLE IF EXISTS `vendas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendas` (
  `vendas_id` int NOT NULL AUTO_INCREMENT,
  `cliente` varchar(45) DEFAULT NULL,
  `servico` varchar(45) DEFAULT NULL,
  `valor` int DEFAULT NULL,
  `produto` varchar(45) DEFAULT NULL,
  `qtdTelas` int DEFAULT NULL,
  `descricao` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`vendas_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendas`
--

LOCK TABLES `vendas` WRITE;
/*!40000 ALTER TABLE `vendas` DISABLE KEYS */;
INSERT INTO `vendas` VALUES (1,'Maria do Rosario','Aluguel Filme',10,'Veloses e Furiosos',1,'Loren Descricao'),(2,'Enzo Henrique','Assinatura Plano Mensal',20,'Plano de Assinatura',1,'Loren descricao'),(3,'Alexandre Rodrigues','Assinatura Semestral',55,'Plano De Assinatura',1,'Loren Descricao'),(4,NULL,NULL,NULL,NULL,NULL,'');
/*!40000 ALTER TABLE `vendas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-09 13:45:11
