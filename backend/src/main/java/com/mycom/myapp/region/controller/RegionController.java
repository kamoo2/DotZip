package com.mycom.myapp.region.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycom.myapp.region.dto.RegionResultDto;
import com.mycom.myapp.region.service.RegionService;

@RestController
public class RegionController {

	@Autowired
	RegionService service;
	
	private final int SUCCESS = 1;
	
	@GetMapping(value="/regions/gugun")
	public ResponseEntity<RegionResultDto> gugunList(String sidoName){
		RegionResultDto regionResultDto;
		System.out.println(sidoName);
		regionResultDto = service.findGugunCodeList(sidoName);
		if(regionResultDto.getResult() == SUCCESS) {
			return new ResponseEntity<RegionResultDto>(regionResultDto, HttpStatus.OK);
		}else {
			return new ResponseEntity<RegionResultDto>(regionResultDto, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping(value="/regions/dong")
	public ResponseEntity<RegionResultDto> dongList(String gugunName){
		RegionResultDto regionResultDto;
		regionResultDto = service.findDongCodeList(gugunName);
		if(regionResultDto.getResult() == SUCCESS) {
			return new ResponseEntity<RegionResultDto>(regionResultDto, HttpStatus.OK);
		}else {
			return new ResponseEntity<RegionResultDto>(regionResultDto, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
