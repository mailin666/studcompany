SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


CREATE DATABASE `Joc2` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `Joc2`;

CREATE TABLE IF NOT EXISTS `users` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL ,
  `email` varchar(50) DEFAULT NULL,
  `parola` varchar(50) DEFAULT NULL,
  `gen` varchar(50) DEFAULT NULL,
  `tara` varchar(50) DEFAULT NULL,
  `nivel` varchar(50) DEFAULT NULL,
  `bani` integer(4) DEFAULT NULL,
  `energie` integer(4) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `companys` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `denumire` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `domeniu` varchar(50) DEFAULT NULL,
  `capital` integer(10) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `actes` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `a1` integer(50) DEFAULT NULL,
  `a2` integer(50) DEFAULT NULL,
  `a3` integer(50) DEFAULT NULL,
  `a4` integer(50) DEFAULT NULL,
  `a5` integer(50) DEFAULT NULL,
  `a6` integer(50) DEFAULT NULL,
  `a7` integer(50) DEFAULT NULL,
  `a8` integer(50) DEFAULT NULL,
  `a9` integer(50) DEFAULT NULL,
  `a10` integer(50) DEFAULT NULL,
  `a11` integer(50) DEFAULT NULL,
  `a12` integer(50) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `reviews` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `mesaj` varchar(500) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `angajats` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `nume` varchar(50) DEFAULT NULL,
  `functie` varchar(50) DEFAULT NULL,
  `salariu` integer(6) DEFAULT NULL,
  `denumire_companie` varchar(50) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
