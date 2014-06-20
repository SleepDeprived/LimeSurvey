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

var question208Options = new Array();
var question221Remove = new Array();

var question247Options = new Array();
var question260Remove = new Array();

var question321Total = ( $.cookie("question321Total") > 0 ) ? $.cookie("question321Total") : 0;
var question5876 = 0;
var question5877 = 0;
var question5878 = 0;

$(document).ready(function(){

$('label:contains("I prefer not to answer")').each(function() {
	var label = $(this);
	var li = label.parent();
	var ul = li.parent();
	li.remove();
	ul.append(li);
   });
  
  //---------------------------------------------------------------------------------------------------------
  // This code takes care of hiding/showing the options for question 221 in relation to 208
  //---------------------------------------------------------------------------------------------------------
  $("#question221 table tbody tr td.answer ul li").hide();
  $("#question260 table tbody tr td.answer ul li").hide();
  
  $("#question208 table tbody tr td :checkbox").bind("click", function(){
    
    var index = $(this).index("#question208 table tbody tr td.answer ul li :input:checkbox");
    
    if( ( question208Options.indexOf(index) == -1 ) && ( $(this).is(':checked') ) ){
        question208Options.push(index);
    }
    if( ( question208Options.indexOf(index) >= 0 ) && ( ! $(this).is(':checked') ) ){
        var tmpIndex = question208Options.indexOf(index);
        question208Options.splice(tmpIndex,1);
        question221Remove.push(index);
    }
    
    $("#question221 table tbody tr td.answer ul li").each(function(){
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
  
  $("#question208 table tbody tr td :text:last").bind("input", function(){
    if( $(this).val().length > 0 ){
      $("#question221 table tbody tr td.answer ul li:last").show();
      $("#question221 table tbody tr td.answer ul li:last :text").val( $(this).val() );
    }else{
      $("#question221 table tbody tr td.answer ul li:last").hide();
    }
  });
  //---------------------------------------------------------------------------------------------------------
  // END Q 221
  //---------------------------------------------------------------------------------------------------------
  
  //---------------------------------------------------------------------------------------------------------
  // This code takes care of hiding/showing the options for question 247 in relation to 208
  //---------------------------------------------------------------------------------------------------------
  
  $("#question247 table tbody tr td :checkbox").bind("click", function(){
    
    console.log("here");
    
    var index = $(this).index("#question247 table tbody tr td.answer ul li :input:checkbox");
    
    if( ( question247Options.indexOf(index) == -1 ) && ( $(this).is(':checked') ) ){
        question247Options.push(index);
    }
    if( ( question247Options.indexOf(index) >= 0 ) && ( ! $(this).is(':checked') ) ){
        var tmpIndex = question247Options.indexOf(index);
        question247Options.splice(tmpIndex,1);
        question260Remove.push(index);
    }
    
    console.log( question247Options );
    
    $("#question260 table tbody tr td.answer ul li").each(function(){
      if( question247Options.indexOf($(this).index()) >= 0 ){
        $(this).show();
      }
      if( question260Remove.indexOf($(this).index()) >= 0 ){
        $(this).hide();
        var tmpIndex = question260Remove.indexOf( $(this).index() );
        question260Remove.splice(tmpIndex,1);
      }
    });
    
  });
  
  $("#question247 table tbody tr td :text:last").bind("input", function(){
    if( $(this).val().length > 0 ){
      $("#question260 table tbody tr td.answer ul li:last").show();
      $("#question260 table tbody tr td.answer ul li:last :text").val( $(this).val() );
    }else{
      $("#question260 table tbody tr td.answer ul li:last").hide();
    }
  });
  //---------------------------------------------------------------------------------------------------------
  // END Q 221
  //---------------------------------------------------------------------------------------------------------
  
  var question202 = null;
  if($("#question202 table tbody tr td.questiontext").length > 0){
    
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var d = new Date();
    d.setDate(d.getDate() - 365 );
  
    var curr_date = d.getDate();
    var curr_month = d.getMonth()+1; //Months are zero based
    var curr_year = d.getFullYear();
    
    curr_month = months[(curr_month-1)];
    
    var formattedDate = curr_month + " " + curr_date + ", " +  curr_year;
    
    question202 = $("#question202 table tbody tr td.questiontext").html();
    
    var index1 = question202.indexOf("[");
    var index2 = question202.indexOf("]");
    
    var text1 = question202.substr(0, index1);
    var text2 = question202.substr((index2+1), question202.length);
    
    question202 = text1 + " " + formattedDate + text2;
    
    $("#question202 table tbody tr td.questiontext").html(question202);
  }
  
  if($("#question321 table tbody tr td.questiontext").length > 0){
    $("#question321 table tbody tr td.answer input:text").bind("input", function(){
      question321Total = $(this).val();
      $.cookie("question321Total", question321Total);
      console.log( question321Total );
    });
  }
  
  /*if($("#question321 table tbody tr td.questiontext").length > 0){
    $("#question321 table tbody tr td.answer input:text").bind("input", function(){
      question321 = parseInt($(this).val());
      $.cookie("question321", question321);
      console.log( "Total: " + question320Total + " add up " + (parseInt(question321) + parseInt(question5876) + parseInt(question5877) + parseInt(question5878)) );
      if( (parseInt(question321) + parseInt(question5876) + parseInt(question5877) + parseInt(question5878)) > question320Total && question320Total > 0 ){
        alert("The number of HIV positive, HIV negative and HIV status unknown partners must add up to "+question320Total+". Please carefully re-enter your response");
      }
    });
  }*/
  
  if($("#question5876 table tbody tr td.questiontext").length > 0){
    $("#question5876 table tbody tr td.answer input:text").bind("input", function(){
      question5876 = parseInt($(this).val());
      console.log( "Total: " + question321Total + " add up " + (parseInt(question5876) + parseInt(question5877) + parseInt(question5878)) );
      if( (parseInt(question5876) + parseInt(question5877) + parseInt(question5878)) > question321Total && question321Total > 0 ){
        alert("The number of HIV positive, HIV negative and HIV status unknown partners must add up to "+question321Total+". Please carefully re-enter your response");
      }
    });
  }
  
  if($("#question5877 table tbody tr td.questiontext").length > 0){
    $("#question5877 table tbody tr td.answer input:text").bind("input", function(){
      question5877 = parseInt($(this).val());
      console.log( "Total: " + question321Total + " add up " + (parseInt(question5876) + parseInt(question5877) + parseInt(question5878)) );
      if( (parseInt(question5876) + parseInt(question5877) + parseInt(question5878)) > question321Total && question321Total > 0 ){
        alert("The number of HIV positive, HIV negative and HIV status unknown partners must add up to "+question321Total+". Please carefully re-enter your response");
      }
    });
  }
  
  if($("#question5878 table tbody tr td.questiontext").length > 0){
    $("#question5878 table tbody tr td.answer input:text").bind("input", function(){
      question5878 = parseInt($(this).val());
      console.log( "Total: " + question321Total + " add up " + (parseInt(question5876) + parseInt(question5877) + parseInt(question5878)) );
      if( (parseInt(question5876) + parseInt(question5877) + parseInt(question5878)) > question321Total && question321Total > 0 ){
        alert("The number of HIV positive, HIV negative and HIV status unknown partners must add up to "+question321Total+". Please carefully re-enter your response");
      }
    });
  }
  
  //-----------------------------------------
  // Adding I prefer not to answer to Q 320
  //-----------------------------------------
  
  $("#question320 table tbody tr td.answer p.answer-item").nextAll("p:first").after("<input type='checkbox' name='noAnswer' id='noAnswer' /> <label for='noAnswer'>I prefer not to answer</label>");
  
  $("#noAnswer").click(function(){
    if(! $(this).is(":checked")){
     $("#question320 table tbody tr td.answer p.answer-item").show();
     $("#question320 table tbody tr td.answer p.tip").show();
     $("#question320 table tbody tr td.answer p.answer-item input:text").val("");
    }else{
     $("#question320 table tbody tr td.answer p.answer-item").hide();
     $("#question320 table tbody tr td.answer p.tip").hide();
     $("#question320 table tbody tr td.answer p.answer-item input:text").val(-1);
    }
  });
  
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
