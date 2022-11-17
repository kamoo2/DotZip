package com.mycom.myapp.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.mycom.myapp.user.dao.UserDao;
import com.mycom.myapp.user.dto.UserDto;
import com.mycom.myapp.user.dto.UserResultDto;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserDao userDao;
	
	private final int SUCCESS = 1;
	private final int FAIL = -1;
	
	@Override
	public UserResultDto userRegister(UserDto userDto) {
		UserResultDto userResultDto = new UserResultDto();
		if (userDao.userRegister(userDto) == SUCCESS) {
			userResultDto.setResult(SUCCESS);
		} else {
			userResultDto.setResult(FAIL);
		}
		return userResultDto;
	}

	@Override
	public UserResultDto userInfo(UserDto userDto) { //안씀
		UserResultDto userResultDto = new UserResultDto();
		
		try {
			
		} catch(Exception e) {
			e.printStackTrace();
			userResultDto.setResult(FAIL);
		}
		
		return userResultDto;
	}

	@Override
	public UserResultDto userUpdate(UserDto userDto, MultipartHttpServletRequest request) {
		UserResultDto userResultDto = new UserResultDto();
		try {
			userDao.userChange(userDto);
			
			userResultDto.setResult(SUCCESS);
		} catch(Exception e) {
			e.printStackTrace();
			userResultDto.setResult(FAIL);
		}
		
		return userResultDto;
	}

	@Override
	public UserResultDto userDelete(UserDto userDto) {
		UserResultDto userResultDto = new UserResultDto();
		try {
			userDao.userUnregist(userDto);
			
			userResultDto.setResult(SUCCESS);
		} catch(Exception e) {
			e.printStackTrace();
			userResultDto.setResult(FAIL);
		}
		
		return userResultDto;
	}

	@Override
	public int userDupCheck(UserDto userDto) {
		return userDao.userDupCheck(userDto);
	}
	

}