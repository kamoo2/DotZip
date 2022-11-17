package com.mycom.myapp.user.dao;

import org.apache.ibatis.annotations.Mapper;

import com.mycom.myapp.user.dto.UserDto;
import com.mycom.myapp.user.dto.UserResultDto;

@Mapper
public interface UserDao {
	int userRegister(UserDto userDto);
	int userDupCheck(UserDto userDto);
	int userChange(UserDto userDto);
	int userUnregist(UserDto userDto);
}
