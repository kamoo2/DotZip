package com.mycom.myapp.user.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.mycom.myapp.user.dto.UserDto;
import com.mycom.myapp.user.dto.UserResultDto;
import com.mycom.myapp.user.service.UserService;

@RestController
@CrossOrigin(
		// localhost:5500 과 127.0.0.1 구분
		origins = "http://localhost:5500", // allowCredentials = "true" 일 경우, orogins="*" 는 X
		allowCredentials = "true", 
		allowedHeaders = "*", 
		methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.HEAD,RequestMethod.OPTIONS}
	)
public class UserController {
	@Autowired
	UserService userService;
	
	private final int SUCCESS = 1;
	private final int FAIL = -1;
	private final int DUPLICATED = -2;
	
	@PostMapping(value="users/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody UserDto dto, HttpSession session){
    	
    	System.out.println("login:"+dto);
    	
        

        Map<String, Object> map = new HashMap<>();
        HttpStatus status = null;
        try {
        	UserResultDto userResultDto = userService.userLogin(dto);
        	System.out.println(userResultDto.getDto());
            
        	if(userResultDto.getDto() != null) {
        		map.put("message", SUCCESS);
        		map.put("user",userResultDto.getDto());
        		status = HttpStatus.ACCEPTED;
        	}else {
        		map.put("message", FAIL);
        		status = HttpStatus.ACCEPTED;
        	}
        }catch(Exception e){
        	map.put("message", e.getMessage());
        	status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
//        if( userDto != null ) {
//            session.setAttribute("userDto", userDto);
//            map.put("result", "success");
//            map.put("userName", userDto.getUserName());
//            map.put("userEmail", userDto.getUserEmail());
//            map.put("userProfileImageUrl", userDto.getUserProfileImageUrl());
//            return new ResponseEntity<Map<String, String>>(map, HttpStatus.OK);
//        }

        return new ResponseEntity<Map<String, Object>>(map, status);
    }

	
	@PostMapping(value="/users/register")
	public ResponseEntity<Map<String, String>> userRegister(@RequestBody UserDto dto,HttpSession session) {
		System.out.println(dto);
		Map<String, String> map = new HashMap<>();
		
		int res = userService.userDupCheck(dto);
		System.out.println(res);
		if (res == 0) {
			UserResultDto userResultDto = userService.userRegister(dto);
			if (userResultDto.getResult() == SUCCESS) {
				map.put("result", "success");
				return new ResponseEntity<Map<String, String>>(map, HttpStatus.OK);
			} else {
				map.put("result", "fail");
				return new ResponseEntity<Map<String, String>>(map, HttpStatus.NOT_FOUND);
			}
		} else {
			map.put("result", "duplicate");
			return new ResponseEntity<Map<String, String>>(map, HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping(value="/users")
	public ResponseEntity<UserResultDto> userDetail(HttpSession session) {
		UserDto userDto = (UserDto)session.getAttribute("userDto");
		System.out.println("getInfo:"+userDto);
		
		//UserResultDto userResultDto = userService.userInfo(userDto);
		//Map<String, String> map = new HashMap<>();
		UserResultDto userResultDto = new UserResultDto();
		
		if (userDto != null) {
			userResultDto.setResult(SUCCESS);
			userResultDto.setDto(userDto);
			return new ResponseEntity<UserResultDto>(userResultDto, HttpStatus.OK);
		} else {
			userResultDto.setResult(FAIL);
			return new ResponseEntity<UserResultDto>(userResultDto, HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping(value="/users/{userEmail}") //post for imgupload
	public ResponseEntity<UserResultDto> userUpdate(UserDto userDto, MultipartHttpServletRequest request) {

		UserResultDto userResultDto = userService.userUpdate(userDto, request);
		
		if (userResultDto.getResult() == SUCCESS) {
			userResultDto.setResult(SUCCESS);
			return new ResponseEntity<UserResultDto>(userResultDto, HttpStatus.OK);
		} else {
			userResultDto.setResult(FAIL);
			return new ResponseEntity<UserResultDto>(userResultDto, HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping(value="/users/{userEmail}") //post for imgupload
	public ResponseEntity<UserResultDto> userDelete(UserDto userDto) {

		UserResultDto userResultDto = userService.userDelete(userDto);
		
		if (userResultDto.getResult() == SUCCESS) {
			userResultDto.setResult(SUCCESS);
			return new ResponseEntity<UserResultDto>(userResultDto, HttpStatus.OK);
		} else {
			userResultDto.setResult(FAIL);
			return new ResponseEntity<UserResultDto>(userResultDto, HttpStatus.NOT_FOUND);
		}
	}
	
}