package com.mycom.myapp.region.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycom.myapp.region.dao.RegionDao;
import com.mycom.myapp.region.dto.DongCodeDto;
import com.mycom.myapp.region.dto.GugunCodeDto;
import com.mycom.myapp.region.dto.RegionResultDto;

@Service
public class RegionServiceImpl implements RegionService {

	@Autowired
	RegionDao regionDao;

	private final int SUCCESS = 1;
	private final int FAIL = -1;

	@Override
	public RegionResultDto findGugunCodeList(String sidoName) {
		RegionResultDto regionResultDto = new RegionResultDto();

		try {
			// 해당 시에 해당하는 구군 리스트를 가져온다.
			List<GugunCodeDto> list = regionDao.findGugunCodeList(sidoName);
			regionResultDto.setGugunList(list);
			regionResultDto.setResult(SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			regionResultDto.setResult(FAIL);
		}
		return regionResultDto;
	}

	@Override
	public RegionResultDto findDongCodeList(String gugunName) {
		RegionResultDto regionResultDto = new RegionResultDto();

		try {
			// 해당 시에 해당하는 구군 리스트를 가져온다.
			List<DongCodeDto> list = regionDao.findDongCodeList(gugunName);
			regionResultDto.setDongList(list);
			regionResultDto.setResult(SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			regionResultDto.setResult(FAIL);
		}
		return regionResultDto;
	}

}
