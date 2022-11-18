package com.mycom.myapp.user.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mycom.myapp.user.dto.UserDto;
import com.mycom.myapp.user.service.LoginService;

@CrossOrigin(
		// localhost:5500 과 127.0.0.1 구분
		origins = "http://localhost:5500", // allowCredentials = "true" 일 경우, orogins="*" 는 X
		allowCredentials = "true", 
		allowedHeaders = "*", 
		methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.HEAD,RequestMethod.OPTIONS}
	)
@RestController
public class LoginController {

    @Autowired
    LoginService service;

    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";
    
    @PostMapping(value="/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody UserDto dto, HttpSession session){
    	
    	System.out.println("login:"+dto);
    	
        UserDto userDto = service.login(dto);
        System.out.println(userDto);
        
        

        Map<String, Object> map = new HashMap<>();
        HttpStatus status = null;
        try {
        	UserDto loginUser = service.login(dto);
        	if(loginUser != null) {
        		map.put("message", SUCCESS);
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
}