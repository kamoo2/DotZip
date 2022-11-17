package com.mycom.myapp.region.dto;

import java.util.List;

public class RegionResultDto {
	// Spring 에서 response를 json으로 처리하기 위해 미리 response에서 리턴값으로 사용하는 항목들을 dto로 만든다.
		private int result;
		private GugunCodeDto gugunDto; // 게시글 하나
		private DongCodeDto dongDto;
		private List<GugunCodeDto> gugunList;
		private List<DongCodeDto> dongList;
		
		
		public int getResult() {
			return result;
		}


		public void setResult(int result) {
			this.result = result;
		}


		public GugunCodeDto getGugunDto() {
			return gugunDto;
		}


		public void setGugunDto(GugunCodeDto gugunDto) {
			this.gugunDto = gugunDto;
		}


		public DongCodeDto getDongDto() {
			return dongDto;
		}


		public void setDongDto(DongCodeDto dongDto) {
			this.dongDto = dongDto;
		}


		public List<GugunCodeDto> getGugunList() {
			return gugunList;
		}


		public void setGugunList(List<GugunCodeDto> gugunList) {
			this.gugunList = gugunList;
		}


		public List<DongCodeDto> getDongList() {
			return dongList;
		}


		public void setDongList(List<DongCodeDto> dongList) {
			this.dongList = dongList;
		}


		@Override
		public String toString() {
			return "RegionResultDto [result=" + result + ", gugunDto=" + gugunDto + ", dongDto=" + dongDto
					+ ", gugunList=" + gugunList + ", dongList=" + dongList + "]";
		}
		
		
}
