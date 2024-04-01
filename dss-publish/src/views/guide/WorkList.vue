<template>
			<div class="ia-content-body">
        <div class="ia-content-header">
          <div class="ia-in-sec">
            <h1 class="ia-h1">현황판</h1>
            <div class="ia-guideLink">
              <button type="button" class="ia-top" onclick="$(window).scrollTop(0)">TOP</button>
              &nbsp;&nbsp;
              <a href="../rule/rule_intro.html">퍼블리싱가이드</a>
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
				<p class="ia-msg">* 제목영역을 클릭하면 펼치거나, 접을 수 있습니다.</p>
				<!-- 00_Guide -->
				<!-- wait:작업중, done:완료, del:삭제, except:보류  -->
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
											<td class="col-complete" data-complete="done"></td>
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
											<td class="col-complete" data-complete="done"></td>
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
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
				<!-- //00_Guide -->

				<!-- 02_Convention -->			
				<section class="ia-section ia-section-ajax" data-file="ajax_ia_1" data-color="01a2de" id="gIA1">
					<div class="ia-section-header">
						<h2 class="ia-h2"><a href="#this" class="accordion-toggle">02_공통</a></h2>
						<div class="ia-legend">
							<span class="item"><em>총 페이지 : </em><em class="legend-total">7</em>,</span>
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
											<th scope="col">번호</th>
											<th scope="col" class="col-1depth">1Depth</th>
											<th scope="col" class="col-2depth">2Depth</th>
											<th scope="col" class="col-3depth">3Depth</th>
											<th scope="col" class="col-4depth" style="display: none;">4Depth</th>
											<th scope="col" class="col-5depth" style="display: none;">5Depth</th>
											<th scope="col" class="col-point">구분</th>
											<th scope="col">URL</th>
											<th scope="col">날짜</th>
											<th scope="col">상태</th>
											<th scope="col">담당자</th>
											<th scope="col">비고</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">로그인/회원가입</td>
											<td class="col-2depth">로그인</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">Page</td>
											<td class="col-url"><router-link to="/login"  target="_blank">/views/members/login/LoginView.vue</router-link></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">아이디 찾기 / 비밀번호 변경</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">Page</td>
											<td class="col-url"><router-link to="/idfind"  target="_blank">/views/members/login/IdFindView.vue</router-link></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
			
				<!-- //02_Convention -->

				<!-- 03_Core -->
				<section class="ia-section ia-section-ajax" data-file="ajax_ia_2" data-color="01a2de" id="gIA2" style="display: none;">
					<div class="ia-section-header">
						<h2 class="ia-h2"><a href="#this" class="accordion-toggle">03_메인</a></h2>
						<div class="ia-legend">
							<span class="item"><em>총 페이지 : </em><em class="legend-total">4</em>,</span>
							<span class="item c-done"><em>완료 : </em><em class="legend-complete">0</em>,</span>
							<span class="item"><em>진척률 : </em><em class="legend-process">0%</em></span>
						</div>
					</div>
					<div class="ia-section-body">
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
											<th scope="col">번호</th>
											<th scope="col" class="col-1depth">1Depth</th>
											<th scope="col" class="col-2depth">2Depth</th>
											<th scope="col" class="col-3depth">3Depth</th>
											<th scope="col" class="col-4depth" style="display: none;">4Depth</th>
											<th scope="col" class="col-5depth" style="display: none;">5Depth</th>
											<th scope="col" class="col-point">구분</th>
											<th scope="col">URL</th>
											<th scope="col">날짜</th>
											<th scope="col">상태</th>
											<th scope="col">담당자</th>
											<th scope="col">비고</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">메인</td>
											<td class="col-2depth">홈(3.1.1)</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/main/main.html" target="_blank">../../../html/main/main.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth">메인</td>
											<td class="col-2depth">Shorts(3.2.1)</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/main/main2.html" target="_blank">../../../html/main/main2.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth">메인</td>
											<td class="col-2depth">Shorts > 댓글(3.2.2 ~ 8)</td>
											<td class="col-3depth">댓글, 답글, 신고하기, 삭제하기</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">바텀팝업, 컨폼팝업</td>									
											<td class="col-url"><a href="../../../html/main_comment.html" target="_blank">../../../html/main/main_comment.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo">인풋 글쓰기 추가 작업 예정</td>
										</tr>
										<tr>
											<td class="col-num">3</td>
											<td class="col-1depth">메인</td>
											<td class="col-2depth">별멍(3.3.1)</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/main/main03.html" target="_blank">../../../html/main/main03.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">3</td>
											<td class="col-1depth">메인</td>
											<td class="col-2depth">별멍 > 공통더보기목록(3.3.2)</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url">3.4.10 참조</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth">메인</td>
											<td class="col-2depth">Lounge(3.4.1)</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/main/main04.html" target="_blank">../../../html/main/main04.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num"></td>
											<td class="col-1depth">메인</td>
											<td class="col-2depth">Lounge(3.4.2)</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/lounge_starlog01.html" target="_blank">../../../html/content/lounge_starlog01.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo">라운지 상세페이지</td>
										</tr>
										<tr>
											<td class="col-num"></td>
											<td class="col-1depth">메인</td>
											<td class="col-2depth">Lounge(3.4.3)</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/lounge_starlog02.html" target="_blank">../../../html/content/lounge_starlog02.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo">라운지 상세페이지</td>
										</tr>
										<tr>
											<td class="col-num"></td>
											<td class="col-1depth">메인</td>
											<td class="col-2depth">Lounge(3.4.4)</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/lounge_starlog03.html" target="_blank">../../../html/content/lounge_starlog03.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo">라운지 상세페이지</td>
										</tr>
										<tr>
											<td class="col-num"></td>
											<td class="col-1depth">메인</td>
											<td class="col-2depth">Lounge(3.4.5 ~ 9)</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/vod_popup.html" target="_blank">../../../html/content/vod_popup.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"> 동영상 5개 스와이프 / 쇼츠더보기와 동일</td>
										</tr>		
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth">메인</td>
											<td class="col-2depth">Lounge> lounge_list(3.4.10 ~ 11)</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/lounge_list.html" target="_blank">../../../html/content/lounge_list.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
				<!-- //03_Core -->

				<!-- 04_밤하늘관측 -->
				<section class="ia-section ia-section-ajax" data-file="ajax_ia_3" data-color="01a2de" id="gIA3" style="display: none;">
					<div class="ia-section-header">
						<h2 class="ia-h2"><a href="#this" class="accordion-toggle">04. 밤하늘관측</a></h2>
						<div class="ia-legend">
							<span class="item"><em>총 페이지 : </em><em class="legend-total">4</em>,</span>
							<span class="item c-done"><em>완료 : </em><em class="legend-complete">0</em>,</span>
							<span class="item"><em>진척률 : </em><em class="legend-process">0%</em></span>
						</div>
					</div>
					<div class="ia-section-body">
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
											<th scope="col">번호</th>
											<th scope="col" class="col-1depth">1Depth</th>
											<th scope="col" class="col-2depth">2Depth</th>
											<th scope="col" class="col-3depth">3Depth</th>
											<th scope="col" class="col-4depth" style="display: none;">4Depth</th>
											<th scope="col" class="col-5depth" style="display: none;">5Depth</th>
											<th scope="col" class="col-point">구분</th>
											<th scope="col">URL</th>
											<th scope="col">날짜</th>
											<th scope="col">상태</th>
											<th scope="col">담당자</th>
											<th scope="col">비고</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">메인(4.1.1 ~ 5)</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/main/main_observe.html" target="_blank">../../../html/main/main_observe.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>	
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">모두의 천문대(4.2.1)</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/all_observatory.html" target="_blank">../../../html/content/all_observatory.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">모두의 천문대</td>
											<td class="col-3depth">실시간 댓글(4.2.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/all_observatory_comment.html" target="_blank">../../../html/content/all_observatory_comment.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">모두의 천문대</td>
											<td class="col-3depth">다른천체보기(4.2.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/all_observatory_celestial.html" target="_blank">../../../html/content/all_observatory_celestial.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num"></td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">모두의 천문대</td>
											<td class="col-3depth">실시간Live_더보기(4.2.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/all_observatory_live_more.html" target="_blank">../../../html/content/all_observatory_live_more.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num"></td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">모두의 천문대</td>
											<td class="col-3depth">공유하기(4.2.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">바텀팝업, 토스트팝업</td>
											<td class="col-url">4.1.1 안에 주석처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">모두의 천문대</td>
											<td class="col-3depth">실시간 Live(4.2.6 ~ 6)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">온보딩</td>
											<td class="col-url"><a href="../../../html/content/all_observatory_onboarding.html" target="_blank">../../../html/content/all_observatory_onboarding.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">모두의 천문대</td>
											<td class="col-3depth">모두의천문대_VOD(4.2.7)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/all_observatory_vod.html" target="_blank">../../../html/content/all_observatory_vod.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num"></td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">모두의 천문대</td>
											<td class="col-3depth">allsky_기능노출시(4.2.8)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/all_observatory_allsky.html" target="_blank">../../../html/content/all_observatory_allsky.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num"></td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">모두의 천문대</td>
											<td class="col-3depth">실시간Live_공유하기(4.2.9)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/all_live_contents_sharing.html" target="_blank">../../../html/content/all_live_contents_sharing.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">모두의 천문대</td>
											<td class="col-3depth">콘텐츠공유화면_VOD</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/all_vod_contents_sharing.html" target="_blank">../../../html/content/all_vod_contents_sharing.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num"></td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">원격관측(4.3.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/my_observatory.html" target="_blank">../../../html/content/my_observatory.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num"></td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">원격관측(4.3.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">토스트 팝업</td>
											<td class="col-url">4.3.1 none 처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num"></td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">원격관측(4.3.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">컨폼팝업</td>
											<td class="col-url">4.3.1 none 처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num"></td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">원격관측(4.3.4)온보딩</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">온보딩</td>
											<td class="col-url"><a href="../../../html/content/my_observatory_onboarding.html" target="_blank">../../../html/content/my_observatory_onboarding.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num"></td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">원격관측(4.3.5 ~ 9)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">바텀팝업</td>
											<td class="col-url"><a href="../../../html/content/my_remote_control.html" target="_blank">../../../html/content/my_remote_control.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num"></td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">원격관측-관측일지(4.3.6)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">팝업</td>
											<td class="col-url"><a href="../../../html/content/my_remote_journal.html" target="_blank">../../../html/content/my_remote_journal.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num"></td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">원격관측(4.3.10)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">바텀팝업</td>
											<td class="col-url">4.3.5 안에 삽입</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num"></td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">원격관측(4.3.11)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">컨폼팝업</td>
											<td class="col-url">4.3.5 안에 삽입</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">홈(4.4.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/observatory_home.html" target="_blank">../../../html/content/observatory_home.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">홈 > 공지(4.4.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/observatory_notice.html" target="_blank">../../../html/content/observatory_notice.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">홈 > 망원경(4.4.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/observatory_telescope.html" target="_blank">../../../html/content/observatory_telescope.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">홈 > 리뷰(4.4.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/observatory_review.html" target="_blank">../../../html/content/observatory_review.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">신고하기(4.4.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">바텀팝업</td>
											<td class="col-url">4.4.4 내부에 주석처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">리뷰신고(4.4.6)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">컨폼팝업</td>
											<td class="col-url">4.4.4 내부에 주석처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">홈 > 갤러리(4.4.7)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/observatory_gallery.html" target="_blank">../../../html/content/observatory_gallery.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>	
									</tbody>
									<tbody>				
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">예약하기 > 날짜우선선택(4.5.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/observatory_resev_date.html" target="_blank">../../../html/content/observatory_resev_date.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">예약하기 > 망원경 우선 선택(4.5.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/observatory_resev_telescope.html" target="_blank">../../../html/content/observatory_resev_telescope.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">관측소상세 > 예약완료(4.5.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/observatory_resev_complete.html" target="_blank">../../../html/content/observatory_resev_complete.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">망원경상세(4.5.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/observatory_telescope_detail.html" target="_blank">../../../html/content/observatory_telescope_detail.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">이미지사이즈맞춰노출(4.5.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url">												
												<a href="../../../html/content/observatory_telescope_detail_img01.html" target="_blank">../../../html/content/observatory_telescope_detail_img01.html</a>
											</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">이미지상세full(4.5.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url">
												<a href="../../../html/content/observatory_telescope_detail_img02.html" target="_blank">../../../html/content/observatory_telescope_detail_img02.html</a>
											</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">로그인알림팝업(4.5.6)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">컨폼팝업</td>
											<td class="col-url">4.4.1 내부에 주석처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">노쇼알림팝업(4.5.7)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">컨폼팝업</td>
											<td class="col-url">4.4.1 내부에 주석처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">예약확인팝업(4.5.8)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">컨폼팝업</td>
											<td class="col-url">4.4.1 내부에 주석처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">밤하늘관측</td>
											<td class="col-2depth">나만의 천문대</td>
											<td class="col-3depth">관측소 상세_빠른예약(4.6.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/observatory_resev_quick.html" target="_blank">../../../html/content/observatory_resev_quick.html</a></td>4.2.4 공통
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>						
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
				<!-- //04_밤하늘관측 -->
				<!-- 05_관측일지 -->
				<section class="ia-section ia-section-ajax" data-file="ajax_ia_4" data-color="01a2de" id="gIA4" style="display: none;">
					<div class="ia-section-header">
						<h2 class="ia-h2"><a href="#this" class="accordion-toggle">05. 관측일지</a></h2>
						<div class="ia-legend">
							<span class="item"><em>총 페이지 : </em><em class="legend-total">4</em>,</span>
							<span class="item c-done"><em>완료 : </em><em class="legend-complete">0</em>,</span>
							<span class="item"><em>진척률 : </em><em class="legend-process">0%</em></span>
						</div>
					</div>
					<div class="ia-section-body">
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
											<th scope="col">번호</th>
											<th scope="col" class="col-1depth">1Depth</th>
											<th scope="col" class="col-2depth">2Depth</th>
											<th scope="col" class="col-3depth">3Depth</th>
											<th scope="col" class="col-4depth" style="display: none;">4Depth</th>
											<th scope="col" class="col-5depth" style="display: none;">5Depth</th>
											<th scope="col" class="col-point">구분</th>
											<th scope="col">URL</th>
											<th scope="col">날짜</th>
											<th scope="col">상태</th>
											<th scope="col">담당자</th>
											<th scope="col">비고</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">관측일지</td>
											<td class="col-2depth">홈(5.1.1 ~ 3)</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/main/main_journal.html" target="_blank">../../../html/main/main_journal.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
						
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">홈</td>
											<td class="col-3depth">그룹정렬_연도별1(5.1.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/journal_main_year01.html" target="_blank">../../../html/content/journal_main_year01.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">홈</td>
											<td class="col-3depth">그룹정렬_연도별2(5.1.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/journal_main_year02.html" target="_blank">../../../html/content/journal_main_year02.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">홈</td>
											<td class="col-3depth">그룹정렬_월별1(5.1.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/journal_main_month01.html" target="_blank">../../../html/content/journal_main_month01.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">홈</td>
											<td class="col-3depth">그룹정렬_월별2(5.1.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/journal_main_month02.html" target="_blank">../../../html/content/journal_main_month02.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">홈</td>
											<td class="col-3depth">그룹정렬_모든사진(5.1.6)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/journal_main_all.html" target="_blank">../../../html/content/journal_main_all.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">홈</td>
											<td class="col-3depth">촬영 내 진입 케이스(5.1.7)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/journal_sub_main.html" target="_blank">../../../html/content/journal_sub_main.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">홈</td>
											<td class="col-3depth">null(5.1.8)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/journal_main_null.html" target="_blank">../../../html/content/journal_main_null.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">3</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">상세</td>
											<td class="col-3depth">일지미작성(5.2.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/journal_sub_detail01.html" target="_blank">../../../html/content/journal_sub_detail01.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>										
										<tr>
											<td class="col-num">3</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">상세</td>
											<td class="col-3depth">일지미작성_입력시트(5.2.2 ~ 4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/journal_sub_detail02.html" target="_blank">../../../html/content/journal_sub_detail02.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>										
										<tr>
											<td class="col-num">3</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">상세</td>
											<td class="col-3depth">관측일지_상세_사진(5.2.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/journal_sub_detail_img.html" target="_blank">../../../html/content/journal_sub_detail_img.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>										
										<tr>
											<td class="col-num">3</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">상세</td>
											<td class="col-3depth">관측일지_상세_동영상(5.2.6)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/journal_sub_detail_video.html" target="_blank">../../../html/content/journal_sub_detail_video.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>										
										<tr>
											<td class="col-num">3</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">상세</td>
											<td class="col-3depth">관측일지_상세_바텀시트 최소화(5.2.7)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/journal_sub_detail_minimization.html" target="_blank">../../../html/content/journal_sub_detail_minimization.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>										
										<tr>
											<td class="col-num">3</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">상세</td>
											<td class="col-3depth">관측일지_상세_main01(5.2.8)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/journal_sub_detail_main01.html" target="_blank">../../../html/content/journal_sub_detail_main01.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>										
										<tr>
											<td class="col-num">3</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">상세</td>
											<td class="col-3depth">관측일지_상세_main02(5.2.9)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/journal_sub_detail_main02.html" target="_blank">../../../html/content/journal_sub_detail_main02.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>										
										<tr>
											<td class="col-num">3</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">상세</td>
											<td class="col-3depth">관측일지 스타셀피 이미지 상세</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/journal_starselfie.html" target="_blank">../../../html/content/journal_starselfie.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>										
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
				<!-- //05_관측일지 -->

				<!-- 06_커뮤니티 -->
				<section class="ia-section ia-section-ajax" data-file="ajax_ia_5" data-color="01a2de" id="gIA5" style="display: none;">
					<div class="ia-section-header">
						<h2 class="ia-h2"><a href="#this" class="accordion-toggle">06.커뮤니티</a></h2>
						<div class="ia-legend">
							<span class="item"><em>총 페이지 : </em><em class="legend-total">4</em>,</span>
							<span class="item c-done"><em>완료 : </em><em class="legend-complete">0</em>,</span>
							<span class="item"><em>진척률 : </em><em class="legend-process">0%</em></span>
						</div>
					</div>
					<div class="ia-section-body">
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
											<th scope="col">번호</th>
											<th scope="col" class="col-1depth">1Depth</th>
											<th scope="col" class="col-2depth">2Depth</th>
											<th scope="col" class="col-3depth">3Depth</th>
											<th scope="col" class="col-4depth" style="display: none;">4Depth</th>
											<th scope="col" class="col-5depth" style="display: none;">5Depth</th>
											<th scope="col" class="col-point">구분</th>
											<th scope="col">URL</th>
											<th scope="col">날짜</th>
											<th scope="col">상태</th>
											<th scope="col">담당자</th>
											<th scope="col">비고</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">커뮤니티</td>
											<td class="col-2depth">모든피드(6.1.1_)</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/main/main_community.html" target="_blank">../../../html/main/main_community.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth"></td>
											<td class="col-2depth">이미지상세(6.1.2)</td>
											<td class="col-3depth"></td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/community_detail_img.html" target="_blank">../../../html/content/community_detail_img.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">3</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">신고하기(6.1.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">바텀시트</td>
											<td class="col-url">6.1.1 내부 display none 처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">수정/삭제(6.1.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">바텀시트</td>
											<td class="col-url">6.1.1 내부 display none 처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">삭제확인팝업(6.1.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">바텀시트</td>
											<td class="col-url">6.1.1 내부 display none 처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">삭제완료(6.1.6)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">바텀시트</td>
											<td class="col-url">6.1.1 내부 display none 처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">신고팝업(6.1.7)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">바텀시트</td>
											<td class="col-url">6.1.1 내부 display none 처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">댓글 바텀시트(6.1.8)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">바텀시트</td>
											<td class="col-url">6.1.1 내부 display none 처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">신고하기(6.1.9)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point">바텀시트</td>
											<td class="col-url">6.1.1 내부 display none 처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">좋아요(6.2.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url">6.1.1 내부 display none 처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">내피드(6.3.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url">6.1.1 내부 display none 처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">타유저 피드(6.4.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/community_another_user.html" target="_blank">../../../html/content/community_another_user.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">게시물업로드(6.5.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url">6.1.1 내부 display none 처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">게시물업로드_관측일지(6.5.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/community_journal.html" target="_blank">../../../html/content/community_journal.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">게시물업로드_텍스트작성/ 이미지 5개(6.5.3/6.5.7)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/community_post_case03.html" target="_blank">../../../html/content/community_post_case03.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">게시물업로드_뒤로가기 확인팝업(6.5.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url">6.5.3 내부 display none 처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">게시물업로드_이미지 수 2~4개 case(6.5.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/community_post_case02.html" target="_blank">../../../html/content/community_post_case02.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">게시물업로드_이미지 수 1개 case(6.5.6)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/community_post_case01.html" target="_blank">../../../html/content/community_post_case01.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">게시물업로드_작성중(6.5.8)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url">6.5.5~7 내부 주석 처리</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth"></td>
											<td class="col-2depth"></td>
											<td class="col-3depth">게시물업로드_작성완료(6.5.9)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url">6.5.5~7과 동일</td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
				<!-- //06_커뮤니티-->	
				
				<!-- 07_검색 -->
				<section class="ia-section ia-section-ajax" data-file="ajax_ia_6" data-color="01a2de" id="gIA6" style="display: none;">
					<div class="ia-section-header">
						<h2 class="ia-h2"><a href="#this" class="accordion-toggle">07.검색</a></h2>
						<div class="ia-legend">
							<span class="item"><em>총 페이지 : </em><em class="legend-total">4</em>,</span>
							<span class="item c-done"><em>완료 : </em><em class="legend-complete">0</em>,</span>
							<span class="item"><em>진척률 : </em><em class="legend-process">0%</em></span>
						</div>
					</div>
					<div class="ia-section-body">
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
											<th scope="col">번호</th>
											<th scope="col" class="col-1depth">1Depth</th>
											<th scope="col" class="col-2depth">2Depth</th>
											<th scope="col" class="col-3depth">3Depth</th>
											<th scope="col" class="col-4depth" style="display: none;">4Depth</th>
											<th scope="col" class="col-5depth" style="display: none;">5Depth</th>
											<th scope="col" class="col-point">구분</th>
											<th scope="col">URL</th>
											<th scope="col">날짜</th>
											<th scope="col">상태</th>
											<th scope="col">담당자</th>
											<th scope="col">비고</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">홈</td>
											<td class="col-3depth">(7.1.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/main/main_search.html" target="_blank">../../../html/main/main_search.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">천체 카테고리</td>
											<td class="col-3depth">태양계(7.2.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_all_category.html" target="_blank">../../../html/content/search_all_category.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">천체 카테고리</td>
											<td class="col-3depth">은하수(7.2.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_all_category.html" target="_blank">7.2.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">천체 카테고리</td>
											<td class="col-3depth">천문현상(7.2.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_all_category.html" target="_blank">7.2.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">천체 카테고리</td>
											<td class="col-3depth">별자리(7.2.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_all_category.html" target="_blank">7.2.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">천체 카테고리</td>
											<td class="col-3depth">별(7.2.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_all_category.html" target="_blank">7.2.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">천체 카테고리</td>
											<td class="col-3depth">딥스카이(7.2.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_all_category.html" target="_blank">7.2.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">3</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">천체 카테고리</td>
											<td class="col-3depth">소분류-일반 영상(7.3.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_all_category_sub.html" target="_blank">../../../html/content/search_all_category_sub.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">3</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">천체 카테고리</td>
											<td class="col-3depth">소분류-Shorts(7.3.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_all_category_sub.html" target="_blank">7.3.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">3</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">천체 카테고리</td>
											<td class="col-3depth">소분류-매거진(7.3.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_all_category_sub.html" target="_blank">7.3.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">3</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">천체 카테고리</td>
											<td class="col-3depth">소분류-결과없음(7.3.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_all_category_sub.html" target="_blank">7.3.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">검색어 입력화면</td>
											<td class="col-3depth">입력전(7.4.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_sub.html" target="_blank">../../../html/content/search_sub.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">검색어 입력화면</td>
											<td class="col-3depth">입력중(7.4.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_sub.html" target="_blank">7.4.1과 동일</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">검색어 입력화면</td>
											<td class="col-3depth">검색기록 없음(7.4.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_sub.html" target="_blank">7.4.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">5</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">검색결과화면</td>
											<td class="col-3depth">전체(7.5.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_sub_all.html" target="_blank">../../../html/content/search_sub_all.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">5</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">검색결과화면</td>
											<td class="col-3depth">검색결과없음(7.5.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_sub_all_nodata.html" target="_blank">../../../html/content/search_sub_all_nodata.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">5</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">검색결과화면</td>
											<td class="col-3depth">일반영상(7.5.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_sub_all.html" target="_blank">7.5.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">5</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">검색결과화면</td>
											<td class="col-3depth">Shorts(7.5.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_sub_all.html" target="_blank">7.5.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">5</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">검색결과화면</td>
											<td class="col-3depth">태그-01(7.5.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_sub_all.html" target="_blank">7.5.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">5</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">검색결과화면</td>
											<td class="col-3depth">태그-02(7.5.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_sub_all.html" target="_blank">7.5.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">5</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">검색결과화면</td>
											<td class="col-3depth">태그-03(7.5.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_sub_all.html" target="_blank">7.5.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">5</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">검색결과화면</td>
											<td class="col-3depth">매거진(7.5.6)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_sub_all.html" target="_blank">7.5.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">5</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">검색결과화면</td>
											<td class="col-3depth">커뮤니티(7.5.7)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_sub_all.html" target="_blank">7.5.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">5</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">검색결과화면</td>
											<td class="col-3depth">Creator-01(7.5.8)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_sub_all.html" target="_blank">7.5.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">5</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">검색결과화면</td>
											<td class="col-3depth">Creator-02(7.5.8)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_sub_all.html" target="_blank">7.5.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">5</td>
											<td class="col-1depth">검색</td>
											<td class="col-2depth">검색결과화면</td>
											<td class="col-3depth">Creator-03(7.5.8)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/search_sub_all.html" target="_blank">7.5.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
				<!-- //07_검색 -->

				<!-- 08_마이페이지 -->
				<section class="ia-section ia-section-ajax" data-file="ajax_ia_6" data-color="01a2de" id="gIA6" style="display: none;">
					<div class="ia-section-header">
						<h2 class="ia-h2"><a href="#this" class="accordion-toggle">08.마이페이지</a></h2>
						<div class="ia-legend">
							<span class="item"><em>총 페이지 : </em><em class="legend-total">4</em>,</span>
							<span class="item c-done"><em>완료 : </em><em class="legend-complete">0</em>,</span>
							<span class="item"><em>진척률 : </em><em class="legend-process">0%</em></span>
						</div>
					</div>
					<div class="ia-section-body">
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
											<th scope="col">번호</th>
											<th scope="col" class="col-1depth">1Depth</th>
											<th scope="col" class="col-2depth">2Depth</th>
											<th scope="col" class="col-3depth">3Depth</th>
											<th scope="col" class="col-4depth" style="display: none;">4Depth</th>
											<th scope="col" class="col-5depth" style="display: none;">5Depth</th>
											<th scope="col" class="col-point">구분</th>
											<th scope="col">URL</th>
											<th scope="col">날짜</th>
											<th scope="col">상태</th>
											<th scope="col">담당자</th>
											<th scope="col">비고</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">홈</td>
											<td class="col-3depth">(8.1.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/main/main_mypage.html" target="_blank">../../../html/main/main_mypage.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">2</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">알림목록</td>
											<td class="col-3depth">(8.2.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_alarm_list.html" target="_blank">../../../html/content/mypage_alarm_list.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">3</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">알림목록</td>
											<td class="col-3depth">nodata(8.2.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_alarm_list_nodata.html" target="_blank">../../../html/content/mypage_alarm_list_nodata.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">4</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">설정</td>
											<td class="col-3depth">(8.2.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_setting.html" target="_blank">../../../html/content/mypage_setting.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">5</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">설정</td>
											<td class="col-3depth">언어설정(8.2.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_setting.html" target="_blank">8.2.3 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">6</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">개인정보수정</td>
											<td class="col-3depth">default(8.3.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_profile.html" target="_blank">../../../html/content/mypage_profile.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">7</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">개인정보수정</td>
											<td class="col-3depth">수정시(8.3.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_profile.html" target="_blank">../../../html/content/mypage_profile.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">8</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">개인정보수정</td>
											<td class="col-3depth">소셜로그인_default(8.3.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_info.html" target="_blank">../../../html/content/mypage_info.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">9</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">개인정보수정</td>
											<td class="col-3depth">소셜로그인_수정시(8.3.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_info.html" target="_blank">../../../html/content/mypage_info.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">10</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">라이브알림설정</td>
											<td class="col-3depth">(8.4.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_setting_live.html" target="_blank">../../../html/content/mypage_setting_live.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">11</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">라이브알림설정</td>
											<td class="col-3depth">nodata(8.4.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_setting_live_nodata.html" target="_blank">../../../html/content/mypage_setting_live_nodata.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">12</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">나만의천문대예약</td>
											<td class="col-3depth">(8.4.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_myobserve_resev.html" target="_blank">../../../html/content/mypage_myobserve_resev.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">13</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">나만의천문대예약</td>
											<td class="col-3depth">nodata(8.4.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_myobserve_resev_nodata.html" target="_blank">../../../html/content/mypage_myobserve_resev_nodata.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">14</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">보유이용권</td>
											<td class="col-3depth">(8.5.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_myticket.html" target="_blank">../../../html/content/mypage_myticket.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">15</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">보유이용권</td>
											<td class="col-3depth">nodata(8.5.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_myticket_nodata.html" target="_blank">../../../html/content/mypage_myticket_nodata.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">16</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">보유이용권</td>
											<td class="col-3depth">이용권등록_default(8.5.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_myticket_registration.html" target="_blank">../../../html/content/mypage_myticket_registration.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">17</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">보유이용권</td>
											<td class="col-3depth">이용권등록_등록완료팝업(8.5.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_myticket_registration.html" target="_blank">8.5.3 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">18</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">최근본영상</td>
											<td class="col-3depth">별멍(8.6.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_video_recent.html" target="_blank">../../../html/content/mypage_video_recent.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">19</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">최근본영상</td>
											<td class="col-3depth">shorts(8.6.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_video_recent.html" target="_blank">8.6.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">20</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">최근본영상</td>
											<td class="col-3depth">라운지(8.6.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_video_recent.html" target="_blank">8.6.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">21</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">최근본영상</td>
											<td class="col-3depth">별멍_nodata(8.6.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_video_recent_nodata.html" target="_blank">../../../html/content/mypage_video_recent_nodata.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">22</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">좋아요한영상</td>
											<td class="col-3depth">별멍(8.6.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_video_like.html" target="_blank">../../../html/content/mypage_video_like.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">23</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">좋아요한영상</td>
											<td class="col-3depth">shorts(8.6.6)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_video_like.html" target="_blank">8.6.5 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">24</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">좋아요한영상</td>
											<td class="col-3depth">라운지(8.6.7)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_video_like.html" target="_blank">8.6.5 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">25</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">좋아요한영상</td>
											<td class="col-3depth">별멍_nodata(8.6.8)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_video_like_nodata.html" target="_blank">../../../html/content/mypage_video_like_nodata.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">26</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">나만의천문대관측내역/리뷰</td>
											<td class="col-3depth">(8.7.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_myobservation_list.html" target="_blank">../../../html/content/mypage_myobservation_list.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">27</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">나만의천문대관측내역/리뷰</td>
											<td class="col-3depth">더보기(8.7.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_myobservation_list.html" target="_blank">8.7.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">28</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">나만의천문대관측내역/리뷰</td>
											<td class="col-3depth">nodata(8.7.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_myobservation_list_nodata.html" target="_blank">../../../html/content/mypage_myobservation_list_nodata.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">29</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">나만의천문대관측내역/리뷰</td>
											<td class="col-3depth">리뷰작성(8.7.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_myobservation_list_review.html" target="_blank">../../../html/content/mypage_myobservation_list_review.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">30</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">나만의천문대관측내역/리뷰</td>
											<td class="col-3depth">리뷰수정(8.7.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_myobservation_list_review.html" target="_blank">8.7.4 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">31</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">공지사항</td>
											<td class="col-3depth">(8.8.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_notice.html" target="_blank">../../../html/content/mypage_notice.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">32</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">공지사항</td>
											<td class="col-3depth">리스트상세(8.8.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_notice_detail.html" target="_blank">../../../html/content/mypage_notice_detail.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">33</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">이벤트</td>
											<td class="col-3depth">진행중인이벤트(8.8.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_event.html" target="_blank">../../../html/content/mypage_event.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">34</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">이벤트</td>
											<td class="col-3depth">지난이벤트(8.8.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_event.html" target="_blank">8.8.3 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">35</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">이벤트</td>
											<td class="col-3depth">진행중인이벤트_이벤트상세(8.8.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_event_detail.html" target="_blank">../../../html/content/mypage_event_detail.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">36</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">이벤트</td>
											<td class="col-3depth">지난이벤트_이벤트상세(8.8.6)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_event_detail.html" target="_blank">8.8.5 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">37</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">고객센터</td>
											<td class="col-3depth">고객센터안내(8.9.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_customer_service.html" target="_blank">../../../html/content/mypage_customer_service.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">38</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">고객센터</td>
											<td class="col-3depth">FAQ(8.9.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_faq.html" target="_blank">../../../html/content/mypage_faq.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">39</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">고객센터</td>
											<td class="col-3depth">FAQ_검색인풋활성화(8.9.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_faq.html" target="_blank">8.9.2 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">40</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">고객센터</td>
											<td class="col-3depth">FAQ_검색결과(8.9.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_faq.html" target="_blank">8.9.2 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">41</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">고객센터</td>
											<td class="col-3depth">FAQ_검색결과없음(8.9.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_faq_nodata.html" target="_blank">../../../html/content/mypage_faq_nodata.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">42</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">이용약관</td>
											<td class="col-3depth">(8.10.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_terms.html" target="_blank">../../../html/content/mypage_terms.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">43</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">이용약관</td>
											<td class="col-3depth">약관상세_필수(8.10.2)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_terms_detail.html" target="_blank">../../../html/content/mypage_terms_detail.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">44</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">이용약관</td>
											<td class="col-3depth">약관상세_선택_동의하기(8.10.3)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_terms_detail_choice.html" target="_blank">../../../html/content/mypage_terms_detail_choice.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">45</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">이용약관</td>
											<td class="col-3depth">약관상세_선택_동의철회(8.10.4)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_terms_detail_choice.html" target="_blank">8.10.3 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">46</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">버전정보</td>
											<td class="col-3depth">최신(8.10.5)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_version_update.html" target="_blank">../../../html/content/mypage_version_update.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">47</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">버전정보</td>
											<td class="col-3depth">업데이트필요(8.10.6)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_version_update.html" target="_blank">8.10.5 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">48</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">버전정보</td>
											<td class="col-3depth">오픈소스라이센스목록(8.10.7)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_license_list.html" target="_blank">../../../html/content/mypage_license_list.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">49</td>
											<td class="col-1depth">마이페이지</td>
											<td class="col-2depth">별자리카드</td>
											<td class="col-3depth">(8.11.1)</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/mypage_constellation_card.html" target="_blank">../../../html/content/mypage_constellation_card.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
				<!-- //08_마이페이지 -->

				<!-- 09_스타셀피 -->
				<section class="ia-section ia-section-ajax" data-file="ajax_ia_6" data-color="01a2de" id="gIA6" style="display: none;">
					<div class="ia-section-header">
						<h2 class="ia-h2"><a href="#this" class="accordion-toggle">09.스타셀피</a></h2>
						<div class="ia-legend">
							<span class="item"><em>총 페이지 : </em><em class="legend-total">4</em>,</span>
							<span class="item c-done"><em>완료 : </em><em class="legend-complete">0</em>,</span>
							<span class="item"><em>진척률 : </em><em class="legend-process">0%</em></span>
						</div>
					</div>
					<div class="ia-section-body">
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
											<th scope="col">번호</th>
											<th scope="col" class="col-1depth">1Depth</th>
											<th scope="col" class="col-2depth">2Depth</th>
											<th scope="col" class="col-3depth">3Depth</th>
											<th scope="col" class="col-4depth" style="display: none;">4Depth</th>
											<th scope="col" class="col-5depth" style="display: none;">5Depth</th>
											<th scope="col" class="col-point">구분</th>
											<th scope="col">URL</th>
											<th scope="col">날짜</th>
											<th scope="col">상태</th>
											<th scope="col">담당자</th>
											<th scope="col">비고</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">스타셀피</td>
											<td class="col-2depth">스타셀피 시작하기</td>
											<td class="col-3depth">9.1.1 ~ 9.1.5</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/starselfie.html" target="_blank">../../../html/content/starselfie.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">스타셀피</td>
											<td class="col-2depth">스타셀피 개인정보제공동의</td>
											<td class="col-3depth">9.1.6</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/starselfie_term.html" target="_blank">../../../html/content/starselfie_term.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">스타셀피</td>
											<td class="col-2depth">스타셀피 이용 팝업</td>
											<td class="col-3depth">9.1.7, 9.1.8</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="" target="_blank">9.1.1 내부 display none 처리</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">스타셀피</td>
											<td class="col-2depth">스타셀피 튜토리얼</td>
											<td class="col-3depth">9.2.1~9.2.3</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/starselfie_tutor.html" target="_blank">../../../html/content/starselfie_tutor.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">스타셀피</td>
											<td class="col-2depth">스타셀피 촬영</td>
											<td class="col-3depth">9.2.4~9.2.10</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/starselfie_shoot.html" target="_blank">../../../html/content/starselfie_shoot.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td class="col-num">1</td>
											<td class="col-1depth">스타셀피</td>
											<td class="col-2depth">스타셀피 종료</td>
											<td class="col-3depth">9.3.1</td>
											<td class="col-4depth" style="display: none;"></td>
											<td class="col-5depth" style="display: none;"></td>
											<td class="col-point"></td>
											<td class="col-url"><a href="../../../html/content/starselfie_end.html" target="_blank">../../../html/content/starselfie_end.html</a></td>
											<td class="col-date"></td>
											<td class="col-complete" data-complete="done"></td>
											<td class="col-worker"></td>
											<td class="col-memo"></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
				<!-- //09_스타셀피 -->
			</div>
</template>
<style scoped>
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
.ia-h1 {display:inline-block; font-size:20px; font-size:'NSB'; font-weight:normal; color:#fff;}
.ia-h2 {font-size:20px; font-weight:normal;}
.ia-h2:before {display:block; width:20px; height:1px; margin-bottom:5px; background-color:#222;}
.ia-h2 a {color:#fff;}
.ia-h3 {margin-top:25px; margin-bottom:10px; font-size:16px; font-weight:bold;}
.ia-h3:first-child {margin-top:0;}
.ia-h4 {color:#278df5; font-weight:bold;}
.ia-h3 + .ia-h4 {margin-top:10px;}
.ia-h4:before {content:''; display:inline-block; position:relative; top:-1px; width:3px; height:13px; margin-right:5px; background-color:#278df5; vertical-align:middle;}
@media screen and (max-width:639px) {
    .ia-content-header > .ia-in-sec {padding-top:10px; padding-bottom:10px;}
    .ia-content-body {padding-top:30px;}
    .ia-h1 {font-size:20px;}
}

/*-------------------------------------------------------------------
  UI
-------------------------------------------------------------------*/
.ia-msg {line-height:2; margin-bottom:5px;}

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
.ia-legend .item {margin-left:20px;}
.ia-legend .item.c-done {color:#fff;}

/* Table */
.ia-tbl {border-top:2px solid #444; border-bottom:1px solid #444;}
.ia-tbl table th,
.ia-tbl table td {height:36px; padding:3px 10px; text-align:center; font-size:13px; border-left:1px solid #eee;}
.ia-tbl table th {border-bottom:1px solid #444; font-weight:bold; font-size:14px;}
.ia-tbl table td {border-top:1px solid #eee; color:#333;}
.ia-tbl table tr:first-child td {border-top:0;}
.ia-tbl table tr th:first-child,
.ia-tbl table tr td:first-child {border-left:0;}
.ia-tbl table tbody + tbody tr:first-child td {border-top:1px solid #ccc;}
.ia-tbl table td.col-url,
.ia-tbl table td.col-memo,
.ia-tbl table td.col-1depth,
.ia-tbl table td.col-2depth,
.ia-tbl table td.col-3depth,
.ia-tbl table td.col-4depth,
.ia-tbl table td.col-5depth {text-align:left;}
.ia-tbl table td.col-1depth {color:#333; font-weight:bold; font-size:14px;}

/* Colgroup */
.ia-tbl table .col-num {width:60px;}
.ia-tbl table .col-1depth,
.ia-tbl table .col-2depth,
.ia-tbl table .col-3depth,
.ia-tbl table .col-4depth,
.ia-tbl table .col-5depth {width:10%;}
.ia-tbl table .col-type {width:60px;}
.ia-tbl table .col-url {width:400px;}
.ia-tbl table .col-date {width:100px;}
.ia-tbl table .col-complete {width:60px;}
.ia-tbl table .col-worker {width:100px;}
.ia-tbl table .col-memo {width:auto;}
@media (max-width:1366px){
.ia-tbl table .col-url {width:auto;}
.ia-tbl table .col-date,
.ia-tbl table .col-worker {width:100px;}
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
</style>