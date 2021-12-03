-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2021 at 04:19 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `studentsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `groupName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `lastName`, `firstName`, `groupName`) VALUES
(1, 'Belousov', 'Daniil0', '181-722'),
(2, 'Lebedev', 'Maxim0', '181-723'),
(3, 'Belousov', 'Daniil1', '181-722'),
(4, 'Lebedev', 'Maxim1', '181-723'),
(5, 'Belousov', 'Daniil2', '181-722'),
(6, 'Lebedev', 'Maxim2', '181-723'),
(7, 'Belousov', 'Daniil3', '181-722'),
(8, 'Lebedev', 'Maxim3', '181-723'),
(9, 'Belousov', 'Daniil4', '181-722'),
(10, 'Lebedev', 'Maxim4', '181-723'),
(11, 'Belousov', 'Daniil5', '181-722'),
(12, 'Lebedev', 'Maxim5', '181-723'),
(13, 'Belousov', 'Daniil6', '181-722'),
(14, 'Lebedev', 'Maxim6', '181-723'),
(15, 'Belousov', 'Daniil7', '181-722'),
(16, 'Lebedev', 'Maxim7', '181-723'),
(17, 'Belousov', 'Daniil8', '181-722'),
(18, 'Lebedev', 'Maxim8', '181-723'),
(19, 'Belousov', 'Daniil9', '181-722'),
(20, 'Lebedev', 'Maxim9', '181-723'),
(21, 'Belousov', 'Daniil10', '181-722'),
(22, 'Lebedev', 'Maxim10', '181-723'),
(23, 'Belousov', 'Daniil11', '181-722'),
(24, 'Lebedev', 'Maxim11', '181-723'),
(25, 'Belousov', 'Daniil12', '181-722'),
(26, 'Lebedev', 'Maxim12', '181-723'),
(27, 'Belousov', 'Daniil13', '181-722'),
(28, 'Lebedev', 'Maxim13', '181-723'),
(29, 'Belousov', 'Daniil14', '181-722'),
(30, 'Lebedev', 'Maxim14', '181-723'),
(31, 'Belousov', 'Daniil15', '181-722'),
(32, 'Lebedev', 'Maxim15', '181-723'),
(33, 'Belousov', 'Daniil16', '181-722'),
(34, 'Lebedev', 'Maxim16', '181-723'),
(35, 'Belousov', 'Daniil17', '181-722'),
(36, 'Lebedev', 'Maxim17', '181-723'),
(37, 'Belousov', 'Daniil18', '181-722'),
(38, 'Lebedev', 'Maxim18', '181-723'),
(39, 'Belousov', 'Daniil19', '181-722'),
(40, 'Lebedev', 'Maxim19', '181-723'),
(41, 'Belousov', 'Daniil20', '181-722'),
(42, 'Lebedev', 'Maxim20', '181-723'),
(43, 'Belousov', 'Daniil21', '181-722'),
(44, 'Lebedev', 'Maxim21', '181-723'),
(45, 'Belousov', 'Daniil22', '181-722'),
(46, 'Lebedev', 'Maxim22', '181-723'),
(47, 'Belousov', 'Daniil23', '181-722'),
(48, 'Lebedev', 'Maxim23', '181-723'),
(49, 'Belousov', 'Daniil24', '181-722'),
(50, 'Lebedev', 'Maxim24', '181-723'),
(51, 'Belousov', 'Daniil25', '181-722'),
(52, 'Lebedev', 'Maxim25', '181-723'),
(53, 'Belousov', 'Daniil26', '181-722'),
(54, 'Lebedev', 'Maxim26', '181-723'),
(55, 'Belousov', 'Daniil27', '181-722'),
(56, 'Lebedev', 'Maxim27', '181-723'),
(57, 'Belousov', 'Daniil28', '181-722'),
(58, 'Lebedev', 'Maxim28', '181-723'),
(59, 'Belousov', 'Daniil29', '181-722'),
(60, 'Lebedev', 'Maxim29', '181-723'),
(61, 'Belousov', 'Daniil30', '181-722'),
(62, 'Lebedev', 'Maxim30', '181-723'),
(63, 'Belousov', 'Daniil31', '181-722'),
(64, 'Lebedev', 'Maxim31', '181-723'),
(65, 'Belousov', 'Daniil32', '181-722'),
(66, 'Lebedev', 'Maxim32', '181-723'),
(67, 'Belousov', 'Daniil33', '181-722'),
(68, 'Lebedev', 'Maxim33', '181-723'),
(69, 'Belousov', 'Daniil34', '181-722'),
(70, 'Lebedev', 'Maxim34', '181-723'),
(71, 'Belousov', 'Daniil35', '181-722'),
(72, 'Lebedev', 'Maxim35', '181-723'),
(73, 'Belousov', 'Daniil36', '181-722'),
(74, 'Lebedev', 'Maxim36', '181-723'),
(75, 'Belousov', 'Daniil37', '181-722'),
(76, 'Lebedev', 'Maxim37', '181-723'),
(77, 'Belousov', 'Daniil38', '181-722'),
(78, 'Lebedev', 'Maxim38', '181-723'),
(79, 'Belousov', 'Daniil39', '181-722'),
(80, 'Lebedev', 'Maxim39', '181-723'),
(81, 'Denishev', 'Vadim0', '181-721'),
(82, 'Denishev', 'Vadim1', '181-721'),
(83, 'Denishev', 'Vadim2', '181-721'),
(84, 'Denishev', 'Vadim3', '181-721'),
(85, 'Denishev', 'Vadim4', '181-721'),
(86, 'Denishev', 'Vadim5', '181-721'),
(87, 'Denishev', 'Vadim6', '181-721'),
(88, 'Denishev', 'Vadim7', '181-721'),
(89, 'Denishev', 'Vadim8', '181-721'),
(90, 'Denishev', 'Vadim9', '181-721'),
(91, 'Denishev', 'Vadim10', '181-721'),
(92, 'Denishev', 'Vadim11', '181-721'),
(93, 'Denishev', 'Vadim12', '181-721'),
(94, 'Denishev', 'Vadim13', '181-721'),
(95, 'Denishev', 'Vadim14', '181-721');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
