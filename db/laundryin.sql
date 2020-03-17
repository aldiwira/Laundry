-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2020 at 04:43 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laundryin`
--

-- --------------------------------------------------------

--
-- Table structure for table `detail_transactions`
--

CREATE TABLE `detail_transactions` (
  `id_detail_transaction` int(11) NOT NULL,
  `bobot` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 0,
  `no_nota` varchar(255) DEFAULT NULL,
  `id_harga` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detail_transactions`
--

INSERT INTO `detail_transactions` (`id_detail_transaction`, `bobot`, `status`, `no_nota`, `id_harga`, `createdAt`, `updatedAt`) VALUES
(1, 7, 1, 'M7PaNk8jj0', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(2, 1, 1, 'B4NjfAECZy', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(3, 10, 1, 'lZlLI2BaHr', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(4, 4, 0, '8tLa5BDpLI', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(5, 9, 0, 'Ljjnwj2GzB', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(6, 3, 0, 'AmQn8YgPjJ', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(7, 2, 1, 'gGsJj0zdZw', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(8, 6, 1, 'RWgY_vHap6', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(9, 6, 1, 'WUb4e4di2o', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(10, 1, 1, 'j_4L2vUBak', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(11, 4, 0, '8taPMQy8iN', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(12, 7, 1, 'zpITCiEB7d', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(13, 4, 0, 'j_4L2vUBak', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(14, 10, 1, 'RWgY_vHap6', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(15, 4, 0, 'lZlLI2BaHr', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(16, 10, 1, 'W2DhSqpBFm', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(17, 6, 1, 'B4NjfAECZy', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(18, 7, 1, 'j_4L2vUBak', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(19, 5, 0, 'Ljjnwj2GzB', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(20, 7, 0, 'zpITCiEB7d', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(21, 6, 1, '8taPMQy8iN', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(22, 8, 1, 'I7KeHHeg74', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(23, 6, 1, 'ZXMKmekl1B', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(24, 2, 0, 'ZXMKmekl1B', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(25, 5, 1, 'Ljjnwj2GzB', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(26, 9, 1, '2PyZcKwzf0', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(27, 6, 0, 'Tlr5H1G14s', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(28, 2, 1, 'W2DhSqpBFm', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(29, 6, 1, '2PyZcKwzf0', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(30, 6, 1, '2PyZcKwzf0', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(31, 1, 0, 'j_4L2vUBak', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(32, 3, 0, 'Tlr5H1G14s', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(33, 10, 1, 'AmQn8YgPjJ', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(34, 8, 1, 'gGsJj0zdZw', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(35, 4, 1, 'RlnieM2fMS', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(36, 1, 1, 'lrEFKV8rAF', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(37, 5, 1, '8taPMQy8iN', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(38, 7, 1, 'eMWSMO8Hqd', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(39, 6, 0, 'Tlr5H1G14s', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(40, 8, 1, 'eMWSMO8Hqd', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(41, 10, 1, 'j_4L2vUBak', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(42, 7, 0, 'j_4L2vUBak', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(43, 9, 0, 'gnGj5KaIup', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(44, 10, 0, 'gnGj5KaIup', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(45, 5, 0, 'Tlr5H1G14s', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(46, 6, 1, 'I7KeHHeg74', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(47, 2, 1, 'xUW0OZ50J5', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(48, 5, 1, 'AmQn8YgPjJ', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(49, 2, 1, 'xUW0OZ50J5', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(50, 5, 1, 'lrEFKV8rAF', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(51, 6, 1, '5HmscI2C6_', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(52, 8, 0, 'zMS9GcCyeg', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(53, 7, 0, 'zpITCiEB7d', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(54, 4, 1, 'I7KeHHeg74', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(55, 10, 1, 'W2DhSqpBFm', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(56, 6, 0, 'RWgY_vHap6', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(57, 1, 0, 'zMS9GcCyeg', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(58, 2, 1, 'eMWSMO8Hqd', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(59, 5, 0, 'RlnieM2fMS', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(60, 6, 0, 'gGsJj0zdZw', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(61, 1, 1, 'eMWSMO8Hqd', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(62, 7, 0, '2PyZcKwzf0', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(63, 6, 1, 'gGsJj0zdZw', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(64, 6, 1, 'RlnieM2fMS', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(65, 7, 0, 'zpITCiEB7d', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(66, 6, 1, 'M7PaNk8jj0', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(67, 4, 1, '5HmscI2C6_', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(68, 6, 0, '2PyZcKwzf0', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(69, 8, 1, 'Tlr5H1G14s', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(70, 7, 0, 'AmQn8YgPjJ', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(71, 9, 0, '5HmscI2C6_', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(72, 8, 0, '2PyZcKwzf0', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(73, 7, 1, 'B4NjfAECZy', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(74, 7, 1, 'AmQn8YgPjJ', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(75, 1, 1, 'zpITCiEB7d', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(76, 8, 0, 'lrEFKV8rAF', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(77, 9, 0, 'lZlLI2BaHr', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(78, 8, 0, 'iCW2Cc2w3X', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(79, 9, 0, 'lrEFKV8rAF', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(80, 9, 0, 'xUW0OZ50J5', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(81, 5, 0, 'lrEFKV8rAF', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(82, 8, 0, 'zpITCiEB7d', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(83, 8, 1, 'Tlr5H1G14s', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(84, 9, 1, 'B4NjfAECZy', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(85, 7, 1, '8taPMQy8iN', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(86, 2, 0, 'I7KeHHeg74', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(87, 10, 0, 'lZlLI2BaHr', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(88, 6, 0, 'W2DhSqpBFm', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(89, 10, 0, 'W2DhSqpBFm', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(90, 4, 0, 'xUW0OZ50J5', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(91, 5, 1, 'Ljjnwj2GzB', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(92, 8, 1, 'B4NjfAECZy', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(93, 5, 1, 'AmQn8YgPjJ', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(94, 9, 1, 'ZXMKmekl1B', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(95, 8, 0, 'ZXMKmekl1B', 4, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(96, 2, 1, 'gnGj5KaIup', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(97, 9, 0, 'j_4L2vUBak', 1, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(98, 3, 1, 'j_4L2vUBak', 3, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(99, 8, 0, 'I7KeHHeg74', 2, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(100, 3, 1, 'j_4L2vUBak', 5, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(101, NULL, 0, NULL, NULL, '2020-03-13 06:49:25', '2020-03-13 06:49:25'),
(102, NULL, 0, NULL, NULL, '2020-03-13 06:50:59', '2020-03-13 06:50:59');

-- --------------------------------------------------------

--
-- Table structure for table `prices`
--

CREATE TABLE `prices` (
  `id_harga` int(11) NOT NULL,
  `kelas` varchar(255) DEFAULT NULL,
  `tipe` varchar(255) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prices`
--

INSERT INTO `prices` (`id_harga`, `kelas`, `tipe`, `harga`, `createdAt`, `updatedAt`) VALUES
(1, 'REGULER', 'DUA JAM', 18079, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(2, 'REGULER', 'RAPI BERSIH', 10521, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(3, 'REGULER', 'CUCI BIASA', 10069, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(4, 'REGULER', 'SEHARI', 16682, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
(5, 'REGULER', 'DUA JAM', 7158, '2020-03-12 06:23:32', '2020-03-12 06:23:32');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200306022013-UserMigration.js'),
('20200306023452-HargaMigrations.js'),
('20200306023506-TransactionMigration.js'),
('20200306023515-DetailTransactionMigration.js');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `no_nota` varchar(255) NOT NULL,
  `total_tagihan` int(11) DEFAULT NULL,
  `pembayaran` int(11) DEFAULT NULL,
  `status_pembayaran` tinyint(1) DEFAULT 0,
  `id_user` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`no_nota`, `total_tagihan`, `pembayaran`, `status_pembayaran`, `id_user`, `createdAt`, `updatedAt`) VALUES
('2PyZcKwzf0', 35692, 35692, 1, '2bb4409a-7cdc-4663-a778-ae32406b7b05', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('5HmscI2C6_', 90353, 86842, 0, '07a78c6f-4212-4d02-b43c-74b6ff429e76', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('8taPMQy8iN', 47256, 47256, 1, '95cea823-6213-4eda-a402-c2baeb6c959d', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('8tLa5BDpLI', 61100, 61100, 1, '2bb4409a-7cdc-4663-a778-ae32406b7b05', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('AmQn8YgPjJ', 40993, 40993, 1, '07a78c6f-4212-4d02-b43c-74b6ff429e76', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('B4NjfAECZy', 63904, 63904, 1, '95cea823-6213-4eda-a402-c2baeb6c959d', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('eMWSMO8Hqd', 38024, 25226, 0, 'a2a3525d-2647-4181-b428-e39b28aae64f', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('gGsJj0zdZw', 9723, 9723, 1, '07a78c6f-4212-4d02-b43c-74b6ff429e76', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('gnGj5KaIup', 41670, 24060, 0, '7a13b71d-492f-419f-912e-37416fddeabc', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('I7KeHHeg74', 26810, 26810, 1, '7a13b71d-492f-419f-912e-37416fddeabc', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('iCW2Cc2w3X', 5745, 5477, 0, 'a2a3525d-2647-4181-b428-e39b28aae64f', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('j_4L2vUBak', 60369, 60369, 1, '95cea823-6213-4eda-a402-c2baeb6c959d', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('Ljjnwj2GzB', 35616, 21616, 0, 'a2a3525d-2647-4181-b428-e39b28aae64f', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('lrEFKV8rAF', 35769, 35769, 1, '07a78c6f-4212-4d02-b43c-74b6ff429e76', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('lZlLI2BaHr', 48133, 48133, 1, '7a13b71d-492f-419f-912e-37416fddeabc', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('M7PaNk8jj0', 72083, 27213, 0, '7a13b71d-492f-419f-912e-37416fddeabc', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('RlnieM2fMS', 50174, 50174, 1, '95cea823-6213-4eda-a402-c2baeb6c959d', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('RWgY_vHap6', 81291, 33484, 0, '2bb4409a-7cdc-4663-a778-ae32406b7b05', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('Tlr5H1G14s', 57460, 23700, 0, '2bb4409a-7cdc-4663-a778-ae32406b7b05', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('W2DhSqpBFm', 95475, 16335, 0, '07a78c6f-4212-4d02-b43c-74b6ff429e76', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('WUb4e4di2o', 96759, 17259, 0, '7a13b71d-492f-419f-912e-37416fddeabc', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('xUW0OZ50J5', 48720, 48720, 1, '7a13b71d-492f-419f-912e-37416fddeabc', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('zMS9GcCyeg', 93535, 62141, 0, '7a13b71d-492f-419f-912e-37416fddeabc', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('zpITCiEB7d', 85710, 85710, 1, '7a13b71d-492f-419f-912e-37416fddeabc', '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('ZXMKmekl1B', 83922, 83922, 1, 'a2a3525d-2647-4181-b428-e39b28aae64f', '2020-03-12 06:23:32', '2020-03-12 06:23:32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` varchar(255) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `no_headphone` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `role` smallint(6) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `nama`, `no_headphone`, `password`, `alamat`, `role`, `createdAt`, `updatedAt`) VALUES
('07a78c6f-4212-4d02-b43c-74b6ff429e76', 'Anal Kapoor', '085736220407', 'anal', 'Apt. 239', 0, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('2bb4409a-7cdc-4663-a778-ae32406b7b05', 'Mr. Bhaswar Verma', '+91-004-7003856', 'zefefecebixukayojelisodelinetoboridikuwipodawiralidinetujezayikiyorulowijowehehagedeheqasuyiqifecoquniyotiyanebaxekebozekawibiboruhelebowizumoxuzomegocijolelesarutemativafalowedajuhaqemeteluwohijeqevefiyaterogosazezovijafiqarodemozoyoramizomidocoyabizehuh', 'Suite 797', 0, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('7a13b71d-492f-419f-912e-37416fddeabc', 'Miss Baalaaditya Menon', '+915645812177', 'bejugaxanekabatetixiwepepuqiracojarutesonabekepanupubokujabutarevacoxicafolutolayifefunuvahiranupalonetinoxurofipazojepakonekezujosociwiyiqexoyoqokoragayigeqepisogerekimugeyudipozocoxojirivurusezoguqonotohubotuyotebolukiqetowidegivixamuregugiqiweradopimac', 'Suite 208', 0, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('95cea823-6213-4eda-a402-c2baeb6c959d', 'Dwaipayan Kaul III', '+91-202-8972725', 'rekurititefilaxepiperecuwufevijohufidobirimahezaxedudojuqavozaqixefusexubazogupoxalepozuwipiliyumedizuvozovepuwovujuyopebuzoxinanapakijexicuworinugaqisakujunovafoyutawogebacuteterapuceteyutizojemafayudigizaqupiyegunubuhemebitipiqijuziqujiyoqetedodopijuqem', 'Apt. 665', 0, '2020-03-12 06:23:32', '2020-03-12 06:23:32'),
('a2a3525d-2647-4181-b428-e39b28aae64f', 'Balagovind Rana', '+91872-443-7508', 'gajumipuciyizihoyohuqubomoparedadiwuyuyewujagiquhecuvarilufanipuwalozawahaqunufumeqabaniceliladepakoyipumabiyomosuqanosaxiseyiquqokamudejufibacumelohuxizuculekusopohuxiyumuqeteyasipuwataloxobenabesajohiwoxalokoxitecujokobehurumujemifozenelinofihemotosesad', 'Suite 480', 0, '2020-03-12 06:23:32', '2020-03-12 06:23:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `detail_transactions`
--
ALTER TABLE `detail_transactions`
  ADD PRIMARY KEY (`id_detail_transaction`),
  ADD KEY `no_nota` (`no_nota`),
  ADD KEY `id_harga` (`id_harga`);

--
-- Indexes for table `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id_harga`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`no_nota`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `detail_transactions`
--
ALTER TABLE `detail_transactions`
  MODIFY `id_detail_transaction` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT for table `prices`
--
ALTER TABLE `prices`
  MODIFY `id_harga` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detail_transactions`
--
ALTER TABLE `detail_transactions`
  ADD CONSTRAINT `detail_transactions_ibfk_1` FOREIGN KEY (`no_nota`) REFERENCES `transactions` (`no_nota`),
  ADD CONSTRAINT `detail_transactions_ibfk_2` FOREIGN KEY (`id_harga`) REFERENCES `prices` (`id_harga`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
