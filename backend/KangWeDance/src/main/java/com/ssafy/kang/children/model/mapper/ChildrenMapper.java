package com.ssafy.kang.children.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.kang.children.model.BodyRecordDto;
import com.ssafy.kang.children.model.ChildrenDto;

@Mapper
public interface ChildrenMapper {

	void insertChildren(ChildrenDto childrenDto) throws Exception;
	void insertChildrenBody(ChildrenDto childrenDto) throws Exception;
	void deleteChildren(int childIdx)throws Exception;
	void updateChildren(ChildrenDto childrenDto)throws Exception;
	void insertChildrenBody(BodyRecordDto bodyRecordDto)throws Exception;
	List<ChildrenDto> selectChildren(int parentIdx)throws Exception;

}