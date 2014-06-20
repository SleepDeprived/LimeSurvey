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
//---------------------------------------------------------------


$(document).ready(function(){
	//Change order of "I prefer not to answer"
	function sortFunc(label) {
		$('label:contains(' + label + ')').each(function() {
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
	
	//ADDING OPTIONS LOGIC
	  
	  var options = new Object();
	  options.none = ['819549X185X2223'];
	  options.doNotKnow = ['819549X180X2164', '819549X185X2224', '819549X185X2223'];
	  options.preferNoAnswer = ['819549X157X2009', '819549X160X2039', '819549X161X2056', '819549X163X2065', '819549X166X2091', '819549X166X2094', '819549X166X2095', '819549X167X2100', '819549X170X2118', '819549X173X2132', '819549X176X2146', '819549X179X2160', '819549X180X2163', '819549X180X2164', '819549X181X2182', '819549X185X2223', '819549X185X2224'];

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
		      } else if(parent.hasClass('numeric-multi')) {
		    	  questionType = 'numeric-multi';
		      } else if(parent.hasClass('array-multi-flexi')) {
		    	  questionType = 'array-multi-flexi';
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
	    		  var multiInput = [ $('#answer' + questionId + 'SQ001'), $('#answer' + questionId + 'SQ002'), $('#answer' + questionId + 'SQ003')];
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
	  


//  $(".preferNoAnswer").live('click', function(){
//    if( $(this).prevAll("input.text.numeric").length > 0 || $(this).nextAll("input.text.numeric").length > 0 ){
//      $(this).prevAll("input.text.numeric").val(0);
//      $(this).nextAll("input.text.numeric").val(0);
//    }
//    //console.log( $(this).prevAll("p:first").children(".year").size() );
//    if( $(this).prevAll(".year").size() > 0 ){
//      $(this).prevAll("p:first").children(".year,.month").children("option[value='']").attr("selected", true);
//    }
//    if( $(this).nextAll(".year").size() > 0 ){
//       $(this).nextAll("p:first").children(".year,.month").children("option[value='']").attr("selected", true);
//    }
//    ;
//  });
//  
//  //Add "I prefer not to answer to single numeric text inputs"
//  $("div.question-wrapper div.answer input.text.numeric").each(function(){
//            
//            var input = $(this);
//            var label = input.prev();
//    	    var qid = $(this).closest("div.question-wrapper").attr("id");
//
//            var p = input.parent();
//            var radio2 = $('<input type="radio" id="dinput_ipna' + qid + '" class="radio preferNoAnswer" style="margin-left: 1em;">')
//                                    .attr('name', "dinput" + qid);
//            var radio2_label = $('<label for="dinput_ipna' + qid + '" style="position:relative; top:-3px; left:5px;" >I prefer not to answer</label>');
//
//               	$(this).closest("div.answer").children("p.answer-item:last").append("<br />");
//           	$(this).closest("div.answer").children("p.answer-item:last").append(radio2);
//	$(this).closest("div.answer").children("p.answer-item:last").append(radio2_label);
//
//  });
//  //jp
//  //if text numeric
//  $("input.text.numeric").live("input", function(){
//    $(this).nextAll("input:radio.preferNoAnswer").attr("checked", false);
//  });
//  
//  $("div.question-wrapper div.answer .year").each(function(){
//    var input = $(this);
//    
//            var label = input.prev();
//            var p = input.parent();
//            var radio2 = $('<input type="radio" id="r1' + input.attr('id') + '" class="radio preferNoAnswer" style="margin-left: 1em;">')
//                                    .attr('name', "r1" + input.attr('id'));
//            var radio2_label = $('<label for="r1' + input.attr('id') + '">').attr('style', 'position:relative; top:-3px; left:5px;').text('I prefer not to answer');
//
//            //p.after(radio2_label).after(radio2);
//            $(this).closest("div.answer").children("p.answer-item:last").append("<br />");
//            $(this).closest("div.answer").children("p.answer-item:last").append(radio2);
//	    $(this).closest("div.answer").children("p.answer-item:last").append(radio2_label);
//  });
//  //if year
//  $("div.question-wrapper div.answer .year,.month").live("change", function(){
//    $(this).nextAll("input:radio.preferNoAnswer").attr("checked", false);
//  });
//    $("div.question-wrapper div.answer .year,.month").live("change", function(){
//      
//    });
//  //
//  
//  $('label:contains("I prefer not to answer")').each(function() {
//	var label = $(this);
//	var li = label.parent();
//	var ul = li.parent();
//	li.remove();
//	ul.append(li);
//   });
//  
  //---------------------------------------------------------------------------------------------------------
  // This code takes care of hiding/showing the options for question 221 in relation to 208
  //---------------------------------------------------------------------------------------------------------
  
  var question208Options = new Array();
  var question221Remove = new Array();

  $("#question6250 div.answer ul li").hide();
  
  $("#question5892 div.answer ul li :checkbox").bind("click", function(){
    
    var index = $(this).index("#question5892 div.answer ul li :input:checkbox");
    
    if( ( question208Options.indexOf(index) == -1 ) && ( $(this).is(':checked') ) ){
        question208Options.push(index);
    }
    if( ( question208Options.indexOf(index) >= 0 ) && ( ! $(this).is(':checked') ) ){
        var tmpIndex = question208Options.indexOf(index);
        question208Options.splice(tmpIndex,1);
        question221Remove.push(index);
    }
    
    $("#question6250 div.answer ul li").each(function(){
      if( question208Options.indexOf($(this).index()) >= 0 ){
        $(this).show();
      }
      if( question221Remove.indexOf($(this).index()) >= 0 ){
        $(this).hide();
        var tmpIndex = question221Remove.indexOf( $(this).index() );
        question221Remove.splice(tmpIndex,1);
      }
    });
    
  });
  
  $("#question5892 div.answer :text:last").bind("input", function(){
    if( $(this).val().length > 0 ){
      $("#question6250 div.answer ul li:last").show();
      $("#question6250 div.answer ul li:last :text").val( $(this).val() );
    }else{
      $("#question6250 div.answer ul li:last").hide();
    }
  });
  //---------------------------------------------------------------------------------------------------------
  // END Q 221
  //---------------------------------------------------------------------------------------------------------
  
  
  //---------------------------------------------------------------------------------------------------------
  // This code takes care of hiding/showing the options for question 221 in relation to 208
  //---------------------------------------------------------------------------------------------------------
  
  var question5900Options = new Array();
  var question5901Remove = new Array();

  $("#question5901 div.answer ul li").hide();
  
  $("#question5900 div.answer ul li :checkbox").bind("click", function(){
    
    var index = $(this).index("#question5900 div.answer ul li :input:checkbox");
    
    if( ( question5900Options.indexOf(index) == -1 ) && ( $(this).is(':checked') ) ){
        question5900Options.push(index);
    }
    if( ( question5900Options.indexOf(index) >= 0 ) && ( ! $(this).is(':checked') ) ){
        var tmpIndex = question5900Options.indexOf(index);
        question5900Options.splice(tmpIndex,1);
        question5901Remove.push(index);
    }
    
    $("#question5901 div.answer ul li").each(function(){
      if( question5900Options.indexOf($(this).index()) >= 0 ){
        $(this).show();
      }
      if( question5901Remove.indexOf($(this).index()) >= 0 ){
        $(this).hide();
        var tmpIndex = question5901Remove.indexOf( $(this).index() );
        question5901Remove.splice(tmpIndex,1);
      }
    });
    
  });
  
  $("#question5900 div.answer :text:last").bind("input", function(){
    if( $(this).val().length > 0 ){
      $("#question5901 div.answer ul li:last").show();
      $("#question5901 div.answer ul li:last :text").val( $(this).val() );
    }else{
      $("#question5901 div.answer ul li:last").hide();
    }
  });
  //---------------------------------------------------------------------------------------------------------
  // END Q 221
  //---------------------------------------------------------------------------------------------------------
  
  
  
  //---------------------------------------------------------------------------------------------------------
  // This code takes care of hiding/showing the options for question 221 in relation to 208
  //---------------------------------------------------------------------------------------------------------
  
  var question5908Options = new Array();
  var question5909Remove = new Array();

  $("#question5909 div.answer ul li").hide();
  
  $("#question5908 div.answer ul li :checkbox").bind("click", function(){
    
    var index = $(this).index("#question5908 div.answer ul li :input:checkbox");
    
    if( ( question5908Options.indexOf(index) == -1 ) && ( $(this).is(':checked') ) ){
        question5908Options.push(index);
    }
    if( ( question5908Options.indexOf(index) >= 0 ) && ( ! $(this).is(':checked') ) ){
        var tmpIndex = question5908Options.indexOf(index);
        question5908Options.splice(tmpIndex,1);
        question5909Remove.push(index);
    }
    
    $("#question5909 div.answer ul li").each(function(){
      if( question5908Options.indexOf($(this).index()) >= 0 ){
        $(this).show();
      }
      if( question5909Remove.indexOf($(this).index()) >= 0 ){
        $(this).hide();
        var tmpIndex = question5909Remove.indexOf( $(this).index() );
        question5909Remove.splice(tmpIndex,1);
      }
    });
    
  });
  
  $("#question5908 div.answer :text:last").bind("input", function(){
    if( $(this).val().length > 0 ){
      $("#question5909 div.answer ul li:last").show();
      $("#question5909 div.answer ul li:last :text").val( $(this).val() );
    }else{
      $("#question5909 div.answer ul li:last").hide();
    }
  });
  //---------------------------------------------------------------------------------------------------------
  // END Q 221
  //---------------------------------------------------------------------------------------------------------
  
  
  
  //---------------------------------------------------------------------------------------------------------
  // This code takes care of hiding/showing the options for question 221 in relation to 208
  //---------------------------------------------------------------------------------------------------------
  
  var question5916Options = new Array();
  var question5917Remove = new Array();

  $("#question5917 div.answer ul li").hide();
  
  $("#question5916 div.answer ul li :checkbox").bind("click", function(){
    
    
    var index = $(this).index("#question5916 div.answer ul li :input:checkbox");
    
    if( ( question5916Options.indexOf(index) == -1 ) && ( $(this).is(':checked') ) ){
        question5916Options.push(index);
    }
    if( ( question5916Options.indexOf(index) >= 0 ) && ( ! $(this).is(':checked') ) ){
        var tmpIndex = question5916Options.indexOf(index);
        question5916Options.splice(tmpIndex,1);
        question5917Remove.push(index);
    }
    
    $("#question5917 div.answer ul li").each(function(){
      if( question5916Options.indexOf($(this).index()) >= 0 ){
        $(this).show();
      }
      if( question5917Remove.indexOf($(this).index()) >= 0 ){
        $(this).hide();
        var tmpIndex = question5917Remove.indexOf( $(this).index() );
        question5917Remove.splice(tmpIndex,1);
      }
    });
    
  });
  
  $("#question5916 div.answer :text:last").bind("input", function(){
    if( $(this).val().length > 0 ){
      $("#question5917 div.answer ul li:last").show();
      $("#question5917 div.answer ul li:last :text").val( $(this).val() );
    }else{
      $("#question5917 div.answer ul li:last").hide();
    }
  });
  //---------------------------------------------------------------------------------------------------------
  // END Q 221
  //---------------------------------------------------------------------------------------------------------
  
  
  
  //---------------------------------------------------------------------------------------------------------
  // This code takes care of hiding/showing the options for question 221 in relation to 208
  //---------------------------------------------------------------------------------------------------------
  
  var question5912Options = new Array();
  var question5913Remove = new Array();

  $("#question5913 div.answer ul li").hide();
  
  $("#question5912 div.answer ul li :checkbox").bind("click", function(){
    
    
    var index = $(this).index("#question5912 div.answer ul li :input:checkbox");
    
    if( ( question5912Options.indexOf(index) == -1 ) && ( $(this).is(':checked') ) ){
        question5912Options.push(index);
    }
    if( ( question5912Options.indexOf(index) >= 0 ) && ( ! $(this).is(':checked') ) ){
        var tmpIndex = question5912Options.indexOf(index);
        question5912Options.splice(tmpIndex,1);
        question5913Remove.push(index);
    }
    
    $("#question5913 div.answer ul li").each(function(){
      if( question5912Options.indexOf($(this).index()) >= 0 ){
        $(this).show();
      }
      if( question5913Remove.indexOf($(this).index()) >= 0 ){
        $(this).hide();
        var tmpIndex = question5913Remove.indexOf( $(this).index() );
        question5913Remove.splice(tmpIndex,1);
      }
    });
    
  });
  
  $("#question5912 div.answer :text:last").bind("input", function(){
    if( $(this).val().length > 0 ){
      $("#question5913 div.answer ul li:last").show();
      $("#question5913 div.answer ul li:last :text").val( $(this).val() );
    }else{
      $("#question5913 div.answer ul li:last").hide();
    }
  });
  //---------------------------------------------------------------------------------------------------------
  // END Q 221
  //---------------------------------------------------------------------------------------------------------

  //math problem
  var question5924Total = ( $.cookie("question5924Total") > 0 ) ? $.cookie("question5924Total") : 0;
  var question5929 = 0;
  var question5930 = 0;
  var question5931 = 0;
  
  
  if($("#question5924 .questiontext").length > 0){
    $("#question5924 .answer input:text").bind("input", function(){
      //console.log("rec");
      question5924Total = $(this).val();
      $.cookie("question5924Total", question5924Total);
    });
  }
  
  
  if($("#question5929 .questiontext").length > 0){
    $("#question5929 .answer input:text").bind("input", function(){
      question5929 = parseInt($(this).val());
      //console.log( "Total: " + question5924Total + " add up " + (parseInt(question5929) + parseInt(question5930) + parseInt(question5931)) );
      if( (parseInt(question5929) + parseInt(question5930) + parseInt(question5931)) > question5924Total && question5924Total > 0 ){
        alert("The number of HIV positive, HIV negative and HIV status unknown partners must add up to "+question5924Total+". Please carefully re-enter your response");
      }
    });
  }
  
  if($("#question5930 .questiontext").length > 0){
    $("#question5930 .answer input:text").bind("input", function(){
      question5930 = parseInt($(this).val());
      //console.log( "Total: " + question5924Total + " add up " + (parseInt(question5929) + parseInt(question5930) + parseInt(question5931)) );
      if( (parseInt(question5929) + parseInt(question5930) + parseInt(question5931)) > question5924Total && question5924Total > 0 ){
        alert("The number of HIV positive, HIV negative and HIV status unknown partners must add up to "+question5924Total+". Please carefully re-enter your response");
      }
    });
  }
  
  if($("#question5931 .questiontext").length > 0){
    $("#question5931 .answer input:text").bind("input", function(){
      question5931 = parseInt($(this).val());
      //console.log( "Total: " + question5924Total + " add up " + (parseInt(question5929) + parseInt(question5930) + parseInt(question5931)) );
      if( (parseInt(question5929) + parseInt(question5930) + parseInt(question5931)) > question5924Total && question5924Total > 0 ){
        alert("The number of HIV positive, HIV negative and HIV status unknown partners must add up to "+question5924Total+". Please carefully re-enter your response");
      }
    });
  }
  
  var prevDate = ( getURLParameter("prevDate") ) ? getURLParameter("prevDate") : false;
  prevDate = ( getURLParameter("prevDate") == "null" && $.cookie("prevDate") != "null" ) ? $.cookie("prevDate") : prevDate;
  $.cookie("prevDate", prevDate);
  
  var question5894 = "";
  if( typeof prevDate != "undefined" && $("#question5894 .questiontext").size() > 0 ){
    question5894 = $("#question5894 .questiontext").html();
    question5894 = question5894.replace("[prevDate]", prevDate);
    $("#question5894 .questiontext").html(question5894);
  }
  
  var question5895 = "";
  if( typeof prevDate != "undefined" && $("#question5895 .questiontext").size() > 0 ){
    question5895 = $("#question5895 .questiontext").html();
    question5895 = question5895.replace("[prevDate]", prevDate);
    $("#question5895 .questiontext").html(question5895);
  }
  
  var question5896 = "";
  if( typeof prevDate != "undefined" && $("#question5896 .questiontext").size() > 0 ){
    question5896 = $("#question5896 .questiontext").html();
    question5896 = question5895.replace("[prevDate]", prevDate);
    $("#question5896 .questiontext").html(question5896);
  }
  
  $("#question2164 div.answer p.answer-item:last").append(function(){
            
            var input = $(this);
            var label = input.prev();
    
            var radio2 = $('<input type="radio" id="r1' + input.attr('id') + '" class="radio preferNoAnswer" style="margin-left: 1em;">')
                                    .attr('name', "r1" + input.attr('id'));
            var radio2_label = $('<label for="r1' + input.attr('id') + '">').attr('style', 'position:relative; top:-3px; left:5px;').text('I prefer not to answer');
    
    	var I_prefer_not_to_answer = '<input type="radio" name="r1' + input.attr('id') + 'id="r1' + input.attr('id') + '" class="radio preferNoAnswer" style="margin-left: 1em;">'
              + '<label for="r1' + input.attr('id') + '" style="position:relative; top:-3px; left:5px;" >I prefer not to answer</label>';
    
    var I_do_not_know = '<input type="radio" name="r1' + input.attr('id') + 'id="r1' + input.attr('id') + '" class="radio preferNoAnswer" style="margin-left: 1em;">'
              + '<label for="r1' + input.attr('id') + '" style="position:relative; top:-3px; left:5px;" >I dont know</label>';


            return "<br />" + I_prefer_not_to_answer + "<br />" + I_do_not_know;
  });
  
//  $("#question2223 div.answer p.answer-item:last").append(function(){
//  
//  var input = $(this);
//  var label = input.prev();
//    
//    var qid = $(this).parent("div.answer").parent("div.question-wrapper").attr("id");
//  
//  var I_do_not_know = '<input type="radio" name="dinput' + qid + '" id="dinput_idnk' + qid + '" class="radio preferNoAnswer" style="margin-left: 1em;">'
//              + '<label for="dinput_idnk' + qid + '" style="position:relative; top:-3px; left:5px;" >I dont know</label>';
//  
//  var none = '<input type="radio" name="dinput' + qid + '" id="dinput_none' + qid + '" class="radio preferNoAnswer" style="margin-left: 1em;">'
//              + '<label for="dinput_none' + qid + '" style="position:relative; top:-3px; left:5px;" >None</label>';
//  
//  return "<br />" + I_do_not_know + "<br />" + none;
//});

});                                                            

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                