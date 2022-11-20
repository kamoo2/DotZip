package com.mycom.myapp.interest.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.mycom.myapp.interest.dto.InterestAreaDto;
import com.mycom.myapp.interest.dto.InterestHouseDto;
import com.mycom.myapp.interest.dto.InterestParamDto;

@Mapper
public interface InterestDao {

	//interest area
	List<InterestAreaDto> interestAreaList(InterestParamDto interestParamDto);
	int interestAreaListTotalCount(int userSeq);
	
	int interestAreaInsert(InterestParamDto interestParamDto);
	int interestAreaDelete(InterestParamDto interestParamDto);
	
	//interest house
	List<InterestHouseDto> interestHouseList(InterestParamDto interestParamDto);
	int interestHouseListTotalCount(int userSeq);
	
	int interestHouseInsert(InterestParamDto interestParamDto);
	int interestHouseDelete(InterestParamDto interestParamDto);
}