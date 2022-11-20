package com.mycom.myapp.user.dto;

public class UserResultDto {
	private String result;
	private UserDto dto;

	public UserDto getDto() {
		return dto;
	}

	public void setDto(UserDto dto) {
		this.dto = dto;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}
	
}