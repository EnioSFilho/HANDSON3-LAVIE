-- MySQL Workbench Forward Engineering
​
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
​
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema lavie
-- -----------------------------------------------------
​
-- -----------------------------------------------------
-- Schema lavie
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lavie` DEFAULT CHARACTER SET utf8 ;
USE `lavie` ;
​
-- -----------------------------------------------------
-- Table `lavie`.`pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lavie`.`pacientes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(90) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `idade` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;
​
​
-- -----------------------------------------------------
-- Table `lavie`.`psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lavie`.`psicologos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(90) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `senha` VARCHAR(256) NOT NULL,
  `apresentacao` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;
​
​
-- -----------------------------------------------------
-- Table `lavie`.`atendimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lavie`.`atendimentos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `data_atendimento` DATE NOT NULL,
  `observacao` VARCHAR(400) NOT NULL,
  `pacientes_id` INT(11) NOT NULL,
  `psicologos_id1` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `pacientes_id`, `psicologos_id1`),
  INDEX `fk_atendimentos_pacientes_idx` (`pacientes_id` ASC) ,
  INDEX `fk_atendimentos_psicologos1_idx` (`psicologos_id1` ASC) ,
  CONSTRAINT `fk_atendimentos_pacientes`
    FOREIGN KEY (`pacientes_id`)
    REFERENCES `lavie`.`pacientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_atendimentos_psicologos1`
    FOREIGN KEY (`psicologos_id1`)
    REFERENCES `lavie`.`psicologos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;
​
​
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;