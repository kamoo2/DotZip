package com.mycom.myapp.user.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.mycom.myapp.user.dto.UserDto;


// @RestController 아님. 비동기 요청에 대한 처리 컨트롤러 아님 X. 페이지 이동에 대한 역할 수행
@Controller
public class HomeController {

	@GetMapping(value = "/")
	public String home() {
		return "index2.html"; // static folder의 index.html로 이동
	}
	
	@GetMapping(value = "/main")
	public String login() {
		return "index.html";
	}
	
	@GetMapping(value = "/edit")
	public String edit() {
		return "/infoChange.html";
	}
	
	@GetMapping(value = "/register")
	public String register() {
		return "/signup.html";
	}
	
	@GetMapping(value = "/board")
	public String board() {
		return "/board/boardMain.html";
	}
	
	@GetMapping(value = "/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		System.out.println("세션 삭제 완료");
		return "index.html";
	}
}
