package com.mycom.myapp.interest.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mycom.myapp.board.dto.BoardParamDto;
import com.mycom.myapp.board.dto.BoardResultDto;
import com.mycom.myapp.interest.dto.InterestParamDto;
import com.mycom.myapp.interest.dto.InterestResultDto;
import com.mycom.myapp.interest.service.InterestService;
import com.mycom.myapp.user.dto.UserDto;

@RestController 
@CrossOrigin(
		origins = "http://localhost:5500",
		allowCredentials = "true", 
		allowedHeaders = "*", 
		methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.HEAD,RequestMethod.OPTIONS}
	)
@RequestMapping("/interest")
public class InterestController {

	@Autowired
	InterestService service;
	
	private static final int SUCCESS = 1;
	
	/**
	 * area 
	 */
	@GetMapping("/area")
	public ResponseEntity<InterestResultDto> interestAreaList(HttpSession session){

		InterestParamDto interestParamDto = new InterestParamDto();
		System.out.println("now: "+session.getAttribute("userDto"));
		int userSeq = ((UserDto) session.getAttribute("userDto")).getUserSeq();
		interestParamDto.setUserSeq(userSeq);
		
		InterestResultDto interestResultDto = service.interestAreaList(interestParamDto);
		
		if( interestResultDto.getResult() == SUCCESS ) {
			return new ResponseEntity<InterestResultDto>(interestResultDto, HttpStatus.OK);
		}else {
			return new ResponseEntity<InterestResultDto>(interestResultDto, HttpStatus.INTERNAL_SERVER_ERROR);
		}		 
	}
	
	@PostMapping("/area")
	public ResponseEntity<InterestResultDto> interestAreaInsert(@RequestBody InterestParamDto interestParamDto, HttpSession session){

		System.out.println("now: "+session.getAttribute("userDto"));
		int userSeq = ((UserDto) session.getAttribute("userDto")).getUserSeq();
		interestParamDto.setUserSeq(userSeq);
		
		InterestResultDto interestResultDto = service.interestAreaInsert(interestParamDto);
		
		if( interestResultDto.getResult() == SUCCESS ) {
			return new ResponseEntity<InterestResultDto>(interestResultDto, HttpStatus.OK);
		}else {
			return new ResponseEntity<InterestResultDto>(interestResultDto, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/area")
	public ResponseEntity<InterestResultDto> interestAreaDelete(@RequestBody InterestParamDto interestParamDto, HttpSession session){

		System.out.println("now: "+session.getAttribute("userDto"));
		int userSeq = ((UserDto) session.getAttribute("userDto")).getUserSeq();
		interestParamDto.setUserSeq(userSeq);
		
		InterestResultDto interestResultDto = service.interestAreaDelete(interestParamDto);
		
		if( interestResultDto.getResult() == SUCCESS ) {
			return new ResponseEntity<InterestResultDto>(interestResultDto, HttpStatus.OK);
		}else {
			return new ResponseEntity<InterestResultDto>(interestResultDto, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	/**
	 * house 
	 */
	@GetMapping("/house")
	public ResponseEntity<InterestResultDto> interestHouseList(HttpSession session){

		InterestParamDto interestParamDto = new InterestParamDto();
		System.out.println("now: "+session.getAttribute("userDto"));
		int userSeq = ((UserDto) session.getAttribute("userDto")).getUserSeq();
		interestParamDto.setUserSeq(userSeq);
		
		InterestResultDto interestResultDto = service.interestHouseList(interestParamDto);
		
		if( interestResultDto.getResult() == SUCCESS ) {
			return new ResponseEntity<InterestResultDto>(interestResultDto, HttpStatus.OK);
		}else {
			return new ResponseEntity<InterestResultDto>(interestResultDto, HttpStatus.INTERNAL_SERVER_ERROR);
		}		
	}
	@PostMapping("/house")
	public ResponseEntity<InterestResultDto> interestHouseInsert(@RequestBody InterestParamDto interestParamDto, HttpSession session){

		System.out.println("now: "+session.getAttribute("userDto"));
		int userSeq = ((UserDto) session.getAttribute("userDto")).getUserSeq();
		interestParamDto.setUserSeq(userSeq);
		
		InterestResultDto interestResultDto = service.interestHouseInsert(interestParamDto);
		
		if( interestResultDto.getResult() == SUCCESS ) {
			return new ResponseEntity<InterestResultDto>(interestResultDto, HttpStatus.OK);
		}else {
			return new ResponseEntity<InterestResultDto>(interestResultDto, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/house")
	public ResponseEntity<InterestResultDto> interestHouseDelete(@RequestBody InterestParamDto interestParamDto, HttpSession session){

		System.out.println("now: "+session.getAttribute("userDto"));
		int userSeq = ((UserDto) session.getAttribute("userDto")).getUserSeq();
		interestParamDto.setUserSeq(userSeq);
		
		InterestResultDto interestResultDto = service.interestHouseDelete(interestParamDto);
		
		if( interestResultDto.getResult() == SUCCESS ) {
			return new ResponseEntity<InterestResultDto>(interestResultDto, HttpStatus.OK);
		}else {
			return new ResponseEntity<InterestResultDto>(interestResultDto, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
