package com.mycom.myapp.user.service;

import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.mycom.myapp.user.dto.UserDto;
import com.mycom.myapp.user.dto.UserResultDto;

public interface UserService {
	UserResultDto userLogin(UserDto dto);
	UserResultDto userRegister(UserDto userDto); //post
	UserResultDto userInfo(UserDto userDto); //get
	UserResultDto userUpdate(UserDto userDto, MultipartHttpServletRequest request); //put
	UserResultDto userDelete(UserDto userDto); //delete
	int userDupCheck(UserDto userDto);
}