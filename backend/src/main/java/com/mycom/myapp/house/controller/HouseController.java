package com.mycom.myapp.house.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mycom.myapp.house.dto.HouseDealDetailDto;
import com.mycom.myapp.house.dto.HouseDealSimpleDto;
import com.mycom.myapp.house.service.HouseService;

@RestController
public class HouseController {
	
	@Autowired
	HouseService service;
	
	@GetMapping(value="/houses")
	public List<HouseDealSimpleDto> findHouseDealsByDongCode(String dong,int limit,int offset){
		System.out.println(dong);
		System.out.println(limit);
		System.out.println(offset);
		List<HouseDealSimpleDto> list = service.findHouseDealsByDongCode(dong, limit, offset);
		
		return list;
	}
	
	@GetMapping(value="/houses/count")
	public int houseDealsByDongCodeTotalCnt(String dong){
		int count = service.houseDealsByDongCodeTotalCnt(dong);
		
		return count;
	}
	
	@GetMapping(value="/houses/apts")
	public List<HouseDealSimpleDto> findHouseDealsByAptName(String searchWord,int limit,int offset){
		List<HouseDealSimpleDto> list = service.findHouseDealsByAptName(searchWord, limit, offset);
		return list;
	}
	
	@GetMapping(value="/houses/apts/count")
	public int houseDealsByAptNameTotalCnt(String searchWord){
		int count = service.houseDealsByAptNameTotalCnt(searchWord);
		
		return count;
	}
	
	@GetMapping(value="/houses/{no}")
	public HouseDealDetailDto findHouseDealDetail(@PathVariable int no){
		HouseDealDetailDto dto = service.findHouseDealDetail(no);
		return dto;
	}
}
