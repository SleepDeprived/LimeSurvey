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
    if ((version >= 5.5) && (version < 7) && (document.body.filters))
    {
        for (var i = 0; i < document.images.length; i++)
        {
            var img = document.images[i]
            var imgName = img.src.toUpperCase()
            if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
            {
                var imgID = (img.id) ? "id='" + img.id + "' " : "";
                var imgClass = (img.className) ? "class='" + img.className + "' " : "";
                var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' ";
                var imgStyle = "display:inline-block;" + img.style.cssText;
                if (img.align == "left")
                    imgStyle = "float:left;" + imgStyle;
                if (img.align == "right")
                    imgStyle = "float:right;" + imgStyle;
                if (img.parentElement.href)
                    imgStyle = "cursor:hand;" + imgStyle;
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

function errorNotification(questiondiv){
    if (!$("#surveydata").siblings('div').hasClass('notification')) {
        if (questiondiv.hasClass("input-error")) {

            $("#surveydata").after("<div class='notification'><div class='error-notification'>*Please scroll down to see items needing attention.* <!--<br/> <a href='javascript:void(0);' onClick='goToFirstInputError();'>Click here to go to the first item.</a>--></div></div>");

            if ($("td.notification").length > 0) {
                $("html, body").animate({
                    scrollTop: $(".notification").offset().top
                }, 1000);
            }
            return false;
        }
    }
}

$(document).ready(function() {
    $("div[id^='question']").each(function() {
        errorNotification($(this));

    });

});

$(document).ready(function() {
    //CHICO Survey Staff

    function hideallstrollers() {

        $("#javatbd187572X765X7989SQ001").hide();
        $("#javatbd187572X765X7989SQ002").hide();
        $("#javatbd187572X765X7989SQ003").hide();
        $("#javatbd187572X765X7989SQ004").hide();
        $("#javatbd187572X765X7989SQ005").hide();
        $("#javatbd187572X765X7989SQ006").hide();
        $("#javatbd187572X765X7989SQ007").hide();
        $("#javatbd187572X765X7989SQ008").hide();
        $("#javatbd187572X765X7989SQ009").hide();
        $("#javatbd187572X765X7989SQ010").hide();
        $("#question7989").hide();

        return true;
    }

    hideallstrollers();

    $("#answer187572X765X8001").bind("change paste keyup", function() {
        var strollers = $(this).val();
        if (strollers > 10)
            strollers = 10;

        hideallstrollers();

        if (strollers >= 1)
            $("#question7989").show();

        for (i = 1; i <= strollers; i++) {
            if (i <= 9)
                $("#javatbd187572X765X7989SQ00" + i).show();
            else
                $("#javatbd187572X765X7989SQ0" + i).show();
        }
    });
});



$(document).ready(function() {
    //CHICO Survey Staff :: Your Brand Awareness

    function hideallBrandAwareness() {

        $("#javatbd187572X766X8002SQ001").hide();
        $("#javatbd187572X766X8002SQ002").hide();
        $("#javatbd187572X766X8002SQ003").hide();
        $("#javatbd187572X766X8002SQ004").hide();
        $("#javatbd187572X766X8002SQ005").hide();
        $("#javatbd187572X766X8002SQ006").hide();
        $("#javatbd187572X766X8002SQ007").hide();
        $("#javatbd187572X766X8002SQ008").hide();
        $("#javatbd187572X766X8002SQ009").hide();
        $("#javatbd187572X766X8002SQ010").hide();

        return true;
    }

    hideallBrandAwareness();


    var content = $("div.questiontext").html();

    function getdigits( s ) {
        thenum = s.match(/\d+/g);
        return thenum[0];
    }

    var brands = getdigits(content);

    if (brands > 10)
        brands = 10;

    hideallBrandAwareness();

    for (i = 1; i <= brands; i++) {
        if (i <= 9)
            $("#javatbd187572X766X8002SQ00" + i).show();
        else
            $("#javatbd187572X766X8002SQ0" + i).show();
    }
});

$( document ).ready(function() {

    $( "#limesurvey" ).mousemove(function( event ) {

        //Make a Pledge MI Survey (ID:272135X713X7159)
        if ( $('#answer272135X713X7159').length ) {
            alertItems7159();
        }

        //Make a Pledge MI Survey (ID:272135X713X7162)
        if ( $('#answer272135X713X7162').length ) {
            alertItems7162();
        }

        //Make a Pledge MI Survey (ID:272135X715X7171)
        if ( $('#answer272135X715X7171').length ) {
            alertItems7171();
        }

        //Make a Pledge MI Survey (ID:272135X715X7172)
        if ( $('#answer272135X715X7174').length ) {
            alertItems7174();
        }



    });


    function alertItems7159() {

        var q7159_original_html = '<div class="questiontext"><span class="asterisk"></span><span class="qnumcode">  </span>Why is <u>(Your above answer (7159))</u> the most difficult?<span class="questionhelp"></span><span class="questionhelp" id="vmsg_7159"></span></div><div class="answer clearfix"><p class="question answer-item text-item "><label for="answer272135X713X7159" class="hide label">Answer</label><textarea class="textarea  empty" name="272135X713X7159" id="answer272135X713X7159" alt="Answer" rows="5" cols="40" onkeyup="checkconditions(this.value, this.name, this.type)"></textarea></p></div><div class="questionhelp"></div>';
        $("#question7159").html( q7159_original_html );

        var span_b81_original_html = 'Your above answer (7159)';
        $("#b81").html( span_b81_original_html );

        var answer7159 = $("#answer272135X713X7159").val();

        var listItems = $("#sortable-rank-7158 li");

        listItems.each(function(idx, li) {
            var product = $(li);

            var q7159 = $("#question7159").html();
            $("#question7159").text( "" );
            var result = q7159.replace("Your above answer (7159)", product.text());
            $("#question7159").html( result );

            var qb81 = $("#b81").html();
            $("#b81").text( "" );
            var result2 = qb81.replace("Your above answer (7159)", product.text());
            $("#b81").html( result2 );

            return;
        })


        $("#answer272135X713X7159").html( answer7159 );

    }

    function alertItems7162() {

        var q7162_original_html = '<div class="questiontext"><span class="asterisk"></span><span class="qnumcode">  </span>Why is <u>(Your above answer (7162))</u> the most important?<span class="questionhelp"></span><span class="questionhelp" id="vmsg_7162"></span></div><div class="answer clearfix"><p class="question answer-item text-item "><label for="answer272135X713X7162" class="hide label">Answer</label><textarea class="textarea  empty" name="272135X713X7162" id="answer272135X713X7162" alt="Answer" rows="5" cols="40" onkeyup="checkconditions(this.value, this.name, this.type)"></textarea></p></div><div class="questionhelp"></div>';
        $("#question7162").html( q7162_original_html );

        var span_b82_original_html = 'Your above answer (7162)';
        $("#b82").html( span_b82_original_html );

        var answer7162 = $("#answer272135X713X7162").val();

        var listItems = $("#sortable-rank-7160 li");

        listItems.each(function(idx, li) {
            var product = $(li);

            var q7162 = $("#question7162").html();
            $("#question7162").text( "" );
            var result = q7162.replace("Your above answer (7162)", product.text());
            $("#question7162").html( result );


            var qb82 = $("#b82").html();
            $("#b82").text( "" );
            var result2 = qb82.replace("Your above answer (7162)", product.text());
            $("#b82").html( result2 );

            return;
        })

        $("#answer272135X713X7162").html( answer7162 );

    }

    function alertItems7171() {

        var q7171_original_html = '<div class="questiontext"><span class="asterisk"></span><span class="qnumcode">  </span>Why is (<u>Your above answer (7171)</u>) the most difficult?<span class="questionhelp"></span><span class="questionhelp" id="vmsg_7171"></span></div><div class="answer clearfix"><p class="question answer-item text-item "><label for="answer272135X715X7171" class="hide label">Answer</label>	<input class="text  empty" type="text" size="50" name="272135X715X7171" id="answer272135X715X7171" value="" onkeyup="checkconditions(this.value, this.name, this.type)"></p></div><div class="questionhelp"></div>';
        $("#question7171").html( q7171_original_html );

        var span_d81_original_html = 'Your above answer (7171)';
        $("#d81").html( span_d81_original_html );

        var answer7171 = $("#answer272135X715X7171").val();

        var listItems = $("#sortable-rank-7170 li");

        listItems.each(function(idx, li) {
            var product = $(li);

            var q7171 = $("#question7171").html();
            $("#question7171").text( "" );
            var result = q7171.replace("Your above answer (7171)", product.text());
            $("#question7171").html( result );

            var qd81 = $("#d81").html();
            $("#d81").text( "" );
            var result2 = qd81.replace("Your above answer (7171)", product.text());
            $("#d81").html( result2 );

            return;
        })

        $("#answer272135X715X7171").html( answer7171 );

    }


    function alertItems7174() {

        var q7174_original_html = '<div class="questiontext"><span class="asterisk"></span><span class="qnumcode">  </span>Why is (<u>Your above answer (7174)</u>) the most important?<span class="questionhelp"></span><span class="questionhelp" id="vmsg_7174"></span></div><div class="answer clearfix"><p class="question answer-item text-item "><label for="answer272135X715X7174" class="hide label">Answer</label>	<input class="text  empty" type="text" size="50" name="272135X715X7174" id="answer272135X715X7174" value="" onkeyup="checkconditions(this.value, this.name, this.type)"></p></div><div class="questionhelp"></div>';
        $("#question7174").html( q7174_original_html );

        var span_d82_original_html = 'Your above answer (7174)';
        $("#d82").html( span_d82_original_html );

        var answer7174 = $("#answer272135X715X7174").val();

        var listItems = $("#sortable-rank-7172 li");

        listItems.each(function(idx, li) {
            var product = $(li);

            var q7174 = $("#question7174").html();
            $("#question7174").text( "" );
            var result = q7174.replace("Your above answer (7174)", product.text());
            $("#question7174").html( result );

            var qd82 = $("#d82").html();
            $("#d82").text( "" );
            var result2 = qd82.replace("Your above answer (7174)", product.text());
            $("#d82").html( result2 );

            return;
        })

        $("#answer272135X715X7174").html( answer7174 );

    }
});



$( document ).ready(function() {

    //Make a Pledge MI Survey (ID:272135X714X7166)

    $( document ).ready(function() {

        var q7166_original_html = '<div class="questiontext"><span class="asterisk"></span><span class="qnumcode">  </span>Why is <u>(Your above answer (7166))</u> the most important? <span class="questionhelp"></span><span class="questionhelp" id="vmsg_7166"></span> </div> <div class="answer clearfix">  <p class="question answer-item text-item "> <label for="answer272135X714X7166" class="hide label">Answer</label>	<input class="text  empty" type="text" size="50" name="272135X714X7166" id="answer272135X714X7166" value="" onkeyup="checkconditions(this.value, this.name, this.type)"></p></div><div class="questionhelp"></div>';

        $( document ).ready(function() {
            $('#answer272135X714X7165A1').click(function() {
                update7166($('label[for=answer272135X714X7165A1]').text());
            });
            $('#answer272135X714X7165A2').click(function() {
                update7166($('label[for=answer272135X714X7165A2]').text());
            });
            $('#answer272135X714X7165A3').click(function() {
                update7166($('label[for=answer272135X714X7165A3]').text());
            });
            $('#answer272135X714X7165A4').click(function() {
                update7166($('label[for=answer272135X714X7165A4]').text());
            });
            $('#answer272135X714X7165A5').click(function() {
                update7166($('label[for=answer272135X714X7165A5]').text());
            });
            $('#answer272135X714X7165A6').click(function() {
                update7166($('label[for=answer272135X714X7165A6]').text());
            });
            $('#SOTH272135X714X7165').click(function() {
                update7166("Your above answer (7166)")
            });

            $('#answer272135X714X7165othertext').keyup(function () {
                update7166( $("#answer272135X714X7165othertext").val() );
            });

            function update7166(label) {

                $("#question7166").html( q7166_original_html );

                var q7166 = $("#question7166").html();
                var result = q7166.replace("Your above answer (7166)", label);

                $("#question7166").html( result );
            }
        });


    });

});



