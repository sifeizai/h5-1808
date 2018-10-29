/*
Navicat MySQL Data Transfer

Source Server         : 1806
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : xiangmu

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-16 23:38:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for banggo1
-- ----------------------------
DROP TABLE IF EXISTS `banggo1`;
CREATE TABLE `banggo1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `banner_name` varchar(255) DEFAULT NULL,
  `names` varchar(255) DEFAULT NULL,
  `zhuurl` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `jiage` varchar(255) DEFAULT NULL,
  `yuanjia` varchar(255) DEFAULT NULL,
  `zhekou` varchar(255) DEFAULT NULL,
  `color1` varchar(255) DEFAULT NULL,
  `color2` varchar(255) DEFAULT NULL,
  `color3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banggo1
-- ----------------------------
INSERT INTO `banggo1` VALUES ('1', 'METERSBONWE ', '【秋季新品】男休闲立领藏帽梭织夹克', 'images/734163_00.jpg', '../images/734163_00.jpg', '174.9 ', '299', '5', '../images/734163_40_00.jpg', '../images/734163_50_00.jpg', '../images/734163_90_00.jpg');
INSERT INTO `banggo1` VALUES ('2', 'METERSBONWE ', '迪士尼唐老鸭系列印花拼色卫衣', 'images/720846_00.jpg', '../images/720846_00.jpg', '129', '239', '6.5', '..images/720846_90_00.jpg', '..images/720846_33.jpg', '..images/720846_30.jpg');
INSERT INTO `banggo1` VALUES ('3', 'ME＆CITY ', '【冬季新品】女羊毛羊绒混纺喇叭袖套头毛衫', 'images/519795_00.jpg', '../images/519795_00.jpg', '140.9', '599', '3', '../images/519795_00_00.jpg', '../images/519795_30_00.jpg', '../images/519795_31_00.jpg');
INSERT INTO `banggo1` VALUES ('4', 'METERSBONWE ', ' 基本款牛仔夹克', 'images/734054_00.jpg', '../images/734054_00.jpg', '137.9', '229', '5.5', '../images/734054_40_00.jpg', '../images/734054_41_00.jpg', '../images/734054_42_00.jpg');
INSERT INTO `banggo1` VALUES ('5', 'ME＆CITY ', ' 【秋季新品】男经典五袋标准直筒牛仔长裤', 'images/756360_00.jpg', '../images/756360_00.jpg', '119.9', '199', '7', '../images/756360_40_00.jpg', '../images/756360_41_00.jpg', '../images/756360_42_00.jpg');
INSERT INTO `banggo1` VALUES ('6', 'METERSBONWE ', ' 男牛仔长裤士款显瘦裤', 'images/756224_00.jpg', '../images/756224_00.jpg', '99.9', '162', '5.5', '../images/756224_40_00.jpg', '../images/756224_41_00.jpg', '../images/756224_42_00.jpg');
INSERT INTO `banggo1` VALUES ('7', 'METERSBONWE ', '男肌理面料多袋跑裤', 'images/748122_00.jpg', '../images/748122_00.jpg', '129.9', '199', '6.5', '../images/756224_40_00.jpg', '../images/756224_41_00.jpg', '../images/756224_42_00.jpg');
INSERT INTO `banggo1` VALUES ('8', 'METERSBONWE ', ' 长裤男款运动慢跑裤收脚裤子青年焉栩嘉同款', 'images/602027_00.jpg', '../images/602027_00.jpg', '139', '279', '4', '../images/756224_40_00.jpg', '../images/756224_41_00.jpg', '../images/756224_42_00.jpg');
INSERT INTO `banggo1` VALUES ('9', 'ME＆CITY', ' 男时尚脚口卷边羊毛休闲长裤', 'images/548322_00.jpg', '../images/548322_00.jpg', '199', '499', '3', '../images/756224_40_00.jpg', '../images/756224_41_00.jpg', '../images/756224_42_00.jpg');
INSERT INTO `banggo1` VALUES ('10', 'METERSBONWE ', '【秋季新品】男胸前字母迷彩印花潮流长袖T恤', 'images/661532_00.jpg', '../images/661532_00.jpg', '59.9', '99', '5.6', '../images/756224_40_00.jpg', '../images/756224_41_00.jpg', '../images/756224_42_00.jpg');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `names` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `zhekou` varchar(255) DEFAULT NULL,
  `jiage` varchar(255) DEFAULT NULL,
  `yuanjia` varchar(255) DEFAULT NULL,
  `banner_name` varchar(255) DEFAULT NULL,
  `color1` varchar(255) DEFAULT NULL,
  `color2` varchar(255) DEFAULT NULL,
  `color3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('11', '男棒球服潮流飞行员夹克连帽棉衣赵磊同款同款', '../images/list/601995_00.jpg', '4.5', '99', '199', 'Metersbonwe', '../images/list/601995_40_00.jpg', '../images/list/601995_50_00.jpg', '../images/list/601995_70_00.jpg');
INSERT INTO `list` VALUES ('12', '男前胸圆章潮流迷彩连帽短款羽绒服', '../images/list/601882_00.jpg', '5', '150', '300', 'Metersbonwe', '../images/list/601882_00_00.jpg', '../images/list/601882_41_00.jpg', '../images/list/601882_40_00.jpg');
INSERT INTO `list` VALUES ('13', '冬季新品男士轻薄款羽绒服立领大码外套（精选专区）', '../images/list/A40206_00.jpg', '6.8', '200', '600', '妮芬儿', '../images/list/A40206_32_05.jpg', '../images/list/A40206_45_06.jpg', '../images/list/A40206_47_07.jpg');
INSERT INTO `list` VALUES ('14', '修身显瘦短款弹力吊带背心', '../images/list/A26070_00.jpg', '0.5', '9', '199', '骊语', '../images/list/A26070_03_01.jpg', '../images/list/A26070_99_02.jpg', '../images/list/A26070_03_01.jpg');
INSERT INTO `list` VALUES ('15', '男前胸圆章潮流迷彩连帽短款羽绒服', '../images/list/601882_00.jpg', '5', '150', '300', 'Metersbonwe', '../images/list/601882_00_00.jpg', '../images/list/601882_41_00.jpg', '../images/list/601882_40_00.jpg');
INSERT INTO `list` VALUES ('16', '冬季新品男士轻薄款羽绒服立领大码外套（精选专区）', '../images/list/A40206_00.jpg', '6.8', '200', '600', '妮芬儿', '../images/list/A40206_32_05.jpg', '../images/list/A40206_45_06.jpg', '../images/list/A40206_47_07.jpg');
INSERT INTO `list` VALUES ('17', '男棒球服潮流飞行员夹克连帽棉衣赵磊同款同款', '../images/list/601995_00.jpg', '4.5', '99', '199', 'Metersbonwe', '../images/list/601995_40_00.jpg', '../images/list/601995_50_00.jpg', '../images/list/601995_70_00.jpg');
INSERT INTO `list` VALUES ('18', '男前胸圆章潮流迷彩连帽短款羽绒服', '../images/list/601882_00.jpg', '5', '150', '300', 'Metersbonwe', '../images/list/601882_00_00.jpg', '../images/list/601882_41_00.jpg', '../images/list/601882_40_00.jpg');
INSERT INTO `list` VALUES ('19', '冬季新品男士轻薄款羽绒服立领大码外套（精选专区）', '../images/list/A40206_00.jpg', '6.8', '200', '600', '妮芬儿', '../images/list/A40206_32_05.jpg', '../images/list/A40206_45_06.jpg', '../images/list/A40206_47_07.jpg');
INSERT INTO `list` VALUES ('20', '男棒球服潮流飞行员夹克连帽棉衣赵磊同款同款', '../images/list/601995_00.jpg', '4.5', '99', '199', 'Metersbonwe', '../images/list/601995_40_00.jpg', '../images/list/601995_50_00.jpg', '../images/list/601995_70_00.jpg');
INSERT INTO `list` VALUES ('21', '男前胸圆章潮流迷彩连帽短款羽绒服', '../images/list/601882_00.jpg', '5', '150', '300', 'Metersbonwe', '../images/list/601882_00_00.jpg', '../images/list/601882_41_00.jpg', '../images/list/601882_40_00.jpg');
INSERT INTO `list` VALUES ('22', '冬季新品男士轻薄款羽绒服立领大码外套（精选专区）', '../images/list/A40206_00.jpg', '6.8', '200', '600', '妮芬儿', '../images/list/A40206_32_05.jpg', '../images/list/A40206_45_06.jpg', '../images/list/A40206_47_07.jpg');
INSERT INTO `list` VALUES ('23', '男棒球服潮流飞行员夹克连帽棉衣赵磊同款同款', '../images/list/601995_00.jpg', '4.5', '99', '199', 'Metersbonwe', '../images/list/601995_40_00.jpg', '../images/list/601995_50_00.jpg', '../images/list/601995_70_00.jpg');
INSERT INTO `list` VALUES ('24', '男前胸圆章潮流迷彩连帽短款羽绒服', '../images/list/601882_00.jpg', '5', '150', '300', 'Metersbonwe', '../images/list/601882_00_00.jpg', '../images/list/601882_41_00.jpg', '../images/list/601882_40_00.jpg');
INSERT INTO `list` VALUES ('25', '冬季新品男士轻薄款羽绒服立领大码外套（精选专区）', '../images/list/A40206_00.jpg', '6.8', '200', '600', '妮芬儿', '../images/list/A40206_32_05.jpg', '../images/list/A40206_45_06.jpg', '../images/list/A40206_47_07.jpg');
INSERT INTO `list` VALUES ('26', '男棒球服潮流飞行员夹克连帽棉衣赵磊同款同款', '../images/list/601995_00.jpg', '4.5', '99', '199', 'Metersbonwe', '../images/list/601995_40_00.jpg', '../images/list/601995_50_00.jpg', '../images/list/601995_70_00.jpg');
INSERT INTO `list` VALUES ('27', '男前胸圆章潮流迷彩连帽短款羽绒服', '../images/list/601882_00.jpg', '5', '150', '300', 'Metersbonwe', '../images/list/601882_00_00.jpg', '../images/list/601882_41_00.jpg', '../images/list/601882_40_00.jpg');
INSERT INTO `list` VALUES ('28', '冬季新品男士轻薄款羽绒服立领大码外套（精选专区）', '../images/list/A40206_00.jpg', '6.8', '200', '600', '妮芬儿', '../images/list/A40206_32_05.jpg', '../images/list/A40206_45_06.jpg', '../images/list/A40206_47_07.jpg');
INSERT INTO `list` VALUES ('29', '男棒球服潮流飞行员夹克连帽棉衣赵磊同款同款', '../images/list/601995_00.jpg', '4.5', '99', '199', 'Metersbonwe', '../images/list/601995_40_00.jpg', '../images/list/601995_50_00.jpg', '../images/list/601995_70_00.jpg');
INSERT INTO `list` VALUES ('30', '男前胸圆章潮流迷彩连帽短款羽绒服', '../images/list/601882_00.jpg', '5', '150', '300', 'Metersbonwe', '../images/list/601882_00_00.jpg', '../images/list/601882_41_00.jpg', '../images/list/601882_40_00.jpg');
INSERT INTO `list` VALUES ('31', '冬季新品男士轻薄款羽绒服立领大码外套（精选专区）', '../images/list/A40206_00.jpg', '6.8', '200', '600', '妮芬儿', '../images/list/A40206_32_05.jpg', '../images/list/A40206_45_06.jpg', '../images/list/A40206_47_07.jpg');
INSERT INTO `list` VALUES ('32', '男棒球服潮流飞行员夹克连帽棉衣赵磊同款同款', '../images/list/601995_00.jpg', '4.5', '99', '199', 'Metersbonwe', '../images/list/601995_40_00.jpg', '../images/list/601995_50_00.jpg', '../images/list/601995_70_00.jpg');
INSERT INTO `list` VALUES ('33', '男前胸圆章潮流迷彩连帽短款羽绒服', '../images/list/601882_00.jpg', '5', '150', '300', 'Metersbonwe', '../images/list/601882_00_00.jpg', '../images/list/601882_41_00.jpg', '../images/list/601882_40_00.jpg');
INSERT INTO `list` VALUES ('34', '冬季新品男士轻薄款羽绒服立领大码外套（精选专区）', '../images/list/A40206_00.jpg', '6.8', '200', '600', '妮芬儿', '../images/list/A40206_32_05.jpg', '../images/list/A40206_45_06.jpg', '../images/list/A40206_47_07.jpg');
INSERT INTO `list` VALUES ('35', '男棒球服潮流飞行员夹克连帽棉衣赵磊同款同款', '../images/list/601995_00.jpg', '4.5', '99', '199', 'Metersbonwe', '../images/list/601995_40_00.jpg', '../images/list/601995_50_00.jpg', '../images/list/601995_70_00.jpg');
INSERT INTO `list` VALUES ('36', '男前胸圆章潮流迷彩连帽短款羽绒服', '../images/list/601882_00.jpg', '5', '150', '300', 'Metersbonwe', '../images/list/601882_00_00.jpg', '../images/list/601882_41_00.jpg', '../images/list/601882_40_00.jpg');
INSERT INTO `list` VALUES ('37', '冬季新品男士轻薄款羽绒服立领大码外套（精选专区）', '../images/list/A40206_00.jpg', '6.8', '200', '600', '妮芬儿', '../images/list/A40206_32_05.jpg', '../images/list/A40206_45_06.jpg', '../images/list/A40206_47_07.jpg');
INSERT INTO `list` VALUES ('38', '冬季新品男士轻薄款羽绒服立领大码外套（精选专区）', '../images/list/A40206_00.jpg', '6.8', '200', '600', '妮芬儿', '../images/list/A40206_32_05.jpg', '../images/list/A40206_45_06.jpg', '../images/list/A40206_47_07.jpg');

-- ----------------------------
-- Table structure for zhuce
-- ----------------------------
DROP TABLE IF EXISTS `zhuce`;
CREATE TABLE `zhuce` (
  `uid` int(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhuce
-- ----------------------------
INSERT INTO `zhuce` VALUES ('1', 'a123', 'aaa123');
INSERT INTO `zhuce` VALUES ('2', 'b123', 'bbb123');
INSERT INTO `zhuce` VALUES ('3', 'wew', '12');
INSERT INTO `zhuce` VALUES ('5', '123456', '123456');
INSERT INTO `zhuce` VALUES ('6', '', '');
INSERT INTO `zhuce` VALUES ('7', 'qqqq', 'qqqqqq');
SET FOREIGN_KEY_CHECKS=1;
