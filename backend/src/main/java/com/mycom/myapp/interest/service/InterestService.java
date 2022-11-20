package com.mycom.myapp.interest.service;

import com.mycom.myapp.interest.dto.InterestParamDto;
import com.mycom.myapp.interest.dto.InterestResultDto;

public interface InterestService {

	//interest area
	public InterestResultDto interestAreaList(InterestParamDto interestParamDto);
	public InterestResultDto interestAreaInsert(InterestParamDto interestParamDto);
	public InterestResultDto interestAreaDelete(InterestParamDto interestParamDto);
	public int interestAreaListTotalCount(int userSeq);

	//interest house
	public InterestResultDto interestHouseList(InterestParamDto interestParamDto);
	public InterestResultDto interestHouseInsert(InterestParamDto interestParamDto);
	public InterestResultDto interestHouseDelete(InterestParamDto interestParamDto);
	public int interestHouseListTotalCount(int userSeq);
	
	//popular
	public InterestResultDto popularHouseList();
	public InterestResultDto popularAreaList();
}
