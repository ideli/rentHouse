package com.xmmxjy.system.dao;

import com.xmmxjy.common.mapper.MyMapper;
import com.xmmxjy.system.entity.DepartEntity;
import org.apache.ibatis.annotations.Param;

/**
 * 描述：部门
 * @author：xmm
 * @since：2016年09月19日 16时28分19秒 星期一 
 * @version:1.0
 */
public interface DepartDao extends MyMapper<DepartEntity> {


    String getMaxLocalCode(@Param("localCodeLength") String localCodeLength, @Param("parentCode") String parentCode);
}

