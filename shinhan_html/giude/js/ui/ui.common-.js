/*-------------------------------------------------------------------
	분류순서
	- @Variables	: 전역변수
	- @Init			: 초기실행
	- @Settings		: 기본설정
	- @Utility		: 유틸기능
	- @Layout		: 레이아웃
	- @Components	: 컴포넌트
	- @Content		: 컨텐츠
-------------------------------------------------------------------*/
/*-------------------------------------------------------------------
	@Variables
-------------------------------------------------------------------*/
//Elements
var $window			= null,
	$document		= null,
	$html			= null,
	$body			= null,
	$html_body		= null,
	$wrapper		= null,
	$header			= null,
	$dimmer			= null,
	$activeFocus	= null,
_;

//Devices
var isIOS			= browser.os == 'ios',
	isANDROID		= browser.os == 'android',
	isMOBILE		= browser.mobile == true,
_;

var ui = {
	/*---------------------------------------------------------------
		@Init
	---------------------------------------------------------------*/
	/* 기본실행 */
	init: function(){
		/* Settings */
		this.elements();		// 엘리먼트 설정
		this.userAgent();		// 디바이스 설정
		this.customEvent();		// 커스텀이벤트 설정

		/* Components */
		this.waveEffect.event();// 버튼효과
	},

	/*---------------------------------------------------------------
		@Settings
	---------------------------------------------------------------*/
	/* 엘리먼트 설정 */
	elements: function(){
		$window		= $(window);
		$document	= $(document);
		$html		= $('html');
		$body		= $('body');
		$html_body	= $('html, body');
		$wrapper	= $('.wrapper');
		$header		= $('.header');
		$dimmer		= $('.dimmer');
		$document.off('focusin.eleEvent click.eleEvent').on('focusin.eleEvent click.eleEvent', function(e){
			$activeFocus = $(e.target);
		})
	},

	/* 디바이스설정 - OS, Version, Browser */
	userAgent: function(){
		var cls = 'dv_';
		var $eleBody = $body;
		$eleBody.addClass(cls + browser.name + ' ' + cls + browser.name + browser.version + ' ' + cls + browser.os + ' ' + cls + browser.os + browser.osVersion);
	},

	/* 윈도우 커스텀이벤트설정 - scrollEnd, resizeEnd */
	customEvent: function(){
		var resizeStartTime, resizeEndTime, scrollStartTime, scrollEndTime;
		$window.off('scroll.customEvent').on('scroll.customEvent', function(){
			clearTimeout(scrollEndTime); scrollEndTime = setTimeout(function(){ $window.trigger('scrollEnd') }, 100);
		});
		$window.off('resize.customEvent').on('resize.customEvent', function(){
			clearTimeout(resizeEndTime); resizeEndTime = setTimeout(function(){ $window.trigger('resizeEnd') }, 100);
		})
	},

	/*---------------------------------------------------------------
		@Utility
	---------------------------------------------------------------*/
	/* 스크롤설정 */
	setScroll: {
		clsFixed : 'is-bodyFixed',
		scrTop : null,
		//스크롤 비활성
		disable : function(){
			this.scrTop = $(window).scrollTop();
			$('html, body').addClass(this.clsFixed);
			$('.wrapper').css({position: 'relative', top: this.scrTop * (-1)});
		},
		//스크롤 활성화
		enable : function(){
			$('html, body').removeClass(this.clsFixed);
			$('.wrapper, #g-wrapper').removeAttr('style');
			$(window).scrollTop(this.scrTop);
		},
	},

	/* 스크롤설정 */
	setScroll: {
		clsLockAll : 'is-locked_all',
		clsLockIOS : 'is-locked_ios',
		scrTop : null,
		//스크롤 비활성
		disable : function(){
			if (isIOS){
				this.scrTop = $window.scrollTop();
				$html_body.addClass(this.clsLockIOS);
				$wrapper.css({position: 'relative', top: this.scrTop * (-1)});
			} else {
				$html_body.addClass(this.clsLockAll);
			}
		},
		//스크롤 활성화
		enable : function(){
			if (isIOS){
				$html_body.removeClass(this.clsLockIOS);
				$wrapper.removeAttr('style');
				$window.scrollTop(this.scrTop);
			} else {
				$html_body.removeClass(this.clsLockAll);
			}
		},
	},

	/* 배경설정 */
	dimmer: {
		open: function(name){
			$dimmer.addClass('dimmer-'+name+' is-active');
			$dimmer.one('transitionend', function(){
				if (!$(this).hasClass('is-active')){
					ui.setScroll.disable();
				}
			})
		},
		close: function(name){
			$dimmer.removeClass('is-active');
			$dimmer.one('transitionend', function(){
				if (!$(this).hasClass('is-active')){
					$dimmer.removeClass('dimmer-'+name);
					ui.setScroll.enable();
				}
			})
		}
	},

	/*---------------------------------------------------------------
		@Mudule
	---------------------------------------------------------------*/
	// 버튼 웨이브효과
	waveEffect: {
		event: function(){
			/* Add the class effect on button */
			var events = null;
			$(document).on('mousedown touchstart', '.btn, .gnb a', function(e) {
				events = 'mousedown';
				var self = $(this),
					wave = '.effect-wave',
					btnWidth = self.outerWidth(),
					x = e.offsetX,
					y = e.offsetY;
				if (self.find(wave).length == 0){
					self.prepend('<span class="effect-wave"></span>');
					$(wave).css({'top': y, 'left': x}).stop().animate({width: btnWidth * 2.2, height: btnWidth * 2.2 }, 400, function(){
						$(this).addClass('is-complete');
						if (events == 'mouseup'){
							$(this).stop().animate({opacity: '0'}, 200, function() {
								$(this).remove();
							});
						}
					});
				}
			})
			$(document).on('mouseup touchend', '.btn, .gnb a', function(e) {
				events = 'mouseup';
				var self = $(this),
					wave = '.effect-wave';
				if (self.find(wave).hasClass('is-complete')){
					$(wave).stop().animate({opacity: '0'}, 200, function() {
						$(this).remove();
					})
				}
			})
			$(document).on('click focusin', function(e) {
				if ($(e.target).is('.btn, .gnb a') == false && $('.effect-wave').length){
					$('.effect-wave').stop().animate({opacity: '0'}, 200, function() {
						$(this).remove();
					})
				}
			})
		}
	},

	waveEffect2: {
		event: function(){
			/* Add the class effect on button */
			$(document).on('click', '.btn, .gnb a', function(e) {
				var self = $(this),
					wave = '.effect-wave',
					/* Get the width of button (if different buttons types) */
					btnWidth = self.outerWidth(),
					x = e.offsetX,
					y = e.offsetY;
				self.prepend('<span class="effect-wave"></span>');
				console.log(e);
				$(wave)
				.css({'top': y, 'left': x})
				.animate({opacity: '0', width: btnWidth * 2.2, height: btnWidth * 2.2 }, 500, function() {
					self.find(wave).remove();
				})
			})
		}
	},

	gnb: {
		eleNode1_item: '.gnb .node1-item',
		eleNode2_item: '.gnb .node2-item',
		init: function(){
			var self = this;
			$(document).on('click', self.eleNode1_item, function(e){
				$(this).toggleClass('is-active');
				if ($(this).hasClass('is-active')){
					self.visible($(this));
					self.hidden($(this).siblings('.is-active'));
				} else {
					self.hidden($(this));
				}
			});
			$(document).on('click focusin', function(e){
				if ($(self.eleNode1_item).has(e.target).length === 0 && $(self.eleNode1_item+'.is-active').length){
					self.hidden($(self.eleNode1_item+'.is-active'));
				}
			})
		},
		visible: function($item){
			$item.find('.node2-menu').css({'display':'block'});
			$item.find('> a').attr({'aria-expanded':'true'});
		},
		hidden: function($item){
			$item.find('.node2-menu').css({'display':'block'});
			$item.removeClass('is-active');
			$item.find('> a').attr({'aria-expanded':'false'});
			$item.one(transitionend, function(){
				if (!$item.hasClass('is-active')){
					$(this).find('.node2-menu').hide();
				}
			})
		},
		set: function(n1, n2){
			$(this.eleNode1_item).eq(n1).addClass('is-current').siblings().removeClass('is-current');
			$(this.eleNode2_item).eq(n2).addClass('is-current').siblings().removeClass('is-current');
		}
	},

	/*---------------------------------------------------------------
		@Layout
	---------------------------------------------------------------*/
	// Aside
	aside: {
		open: function(id){
			var self = this;
			var $aside = $('#'+id);
			var $opener = $('[aria-controls='+id+']');
			$opener.attr('aria-expanded', 'true');
			$aside.addClass('is-active').attr('aria-hidden', 'false');
			ui.dimmer.open('aside');
		},
		close: function(id){
			var self = this;
			var $aside = $('#'+id);
			var $opener = $('[aria-controls='+id+']');
			$opener.attr('aria-expanded', 'true');
			$aside.removeClass('is-active').attr('aria-hidden', 'true');
			ui.dimmer.close('aside');
		},
	},
}

$(function(){
	ui.init(); // Develop Init
})