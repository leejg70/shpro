<template>
	<div class="ia-content-body">
		<div class="ia-content-header">
			<div class="ia-in-sec">
				<h1 class="ia-h1">현황판</h1>
				<div class="ia-guideLink">
					<button type="button" class="ia-top" onclick="$(window).scrollTop(0)">TOP</button>
				</div>
			</div>
		</div>
		<!-- Note -->
		<section class="ia-section ia-section-note">
			<div class="ia-note">
				<div class="row">
					<div class="col col-12">
						<div class="ia-box g-box-note">
							<div class="ia-box-header">
								<h4 class="ia-h4 marginT-0">Publish Note</h4>
							</div>
							<div class="ia-box-body">
								<ul class="ia-desc marginT-0">
									<li>유형 표시방법 - FP : Full Popup, MP : Massge Popup, SP : Select Popup,  EP : Etc Popup,</li>
									<li>1차 진척관리 - 최초 완료표시 기준으로 날짜를 표시하고, 비고란에 전달사항이 있는경우 표시한다.</li>
									<li>2차 결함관리 - 신규/수정/삭제 이슈가 있는 경우 소스코드와 비고란에 동일한 주석문구를 표시한다. (주석표기 예시 - 181130 홍길동 작업내용 수정)</li>
									<li>3차 최종완료 - 사이트 오픈후에 전체현황을 엑셀로 백업하여 기록을 남기고 비고란은 삭제한다. (최종완료 초기화 작업)</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- //Note -->
		<br>
		<div class="ia-total">
			<p class="ia-msg">전체 페이지 : 157</p>
			<p class="ia-version">IA 버전 : v1.3</p>
		</div>
		<!-- 00_Guide -->
		<!-- wait:작업중, done:완료, del:삭제, except:보류
		<section class="ia-section ia-section-ajax" data-file="ajax_ia_0" data-color="01a2de" id="gIA0">
			<div class="ia-section-header">
				<h2 class="ia-h2"><a href="#this" class="accordion-toggle">01_가이드</a></h2>
				<div class="ia-legend">
					<span class="item"><em>총 페이지 : </em><em class="legend-total">25</em>,</span>
					<span class="item c-done"><em>완료 : </em><em class="legend-complete">0</em>,</span>
					<span class="item"><em>진척률 : </em><em class="legend-process">0%</em></span>
				</div>
			</div>
			<div class="ia-section-body" style="height: auto;">
				<div class="ia-tab-content type-thumb">
					<div class="ia-iframe-wrap">
						<div class="ia-iframe-list"></div>
					</div>
				</div>
				<div class="ia-tab-content type-list is-visible">
					<div class="tbl ia-tbl">
						<table>
							<caption>
								<strong>제목 정보</strong>
								<p>제목1, 제목2, 제목3 항목으로 구성됨</p>
							</caption>
							<thead>
								<tr>
									<th scope="col">번호</th>
									<th scope="col" class="col-1depth">1Depth</th>
									<th scope="col" class="col-2depth">2Depth</th>
									<th scope="col" class="col-3depth">3Depth</th>
									<th scope="col" class="col-4depth" style="display: none;">4Depth</th>
									<th scope="col" class="col-5depth" style="display: none;">5Depth</th>
									<th scope="col" class="col-point">유형</th>
									<th scope="col">URL</th>
									<th scope="col" class="col-date">날짜</th>
									<th scope="col">상태</th>
									<th scope="col">담당자</th>
									<th scope="col">비고</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="col-num">1</td>
									<td class="col-1depth">가이드</td>
									<td class="col-2depth">인풋</td>
									<td class="col-3depth"></td>
									<td class="col-4depth" style="display: none;"></td>
									<td class="col-5depth" style="display: none;"></td>
									<td class="col-type" data-type=""></td>
									<td class="col-url"><router-link to="/guide/01" target="_blank">GuideInput</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-worker"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num">2</td>
									<td class="col-1depth"></td>
									<td class="col-2depth">버튼</td>
									<td class="col-3depth"></td>
									<td class="col-4depth" style="display: none;"></td>
									<td class="col-5depth" style="display: none;"></td>
									<td class="col-type" data-type=""></td>
									<td class="col-url"><router-link to="/guide/02" target="_blank">GuideButton</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-worker"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num">3</td>
									<td class="col-1depth"></td>
									<td class="col-2depth">체크박스</td>
									<td class="col-3depth"></td>
									<td class="col-4depth" style="display: none;"></td>
									<td class="col-5depth" style="display: none;"></td>
									<td class="col-type" data-type=""></td>
									<td class="col-url"><router-link to="/guide/03" target="_blank">CheckBox</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-worker"></td>
									<td class="col-memo"></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
		//00_Guide -->

		<!-- 메인 -->
		<section class="ia-section ia-section-ajax" data-file="ajax_ia_1" data-color="01a2de" id="gIA1">
			<div class="ia-section-header">
				<h2 class="ia-h2"><a href="#this" class="accordion-toggle">메인</a></h2>
				<div class="ia-legend">
					<span class="item"><em>총 페이지 : </em><em class="legend-total">6</em>,</span>
					<span class="item c-done"><em>완료 : </em><em class="legend-complete">0</em>,</span>
					<span class="item"><em>진척률 : </em><em class="legend-process">0%</em></span>
				</div>
			</div>
			<div class="ia-section-body" style="height: auto;">
				<div class="ia-tab-content type-thumb">
					<div class="ia-iframe-wrap">
						<div class="ia-iframe-list"></div>
					</div>
				</div>
				<div class="ia-tab-content type-list is-visible">
					<div class="tbl ia-tbl">
						<table>
							<thead>
								<tr>
									<th scope="col" class="col-num">번호</th>
									<th scope="col" class="col-1depth">1Depth</th>
									<th scope="col" class="col-2depth">2Depth</th>
									<th scope="col" class="col-3depth">3Depth</th>
									<th scope="col" class="col-4depth">4Depth</th>
									<th scope="col" class="col-5depth">5Depth</th>
									<th scope="col" class="col-point">구분</th>
									<th scope="col" class="col-url">URL</th>
									<th scope="col" class="col-date">퍼블완료일</th>
									<th scope="col" class="col-complete">검수완료일</th>
									<th scope="col" class="col-memo">비고</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">메인</td>
									<td class="col-2depth">비로그인</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MAIN_01" target="_blank">/views/pub/Main/MAIN_01</router-link></td>
									<td class="col-date">2024-05-17</td>
									<td class="col-complete">2024-05-20</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">로그인</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MAIN_02" target="_blank">/views/pub/Main/MAIN_02</router-link></td>
									<td class="col-date">2024-05-17</td>
									<td class="col-complete">2024-05-20</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">검색결과</td>
									<td class="col-3depth">결과 有/無</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MAIN_00_01" target="_blank">/views/pub/Main/MAIN_00_01</router-link></td>
									<td class="col-date">2024-05-08</td>
									<td class="col-complete">2024-05-17</td>
									<td class="col-memo">
										<div>5/14 모바일 css 반영완료</div>
										<div class="text-error">5/29 검색영역에 해시태그 추가 routerLink로 변경</div>
									</td>
								</tr>
								<!-- <tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">결과 無</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr> -->
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">GNB메뉴 팝업</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/MAIN_00_02_p" target="_blank">/views/pub/Main/MAIN_00_02_p</router-link></td>
									<td class="col-date">2024-05-10</td>
									<td class="col-complete">2024-05-20</td>
									<td class="col-memo">main_01 참조</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">전체메뉴 팝업</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/MAIN_00_03_p" target="_blank">/views/pub/Main/MAIN_00_03_p</router-link></td>
									<td class="col-date">2024-05-10</td>
									<td class="col-complete">2024-05-20</td>
									<td class="col-memo">main_01 참조</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">메인공지 팝업</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/MAIN_00_04_p" target="_blank">/views/pub/Main/MAIN_00_04_p</router-link></td>
									<td class="col-date">2024-05-22</td>
									<td class="col-complete">2024-05-23</td>
									<td class="col-memo"></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
		<!-- //메인 -->

		<!-- GNB 메뉴 -->
		<section class="ia-section ia-section-ajax" data-file="ajax_ia_2" data-color="01a2de" id="gIA2">
			<div class="ia-section-header">
				<h2 class="ia-h2"><a href="#this" class="accordion-toggle">GNB 메뉴</a></h2>
				<div class="ia-legend">
					<span class="item"><em>총 페이지 : </em><em class="legend-total">52</em>,</span>
					<span class="item c-done"><em>완료 : </em><em class="legend-complete">0</em>,</span>
					<span class="item"><em>진척률 : </em><em class="legend-process">0%</em></span>
				</div>
			</div>
			<div class="ia-section-body" style="height: auto;">
				<div class="ia-tab-content type-thumb">
					<div class="ia-iframe-wrap">
						<div class="ia-iframe-list"></div>
					</div>
				</div>
				<div class="ia-tab-content type-list is-visible">
					<div class="tbl ia-tbl">
						<table>
							<thead>
								<tr>
									<th scope="col" class="col-num">번호</th>
									<th scope="col" class="col-1depth">1Depth</th>
									<th scope="col" class="col-2depth">2Depth</th>
									<th scope="col" class="col-3depth">3Depth</th>
									<th scope="col" class="col-4depth">4Depth</th>
									<th scope="col" class="col-5depth">5Depth</th>
									<th scope="col" class="col-point">구분</th>
									<th scope="col" class="col-url">URL</th>
									<th scope="col" class="col-date">퍼블완료일</th>
									<th scope="col" class="col-complete">검수완료일</th>
									<th scope="col" class="col-memo">비고</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">Data서비스</td>
									<td class="col-2depth">Data상품</td>
									<td class="col-3depth">목록(default)</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDD_01" target="_blank">/views/pub/DataService/PRDD_01</router-link></td>
									<td class="col-date">2024-05-07</td>
									<td class="col-complete">2024-05-22</td>
									<td class="col-memo">
										<div>5/22 모바일 css 반영완료</div>
										<div class="text-error">5/29 - 리스트 상단 'API이용방법안내' 버튼 추가</div>
									</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">목록(검색결과)</td>
									<td class="col-4depth">결과 有</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">
										<!-- <router-link to="/PRDD_02_01" target="_blank">/views/pub/DataService/PRDD_02_01</router-link> -->
										목록화면과 동일
									</td>
									<td class="col-date">2024-05-07</td>
									<td class="col-complete">2024-05-22</td>
									<td class="col-memo">-</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">결과 無</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">
										<!-- <router-link to="/PRDD_02_01_null" target="_blank">/views/pub/DataService/PRDD_02_01_null</router-link> -->
										목록화면에 취합
									</td>
									<td class="col-date">2024-05-07</td>
									<td class="col-complete">2024-05-22</td>
									<td class="col-memo">-</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">상세</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDD_00_01" target="_blank">/views/pub/DataService/PRDD_00_01</router-link></td>
									<td class="col-date">2024-05-07</td>
									<td class="col-complete">2024-05-22</td>
									<td class="col-memo">5/22 모바일 css 반영완료</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">맞춤 Data</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDD_03" target="_blank">/views/pub/DataService/PRDD_03</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">솔루션서비스</td>
									<td class="col-2depth">목록(default)</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">PRDD_01 동일</td>
									<td class="col-date">2024-05-07</td>
									<td class="col-complete">2024-05-22</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">목록(검색결과)</td>
									<td class="col-3depth">결과 有</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">PRDD_01 동일</td>
									<td class="col-date">2024-05-07</td>
									<td class="col-complete">2024-05-22</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">결과 無</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">PRDD_01 동일</td>
									<td class="col-date">2024-05-07</td>
									<td class="col-complete">2024-05-22</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">상세1</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDS_00_01" target="_blank">/views/pub/SolutionService/PRDS_00_01</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">상세2</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDS_00_02" target="_blank">/views/pub/SolutionService/PRDS_00_02</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">상세3</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDS_00_03" target="_blank">/views/pub/SolutionService/PRDS_00_03</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">상세4</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDS_00_04" target="_blank">/views/pub/SolutionService/PRDS_00_04</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">상세5</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDS_00_05" target="_blank">/views/pub/SolutionService/PRDS_00_05</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">광고서비스</td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDM_00" target="_blank">/views/pub/ADService/PRDM_00</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">타겟마케팅</td>
									<td class="col-3depth">서비스안내</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDM_01" target="_blank">/views/pub/ADService/PRDM_01</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr class="del">
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">타겟군탐색 및 가상견적</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDM_01_01" target="_blank">/views/pub/ADService/PRDM_01_01</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete">삭제</td>
									<td class="col-memo"></td>
								</tr>
								<tr class="del">
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">신청서 작성</td>
									<td class="col-4depth">LMS</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDM_01_02" target="_blank">/views/pub/ADService/PRDM_01_02</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete">삭제</td>
									<td class="col-memo"></td>
								</tr>
								<tr class="del">
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">RCS</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDM_01_03" target="_blank">/views/pub/ADService/PRDM_01_03</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete">삭제</td>
									<td class="col-memo"></td>
								</tr>
								<tr class="del">
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">MMS</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDM_01_04" target="_blank">/views/pub/ADService/PRDM_01_04</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete">삭제</td>
									<td class="col-memo"></td>
								</tr>
								<tr class="del">
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">APP PUSH</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDM_01_05" target="_blank">/views/pub/ADService/PRDM_01_05</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete">삭제</td>
									<td class="col-memo"></td>
								</tr>
								<tr class="del">
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">신청완료</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDM_01_06" target="_blank">/views/pub/ADService/PRDM_01_06</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete">삭제</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">서베이대행서비스</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDM_02" target="_blank">/views/pub/ADService/PRDM_02</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">SOL-Pay 배너광고</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDM_03" target="_blank">/views/pub/ADService/PRDM_03</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">API서비스</td>
									<td class="col-2depth">목록(default)</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">PRDD_01 동일</td>
									<td class="col-date">2024-05-07</td>
									<td class="col-complete">2024-05-22</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">목록(검색결과)</td>
									<td class="col-3depth">결과 有</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">PRDD_01 동일</td>
									<td class="col-date">2024-05-07</td>
									<td class="col-complete">2024-05-22</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">결과 無</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">PRDD_01 동일</td>
									<td class="col-date">2024-05-07</td>
									<td class="col-complete">2024-05-22</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">상세</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">PRDD_00_01 동일</td>
									<td class="col-date">2024-05-07</td>
									<td class="col-complete">2024-05-22</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">API서비스 이용방법 안내</td>
									<td class="col-3depth">이용절차</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDA_00_02" target="_blank">/views/pub/APIService/PRDA_00_02</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">개발자가이드</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/PRDA_00_03" target="_blank">/views/pub/APIService/PRDA_00_03</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">My</td>
									<td class="col-2depth">사업자계정전환</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_00" target="_blank">/views/pub/My/MY_00</router-link></td>
									<td class="col-date">2024-04-26</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo">[2024.05.10] Rework 작업</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">정보입력(개인사업자)</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_01" target="_blank">/views/pub/My/MY_01</router-link></td>
									<td class="col-date">2024-04-26</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo">[2024.05.10] Rework 작업<br>[2024.05.30] 이메일주소 입력부분 수정</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">정보입력(법인사업자)</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_02" target="_blank">/views/pub/My/MY_02</router-link></td>
									<td class="col-date">2024-04-26</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo">[2024.05.10] Rework 작업</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">신청완료</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_00_01" target="_blank">/views/pub/My/MY_00_01</router-link></td>
									<td class="col-date">2024-04-26</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo">[2024.05.10] Rework 작업</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">전환완료</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_00_02" target="_blank">/views/pub/My/MY_00_02</router-link></td>
									<td class="col-date">2024-05-10</td>
									<td class="col-complete">2024-05-10</td>
									<td class="col-memo">신규</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">회원정보변경</td>
									<td class="col-3depth">(개인) 조회</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_02_r" target="_blank">/views/pub/My/MY_02_r</router-link></td>
									<td class="col-date">2024-05-23</td>
									<td class="col-complete">2024-05-23</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">수정</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_02_u" target="_blank">/views/pub/My/MY_02_u</router-link></td>
									<td class="col-date">2024-05-23</td>
									<td class="col-complete">2024-05-23</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">(개인사업자) 조회</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_03_r" target="_blank">/views/pub/My/MY_03_r</router-link></td>
									<td class="col-date">2024-05-23</td>
									<td class="col-complete">2024-05-23</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">수정</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_03_u" target="_blank">/views/pub/My/MY_03_u</router-link></td>
									<td class="col-date">2024-05-23</td>
									<td class="col-complete">2024-05-23</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">(법인사업자) 조회</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_04_r" target="_blank">/views/pub/My/MY_04_r</router-link></td>
									<td class="col-date">2024-05-23</td>
									<td class="col-complete">2024-05-23</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">수정</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_04_u" target="_blank">/views/pub/My/MY_04_u</router-link></td>
									<td class="col-date">2024-05-23</td>
									<td class="col-complete">2024-05-23</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">(공통) 회원탈퇴 안내</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_05" target="_blank">/views/pub/My/MY_05</router-link></td>
									<td class="col-date">2024-05-23</td>
									<td class="col-complete">2024-05-23</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">나의계약(초기화면)</td>
									<td class="col-3depth">목록</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_03" target="_blank">/views/pub/My/MY_03</router-link></td>
									<td class="col-date">2024-05-27</td>
									<td class="col-complete">2024-05-28</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">APP KEY 조회 팝업</td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/MY_03_01_p" target="_blank">/views/pub/My/MY_03_01_p</router-link></td>
									<td class="col-date">2024-05-27</td>
									<td class="col-complete">2024-05-28</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">Data 다운로드</td>
									<td class="col-5depth">1단계 휴대폰인증</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/MY_03_02_01_p" target="_blank">/views/pub/My/MY_03_02_01_p</router-link></td>
									<td class="col-date">2024-05-28</td>
									<td class="col-date">2024-05-29</td>
									<td class="col-memo">모바일 비제공</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">Data 다운로드</td>
									<td class="col-5depth">2단계 상품다운로드</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/MY_03_02_02_p" target="_blank">/views/pub/My/MY_03_02_02_p</router-link></td>
									<td class="col-date">2024-05-28</td>
									<td class="col-date">2024-05-29</td>
									<td class="col-memo">모바일 비제공</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">관심상품</td>
									<td class="col-3depth">목록</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_04" target="_blank">/views/pub/My/MY_04</router-link></td>
									<td class="col-date">2024-05-27</td>
									<td class="col-complete">2024-05-28</td>
									<td class="col-memo"></td>
								</tr>
								<tr class="del">
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">타겟마케팅 신청내역</td>
									<td class="col-3depth">목록</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_07" target="_blank">/views/pub/My/MY_07</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete" data-complete="del"></td>
									<td class="col-memo"></td>								
								</tr>
								<tr class="del">
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">상세</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_07_01" target="_blank">/views/pub/My/MY_07_01</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete" data-complete="del"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">나의문의</td>
									<td class="col-3depth">목록</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_08" target="_blank">/views/pub/My/MY_08</router-link></td>
									<td class="col-date">2024-05-27</td>
									<td class="col-complete">2024-05-28</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">알림</td>
									<td class="col-3depth">목록</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/MY_06" target="_blank">/views/pub/My/MY_06</router-link></td>
									<td class="col-date">2024-05-27</td>
									<td class="col-complete">2024-05-28</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(공통)</td>
									<td class="col-3depth">목록</td>
									<td class="col-4depth">나의문의/관심상품/알림/나의계약 null</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">각 목록페이지 반영</td>
									<td class="col-date">2024-05-07</td>
									<td class="col-complete">2024-05-22</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(공통)</td>
									<td class="col-3depth">비밀번호변경</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/MY_00_03_p" target="_blank">/views/pub/My/MY_00_03_p</router-link></td>
									<td class="col-date">2024-05-10</td>
									<td class="col-complete">2024-05-10</td>
									<td class="col-memo"></td>
								</tr>
								<tr class="del">
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(공통)</td>
									<td class="col-3depth">마이크레딧 조회 팝업</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/MY_00_04_p" target="_blank">/views/pub/My/MY_00_04_p</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete" data-complete="del"></td>
									<td class="col-memo"></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
		<!-- //GNB 메뉴 -->

		<!-- 그외 메뉴 -->
		<section class="ia-section ia-section-ajax" data-file="ajax_ia_3" data-color="01a2de" id="gIA3">
			<div class="ia-section-header">
				<h2 class="ia-h2"><a href="#this" class="accordion-toggle">그외 메뉴</a></h2>
				<div class="ia-legend">
					<span class="item"><em>총 페이지 : </em><em class="legend-total">25</em>,</span>
					<span class="item c-done"><em>완료 : </em><em class="legend-complete">0</em>,</span>
					<span class="item"><em>진척률 : </em><em class="legend-process">0%</em></span>
				</div>
			</div>
			<div class="ia-section-body" style="height: auto;">
				<div class="ia-tab-content type-thumb">
					<div class="ia-iframe-wrap">
						<div class="ia-iframe-list"></div>
					</div>
				</div>
				<div class="ia-tab-content type-list is-visible">
					<div class="tbl ia-tbl">
						<table>
							<thead>
								<tr>
									<th scope="col" class="col-num">번호</th>
									<th scope="col" class="col-1depth">1Depth</th>
									<th scope="col" class="col-2depth">2Depth</th>
									<th scope="col" class="col-3depth">3Depth</th>
									<th scope="col" class="col-4depth">4Depth</th>
									<th scope="col" class="col-5depth">5Depth</th>
									<th scope="col" class="col-point">구분</th>
									<th scope="col" class="col-url">URL</th>
									<th scope="col" class="col-date">퍼블완료일</th>
									<th scope="col" class="col-complete">검수완료일</th>
									<th scope="col" class="col-memo">비고</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">Databule</td>
									<td class="col-2depth">Databule 안내</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/BLUE_01" target="_blank">/views/pub/Databule/BLUE_01</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">신한 Data Universe</td>
									<td class="col-3depth">Gran Data</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/BLUE_02_01" target="_blank">/views/pub/Databule/BLUE_02_01</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">MyData</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/BLUE_02_02" target="_blank">/views/pub/Databule/BLUE_02_02</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">MyCREDIT</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/BLUE_02_03" target="_blank">/views/pub/Databule/BLUE_02_03</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">데이터전문기관</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/BLUE_02_04" target="_blank">/views/pub/Databule/BLUE_02_04</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr class="del">
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">협력사</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/BLUE_02_05" target="_blank">/views/pub/Databule/BLUE_02_05</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete" data-complete="del"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">고객센터</td>
									<td class="col-2depth">공지사항</td>
									<td class="col-3depth">목록</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/NOTI_01" target="_blank">/views/pub/Customer/NOTI_01</router-link></td>
									<td class="col-date">2024-05-09</td>
									<td class="col-complete">2024-05-17</td>
									<td class="col-memo">5/14 모바일 css반영완료</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">검색결과</td>
									<td class="col-4depth">결과 有</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">
										<!-- <router-link to="/NOTI_02_01" target="_blank">/views/pub/Customer/NOTI_02_01</router-link> -->
										목록화면에 취합
									</td>
									<td class="col-date">2024-05-09</td>
									<td class="col-complete">2024-05-17</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">결과 無</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">
										<!-- <router-link to="/NOTI_02_01_null" target="_blank">/views/pub/Customer/NOTI_02_01_null</router-link> -->
										목록화면에 취합
									</td>
									<td class="col-date">2024-05-09</td>
									<td class="col-complete">2024-05-17</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">상세</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/NOTI_00_01" target="_blank">/views/pub/Customer/NOTI_00_01</router-link></td>
									<td class="col-date">2024-05-09</td>
									<td class="col-complete">2024-05-17</td>
									<td class="col-memo">5/14 모바일 css반영완료</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">FAQ</td>
									<td class="col-3depth">목록/상세</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/FAQS_01" target="_blank">/views/pub/Customer/FAQS_01</router-link></td>
									<td class="col-date">2024-05-16</td>
									<td class="col-complete">2024-05-17</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">고객문의</td>
									<td class="col-3depth">목록</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/QNAS_01" target="_blank">/views/pub/Customer/QNAS_01</router-link></td>
									<td class="col-date">2024-05-22</td>
									<td class="col-complete">2024-05-23</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">검색결과</td>
									<td class="col-4depth">결과 有</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">
										<!-- <router-link to="/QNAS_02_01" target="_blank">/views/pub/Customer/QNAS_02_01</router-link> -->
										목록화면에 취합
									</td>
									<td class="col-date">2024-05-22</td>
									<td class="col-complete">2024-05-23</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">결과 無</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">
										<!-- <router-link to="/QNAS_02_01_null" target="_blank">/views/pub/Customer/QNAS_02_01_null</router-link> -->
										목록화면에 취합
									</td>
									<td class="col-date">2024-05-22</td>
									<td class="col-complete">2024-05-23</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">상세</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/QNAS_00_01_r" target="_blank">/views/pub/Customer/QNAS_00_01_r</router-link></td>
									<td class="col-date">2024-05-22</td>
									<td class="col-complete">2024-05-23</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">수정</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">
										<!-- <router-link to="/QNAS_00_01_u" target="_blank">/views/pub/Customer/QNAS_00_01_u</router-link> -->
										등록화면과 동일함
									</td>
									<td class="col-date">2024-05-22</td>
									<td class="col-complete">2024-05-23</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">등록</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/QNAS_01_01_c" target="_blank">/views/pub/Customer/QNAS_01_01_c</router-link></td>
									<td class="col-date">2024-05-22</td>
									<td class="col-complete">2024-05-23</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">커뮤니티</td>
									<td class="col-2depth">활용장</td>
									<td class="col-3depth">목록</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/COMU_01" target="_blank">/views/pub/Community/COMU_01</router-link></td>
									<td class="col-date">2024-05-09</td>
									<td class="col-complete">2024-05-17</td>
									<td class="col-memo">5/14 모바일 css반영완료</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">상세</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/COMU_01_01_r" target="_blank">/views/pub/Community/COMU_01_01_r</router-link></td>
									<td class="col-date">2024-05-09</td>
									<td class="col-complete">2024-05-17</td>
									<td class="col-memo">5/14 모바일 css반영완료</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">토론장</td>
									<td class="col-3depth">목록</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/COMU_02" target="_blank">/views/pub/Community/COMU_02</router-link></td>
									<td class="col-date">2024-05-24</td>
									<td class="col-complete">2024-05-28</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">검색결과</td>
									<td class="col-4depth">결과 有</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">
										<!-- <router-link to="/COMU_02_01" target="_blank">/views/pub/Community/COMU_02_01</router-link> -->
										목록화면에 취합
									</td>
									<td class="col-date">2024-05-24</td>
									<td class="col-complete">2024-05-28</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">결과 無</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">
										<!-- <router-link to="/COMU_02_01_null" target="_blank">/views/pub/Community/COMU_02_01_null</router-link> -->
										목록화면에 취합
									</td>
									<td class="col-date">2024-05-24</td>
									<td class="col-complete">2024-05-28</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">상세</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/COMU_02_02_r" target="_blank">/views/pub/Community/COMU_02_02_r</router-link></td>
									<td class="col-date">2024-05-24</td>
									<td class="col-complete">2024-05-28</td>
									<td class="col-memo">5/27 모바일 css 반영완료</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">수정</td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url">
										<!-- <router-link to="/COMU_02_02_u" target="_blank">/views/pub/Community/COMU_02_02_u</router-link> -->
										등록화면과 동일
									</td>
									<td class="col-date">2024-05-24</td>
									<td class="col-complete">2024-05-28</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">등록</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/COMU_02_02_c" target="_blank">/views/pub/Community/COMU_02_02_c</router-link></td>
									<td class="col-date">2024-05-24</td>
									<td class="col-complete">2024-05-28</td>
									<td class="col-memo"></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
		<!-- //그외 메뉴 -->

		<!-- 로그인/로그아웃/회원가입 -->
		<section class="ia-section ia-section-ajax" data-file="ajax_ia_4" data-color="01a2de" id="gIA4">
			<div class="ia-section-header">
				<h2 class="ia-h2"><a href="#this" class="accordion-toggle">로그인/로그아웃/회원가입</a></h2>
				<div class="ia-legend">
					<span class="item"><em>총 페이지 : </em><em class="legend-total">65</em>,</span>
					<span class="item c-done"><em>완료 : </em><em class="legend-complete">0</em>,</span>
					<span class="item"><em>진척률 : </em><em class="legend-process">0%</em></span>
				</div>
			</div>
			<div class="ia-section-body" style="height: auto;">
				<div class="ia-tab-content type-thumb">
					<div class="ia-iframe-wrap">
						<div class="ia-iframe-list"></div>
					</div>
				</div>
				<div class="ia-tab-content type-list is-visible">
					<div class="tbl ia-tbl">
						<table>
							<thead>
								<tr>
									<th scope="col" class="col-num">번호</th>
									<th scope="col" class="col-1depth">1Depth</th>
									<th scope="col" class="col-2depth">2Depth</th>
									<th scope="col" class="col-3depth">3Depth</th>
									<th scope="col" class="col-4depth">4Depth</th>
									<th scope="col" class="col-5depth">5Depth</th>
									<th scope="col" class="col-point">구분</th>
									<th scope="col" class="col-url">URL</th>
									<th scope="col" class="col-date">퍼블완료일</th>
									<th scope="col" class="col-complete">검수완료일</th>
									<th scope="col" class="col-memo">비고</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">로그인</td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/LGIN_01" target="_blank">/views/pub/Login/LGIN_01</router-link></td>
									<td class="col-date">2024-04-05</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo">[2024.05.21] 보안키패드 옵션버튼 추가<br>[2024.05.22] 비밀번호 입력폼 수정</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">휴면해제 안내</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/LGIN_02_p" target="_blank">/views/pub/Login/LGIN_02_p</router-link></td>
									<td class="col-date">2024-04-24</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">휴면해제 본인인증</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/LGIN_03" target="_blank">/views/pub/Login/LGIN_03</router-link></td>
									<td class="col-date">2024-04-16</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo">[2024.05.21] 알뜰폰 기존 방식 삭제</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">휴면해제 완료</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/LGIN_04" target="_blank">/views/pub/Login/LGIN_04</router-link></td>
									<td class="col-date">2024-04-16</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">로그아웃</td>
									<td class="col-2depth">로그아웃 재확인 안내</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/LOUT_01_p" target="_blank">/views/pub/Login/LOUT_01_p</router-link></td>
									<td class="col-date">2024-04-24</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">로그아웃 예정 안내</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/LOUT_02_p" target="_blank">/views/pub/Login/LOUT_02_p</router-link></td>
									<td class="col-date">2024-04-24</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">로그아웃 완료 안내</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/LOUT_03_p" target="_blank">/views/pub/Login/LOUT_03_p</router-link></td>
									<td class="col-date">2024-04-24</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr class="del">
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">강제 로그아웃 안내</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/LOUT_04_p" target="_blank">/views/pub/Login/LOUT_04_p</router-link></td>
									<td class="col-date">2024-04-24</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo">[2024.05.29] 삭제</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">강제 로그아웃 안내</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/LOUT_04" target="_blank">/views/pub/Login/LOUT_04</router-link></td>
									<td class="col-date">2024-05-30</td>
									<td class="col-complete">2024-05-31</td>
									<td class="col-memo">신규</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">아이디찾기</td>
									<td class="col-2depth">본인인증</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/IDPW_01" target="_blank">/views/pub/FindID/IDPW_01</router-link></td>
									<td class="col-date">2024-04-12</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo">[2024.05.21] 알뜰폰 기존 방식 삭제</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">아이디찾기 결과</td>
									<td class="col-3depth">성공</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/IDPW_02" target="_blank">/views/pub/FindID/IDPW_02</router-link></td>
									<td class="col-date">2024-04-12</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo"></td>
								</tr>
								<tr class="del">
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">실패</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/IDPW_02_fall" target="_blank">/views/pub/FindID/IDPW_02_fall</router-link></td>
									<td class="col-date">2024-04-12</td>
									<td class="col-complete">삭제</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">비밀번호 변경완료</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/IDPW_03" target="_blank">/views/pub/FindID/IDPW_03</router-link></td>
									<td class="col-date">2024-04-12</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">회원가입</td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/JOIN_01" target="_blank">/views/pub/Member/JOIN_01</router-link></td>
									<td class="col-date">2024-04-12</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo">[2024.05.10] class추가 : mgb12</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(개인) 본인인증</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/JOIN_02_01" target="_blank">/views/pub/Member/JOIN_02_01</router-link></td>
									<td class="col-date">2024-04-12</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo">[2024.05.21] 알뜰폰 기존 방식 삭제</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(개인) 서비스이용동의</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/JOIN_02_02" target="_blank">/views/pub/Member/JOIN_02_02</router-link></td>
									<td class="col-date">2024-04-12</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo">[2024.05.10] 매체선택 영역 추가</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">(필수) 서비스 이용약관</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_02_02_01_p" target="_blank">/views/pub/Member/JOIN_02_02_01_p</router-link></td>
									<td class="col-date">2024-04-29</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">(필수) 개인정보 수집 및 이용동의</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_02_02_02_p" target="_blank">/views/pub/Member/JOIN_02_02_02_p</router-link></td>
									<td class="col-date">2024-04-29</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">(선택) 마케팅동의</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_02_02_03_p" target="_blank">/views/pub/Member/JOIN_02_02_03_p</router-link></td>
									<td class="col-date">2024-04-29</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(개인) 정보입력</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/JOIN_02_03" target="_blank">/views/pub/Member/JOIN_02_03</router-link></td>
									<td class="col-date">2024-04-12</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo">[2024.05.29] 이메일주소 입력부분 수정</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(개인) 가입완료</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/JOIN_02_04" target="_blank">/views/pub/Member/JOIN_02_04</router-link></td>
									<td class="col-date">2024-04-12</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo">[2024.05.21] 메세지 수정</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(개인사업자) 본인인증</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/JOIN_03_01" target="_blank">/views/pub/Member/JOIN_03_01</router-link></td>
									<td class="col-date">2024-04-15</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo">[2024.05.21] 알뜰폰 기존 방식 삭제</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(개인사업자) 서비스이용동의</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/JOIN_03_02" target="_blank">/views/pub/Member/JOIN_03_02</router-link></td>
									<td class="col-date">2024-04-15</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo">[2024.05.10] 매체선택 영역 추가</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">(필수) 서비스 이용약관</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_02_02_01_p" target="_blank">/views/pub/Member/JOIN_02_02_01_p</router-link></td>
									<td class="col-date">2024-04-29</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">(필수) 개인정보 수집 및 이용동의</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_02_02_02_p" target="_blank">/views/pub/Member/JOIN_02_02_02_p</router-link></td>
									<td class="col-date">2024-04-29</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">(선택) 마케팅동의</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_02_02_03_p" target="_blank">/views/pub/Member/JOIN_02_02_03_p</router-link></td>
									<td class="col-date">2024-04-29</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(개인사업자) 정보입력</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/JOIN_03_03" target="_blank">/views/pub/Member/JOIN_03_03</router-link></td>
									<td class="col-date">2024-04-15</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo">[2024.05.29] 이메일주소 입력부분 수정</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(개인사업자) 가입신청완료</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/JOIN_03_04" target="_blank">/views/pub/Member/JOIN_03_04</router-link></td>
									<td class="col-date">2024-04-15</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo">[2024.05.21] 메세지 수정</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(법인사업자) 본인인증</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/JOIN_04_01" target="_blank">/views/pub/Member/JOIN_04_01</router-link></td>
									<td class="col-date">2024-04-15</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo">[2024.05.21] 알뜰폰 기존 방식 삭제</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(법인사업자) 서비스이용동의</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/JOIN_04_02" target="_blank">/views/pub/Member/JOIN_04_02</router-link></td>
									<td class="col-date">2024-04-15</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo">[2024.05.10] 매체선택 영역 추가</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">(필수) 서비스 이용약관</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_02_02_01_p" target="_blank">/views/pub/Member/JOIN_02_02_01_p</router-link></td>
									<td class="col-date">2024-04-29</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">(필수) 개인정보 수집 및 이용동의</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_02_02_02_p" target="_blank">/views/pub/Member/JOIN_02_02_02_p</router-link></td>
									<td class="col-date">2024-04-29</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">(선택) 마케팅동의</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_02_02_03_p" target="_blank">/views/pub/Member/JOIN_02_02_03_p</router-link></td>
									<td class="col-date">2024-04-29</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(법인사업자) 정보입력</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/JOIN_04_03" target="_blank">/views/pub/Member/JOIN_04_03</router-link></td>
									<td class="col-date">2024-04-15</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">기업찾기 팝업</td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_04_03_01_p" target="_blank">/views/pub/Member/JOIN_04_03_01_p</router-link></td>
									<td class="col-date">2024-05-03</td>
									<td class="col-complete">2024-05-10</td>
									<td class="col-memo">[2024.05.21] 컬럼명 수정</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">성공</td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_04_03_02_p" target="_blank">/views/pub/Member/JOIN_04_03_02_p</router-link></td>
									<td class="col-date">2024-05-03</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">실패</td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_04_03_03_p" target="_blank">/views/pub/Member/JOIN_04_03_03_p</router-link></td>
									<td class="col-date">2024-05-03</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">기업추가요청 팝업</td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_04_03_04_p" target="_blank">/views/pub/Member/JOIN_04_03_04_p</router-link></td>
									<td class="col-date">2024-05-07</td>
									<td class="col-complete">2024-05-10</td>
									<td class="col-memo">[2024.05.10] class 추가 : member, form-type<br>[2024.05.21] 안내문구 추가</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(법인사업자) 가입신청완료</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/JOIN_04_04" target="_blank">/views/pub/Member/JOIN_04_04</router-link></td>
									<td class="col-date">2024-04-15</td>
									<td class="col-complete">2024-04-24</td>
									<td class="col-memo">[2024.05.21] 메세지 수정</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(법인사업자) 가입완료</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/JOIN_04_05" target="_blank">/views/pub/Member/JOIN_04_05</router-link></td>
									<td class="col-date">2024-05-21</td>
									<td class="col-complete">2024-05-21</td>
									<td class="col-memo">신규</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">(공통) 약관보기 팝업</td>
									<td class="col-3depth">휴대폰본인확인이용동의</td>
									<td class="col-4depth">NICE평가정보</td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_01_01_p" target="_blank">/views/pub/Agreement/JOIN_05_01_01_p</router-link></td>
									<td class="col-date">2024-04-30</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">KCB</td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_01_02_p" target="_blank">/views/pub/Agreement/JOIN_05_01_02_p</router-link></td>
									<td class="col-date">2024-04-30</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">고유식별정보처리동의</td>
									<td class="col-4depth">NICE평가정보</td>
									<td class="col-5depth">SKT</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_02_01_01_p" target="_blank">/views/pub/Agreement/JOIN_05_02_01_01_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth">KT</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_02_01_02_p" target="_blank">/views/pub/Agreement/JOIN_05_02_01_02_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth">LGU+</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_02_01_03_p" target="_blank">/views/pub/Agreement/JOIN_05_02_01_03_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">KCB</td>
									<td class="col-5depth">SKT</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_02_02_01_p" target="_blank">/views/pub/Agreement/JOIN_05_02_02_01_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth">KT</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_02_02_02_p" target="_blank">/views/pub/Agreement/JOIN_05_02_02_02_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth">LGU+</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_02_02_03_p" target="_blank">/views/pub/Agreement/JOIN_05_02_02_03_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">통신사이용약관동의</td>
									<td class="col-4depth">NICE평가정보</td>
									<td class="col-5depth">SKT</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_03_01_01_p" target="_blank">/views/pub/Agreement/JOIN_05_03_01_01_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth">KT</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_03_01_02_p" target="_blank">/views/pub/Agreement/JOIN_05_03_01_02_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth">LGU+</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_03_01_03_p" target="_blank">/views/pub/Agreement/JOIN_05_03_01_03_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">KCB</td>
									<td class="col-5depth">SKT</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_03_02_01_p" target="_blank">/views/pub/Agreement/JOIN_05_03_02_01_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth">KT</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_03_02_02_p" target="_blank">/views/pub/Agreement/JOIN_05_03_02_02_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth">LGU+</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_03_02_03_p" target="_blank">/views/pub/Agreement/JOIN_05_03_02_03_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">개인정보수집및이용동의</td>
									<td class="col-4depth">NICE평가정보</td>
									<td class="col-5depth">SKT</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_04_01_01_p" target="_blank">/views/pub/Agreement/JOIN_05_04_01_01_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth">KT</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_04_01_02_p" target="_blank">/views/pub/Agreement/JOIN_05_04_01_02_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth">LGU+</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_04_01_03_p" target="_blank">/views/pub/Agreement/JOIN_05_04_01_03_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">KCB</td>
									<td class="col-5depth">SKT</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_04_02_01_p" target="_blank">/views/pub/Agreement/JOIN_05_04_02_01_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth">KT</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_04_02_02_p" target="_blank">/views/pub/Agreement/JOIN_05_04_02_02_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth">LGU+</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_04_02_03_p" target="_blank">/views/pub/Agreement/JOIN_05_04_02_03_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth">개인정보제3자제공동의</td>
									<td class="col-4depth">NICE평가정보</td>
									<td class="col-5depth">SKT</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_05_01_01_p" target="_blank">/views/pub/Agreement/JOIN_05_05_01_01_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth">KT</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_05_01_02_p" target="_blank">/views/pub/Agreement/JOIN_05_05_01_02_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth">LGU+</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_05_01_03_p" target="_blank">/views/pub/Agreement/JOIN_05_05_01_03_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth">KCB</td>
									<td class="col-5depth">SKT</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_05_02_01_p" target="_blank">/views/pub/Agreement/JOIN_05_05_02_01_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth">KT</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_05_02_02_p" target="_blank">/views/pub/Agreement/JOIN_05_05_02_02_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth">LGU+</td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/JOIN_05_05_02_03_p" target="_blank">/views/pub/Agreement/JOIN_05_05_02_03_p</router-link></td>
									<td class="col-date">2024-05-02</td>
									<td class="col-complete">상동</td>
									<td class="col-memo"></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
		<!-- //로그인/로그아웃/회원가입 -->

		<!-- 공통/기타 -->
		<section class="ia-section ia-section-ajax" data-file="ajax_ia_5" data-color="01a2de" id="gIA5">
			<div class="ia-section-header">
				<h2 class="ia-h2"><a href="#this" class="accordion-toggle">공통/기타</a></h2>
				<div class="ia-legend">
					<span class="item"><em>총 페이지 : </em><em class="legend-total">9</em>,</span>
					<span class="item c-done"><em>완료 : </em><em class="legend-complete">0</em>,</span>
					<span class="item"><em>진척률 : </em><em class="legend-process">0%</em></span>
				</div>
			</div>
			<div class="ia-section-body" style="height: auto;">
				<div class="ia-tab-content type-thumb">
					<div class="ia-iframe-wrap">
						<div class="ia-iframe-list"></div>
					</div>
				</div>
				<div class="ia-tab-content type-list is-visible">
					<div class="tbl ia-tbl">
						<table>
							<thead>
								<tr>
									<th scope="col" class="col-num">번호</th>
									<th scope="col" class="col-1depth">1Depth</th>
									<th scope="col" class="col-2depth">2Depth</th>
									<th scope="col" class="col-3depth">3Depth</th>
									<th scope="col" class="col-4depth">4Depth</th>
									<th scope="col" class="col-5depth">5Depth</th>
									<th scope="col" class="col-point">구분</th>
									<th scope="col" class="col-url">URL</th>
									<th scope="col" class="col-date">퍼블완료일</th>
									<th scope="col" class="col-complete">검수완료일</th>
									<th scope="col" class="col-memo">비고</th>
								</tr>
							</thead>
							<tbody>
								<tr class="del">
									<td class="col-num"></td>
									<td class="col-1depth">이메인인증 팝업</td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/CFMM_01_p" target="_blank">/views/pub/Common/CFMM_01_p</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete">삭제</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">휴대폰본인인증 팝업</td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/CFMH_01_p" target="_blank">/views/pub/Common/CFMH_01_p</router-link></td>
									<td class="col-date">2024-05-10</td>
									<td class="col-complete">2024-05-10</td>
									<td class="col-memo">[2024.05.21] 알뜰폰 기존 방식 삭제</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">비밀번호 확인 팝업</td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/CFMP_01_p" target="_blank">/views/pub/Common/CFMP_01_p</router-link></td>
									<td class="col-date">2024-05-10</td>
									<td class="col-complete">2024-05-10</td>
									<td class="col-memo"></td>
								</tr>
								<tr class="del">
									<td class="col-num"></td>
									<td class="col-1depth">다운로드 파일 팝업</td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/FILE_01_p" target="_blank">/views/pub/Common/FILE_01_p</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete">삭제</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">시스템 팝업</td>
									<td class="col-2depth">Alert 경고창</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/SYSA_p" target="_blank">/views/pub/Common/SYSA_p</router-link></td>
									<td class="col-date">2024-04-24</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth"></td>
									<td class="col-2depth">Confirm 경고창</td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/SYSC_p" target="_blank">/views/pub/Common/SYSC_p</router-link></td>
									<td class="col-date">2024-04-24</td>
									<td class="col-complete">2024-05-02</td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">이용약관</td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/ETC_02" target="_blank">/views/pub/Common/ETC_02</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo"></td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">개인정보처리방침</td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">page</td>
									<td class="col-url"><router-link to="/ETC_03" target="_blank">/views/pub/Common/ETC_03</router-link></td>
									<td class="col-date"></td>
									<td class="col-complete"></td>
									<td class="col-memo">신한카드로 링크처리</td>
								</tr>
								<tr>
									<td class="col-num"></td>
									<td class="col-1depth">Loading Bar</td>
									<td class="col-2depth"></td>
									<td class="col-3depth"></td>
									<td class="col-4depth"></td>
									<td class="col-5depth"></td>
									<td class="col-point">popup</td>
									<td class="col-url"><router-link to="/ETC_04_p" target="_blank">/views/pub/Common/ETC_04_p</router-link></td>
									<td class="col-date">2024-05-29</td>
									<td class="col-complete">2024-05-30</td>
									<td class="col-memo text-error">로딩화면 완료</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
		<!-- //공통/기타 -->
	</div>
</template>

<style lang="scss">
/* IA Title */
.ia-in-sec {padding:0; max-width:100%;}
.ia-content-header {position:fixed; z-index:100; top: 0; left: 0; width:100%; height:60px; line-height:60px; background-color:#28a5f5;}
.ia-content-header > .ia-in-sec {position:relative;}
.ia-content-body {padding:80px 20px 50px;}
#gTotal {padding-top:0;}
#gTotal .ia-section-body {margin-top:0;}
.ia-section-body {margin-top:10px;}
.ia-section-header {padding:10px 20px; border:0; background-color:#444; color:#fff; cursor:pointer;}

/* Accordion */
.ia-section-ajax .ia-section-body {overflow:hidden;}

/* is-scrolled */
.ia-content-header .ia-in-sec {transition:all 0.3s ease-out; -webkit-transition:all 0.3s ease-out 0s; -moz-transition:all 0.3s ease-out 0s; -o-transition:all 0.3s ease-out 0s;}
.ia-content-header .ia-guideLink {position:absolute; right:20px; top:15px; margin-top:0; line-height:30px;}
.ia-content-header .ia-guideLink a {display:inline-block; padding:0px 10px; font-size:14px; color:#fff; background:#0074be; border-radius:3px;}
.ia-content-header .ia-guideLink button {display:inline-block; padding:0px 10px; line-height:30px; font-size:14px; color:#fff; background:#0074be; border-radius:3px;}

/* Section */
.ia-section {line-height:1.8;}
.ia-section + .ia-section {margin-top:30px;}
.ia-section-ajax + .ia-section-ajax {margin-top:30px;}
.ia-section-note {display:none;}
.ia-section-header {position:relative;}

/* 목차 */
.ia-h1 {display:inline-block; margin-left:20px; font-size:20px; font-size:'NSB'; font-weight:normal; color:#fff;}
.ia-h2 {font-size:20px; font-weight:normal;}
.ia-h2:before {display:block; width:20px; height:1px; margin-bottom:5px; background-color:#222;}
.ia-h2 a {color:#fff;}
.ia-h3 {margin-top:25px; margin-bottom:10px; font-size:16px; font-weight:bold;}
.ia-h3:first-child {margin-top:0;}
.ia-h4 {color:#278df5; font-weight:bold;}
.ia-h3 + .ia-h4 {margin-top:10px;}
.ia-h4:before {content:''; display:inline-block; position:relative; top:-1px; width:3px; height:13px; margin-right:5px; background-color:#278df5; vertical-align:middle;}

.del{background-color: rgba(0,0,0,0.2);}
@media screen and (max-width:639px) {
    .ia-content-header > .ia-in-sec {padding-top:10px; padding-bottom:10px;}
    .ia-content-body {padding-top:30px;}
    .ia-h1 {font-size:20px;}
}

/*-------------------------------------------------------------------
  UI
-------------------------------------------------------------------*/
.ia-total {position:relative; width:100%; height:24px; margin-bottom:5px;}
.ia-total .ia-msg {float:left; font-size:16px;}
.ia-total .ia-version {float:right; font-size:14px;}

/* Graph */
.ia-graph li {margin:3px 0;}
.ia-graph a {display:block; position:relative; line-height:20px;}
.ia-graph span {display:inline-block;}
.ia-graph .tit {position:absolute; left:0; top:0; z-index:2; width:160px; width:150px; height:100%; padding:0 10px; border-radius:10px 0 0 10px; background-color:rgba(0,0,0,0.4); color:#fff;}
.ia-graph .bar {display:block; position:relative; z-index:1; height:21px; overflow:hidden; background-color:rgba(0,0,0,0.2); border-radius:10px;}
.ia-graph .bar:before {content:attr(data-process); position:absolute; right:0; top:0; z-index:2; display:inline-block; width:120px; text-align:right; color:#fff;}
.ia-graph .bar .active {position:absolute; left:0; top:0; z-index:1; display:block; width:0; height:100%; transition:width 0.6s ease-out; -webkit-transition:width 0.6s ease-out 0s; -moz-transition:width 0.6s ease-out 0s; -o-transition:width 0.6s ease-out 0s; opacity:1;}
.ia-graph .pages {position:absolute; left:150px; top:0; z-index:3; padding-left:10px; width:65px; text-align:left; color:#fff;}
.ia-graph .bar:before, .ia-graph .pages {padding:0 15px;}

/* Note */
.ia-note {padding:10px; border:2px solid #333; border-width:2px 0 1px 0;}

/* Legend */
.ia-legend {position:absolute; right:20px; top:50%; transform:translateY(-50%);}
.ia-legend .item {margin-left:20px; font-size:16px;}
.ia-legend .item.c-done {color:#fff;}

/* Table */
.ia-tbl {border-top:2px solid #444; border-bottom:1px solid #444; counter-reset: count;}
.ia-tbl table th,
.ia-tbl table td {height:36px; padding:3px 10px; text-align:center; font-size:13px; color:#333; border-top:1px solid #eee; border-left:1px solid #eee;}
.ia-tbl table th {border-bottom:1px solid #444; font-weight:bold; font-size:14px;}
.ia-tbl table tr:first-child td {border-top:0;}
.ia-tbl table tr th:first-child,
.ia-tbl table tr td:first-child {border-left:0;}
.ia-tbl table tbody + tbody tr:first-child td {border-top:1px solid #ccc;}
.ia-tbl table td.col-url,
.ia-tbl table td.col-memo,
.ia-tbl table td.col-1depth,
.ia-tbl table td.col-2depth,
.ia-tbl table td.col-3depth,
.ia-tbl table td.col-4depth {text-align:left;}
.ia-tbl table td.col-1depth {color:#333; font-weight:bold; font-size:14px;}

/* Colgroup */
.ia-tbl table td.col-num::before {counter-increment: count; content: counter(count);}
.ia-tbl table .col-num {width:60px;}
.ia-tbl table .col-1depth,
.ia-tbl table .col-2depth,
.ia-tbl table .col-3depth,
.ia-tbl table .col-4depth,
.ia-tbl table .col-5depth {width:10%;}
.ia-tbl table .col-point {width:100px;}
.ia-tbl table .col-url {width:20%;}
.ia-tbl table .col-date {width:110px;}
.ia-tbl table .col-complete {width:110px;}
.ia-tbl table .col-memo {width:auto;}

@media (max-width:1366px) {
	// .ia-tbl table .col-url {width:auto;}
	.ia-tbl table .col-date,
	.ia-tbl table .col-memo {width:10%;}
}

/* Setting */
.c-done {color:#005aff;}
td.col-complete[data-complete=wait] {color:#e52c1e;}
td.col-complete[data-complete=done] {color:#005aff;}
td.col-complete[data-complete]:after {content:attr(data-complete)}
td.col-complete[data-complete=wait]:after {content:''}
td.col-complete[data-complete=done]:after {content:'완료'}
td.col-complete[data-complete=del]:after {content:'삭제'}
td.col-complete[data-complete=except]:after {content:'제외'}
td.col-type[data-type]:after {content:attr(data-type);}
td.col-url a {border-bottom:1px solid #333;}

.ia-tbl table tr.row-done td {background-color:#f2f8fc;}
.ia-tbl table tr.row-del td {background-color:#f0f0f0; color:#bbb;}
.ia-tbl table tr.row-del td a {color:#bbb; border-bottom:1px solid #bbb;}
.ia-tbl table tr.row-except td {background-color:#f0f0f0;}

/* History */
.ia-tbl.type-history td {font-size:16px; line-height:24px; text-align:left; padding:10px 20px;}

/* IA Tabs */
.ia-tab-content {height:0; overflow:hidden;}
.ia-tab-content.type-thumb.is-visible {height:auto;}
.ia-tab-content.type-list.is-visible {height:auto;}

/* IA iframes */
.ia-iframe-wrap {overflow:hidden;}
.ia-iframe-list {margin:-28px;}
.ia-iframe-list:after {content:''; display:block; clear:both;}
.ia-iframe-list .item {position:relative; float:left; width:360px; height:560px; padding-bottom:40px; margin:30px; outline:1px solid #ddd;}
.ia-iframe-list iframe {width:100%; height:100%;}
.ia-iframe-list .item-tit {position:absolute; left:0; bottom:0; width:100%; height:40px; line-height:40px; background-color:#333;}
.ia-iframe-list .item-link {display:block; color:#fff; padding:0 20px;}

@media only screen and (max-width: 430px) {
.ia-legend,
.col-1depth,
.col-2depth,
.col-3depth,
.col-4depth,
.col-5depth,
.col-point,
.col-complete,
.col-memo{display: none;}
.ia-tbl table .col-num {width:10%;}
.ia-tbl table .col-url {width:60%; overflow: hidden;}
.ia-tbl table .col-date {width:30%;}
}
</style>