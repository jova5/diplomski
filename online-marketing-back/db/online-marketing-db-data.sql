-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.29 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table online-marketing.add: ~0 rows (approximately)

-- Dumping data for table online-marketing.add_has_category: ~0 rows (approximately)

-- Dumping data for table online-marketing.category: ~0 rows (approximately)

-- Dumping data for table online-marketing.contact: ~5 rows (approximately)
INSERT INTO `contact` (`id`, `store_id`, `type`, `address`, `latitude`, `longitude`) VALUES
	(1, 2, NULL, 'test', NULL, NULL),
	(2, 3, NULL, 'pppp', NULL, NULL),
	(3, 4, NULL, 'eee', NULL, NULL),
	(4, 5, NULL, 'aaaa', NULL, NULL),
	(5, 6, NULL, 'bbb', NULL, NULL);

-- Dumping data for table online-marketing.email: ~0 rows (approximately)
INSERT INTO `email` (`id`, `email`, `contact_id`) VALUES
	(1, 'aaa', 4),
	(2, 'bbbb', 5);

-- Dumping data for table online-marketing.language: ~0 rows (approximately)
INSERT INTO `language` (`id`, `short_name`, `long_name`) VALUES
	(1, 'SR', 'Serbian'),
	(2, 'EN', 'English');

-- Dumping data for table online-marketing.phone: ~0 rows (approximately)
INSERT INTO `phone` (`id`, `number`, `contact_id`) VALUES
	(1, 'bbbb', 5);

-- Dumping data for table online-marketing.store: ~2 rows (approximately)
INSERT INTO `store` (`id`, `name`, `description`, `num_of_rating`, `sum_of_rating`, `banner_image`, `store_image`) VALUES
	(1, 'test', 'test', 0, 0, '', ''),
	(2, 'test', 'test', 0, 0, '', ''),
	(3, 'pppp', 'pppp', 0, 0, '', ''),
	(4, 'eeee', 'eee', 0, 0, '', ''),
	(5, 'aaaa', 'aaa', 0, 0, '', ''),
	(6, 'bbbb', 'bbbb', 0, 0, '', '');

-- Dumping data for table online-marketing.store_has_category: ~0 rows (approximately)

-- Dumping data for table online-marketing.subcategory: ~0 rows (approximately)

-- Dumping data for table online-marketing.user: ~0 rows (approximately)
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

-- Dumping data for table online-marketing.visit: ~0 rows (approximately)

-- Dumping data for table online-marketing.vocabulary: ~0 rows (approximately)
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
