-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.31 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for online-marketing
DROP DATABASE IF EXISTS `online-marketing`;
CREATE DATABASE IF NOT EXISTS `online-marketing` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `online-marketing`;

-- Dumping structure for table online-marketing.add
DROP TABLE IF EXISTS `add`;
CREATE TABLE IF NOT EXISTS `add` (
  `id` int NOT NULL AUTO_INCREMENT,
  `store_id` int NOT NULL,
  `image` text NOT NULL,
  `date_from` date NOT NULL,
  `date_to` date NOT NULL,
  `header` varchar(45) NOT NULL,
  `description` varchar(255) NOT NULL,
  `premium` bit(1) NOT NULL,
  PRIMARY KEY (`id`,`store_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_add_store1_idx` (`store_id`),
  CONSTRAINT `fk_add_store1` FOREIGN KEY (`store_id`) REFERENCES `store` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table online-marketing.add: ~0 rows (approximately)

-- Dumping structure for table online-marketing.add_has_category
DROP TABLE IF EXISTS `add_has_category`;
CREATE TABLE IF NOT EXISTS `add_has_category` (
  `add_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`add_id`,`category_id`),
  KEY `fk_add_has_category_category1_idx` (`category_id`),
  KEY `fk_add_has_category_add1_idx` (`add_id`),
  CONSTRAINT `fk_add_has_category_add1` FOREIGN KEY (`add_id`) REFERENCES `add` (`id`),
  CONSTRAINT `fk_add_has_category_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table online-marketing.add_has_category: ~0 rows (approximately)

-- Dumping structure for table online-marketing.category
DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `image` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table online-marketing.category: ~0 rows (approximately)

-- Dumping structure for table online-marketing.contact
DROP TABLE IF EXISTS `contact`;
CREATE TABLE IF NOT EXISTS `contact` (
  `id` int NOT NULL AUTO_INCREMENT,
  `store_id` int NOT NULL,
  `type` varchar(45) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  PRIMARY KEY (`id`,`store_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_contact_store1` (`store_id`),
  CONSTRAINT `fk_contact_store1` FOREIGN KEY (`store_id`) REFERENCES `store` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table online-marketing.contact: ~0 rows (approximately)

-- Dumping structure for table online-marketing.email
DROP TABLE IF EXISTS `email`;
CREATE TABLE IF NOT EXISTS `email` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `contact_id` int NOT NULL,
  PRIMARY KEY (`id`,`contact_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_email_contact1_idx` (`contact_id`),
  CONSTRAINT `fk_email_contact1` FOREIGN KEY (`contact_id`) REFERENCES `contact` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table online-marketing.email: ~0 rows (approximately)

-- Dumping structure for table online-marketing.language
DROP TABLE IF EXISTS `language`;
CREATE TABLE IF NOT EXISTS `language` (
  `id` int NOT NULL AUTO_INCREMENT,
  `short_name` varchar(10) NOT NULL,
  `long_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table online-marketing.language: ~2 rows (approximately)
INSERT INTO `language` (`id`, `short_name`, `long_name`) VALUES
	(1, 'SR', 'Serbian'),
	(2, 'EN', 'English');

-- Dumping structure for table online-marketing.phone
DROP TABLE IF EXISTS `phone`;
CREATE TABLE IF NOT EXISTS `phone` (
  `id` int NOT NULL AUTO_INCREMENT,
  `number` varchar(45) NOT NULL,
  `contact_id` int NOT NULL,
  PRIMARY KEY (`id`,`contact_id`),
  KEY `fk_phone_contact1_idx` (`contact_id`),
  CONSTRAINT `fk_phone_contact1` FOREIGN KEY (`contact_id`) REFERENCES `contact` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table online-marketing.phone: ~0 rows (approximately)

-- Dumping structure for table online-marketing.store
DROP TABLE IF EXISTS `store`;
CREATE TABLE IF NOT EXISTS `store` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `num_of_rating` int NOT NULL,
  `sum_of_rating` int NOT NULL,
  `banner_image` text,
  `store_image` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table online-marketing.store: ~0 rows (approximately)

-- Dumping structure for table online-marketing.store_has_category
DROP TABLE IF EXISTS `store_has_category`;
CREATE TABLE IF NOT EXISTS `store_has_category` (
  `store_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`store_id`,`category_id`),
  KEY `fk_store_has_category_category1_idx` (`category_id`),
  KEY `fk_store_has_category_store1_idx` (`store_id`),
  CONSTRAINT `fk_store_has_category_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_store_has_category_store1` FOREIGN KEY (`store_id`) REFERENCES `store` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table online-marketing.store_has_category: ~0 rows (approximately)

-- Dumping structure for table online-marketing.subcategory
DROP TABLE IF EXISTS `subcategory`;
CREATE TABLE IF NOT EXISTS `subcategory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`,`category_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_subcategory_category1_idx` (`category_id`),
  CONSTRAINT `fk_subcategory_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table online-marketing.subcategory: ~0 rows (approximately)

-- Dumping structure for table online-marketing.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `store_id` int DEFAULT NULL,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  KEY `fk_user_store_idx` (`store_id`),
  CONSTRAINT `fk_user_store` FOREIGN KEY (`store_id`) REFERENCES `store` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table online-marketing.user: ~9 rows (approximately)
INSERT INTO `user` (`id`, `name`, `password`, `email`, `store_id`, `type`) VALUES
	(1, 'admin', 'admin', 'admin@mail.com', NULL, 'ADMIN'),
	(2, 'test', 'test', 'test', NULL, 'USER'),
	(3, 'tttt', 'tttt', 'tttt', NULL, 'USER'),
	(4, 'dddd', 'dddd', 'ddd', NULL, 'USER'),
	(5, 'rere', 'rere', 'rere', NULL, 'USER'),
	(6, 'ttyyy', 'yyyy', 'yyy', NULL, 'USER'),
	(7, 'tre', 'ytr', 'uyt', NULL, 'USER'),
	(8, 'trete', 'tretretre', 'tretreter', NULL, 'USER'),
	(9, 'treteerter', 'tretretreertert', 'tretretererterterter', NULL, 'USER');

-- Dumping structure for table online-marketing.visit
DROP TABLE IF EXISTS `visit`;
CREATE TABLE IF NOT EXISTS `visit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `store_id` int DEFAULT NULL,
  `add_id` int DEFAULT NULL,
  `date` date NOT NULL,
  `city` varchar(45) DEFAULT NULL,
  `region` varchar(45) DEFAULT NULL,
  `country` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_visit_store1_idx` (`store_id`),
  KEY `fk_visit_add1_idx` (`add_id`),
  CONSTRAINT `fk_visit_add1` FOREIGN KEY (`add_id`) REFERENCES `add` (`id`),
  CONSTRAINT `fk_visit_store1` FOREIGN KEY (`store_id`) REFERENCES `store` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table online-marketing.visit: ~0 rows (approximately)

-- Dumping structure for table online-marketing.vocabulary
DROP TABLE IF EXISTS `vocabulary`;
CREATE TABLE IF NOT EXISTS `vocabulary` (
  `id` int NOT NULL AUTO_INCREMENT,
  `language_id` int NOT NULL,
  `key` text NOT NULL,
  `meaning` text NOT NULL,
  PRIMARY KEY (`id`,`language_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_table1_language1` (`language_id`),
  CONSTRAINT `fk_table1_language1` FOREIGN KEY (`language_id`) REFERENCES `language` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table online-marketing.vocabulary: ~43 rows (approximately)
INSERT INTO `vocabulary` (`id`, `language_id`, `key`, `meaning`) VALUES
	(1, 1, 'users', 'Korisnici'),
	(2, 2, 'users', 'Users'),
	(3, 1, 'stores', 'Prodavnice'),
	(4, 2, 'stores', 'Stores'),
	(5, 1, 'categories', 'Kategorije'),
	(6, 2, 'categories', 'Categories'),
	(7, 1, 'adds', 'Reklame'),
	(8, 2, 'adds', 'Adds'),
	(9, 1, 'language', 'Jezik'),
	(10, 2, 'language', 'Language'),
	(11, 1, 'logout', 'Odjavi se'),
	(12, 2, 'logout', 'Log Out'),
	(13, 1, 'search', 'Pretrazi'),
	(14, 2, 'search', 'Search'),
	(15, 1, 'addLanguage', 'Dodaj Jezik'),
	(16, 2, 'addLanguage', 'Add Language'),
	(17, 1, 'addSyntax', 'Dodaj Sintaksu'),
	(18, 2, 'addSyntax', 'Add Syntax'),
	(19, 1, 'ok', 'Ok'),
	(20, 2, 'ok', 'Ok'),
	(21, 1, 'cancel', 'Zatvori'),
	(22, 2, 'cancel', 'Cancel'),
	(23, 1, 'key', 'Kljuc'),
	(24, 2, 'key', 'Key'),
	(25, 1, 'options', 'Opcije'),
	(26, 2, 'options', 'Options'),
	(47, 1, 'syntax', 'Sintaksa'),
	(48, 2, 'syntax', 'Syntax'),
	(49, 1, 'translation', 'Prevod'),
	(50, 2, 'translation', 'Translation'),
	(51, 1, 'select', 'Izaberi'),
	(52, 2, 'select', 'Select'),
	(53, 1, 'edit', 'Izmjeni'),
	(54, 2, 'edit', 'Edit'),
	(55, 2, 'deleteSyntax?', 'Do you want to delete syntax?'),
	(57, 2, 'deleteSyntaxWithKey?', 'Are you sure you want to delete syntax with key'),
	(58, 1, 'deleteSyntaxWithKey?', 'Da li ste sigurni da zelite da izbrisete sintaksu sa kljucem'),
	(66, 1, 'serbian', 'Srpski'),
	(67, 2, 'serbian', 'Serbian'),
	(69, 2, 'english', 'English'),
	(70, 1, 'english', 'Engleski'),
	(78, 1, 'fillAllFields', 'Popunite sva polja'),
	(79, 2, 'fillAllFields', 'Fill all fields'),
	(80, 1, 'errorAdd', 'Greska prilikom dodavanja novog zapisa'),
	(81, 2, 'errorAdd', 'Error while adding new record'),
	(82, 2, 'errorDelete', 'Greska prilikom brisanja zapisa'),
	(83, 2, 'errorDelete', 'Error while deleting record'),
	(87, 1, 'deleteSyntax?', 'Da li zelite da izbrisete sintaksu?');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
