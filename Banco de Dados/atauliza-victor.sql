CREATE DATABASE  IF NOT EXISTS `projeto_video` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `projeto_video`;
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
-- Table structure for table `dev`
--

DROP TABLE IF EXISTS `dev`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dev` (
  `dev_id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `link` varchar(200) DEFAULT NULL,
  `foto` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`dev_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dev`
--

LOCK TABLES `dev` WRITE;
/*!40000 ALTER TABLE `dev` DISABLE KEYS */;
INSERT INTO `dev` VALUES (1,'Cynthia Cavalcanti','https://www.linkedin.com/in/cynthia-cavalcanti-249033215/','fotoCynthia.jpg'),(2,'Eliabe Padilha','https://github.com/Goburou','fotoEliabe.jpg'),(3,'Hemylli Santos','https://www.linkedin.com/in/hemylli/','fotoHemylli.jpg'),(4,'Larissa Soares','https://www.linkedin.com/in/larissa-soares-tech/','fotoLarissa.jpg'),(5,'Luciene Bento','https://www.linkedin.com/in/luciene-bento-de-oliveira-3a6a01198/','fotoLuciene.jpg'),(6,'Priscila Almeida','https://www.linkedin.com/in/priscila-almeida-b71b9265/','fotoPriscila.jpg'),(7,'Renata Klausing','https://github.com/reklausing19','fotoRenata.jpg'),(8,'Samuel Martins','https://www.linkedin.com/in/sgmartinss/','fotoSamuel.jpg'),(9,'Thais Vicente','https://github.com/Thais-Vicente','fotoThais.jpg'),(10,'Victor Marques','https://www.linkedin.com/in/victor-marques-985695237','fotoVictor.jpg');
/*!40000 ALTER TABLE `dev` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-23 13:53:34
