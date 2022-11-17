package com.mycom.myapp.user.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;

import com.mycom.myapp.user.dto.UserDto;
import com.mycom.myapp.user.service.LoginService;

@Controller
@CrossOrigin(
		// localhost:5500 과 127.0.0.1 구분
		origins = "http://localhost:5500", // allowCredentials = "true" 일 경우, orogins="*" 는 X
		allowCredentials = "true", 
		allowedHeaders = "*", 
		methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.HEAD,RequestMethod.OPTIONS}
	)
public class LoginController {

    @Autowired
    LoginService service;

    // "result":"success" / "fail"
    @PostMapping(value="/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody UserDto dto, HttpSession session){
    	
    	System.out.println("login:"+dto);
    	
        UserDto userDto = service.login(dto);
        System.out.println(userDto);

        Map<String, String> map = new HashMap<>();
        if( userDto != null ) {
            session.setAttribute("userDto", userDto);
            map.put("result", "success");
            map.put("userName", userDto.getUserName());
            map.put("userEmail", userDto.getUserEmail());
            map.put("userProfileImageUrl", userDto.getUserProfileImageUrl());
            return new ResponseEntity<Map<String, String>>(map, HttpStatus.OK);
        }

        map.put("result", "fail");
        return new ResponseEntity<Map<String, String>>(map, HttpStatus.NOT_FOUND);
    }
}