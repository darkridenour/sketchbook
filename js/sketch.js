let bandaid;
let emma;
let domestic;
let eyes;
let faces;
let floral;
let hand;
let landscape;
let missing;
let multiple;
let plotkin;
let pulling;
let purple;
let redeye;
let shelbie;
let wav;
let insicurities;
let growth;
let rachel;
let strawberry;
let research;
let identity;
let happiness;
let hole;
let meaningless;
let janet;
let bathtub;
let foot;
let goldface;
let cover;
let oops;
let ugh;
let it;
let ouch;
let eject;
let complicated;
let comic;
let climate;
let oneface;
let twoface;
let threeface;
let toon;
let self;
let baggage;
let bloom;
let brogod;
let complex;
let god;
let divine;
let ashley;
let bailey;
let parker;
let jakob;
let kally;
let shelboo;
let clark;
let kayla;
let nigel;
let taylor;
let oliver;
let loser;

function preload(){
//high school art
  bandaid  = loadImage("high school art/0.jpg");
	emma = loadImage("high school art/1.jpg");
	domestic = loadImage("high school art/2.jpg");
	eyes = loadImage("high school art/3.jpg");
	faces = loadImage("high school art/4.jpg");
  concentration = loadImage("high school art/5.jpg")
	floral = loadImage("high school art/6.jpg");
	hand = loadImage("high school art/7.jpg");
  landscape = loadImage("high school art/8.jpg");
	missing = loadImage("high school art/9.jpg");
	multiple = loadImage("high school art/10.jpg");
	plotkin = loadImage("high school art/11.jpg");
  primary = loadImage("high school art/12.jpg")
	pulling = loadImage("high school art/13.jpg");
	purple = loadImage("high school art/14.jpg");
  redeye = loadImage("high school art/15.jpg");
	shelbie = loadImage("high school art/16.jpg");
	wav = loadImage("high school art/17.jpg");
//saic freshman year
  insicurities = loadImage("saic freshman/18.jpg");
  growth = loadImage("saic freshman/19.jpg");
  rachel = loadImage("saic freshman/20.jpg");
  strawberry = loadImage("saic freshman/21.jpg");
  research = loadImage("saic freshman/22.gif");
  identity = loadImage("saic freshman/23.gif");
  happiness = loadImage("saic freshman/24.jpg");
  hole = loadImage("saic freshman/25.jpg");
  meaningless = loadImage("saic freshman/26.jpg");
  janet = loadImage("saic freshman/27.jpg");
  bathtub = loadImage("saic freshman/28.jpg");
  foot = loadImage("saic freshman/29.jpg");
  goldface = loadImage("saic freshman/30.jpg");
  //---this mortal coil----
  cover = loadImage("saic freshman/31.jpg");
  oops = loadImage("saic freshman/32.jpg");
  ugh = loadImage("saic freshman/33.jpg");
  ouch = loadImage("saic freshman/34.jpg");
  eject = loadImage("saic freshman/35.jpg");
  it = loadImage("saic freshman/36.jpg");
  complicated = loadImage("saic freshman/37.jpg");
  comic = loadImage("saic freshman/38.jpg");
  oliver = loadImage("saic freshman/39.jpg");
//saic sophomore year
  climate = loadImage("saic sophomore/40.jpg");
  oneface = loadImage("saic sophomore/41.jpg");
  twoface = loadImage("saic sophomore/42.jpg");
  threeface = loadImage("saic sophomore/43.jpg");
  toon = loadImage("saic sophomore/44.jpg");
  self = loadImage("saic sophomore/45.jpg");
  baggage = loadImage("saic sophomore/46.jpg");
  loser = loadImage("saic sophomore/47.jpg")
//saic junior year
  bloom = loadImage("saic junior/48.jpg");
  brogod = loadImage("saic junior/49.jpg");
  divine = loadImage("saic junior/50.jpg");
  complex = loadImage("saic junior/51.jpg");
  god = loadImage("saic junior/52.jpg");
//Commissions
  ashley = loadImage("Commissions/53.jpg");
  bailey = loadImage("Commissions/54.jpg");
  kally = loadImage("Commissions/55.jpg");
  parker = loadImage("commissions/56.jpg");
  shelboo = loadImage("commissions/57.jpg");
  clark = loadImage("Commissions/58.jpg");
  kayla = loadImage("Commissions/59.jpg");
  nigel = loadImage("Commissions/60.jpg");
  jakob = loadImage("commissions/61.jpg");
  taylor = loadImage("commissions/62.jpg");
}

function loadPage(page) {

	var img = $('<img />');
	img.load(function() {
		var container = $('.sample-docs .p'+page);
		img.css({width: container.width(), height: container.height()});
		img.appendTo($('.sample-docs .p'+page));
		container.find('.loader').remove();
	});

	img.attr('src', 'pages/' +  (page-2) + '.png');

}

function addPage(page, book) {

	var id, pages = book.turn('pages');

	var element = $('<div />', {});

	if (book.turn('addPage', element, page)) {
		if (page<28) {
			element.html('<div class="gradient"></div><div class="loader"></div>');
			loadPage(page);
		}
	}
}

function updateTabs() {

	var tabs = {7: 'Clases', 12:'Constructor', 14:'Properties', 16:'Methods', 23:'Events'},
		left = [],
		right = [],
		book = $('.sample-docs'),
		actualPage = book.turn('page'),
		view = book.turn('view');

	for (var page in tabs) {
		var isHere = $.inArray(parseInt(page, 10), view)!=-1;

		if (page>actualPage && !isHere)
			right.push('<a href="#page/' + page + '">' + tabs[page] + '</a>');
		else if (isHere) {

			if (page%2===0)
				left.push('<a href="#page/' + page + '" class="on">' + tabs[page] + '</a>');
			else
				right.push('<a href="#page/' + page + '" class="on">' + tabs[page] + '</a>');
		} else
			left.push('<a href="#page/' + page + '">' + tabs[page] + '</a>');

	}

	$('.sample-docs .tabs .left').html(left.join(''));
	$('.sample-docs .tabs .right').html(right.join(''));

}


function numberOfViews(book) {
	return book.turn('pages') / 2 + 1;
}


function getViewNumber(book, page) {
	return parseInt((page || book.turn('page'))/2 + 1, 10);
}


function moveBar(yes) {
	if (Modernizr && Modernizr.csstransforms) {
		$('#slider .ui-slider-handle').css({zIndex: yes ? -1 : 10000});
	}
}

function setPreview(view) {

	var previewWidth = 115,
		previewHeight = 73,
		previewSrc = 'pics/preview.jpg',
		preview = $(_thumbPreview.children(':first')),
		numPages = (view==1 || view==$('#slider').slider('option', 'max')) ? 1 : 2,
		width = (numPages==1) ? previewWidth/2 : previewWidth;

	_thumbPreview.
		addClass('no-transition').
		css({width: width + 15,
			height: previewHeight + 15,
			top: -previewHeight - 30,
			left: ($($('#slider').children(':first')).width() - width - 15)/2
		});

	preview.css({
		width: width,
		height: previewHeight
	});

	if (preview.css('background-image')==='' ||
		preview.css('background-image')=='none') {

		preview.css({backgroundImage: 'url(' + previewSrc + ')'});

		setTimeout(function(){
			_thumbPreview.removeClass('no-transition');
		}, 0);

	}

	preview.css({backgroundPosition:
		'0px -'+((view-1)*previewHeight)+'px'
	});
}
