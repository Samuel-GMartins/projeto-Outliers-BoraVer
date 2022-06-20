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
  `produto` varchar(100) DEFAULT NULL,
  `qtd` int DEFAULT '1',
  `preco` varchar(100) DEFAULT NULL,
  `filmes_id` int DEFAULT NULL,
  `fotos` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`carrinho_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrinho`
--

LOCK TABLES `carrinho` WRITE;
/*!40000 ALTER TABLE `carrinho` DISABLE KEYS */;
INSERT INTO `carrinho` VALUES (27,'Oito Mulheres e um Segredo',1,'12.90',8,'oitoMulheres.jpeg'),(28,'Uma Verdade Mais Inconveniente',1,'9.90',33,'umaVerdade.jpeg'),(29,'Bacurau',1,'12.90',2,'bacurau.jpeg');
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
  `nome` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefone` int NOT NULL,
  `assunto` varchar(50) NOT NULL,
  `comentario` varchar(200) DEFAULT NULL,
  `atendimento` int DEFAULT '0',
  PRIMARY KEY (`chamada_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chamada`
--

LOCK TABLES `chamada` WRITE;
/*!40000 ALTER TABLE `chamada` DISABLE KEYS */;
INSERT INTO `chamada` VALUES (15,'samuel','sa.samuelmartins@gmail.com',123123,'biscoito tem?','oi? tem biscoito?                        ',0);
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
  `preco` varchar(20) NOT NULL,
  `promo` int DEFAULT '0',
  `trailer` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`filmes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filmes`
--

LOCK TABLES `filmes` WRITE;
/*!40000 ALTER TABLE `filmes` DISABLE KEYS */;
INSERT INTO `filmes` VALUES (1,'Aquaman','Ação',2018,'Com a ajuda da princesa Mera, Aquaman precisa recuperar o lendário Tridente de Atlan e aceitar seu\ndestino como protetor das profundezas','aquaman.jpeg','9.90',1,'https://youtu.be/yJnzCBt5j1M'),(2,'Bacurau','Drama',2019,'Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não\nconsta mais em qualquer mapa','bacurau.jpeg','12.90',1,'https://youtu.be/qlheaoLnewE'),(3,'O Esquadrão Suicida','Ação',2021,'Um time dos mais perigosos e encarcerados supervilões são contratados por uma agência secreta do\ngoverno, para combater uma poderosa entidade','esquadraoSuicida.jpeg','9.90',0,'https://youtu.be/8pYp4T8TdP4'),(4,'A Familia Addams 2: Pé na Estrada','Comédia',2021,'Pegando a estrada para uma viagem assustadora, os Addams espalham caos e sustos por todo o país','familiaAdams2.jpeg','9.90',0,'https://youtu.be/xX7xM7sCR9s'),(5,'Harry Potter e a Pedra Filosofal','Fantasia',2001,'*Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos\namigos, Rony Weasley e Hermione Granger','harryPotterPedraFilosofal.jpeg','8.50',0,'https://youtu.be/8c9PjveYqfs'),(6,'Invocação do Mal','Terror',2013,'Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por\numa entidade demoníaca em sua fazenda','invocacaoDoMal2.jpeg','8.50',0,'https://youtu.be/GQrrXceHn2E'),(7,'Michael Jackson This is It','Documentario',2009,'Resultado de uma edição de mais de cem horas de gravação, o diretor Kenny Ortega revela cenas raras\nda intimidade de Michael Jackson','michaelJackson.jpeg','6.75',0,'https://youtu.be/zUniG6F_RzY'),(8,'Oito Mulheres e um Segredo','Comedia',2018,'Recém-saída da prisão, Debbie Ocean logo procura sua ex-parceira Lou para realizar um elaborado\nassalto: roubar um colar de diamantes no valor de 150 milhões de dólares, que a empresa Cartier mantém\nem um cofre','oitoMulheres.jpeg','12.90',1,'https://youtu.be/HxFDuCm4qac'),(9,'Pânico 5','Terror',2022,'Um novo assassino se apropria da máscara de Ghostface e começa a perseguir um grupo de adolescentes\npara trazer à tona segredos do passado mortal da cidade','panico5.jpeg','9.90',0,'https://youtu.be/Kglg6MG0jrA'),(10,'Hotel Transilvania 3: Férias Monstruosas','Fantasia',2018,'A família faz um cruzeiro para que Drácula possa sair de férias e abandonar por uns dias seu trabalho no\nHotel Transilvânia','hotelTransilvania3.jpeg','9.90',0,'https://youtu.be/U6q0fw_2W0U'),(11,'Rambo: Programado para Matar','Ação',1982,'Um veterano da Guerra do Vietnã usa todo seu treinamento e agressividade exercitada nos campos de\nbatalha quando é preso e torturado por policiais','rambo.jpeg','8.70',0,'https://youtu.be/stWutFvRWo0'),(12,'Cinquenta Tons de Liberdade','Romance',2018,'Christian Grey e sua nova esposa, Anastasia, abraçam completamente sua inseparável ligação, mas\neventos terríveis começam a comprometer seu final feliz antes mesmo de começar','tonsDeLiberdade.jpeg','12.90',0,'https://youtu.be/yVYqTnXuRPw'),(13,'Como eu era antes de você','Romance',2016,'De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de\nWill, um jovem tetraplégico depressivo e cínico','comoEuEra.jpeg','9.90',0,'https://youtu.be/PnqUs3xiAVI'),(14,'A Freira','Terror',2018,'Presa em um convento na Romênia, uma freira comete suicídio','afreira.jpeg','12.90',0,'https://youtu.be/4V44ew-laC4'),(15,'A hora do Rush','Ação',1998,'A filha de um diplomata chinês é sequestrada em Los Angeles e o cônsul chama o inspetor Lee em Hong\nKong para ajudar o FBI com o caso','aHoraDoRush.jpeg','9.90',1,'https://youtu.be/JMiFsFQcFLE'),(16,'Corra','Terror',2017,'Chris é um jovem fotógrafo negro que está prestes a conhecer os pais de Rose, sua namorada caucasiana.\nCom o tempo, ele percebe que a família dela esconde algo muito perturbador','corra.jpeg','12.90',0,'https://youtu.be/mDGV5UucTu8'),(17,'Em Defesa de Cristo','Drama',2017,'Um jornalista investigativo, ateu convicto, parte em uma investida para desmentir a existência de Deus\napós sua esposa tornar-se cristã','cristo.jpeg','8.75',0,'https://youtu.be/0EFppdsg-LQ'),(18,'Homem Aranha: Sem volta pra Casa','Ação',2021,'O Homem-Aranha precisa lidar com as consequências da sua verdadeira identidade ter sido descoberta','semVoltaPraCasa.jpeg','19.90',1,'https://youtu.be/FDNNHh7TRN0'),(19,'Shrek','Comedia',2001,'Era uma vez um pântano distante, onde vivia um ogro chamado Shrek. De repente, seu sossego é\ninterrompido pela invasão de personagens de contos de fadas que foram banidos de seu reino pelo\nmaldoso Lorde Farquaad','shrek.jpeg','6.70',0,'https://youtu.be/Cvf19P42sNo'),(20,'Valozes e Furiosos 9','Ação',2021,'Dominic Toretto e Letty vivem uma vida pacata ao lado do filho. Mas eles logo são ameaçados pelo\npassado de Dom, seu irmão desaparecido Jakob, que retorna e está trabalhando ao lado de Cipher. Cabe a\nDom reunir a equipe novamente para enfrentá-los','velozeseFuriosos.jpeg','6.70',0,'https://youtu.be/NnDGWyfP7q4'),(21,'Tô Ryca ','Comédia',2016,'Selminha é uma frentista que recebe uma herança de família, mas somente se cumprir o desafio de gastar\n30 milhões de reais em 30 dias, sem acumular nada','toryca.jpeg','6.50',0,'https://youtu.be/GIg8IZettZ4'),(22,'Mãos Talentosas','Drama',2009,'A história de Ben Carson, menino pobre de Detroit, que tirava notas ruins na escola, e se tornou o diretor do centro de neurologia pediátrica do hospital Johns Hopkins.','maosTalentosas.jpeg','9.90',0,'https://youtu.be/pdLs6HqbEVc'),(23,'Closer: Perto Demais','Romance',2004,'Uma história de mentiras, paixão e frustração entre quatro pessoas - Dan, Alice, Anna e Larry - que se encontram por acaso e cujo vínculo se torna difícil de romper.','pertoDemais.jpeg','5.50',0,'https://youtu.be/mUVZbnuXvkM'),(24,'Fragmentado','Terror',2016,'Kevin possui 23 personalidades distintas e consegue alterná-las quimicamente em seu organismo apenas com a força do pensamento. Um dia, ele sequestra três adolescentes que encontra em um estacionamento.','fragmentado.jpeg','12.90',0,'https://youtu.be/vslbpge5r7M'),(25,'Ouija','Terror',2014,'Após a repentina morte de sua melhor amiga, Debbie, Laine encontra um antigo jogo, Ouija, no quarto de Debbie e tenta usá-lo para dizer adeus. Mas, ao invés de contatar a amiga, Laine faz contato com um espírito que se intitula DZ. Quando estranhos eventos começam a ocorrer, Laine recruta seus amigos para desvendarem o que DZ quer.','ouija.jpeg','9.90',0,'https://youtu.be/EqO-Az95qRo'),(26,'007: Sem Tempo Para Morrer','Ação',2021,'James Bond deixa o MI6 e se muda para a Jamaica, mas um antigo amigo aparece e pede sua ajuda para encontrar um cientista desaparecido. Bond mergulha no caso e percebe que a busca é, na verdade, uma corrida para salvar o mundo.','007.jpeg','8.75',0,'https://youtu.be/FlriFMTIPOg'),(27,'O Jogo de Amor - \"Ódio\"','Comédia romântica',2021,'Depois de anos se odiando, a rivalidade implacável dos colegas Lucy e Joshua atinge novos patamares quando eles competem por uma grande promoção. Mas as coisas ficam confusas quando Lucy se vê inesperadamente se apaixonando por seu inimigo.','oJogoDeAmor.jpeg','9.90',0,'https://youtu.be/F5HaPlR-i3I'),(28,'Jurassic World: Reino Ameaçado','Ficção científica',2018,'Três anos após o fechamento do Jurassic World, um vulcão prestes a entrar em erupção põe em risco a vida na ilha Nublar. Não há mais qualquer presença humana no local e os dinossauros vivem livremente. Claire e Owen decidem resgatar os animais e retornam à ilha para a missão. Lá, a dupla encontra novas e aterrorizantes raças de dinossauros gigantes ao descobrir uma conspiração que ameaça todo o planeta.','jurassicworld.jpeg','7.60',0,'https://youtu.be/u2WuN96DSkY'),(29,'King Richard: Criando Campeãs','Drama',2021,'Richard Williams é um pai dedicado e determinado a tornar suas filhas, Venus e Serena, em lendas do esporte. Com métodos pouco tradicionais, ele cria duas das maiores atletas de todos os tempos.','criandoCampeas.jpeg','10.25',0,'https://youtu.be/9MRLMEMhNb0'),(30,'Batman','Ação',2022,'Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.','batman.jpeg','12.90',0,'https://youtu.be/HJv4LQxbVEA'),(31,'Top Gun: Ases Indomáveis','Ação',1986,'A escola naval de pilotos é onde o melhor dos melhores treinam para refinar suas habilidades de voo de elite. Quando o piloto Maverick é enviado para a escola, sua atitude irresponsável e comportamento arrogante o colocam em desacordo com os outros pilotos, especialmente Iceman. Porém Maverick não está apenas competindo para ser o piloto superior de caça, ele também está lutando pela atenção de sua bonita instrutora de voo, Charlotte Blackwood.','topGun.jpeg','8.75',0,'https://youtu.be/kT4Yz8ifxOw'),(32,'After: Depois do Desencontro','Romance',2021,'Tessa toma uma decisão que pode mudar sua vida, mas isso prejudica seu relacionamento com Hardin. Em meio a brigas constantes, o casal tenta achar um ponto de equilíbrio.','after.jpeg','5.50',0,'https://youtu.be/cGYKJR9kcCQ'),(33,'Uma Verdade Mais Inconveniente','Documentário',2017,'Após o alerta sobre a necessidade da união entre países para tratar a crise do aquecimento global, Al Gore mostra não apenas as consequências práticas da crise climática, mas também os avanços obtidos na obtenção de energia através de fontes limpas.','umaVerdade.jpeg','9.90',0,'<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/SdRtq1BcCWs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>'),(35,'luciene faz um pix 2','Romance',NULL,'loren 2022 vamos ser ryyyycos','rambo.jpeg','122.50',0,NULL);
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
-- Table structure for table `session_tbl`
--

DROP TABLE IF EXISTS `session_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `session_tbl` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session_tbl`
--

LOCK TABLES `session_tbl` WRITE;
/*!40000 ALTER TABLE `session_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `session_tbl` ENABLE KEYS */;
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
  `telefone` int NOT NULL,
  `senha` varchar(50) NOT NULL,
  `tipo_usuario` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (5,'Samuel Gonçalves Martins','dev.gmartins@gmail.com','1998-10-20','2022-05-10',3199290,'123',0),(7,'izabela','iza@gmail.com','2022-02-02','1111-12-31',12312312,'123',0),(10,'123','123123','1212-12-03','2312-12-31',123,'123',1),(11,'teste comum','testecomum@gmail.com','1999-02-01','2022-02-02',123123,'123',0);
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

-- Dump completed on 2022-06-20 14:37:19
