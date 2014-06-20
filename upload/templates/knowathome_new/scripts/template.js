                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                /*
 * LimeSurvey
 * Copyright (C) 2007 The LimeSurvey Project Team / Carsten Schmitz
 * All rights reserved.
 * License: GNU/GPL License v2 or later, see LICENSE.php
 * LimeSurvey is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 * See COPYRIGHT.php for copyright notices and details.
 * 
 * 
 * Description: Javascript file for templates. Put JS-functions for your template here.
 *  
 * 
 * $Id:$
 */


/*
 * The function focusFirst puts the Focus on the first non-hidden element in the Survey. 
 * 
 * Normally this is the first input field (the first answer).
 */
function focusFirst(Event)
{
	
	$('#limesurvey :input:visible:enabled:first').focus();

}
/*
 * The focusFirst function is added to the eventlistener, when the page is loaded.
 * 
 * This can be used to start other functions on pageload as well. Just put it inside the 'ready' function block
 */

/* Uncomment below if you want to use the focusFirst function */
/*
$(document).ready(function(){
	focusFirst();
});
*/



function correctPNG() // correctly handle PNG transparency in Win IE 5.5 & 6.
{
   var arVersion = navigator.appVersion.split("MSIE")
   var version = parseFloat(arVersion[1])
   if ((version >= 5.5) && (version<7) && (document.body.filters)) 
   {
      for(var i=0; i<document.images.length; i++)
      {
         var img = document.images[i]
         var imgName = img.src.toUpperCase()
         if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
         {
            var imgID = (img.id) ? "id='" + img.id + "' " : "";
            var imgClass = (img.className) ? "class='" + img.className + "' " : "";
            var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' ";
            var imgStyle = "display:inline-block;" + img.style.cssText;
            if (img.align == "left") imgStyle = "float:left;" + imgStyle;
            if (img.align == "right") imgStyle = "float:right;" + imgStyle;
            if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle;
            var strNewHTML = "<span " + imgID + imgClass + imgTitle
            + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
            + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
            + "(src='" + img.src + "', sizingMethod='scale');\"></span>" 
            img.outerHTML = strNewHTML
            i = i-1
         }
      }
   }    
}


/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));
//-jQuery Cookie Plugin v1.3.1-----------------------------------
//---------------------------------------------------------------


$(document).ready(function(){
   
  //Change order
	function sortFunc(labelTxt) {
		$('label:contains(' + labelTxt + ')').each(function() {
			var label = $(this);
			var li = label.parents('li');
			var ul = li.parent();
			li.remove();
			ul.append(li);
		});
	}
	sortFunc("None");
	sortFunc("I don't know");
	sortFunc("I don’t know");
	sortFunc("I prefer not to answer");

  //install the ajax loader gif for state validation
  $("#answer349799X591X5496, #answer232486X146X1977").after("   <img id='loader' class='loader' src='/upload/templates/knowathome_new/477.gif' border='0' style='margin-top:-5px; margin-left:8px;'  />");
  $("img.loader").hide();

  //Check for input errors - Error handler
  $("div[id^='question']").each(function(){
    if( $(this).hasClass("input-error") ){
      
      $("#surveydata").after("<div class='notification'><div class='error-notification'>*Please scroll down to see items needing attention.* <!--<br/> <a href='javascript:void(0);' onClick='goToFirstInputError();'>Click here to go to the first item.</a>--></div></div>");
      
          if( $("td.notification").length > 0 ){
              $("html, body").animate({ scrollTop: $(".notification").offset().top }, 1000);
          }
          return false;
      }
      
  });
  
  //state and zipcode validation
  $("#answer349799X591X5496").on('input', function(){
    if($(this).val().length == 5){
    var state = $("#answer349799X591X5505").children("option:selected").html();
    var zipcode = $("#answer349799X591X5496").val();
    $.ajax({
      url: 'http://frontend.dev1.proofpilot.net/en/knowathome/ajaxStateValidation',
      data: 'state='+state+'&zipcode='+zipcode,
      dataType: "jsonp",
      jsonpCallback: 'test',
      jsonp: 'callback',
      beforeSend: function(){
        //$("#answer349799X591X5496").nextAll("img#loader").show();
        $(this).nextAll("img.loader").show();
      },
      complete: function(){
        //$("#answer349799X591X5496").nextAll("img#loader").hide();
        $(this).nextAll("img.loader").hide();
      }
      
    });
    }
  });
  
  $("#answer232486X146X1977").on('input', function(){
    if($(this).val().length == 5){
    var state = $("#answer232486X146X1976").children("option:selected").html();
    var zipcode = $("#answer232486X146X1977").val();
    $.ajax({
      url: 'http://frontend.dev1.proofpilot.net/en/knowathome/ajaxStateValidation',
      data: 'state='+state+'&zipcode='+zipcode,
      dataType: "jsonp",
      jsonpCallback: 'test',
      jsonp: 'callback',
      beforeSend: function(){
        $(this).nextAll("img.loader").show();
      },
      complete: function(){
        $(this).nextAll("img.loader").hide();
      }
      
    });
    }
  });
  
  //hide freeze specimen question
  var freezeSpecimen = getURLParameter("freezeSpecimen");
  if( freezeSpecimen == "yes" ){
    $("#answer349799X591X6787Y").attr("checked", "checked");
  }else{
    $("#answer349799X591X6787N").attr("checked", "checked");
  }
  
  $("#question6787").hide();
  
  
  //---------------------------------------------------------------------------------------------------------
  // This code takes care of hiding/showing the options for question question4182 in relation to question4168
  //---------------------------------------------------------------------------------------------------------
  
  var question4168Options = new Array();
  var question4182Remove = new Array();

  $("#question4182 div.answer ul li").hide();
  
  $("#question4168 div.answer ul li :checkbox").bind("click", function(){
    
    var index = $(this).index("#question4168 div.answer ul li :input:checkbox");
    
    //write
    if( ( question4168Options.indexOf(index) == -1 ) && ( $(this).is(':checked') ) ){
        question4168Options.push(index);
    }
    if( ( question4168Options.indexOf(index) >= 0 ) && ( ! $(this).is(':checked') ) ){
        var tmpIndex = question4168Options.indexOf(index);
        question4168Options.splice(tmpIndex,1);
        question4182Remove.push(index);
    }
    
    //read
    $("#question4182 div.answer ul li").each(function(){
      if( question4168Options.indexOf($(this).index()) >= 0 ){
        $(this).show();
      }
      if( question4182Remove.indexOf($(this).index()) >= 0 ){
        $(this).hide();
        var tmpIndex = question4182Remove.indexOf( $(this).index() );
        question4182Remove.splice(tmpIndex,1);
      }
    });
    
  });

  
  $("#question4168 div.answer :text:last").bind("input", function(){
    if( $(this).val().length > 0 ){
      $("#question4182 div.answer ul li:last").show();
      $("#question4182 div.answer ul li:last :text").val( $(this).val() );
    }else{
      $("#question4182 div.answer ul li:last").hide();
    }
  });
  //---------------------------------------------------------------------------------------------------------
  // END Q 221
  //---------------------------------------------------------------------------------------------------------
  
  //ADDING OPTIONS LOGIC
  
  var options = new Object();
  options.none = ['847353X589X5453', '393626X341X3091', '327595X669X6394'];
  options.doNotKnow = ['327595X649X6312', '327595X654X6322', '327595X658X6336', '327595X659X6338', '327595X660X6340', '393626X315X3025', '393626X320X3037', '393626X316X3753', '254935X536X4782', '254935X537X4785', '847353X576X5207', '847353X576X5222', '847353X576X5225', '847353X578X5247', '847353X578X5250', '847353X580X5296', '847353X584X5381', '847353X584X5386', '847353X584X5391', '847353X586X5421', '847353X586X5425', '847353X589X5453', '847353X589X5455', '393626X341X3091', '393626X341X3092', '327595X665X6373', '327595X665X6374', '327595X665X6375', '847353X580X5293', '393626X348X3993', '393626X467X3996', '393626X336X3078', '393626X337X3080', '327595X666X6384', '327595X666X6385', '327595X669X6394', '327595X669X6395'];
  options.preferNoAnswer = ['327595X644X6298', '327595X645X6301', '327595X658X6336', '327595X659X6338', '327595X660X6340', '393626X313X3021', '393626X322X3042', '393626X322X3043', '393626X322X3044', '393626X323X3046', '254935X536X4782', '254935X537X4785', '847353X576X5207', '847353X576X5222', '847353X576X5225', '847353X578X5247', '847353X578X5250', '847353X580X5296', '847353X582X5308', '847353X582X5310', '847353X582X5312', '847353X583X5316', '847353X583X5334', '847353X583X5348', '847353X583X5362', '847353X584X5379', '847353X584X5381', '847353X584X5386', '847353X584X5391', '847353X589X5453', '847353X589X5455', '327595X663X6361', '327595X663X6362', '327595X663X6363', '327595X664X6364', '327595X664X6370', '393626X326X3053', '393626X329X3060', '393626X332X3067', '393626X335X3074', '393626X336X3077', '393626X337X3080', '393626X341X3092', '847353X583X5376', '393626X341X3091', '327595X649X6312', '327595X654X6322', '393626X320X3037', '393626X316X3753', '393626X348X3993', '393626X467X3996', '393626X336X3078', '327595X666X6376', '327595X666X6384', '327595X666X6385', '327595X669X6394', '327595X669X6395'];

  for(i in options) {
	  var option = options[i];
	  var labelText;
	  if (options[i] == options.preferNoAnswer) {
		  labelText = "I prefer not to answer";
	  } 
	  else if (options[i] == options.none) {
		  labelText = "None";
	  } else {
		  labelText = "I don't know";
	  }
	  for(var j=0; j < option.length; j++) {
	      var questionType = '';
	      var parent = $('#question' + option[j].substr(11,4));
	      if (parent.hasClass('date')) {
	          questionType = 'date';
	      } else if (parent.hasClass('numeric')) {
	    	  questionType = 'numeric';
	      } else if(parent.hasClass('numeric-multi') || parent.hasClass('multiple-short-txt')) {
	    	  questionType = 'numeric-multi';
	      } else if(parent.hasClass('array-multi-flexi')) {
	    	  questionType = 'array-multi-flexi';
	      } else if(parent.hasClass('text-long')) {
	    	  questionType = 'text-long';
	      }
	      addOption(labelText, questionType, option[j]);
	  }
      
  }

  function addOption(labelText, questionType, questionId) {
      var item = createItem(labelText, questionId);
      $('#question' + questionId.substr(11,4)).find('.answer').append(item);
      item.on('click', 'input', function() {
    	  var input = $('#answer' + questionId);
    	  switch (questionType)
    	  {
    	  case 'date':
    		  if(input.siblings('select').length == 3) {
        		  input.val('01-01-1985');
        	  } else {
        		  input.val('01-1985');
        	  } 
              input.siblings('select').on('click', function() {
        		  item.find('input').prop('checked', false);
        	  });
    		  break;
    	  case 'numeric':
    		  input.val('0');
        	  input.on('click', function() {
        		  item.find('input').prop('checked', false);
        		  $(this).val('');
        	  });
    		  break;
    	  case 'numeric-multi':
    		  var multiInput = [ $('#answer' + questionId + 'SQ001'), $('#answer' + questionId + 'SQ002'), $('#answer' + questionId + 'SQ003'), $('#answer' + questionId + 'SQ004')];
    		  for(var i=0; i<multiInput.length; i++) {
    			  multiInput[i].val('0');
	        	  multiInput[i].on('click', function() {
	        		  item.find('input').prop('checked', false);
	        		  $(this).val('');
	        		  $(this).parents('li').siblings().find('input').val('');
	        	  });
    		  }
    	  case 'array-multi-flexi':
    		  var multiInput = [ $('#answer' + questionId + 'SQ001_SQ001'), $('#answer' + questionId + 'SQ001_SQ002'), $('#answer' + questionId + 'SQ001_SQ003'), $('#answer' + questionId + 'SQ002_SQ001'), $('#answer' + questionId + 'SQ002_SQ002'), $('#answer' + questionId + 'SQ002_SQ003'), $('#answer' + questionId + 'SQ003_SQ001'), $('#answer' + questionId + 'SQ003_SQ002'), $('#answer' + questionId + 'SQ003_SQ003')];
    		  for(var i=0; i<multiInput.length; i++) {
    			  multiInput[i].val('0');
	        	  multiInput[i].on('click', function() {
	        		  item.find('input').prop('checked', false);
	        		  for (var i=0; i<multiInput.length; i++) {
	        			  multiInput[i].val('');
	        		  }
	        	  });
    		  }
    		  break;
    	  case 'text-long':
    		  item.siblings().find('textarea').val('0');
    		  $('textarea').on('click', function() {
    			  $(this).val('');
    			  item.find('input').prop('checked', false);
    		  });
    		  break;
          default:
    	  }
      });
  }

  function createItem(labelText, questionId) {
      var item = $('<ul class="answers-list radio-list"></ul>');
      var li = $('<li style="margin-bottom: 15px;"></li>').addClass('answer-item radio-item');
      li.append('<input class="radio" type="radio" style="position: absolute; margin-top: 2px;" name="'+ questionId + '" />');
      li.append('<label class="answertext" style="margin-left: 20px;">' + labelText + '</label>');
      item.append(li);
      return item;
  }
  
  //Sort other item
  function otherItem(item) {
	  var ulItem = item.parent();
	  item.remove();
	  ulItem.prepend(item);
  }
  otherItem($('#question4128').find('.other-item'));
  
  //Delete input text
  $('label:contains("I prefer not to answer")').each(function() {
		var label = $(this);
		var li = label.parents('li');
		if(li.hasClass('checkbox-text-item')) {
			li.find('span').last().remove();
		}
	  });
});

function test(response){
  if(response.responseCode == "false"){
      alert("Please check your zip code. It does not exist within the US U.S. State or U.S. Territory you live.");
  }
}                                                                                                                                                                                                                                                                                                                                                                                                                                    

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}
                                                                                                                                                                                                                                                