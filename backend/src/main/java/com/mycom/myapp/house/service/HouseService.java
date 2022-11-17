package com.mycom.myapp.house.service;

import java.util.List;

import com.mycom.myapp.house.dto.HouseDealDetailDto;
import com.mycom.myapp.house.dto.HouseDealSimpleDto;

public interface HouseService {
	List<HouseDealSimpleDto> findHouseDealsByDongCode(String dongName, int limit, int offset);
	int houseDealsByDongCodeTotalCnt(String dongName);
	List<HouseDealSimpleDto> findHouseDealsByAptName(String searchWord, int limit, int offset);
	int houseDealsByAptNameTotalCnt(String searchWord);

	HouseDealDetailDto findHouseDealDetail(int no);
}
