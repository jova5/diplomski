-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema online-marketing
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `online-marketing` ;

-- -----------------------------------------------------
-- Schema online-marketing
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `online-marketing` DEFAULT CHARACTER SET utf8 ;
USE `online-marketing` ;

-- -----------------------------------------------------
-- Table `online-marketing`.`store`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `online-marketing`.`store` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NULL,
  `num_of_rating` INT NOT NULL,
  `sum_of_rating` INT NOT NULL,
  `banner_image` TEXT NULL,
  `store_image` TEXT NULL,
  `num_of_visit` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `online-marketing`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `online-marketing`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `store_id` INT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  INDEX `fk_user_store_idx` (`store_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_store`
    FOREIGN KEY (`store_id`)
    REFERENCES `online-marketing`.`store` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `online-marketing`.`contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `online-marketing`.`contact` (
  `id` INT NOT NULL,
  `store_id` INT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `latitude` DOUBLE NULL,
  `longitude` DOUBLE NULL,
  PRIMARY KEY (`id`, `store_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_contact_store1`
    FOREIGN KEY (`store_id`)
    REFERENCES `online-marketing`.`store` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `online-marketing`.`email`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `online-marketing`.`email` (
  `id` INT NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `contact_id` INT NOT NULL,
  PRIMARY KEY (`id`, `contact_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_email_contact1_idx` (`contact_id` ASC) VISIBLE,
  CONSTRAINT `fk_email_contact1`
    FOREIGN KEY (`contact_id`)
    REFERENCES `online-marketing`.`contact` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `online-marketing`.`phone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `online-marketing`.`phone` (
  `id` INT NOT NULL,
  `number` VARCHAR(45) NOT NULL,
  `contact_id` INT NOT NULL,
  PRIMARY KEY (`id`, `contact_id`),
  INDEX `fk_phone_contact1_idx` (`contact_id` ASC) VISIBLE,
  CONSTRAINT `fk_phone_contact1`
    FOREIGN KEY (`contact_id`)
    REFERENCES `online-marketing`.`contact` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `online-marketing`.`add`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `online-marketing`.`add` (
  `id` INT NOT NULL,
  `store_id` INT NOT NULL,
  `image` TEXT NOT NULL,
  `date_from` DATE NOT NULL,
  `date_to` DATE NOT NULL,
  `header` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `num_of_visit` INT NOT NULL,
  `premium` BIT NOT NULL,
  PRIMARY KEY (`id`, `store_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_add_store1_idx` (`store_id` ASC) VISIBLE,
  CONSTRAINT `fk_add_store1`
    FOREIGN KEY (`store_id`)
    REFERENCES `online-marketing`.`store` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `online-marketing`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `online-marketing`.`category` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `online-marketing`.`store_has_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `online-marketing`.`store_has_category` (
  `store_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`store_id`, `category_id`),
  INDEX `fk_store_has_category_category1_idx` (`category_id` ASC) VISIBLE,
  INDEX `fk_store_has_category_store1_idx` (`store_id` ASC) VISIBLE,
  CONSTRAINT `fk_store_has_category_store1`
    FOREIGN KEY (`store_id`)
    REFERENCES `online-marketing`.`store` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_store_has_category_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `online-marketing`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `online-marketing`.`add_has_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `online-marketing`.`add_has_category` (
  `add_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`add_id`, `category_id`),
  INDEX `fk_add_has_category_category1_idx` (`category_id` ASC) VISIBLE,
  INDEX `fk_add_has_category_add1_idx` (`add_id` ASC) VISIBLE,
  CONSTRAINT `fk_add_has_category_add1`
    FOREIGN KEY (`add_id`)
    REFERENCES `online-marketing`.`add` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_add_has_category_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `online-marketing`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `online-marketing`.`subcategory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `online-marketing`.`subcategory` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`id`, `category_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_subcategory_category1_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_subcategory_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `online-marketing`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `online-marketing`.`language`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `online-marketing`.`language` (
  `id` INT NOT NULL,
  `key` VARCHAR(100) NOT NULL,
  `serbian` TEXT NULL,
  `english` TEXT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `key_UNIQUE` (`key` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
