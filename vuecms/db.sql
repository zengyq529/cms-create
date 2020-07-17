create table `t_user` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(64) NOT NULL COMMENT '用户名',
    `password` varchar(100) NOT NULL DEFAULT '' COMMENT '密码'，
    `deleted` int(4) NOT NULL DEFAULT 0 COMMENT '是否删除',
    `create_time` datetime NOT NULL COMMENT '创建日期',
    `create_user` varchar(64) NOT NULL COMMENT `创建人用户名`,
    `modify_time` datetime DEFAULT NULL COMMENT '修改时间',
    `modify_user` varchar(64) DEFAULT NULL COMMENT '修改人',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';

create table `t_user_role` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `user_name` varchar(64) NOT NULL COMMENT `用户名`,
    `authority` varchar(1000) NOT NULL DEFAULT '' COMMENT '权限, admin; user',
    `deleted` int(4) NOT NULL DEFAULT 0 COMMENT '是否删除',
    PRIMARY KEY (`id`)
)

create table `t_deparment` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(64) NOT NULL COMMENT '名称',
    `deleted` int(4) NOT NULL DEFAULT 0 COMMENT '是否删除',
    `create_time` datetime NOT NULL COMMENT '创建日期',
    `create_user` varchar(64) NOT NULL COMMENT `创建人用户名`,
    `modify_time` datetime DEFAULT NULL COMMENT '修改时间',
    `modify_user` varchar(64) DEFAULT NULL COMMENT '修改人',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='部门表';

create table `t_department_province` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `department_id` int(11) NOT NULL DEFAULT 0 COMMENT '部门ID';
    `province_id` int(11) NOT NULL DEFAULT 0 COMMENT '省份ID',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='部门管辖省份表';

create table `t_department_city` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `department_id` int(11) NOT NULL DEFAULT 0 COMMENT '部门ID';
    `city_id` int(11) NOT NULL DEFAULT 0 COMMENT '城市ID',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='部门管辖城市表';

create table `t_province` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL DEFAULT '' COMMENT '省份名称',
    `code` varchar(255) NOT NULL DEFAULT '' COMMENT 'code',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='省份表';

create table `t_city` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL DEFAULT '' COMMENT '省份名称',
    `code` varchar(255) NOT NULL DEFAULT '' COMMENT 'code',
    `province_id` int(11)  NOT NULL DEFAULT 0 COMMENT '省',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='城市';

create table `t_region` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(64) NOT NULL COMMENT '大区',
    `province_id` varchar(1000) NOT NULL DEFAULT '' COMMENT '省',
    `city` varchar(1000) NOT NULL DEFAULT '' COMMENT '市',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='6大区';

create table `t_belts` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(64) NOT NULL COMMENT '经济带名称',
    `province_id` varchar(1000) NOT NULL DEFAULT '' COMMENT '省',
    `city` varchar(1000) NOT NULL DEFAULT '' COMMENT '市',
    PRIMARY KEY (`id`)
)

create table `t_city_map_data` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `log_date` varchar(255) NOT NULL DEFAULT '' COMMENT '结算日期'
    `city_id` varchar(255) NOT NULL DEFAULT '' COMMENT '城市',
    `gdp` int(11) NOT NULL DEFAULT 0 '' COMMENT 'DGP',
    `score` int(11) NOT NULL DEFAULT 0 '' COMMENT '评分',
    `deleted` int(4) NOT NULL DEFAULT 0 COMMENT '是否删除',
    `create_time` datetime NOT NULL COMMENT '创建日期',
    `create_user` varchar(64) NOT NULL COMMENT `创建人用户名`,
    `modify_time` datetime DEFAULT NULL COMMENT '修改时间',
    `modify_user` varchar(64) DEFAULT NULL COMMENT '修改人',
    PRIMARY KEY (`id`),
    KEY `log_datex` (`log_date`)
    KEY `city_idx` (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='城市地图数据表';

create table `t_article` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(1000) NOT NULL DEFAULT '' COMMENT '标题',
    `url` varchar(1000) NOT NULL DEFAULT '' COMMENT '链接',
    `post_time` datetime NOT NULL DEFAULT '' COMMENT '发布时间',
    `type` int(11) NOT NULL DEFAULT '0' COMMENT '发文类型',
    `content` text NOT NULL DEFAULT '' COMMENT '内容',
    `create_time` datetime NOT NULL COMMENT '创建日期',
    `create_user` varchar(64) NOT NULL COMMENT `创建人用户名`,
    `modify_time` datetime DEFAULT NULL COMMENT '修改时间',
    `modify_user` varchar(64) DEFAULT NULL COMMENT '修改人',
    PRIMARY KEY (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='发文列表';

create table `t_article_object` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `article_id` int(11) NOT NULL DEFAULT 0 COMMENT '发文id',
    `object_type` int(4) NOT NULL COMMENT '发布对象类型，1: 大区，2: 经济带， 3：省，4:市',
    `object_value` varchar(255) NOT NULL COMMENT '发布对象',
    `create_time` datetime NOT NULL COMMENT '创建时间',
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='发文对象';
