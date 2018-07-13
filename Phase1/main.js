function call( i ){
  return function(){
    alert('you clicked' + i);
  }
}

$(document).ready(function(){ 
    
    for(let counter = 1;counter <= 6;counter++){
        $('#upvote'+counter).click(function(){
            var upvote = parseInt($('#upvote'+counter).val());
            var downvote=parseInt($('#downvote'+counter).val());
            if(upvote == 0 && downvote == 0){
                $('#upvote'+counter).removeClass('upvote');
                $('#upvote'+counter).addClass('upvoted');
                $('#upvote'+counter).val(1);
            }
            else if(upvote== 1 && downvote==0){
                $('#upvote'+counter).removeClass('upvoted');
                $('#upvote'+counter).addClass('upvote');
                $('#upvote'+counter).val(0);
            }
            else if(upvote==0 && downvote ==1){
                $('#upvote'+counter).removeClass('upvote');
                $('#upvote'+counter).addClass('upvoted');
                $('#downvote'+counter).removeClass('downvoted');
                $('#downvote'+counter).addClass('downvote');
                $('#upvote'+counter).val(1);
                $('#downvote'+counter).val(0);
            }
        });
        
        $('#downvote'+counter).click(function(){
            var upvote = parseInt($('#upvote'+counter).val());
            var downvote=parseInt($('#downvote'+counter).val());
            if(downvote == 0 && upvote == 0){
                $('#downvote'+counter).removeClass('downvote');
                $('#downvote'+counter).addClass('downvoted');
                $('#downvote'+counter).val(1);
            }
            else if(downvote == 1 && upvote == 0){
                $('#downvote'+counter).removeClass('downvoted');
                $('#downvote'+counter).addClass('downvote');
                $('#downvote'+counter).val(0);
            }
            else if(downvote == 0 && upvote == 1){
                $('#downvote'+counter).removeClass('downvote');
                $('#downvote'+counter).addClass('downvoted');
                $('#downvote'+counter).val(1);
                $('#upvote'+counter).removeClass('upvoted');
                $('#upvote'+counter).addClass('upvote');
                $('#upvote'+counter).val(0);
                
            }
        });
    }
    
    for(let delctr = 1;delctr <= 6; delctr++){
        $('#delete'+delctr).click(function(){
            $('#post'+delctr).hide();
        });
    }
    
    $('.search-button').click(function(){
        var searchtag = $('.searchinput').val();
        
        var Scontainer= document.createElement("div");
        var Stitle=document.createElement("p");
        var S=document.createElement("p");
        
        Scontainer.className="searched-container";
        Stitle.id="searched-title";
        S.id="searched";
        
        Stitle.append("Searched Tags:");
        S.append(searchtag);
        
        Scontainer.append(Stitle);
        Scontainer.append(S);
        
        $('.profile-container').empty();
        $('.comment-container').empty();
        $('.access').empty();
        
        if(searchtag == "Advance" || searchtag== "Ako" || searchtag == "Magisip"){
           var temp= $('#post1').clone();
            $('.post-container').empty();
            $('.post-container').append(temp);
        }
        else if(searchtag == "Wala" || searchtag == "Finish" || searchtag == "Na"){
            var temp= $('#post2').clone();
            $('.post-container').empty();
            $('.post-container').append(temp);
        }
        else if(searchtag == "Meme"){
            var temp1= $('#post1').clone();
            var temp2= $('#post2').clone();
            $('.post-container').empty();
            $('.post-container').append(temp1);
            $('.post-container').append(temp2);
        }
        else if(searchtag == "Ge" || searchtag == "Talon" || searchtag == "Una" || searchtag == "Ulo"){
            var temp= $('#post3').clone();
            $('.post-container').empty();
            $('.post-container').append(temp);
        }
        else if(searchtag == "Incredibles" || searchtag == "Dash" || searchtag == "Violet"){
            var temp= $('#post4').clone();
            $('.post-container').empty();
            $('.post-container').append(temp);
        }
        else if(searchtag ==  "Fiba" || searchtag == "Gilas" || searchtag == "Basketbrawl"){
            var temp= $('post5').clone();
            $('.post-container').empty();
            $('.post-container').append(temp);
        }
        else if($('.searchinput').val().length == 0){
            window.location.href="index.html";
        }
        else{
            $('.post-container').empty();
        }

        $('.post-container').prepend(Scontainer);
        
    });
    
    $('.btnSignup').click(function(){
        $('.pop').show();
        $('.shadow').show();
        $("body").css("overflow", "hidden");
    });
    
    $('.btnLogin').click(function(){
        $('.pop1').show();
        $('.shadow').show();
        $("body").css("overflow", "hidden");
    });
    
    $('.edit').click(function(){
        $('.pop3').show();
        $('.shadow').show();
        $("body").css("overflow", "hidden");
    });
    
    $('.close').click(function(){
        $('.pop').hide();
        $('.pop1').hide();
        $('.pop3').hide();
        $('#pop2').hide();
        $('.shadow').hide();
        $("body").css("overflow", "visible");
    });
    
    $('.btnLogout').click(function(){
        $('.btnLogout').hide();
        $('.btnUpload').hide();
        $('#header-pic').hide();
        $('.btnSignup').show();
        $('.btnLogin').show();
        $('#hidden-image1').attr("src","images/hard-coded(phase1)/blocked.png")
    });
   
    $('#Elogin').click(function(){
        $('.btnLogout').show();
        $('.btnUpload').show();
        $('#header-pic').show();
        $('.btnSignup').hide();
        $('.btnLogin').hide();
        $('.pop').hide();
        $('.pop1').hide();
        $('.shadow').hide();
        $("body").css("overflow", "visible");
        
        var uname=$('.email').val();
        if(uname== "buttman"){
            $('#header-pic').attr("src", "images/hard-coded(phase1)/batman.jpg");
            $('.credentials').val(1);
            $('.delete').show();
            $('.edit').show();
            $('#hidden-image1').attr("src","images/hard-coded(phase1)/untitled.jpg")
        }
    });
    $('#Esignup').click(function(){
        $('.btnLogout').show();
        $('.btnUpload').show();
        $('#header-pic').show();
        $('.btnSignup').hide();
        $('.btnLogin').hide();
        $('.pop').hide();
        $('.pop1').hide();
        $('.shadow').hide();
        $("body").css("overflow", "visible");
    });
    $('#public').click(function(){
        $('#visible').show();
        $('#hidden').hide();
        $('#private').css({"background-color":"white"});
        $('#public').css({"background-color":"gray"});
    });
    $('#private').click(function(){
        $('#visible').hide();
        $('#hidden').show();
        $('#public').css({"background-color":"white"});
        $('#private').css({"background-color":"gray"});
    })
    
    $('#Esubmit').click(function(){
        alert("POST EDITED!!"); 
        $('.pop').hide();
        $('.pop1').hide();
        $('.pop3').hide();
        $('.shadow').hide();
    });
    
    $('.btnUpload').click(function(){
        $('.shadow').show();
        $('#pop2').show();
    });
    
    $('#upload').change( function(event) {
	   var tmppath = URL.createObjectURL(event.target.files[0]);
	   $("#imahe").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
	   $("#cicon").attr('src',URL.createObjectURL(event.target.files[0]));
	   $("#cicon").attr('width', '100px').attr('height', '300px').css('padding-top', '0');
	   $("#disp_tmp_path").html("Temporary Path(Copy it and try pasting it in browser address bar) --> <strong>["+tmppath+"]</strong>");
    });
        
        
    $('#Selector').change(function(){
        var values= $('#Selector').prop('selectedIndex');
        if(values == 1){
            $('#demo').show();
         }
        else{
            $('#demo').hide();
        }    
    });
    
    $('#Eupload').click(function(){
        $('.pop').hide();
        $('.pop1').hide();
        $('.pop3').hide();
        $('#pop2').hide();
        $('.shadow').hide();
        alert("PICTURE UPLOADED"); 
    });
});

