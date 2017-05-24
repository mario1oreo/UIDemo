-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.6.16 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 dataservice 的数据库结构
CREATE DATABASE IF NOT EXISTS `dataservice` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `dataservice`;


-- 导出  表 dataservice.t_dmp_menu_config 结构
CREATE TABLE IF NOT EXISTS `t_dmp_menu_config` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `PARENT_NAME` varchar(50) NOT NULL DEFAULT '' COMMENT '父级菜单名称,一级菜单的父级名称为''''.',
  `PARENT_ID` int(11) NOT NULL DEFAULT '0' COMMENT '父级菜单ID,以及菜单的父级ID为0',
  `INDEX_NUM` int(11) NOT NULL DEFAULT '0' COMMENT '菜单顺序',
  `LEVEL` int(11) NOT NULL DEFAULT '1' COMMENT '当前菜单层级',
  `NAME` varchar(50) NOT NULL DEFAULT 'test_name' COMMENT '菜单名称',
  `PAGE_PATH` varchar(150) NOT NULL DEFAULT 'index' COMMENT '页面在工程内的相对文件路径. page目录为根目录',
  `AVAILABLE` char(1) NOT NULL DEFAULT '1' COMMENT '是否可用.初始状态:1; 0:停用; 1:启用;',
  `CREATED_BY` varchar(50) DEFAULT 'ADMIN' COMMENT '创建者',
  `CREATED_DT` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建日期',
  `UPDATED_BY` varchar(50) DEFAULT 'ADMIN' COMMENT '更新者',
  `UPDATED_DT` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日期',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `NAME` (`NAME`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8 COMMENT='数据管理平台菜单配置';

-- 正在导出表  dataservice.t_dmp_menu_config 的数据：~4 rows (大约)
/*!40000 ALTER TABLE `t_dmp_menu_config` DISABLE KEYS */;
INSERT INTO `t_dmp_menu_config` (`ID`, `PARENT_NAME`, `PARENT_ID`, `INDEX_NUM`, `LEVEL`, `NAME`, `PAGE_PATH`, `AVAILABLE`, `CREATED_BY`, `CREATED_DT`, `UPDATED_BY`, `UPDATED_DT`) VALUES
	(1, '', 0, 1, 1, 'temperature', 'demo/temperature', '1', 'ADMIN', '2017-05-19 13:22:19', 'ADMIN', '2017-05-24 17:40:19'),
	(2, '', 0, 2, 1, 'pane', 'demo/pane', '1', 'ADMIN', '2017-05-19 13:22:27', 'ADMIN', '2017-05-24 17:40:19'),
	(3, 'temperature', 1, 1, 2, 'serverInfo', 'demo/serverInfo', '1', 'ADMIN', '2017-05-19 13:24:24', 'ADMIN', '2017-05-24 17:40:19'),
	(4, 'pane', 2, 1, 2, 'biggerMessage', 'demo/biggerMessage', '1', 'ADMIN', '2017-05-19 13:24:42', 'ADMIN', '2017-05-24 17:40:19'),
	(5, 'temperature', 1, 2, 2, 'message', 'demo/message', '1', 'ADMIN', '2017-05-19 14:52:17', 'ADMIN', '2017-05-24 17:40:19'),
	(7, 'temperature', 1, 3, 2, 'buttonTable', 'demo/buttonTable', '1', 'ADMIN', '2017-05-19 14:55:55', 'ADMIN', '2017-05-24 17:40:19'),
	(8, 'biggerMessage', 4, 1, 3, 'bootstrapCarousel', 'demo/bootstrapCarousel', '1', 'ADMIN', '2017-05-19 14:56:21', 'ADMIN', '2017-05-24 17:40:19'),
	(9, 'biggerMessage', 4, 3, 3, 'metrics', 'demo/metrics', '1', 'ADMIN', '2017-05-19 15:32:28', 'ADMIN', '2017-05-24 17:40:19'),
	(10, 'biggerMessage', 4, 2, 3, 'lightboxGallery', 'demo/lightboxGallery', '1', 'ADMIN', '2017-05-19 15:32:36', 'ADMIN', '2017-05-24 17:40:19'),
	(11, '', 0, 3, 1, 'charts', 'demo/charts', '1', 'ADMIN', '2017-05-24 11:11:44', 'ADMIN', '2017-05-24 17:40:19'),
	(12, 'charts', 11, 1, 2, 'morrisCharts', 'demo/morrisCharts', '1', 'ADMIN', '2017-05-24 11:57:10', 'ADMIN', '2017-05-24 17:40:19'),
	(13, 'charts', 11, 2, 2, 'rickshawCharts', 'demo/rickshawCharts', '1', 'ADMIN', '2017-05-24 12:45:27', 'ADMIN', '2017-05-24 17:40:19'),
	(14, 'charts', 11, 3, 2, 'chartjs', 'demo/chartjs', '1', 'ADMIN', '2017-05-24 12:49:28', 'ADMIN', '2017-05-24 17:40:19'),
	(15, 'charts', 11, 4, 2, 'chartist', 'demo/chartist', '1', 'ADMIN', '2017-05-24 12:52:06', 'ADMIN', '2017-05-24 17:40:19'),
	(16, 'charts', 11, 5, 2, 'c3', 'demo/c3', '1', 'ADMIN', '2017-05-24 12:56:12', 'ADMIN', '2017-05-24 17:40:19'),
	(17, 'charts', 11, 6, 2, 'sparkLineCharts', 'demo/sparkLineCharts', '1', 'ADMIN', '2017-05-24 13:00:44', 'ADMIN', '2017-05-24 17:40:19'),
	(18, '', 0, 4, 1, 'wizard', 'demo/wizard', '1', 'ADMIN', '2017-05-24 13:32:20', 'ADMIN', '2017-05-24 17:40:19'),
	(19, '', 0, 5, 1, 'formBasic', 'demo/formBasic', '1', 'ADMIN', '2017-05-24 13:32:20', 'ADMIN', '2017-05-24 17:40:19'),
	(20, '', 0, 6, 1, 'fileUpload', 'demo/fileUpload', '1', 'ADMIN', '2017-05-24 13:32:20', 'ADMIN', '2017-05-24 17:40:19'),
	(21, '', 0, 7, 1, '监控', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:19:46'),
	(22, '', 0, 8, 1, '系统管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:19:47'),
	(23, '', 0, 9, 1, '数据开发', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:19:49'),
	(24, '', 0, 10, 1, '数据安全管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:16:19'),
	(26, '', 0, 11, 1, '数据地图', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:16:19'),
	(27, '', 0, 12, 1, 'UDF发布与管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:16:19'),
	(28, '', 0, 13, 1, 'OneData', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:16:19'),
	(29, '', 0, 14, 1, '数据质量', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:16:19'),
	(30, '', 0, 15, 1, '数据周期管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:16:19'),
	(31, '监控', 21, 1, 2, '表变更监控', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:32:08'),
	(32, '监控', 21, 2, 2, '数据监控', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:32:10'),
	(33, '监控', 21, 3, 2, '系统服务监控', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:32:11'),
	(34, '监控', 21, 4, 2, '平台健康', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:32:12'),
	(35, '监控', 21, 5, 2, '爬虫监控', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:32:15'),
	(36, '监控', 21, 6, 2, '日志监控', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:32:18'),
	(38, '监控', 21, 7, 2, '接口监控', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:32:20'),
	(39, '监控', 21, 8, 2, '调度监控', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:32:23'),
	(41, '系统管理', 22, 1, 2, '爬虫管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:21:15'),
	(42, '系统管理', 22, 2, 2, '平台管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:21:15'),
	(43, '系统管理', 22, 3, 2, '接口管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:21:15'),
	(44, '接口管理', 43, 1, 3, '外部接口管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:22:22'),
	(45, '接口管理', 43, 2, 3, '内部接口管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:22:22'),
	(46, '接口管理', 43, 3, 3, '系统接口管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:22:22'),
	(47, '数据开发', 23, 1, 2, '查询编辑器', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:23:32'),
	(48, '数据开发', 23, 2, 2, '代码库', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:23:32'),
	(49, '数据开发', 23, 3, 2, 'Job管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:23:32'),
	(50, '数据开发', 23, 4, 2, 'Workflow管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:23:32'),
	(51, '数据开发', 23, 5, 2, '调度管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:23:32'),
	(53, '数据安全管理', 24, 1, 2, '用户数据权限管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:25:39'),
	(54, '数据安全管理', 24, 2, 2, '表分组', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:25:39'),
	(55, '数据安全管理', 24, 3, 2, '密级管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:25:39'),
	(56, '数据安全管理', 24, 4, 2, '数据脱敏', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:25:39'),
	(57, 'OneData', 28, 1, 2, '指标体系管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:26:56'),
	(59, 'OneData', 28, 2, 2, '模型管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:26:56'),
	(60, 'OneData', 28, 3, 2, '命名规范管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:26:56'),
	(61, '数据质量', 29, 1, 2, '柯西范式评分体系', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:28:50'),
	(62, '数据质量', 29, 2, 2, '数据自动化测试和审计', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:28:50'),
	(63, '数据周期管理', 30, 1, 2, '数据周期定义', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:29:45'),
	(64, '数据周期管理', 30, 2, 2, '过期数据管理', 'index', '1', 'ADMIN', '2017-05-24 16:49:14', 'ADMIN', '2017-05-24 17:30:00');
/*!40000 ALTER TABLE `t_dmp_menu_config` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
