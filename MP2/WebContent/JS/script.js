var posts_data, users_data, photos_data, albums_data, user_profile, user_posts, user_albums, album_photos;
var posts_num = 99, photos_num = 4999, albumphotos_num = 49, profileposts_num = 9, profilealbums_num = 9;

$(document).ready(function() {	
	$.get("https://jsonplaceholder.typicode.com/posts", function(data) {
		posts_data = data;
	});
	
	$.get("https://jsonplaceholder.typicode.com/users", function(data) {
		users_data = data;
	});
	
    $.get("https://jsonplaceholder.typicode.com/photos", function(data) {
		photos_data = data;
	});
    
    $.get("https://jsonplaceholder.typicode.com/albums", function(data) {
		albums_data = data;
	});
});

$(document).ready(function(){
    setTimeout(function(){
		displayPhotos();
		$(".nextphotos").on("click", function() {
			displayPhotos();
		});
	}, 1000);
});

function displayPhotos(){
    $(".nextphotos").show();
	if(photos_num >= 0) {
		for(var i = photos_num; i >= photos_num - 14; i--) {
			var photos = document.createElement("div");
			$(photos).addClass("photo_container");
			$(photos).attr("style", "background-image: url(\"" + photos_data[i].thumbnailUrl + "\");");
            $(photos).attr("onClick", "displayFullScreen(" + photos_data[i].id + ")");
			$(".photos_div").append(photos);
			$(".photos_div").show();
		}
		$(".nextphotos").insertAfter(photos);
		photos_num -= 15;
	}
	else {
		$(".nextphotos").hide();
	}
}

function displayFullScreen(photoID) {
	photoID -= 1;
	var photo = document.createElement("div");
    var info = document.createElement("div");
    var photo_title = document.createElement("span");
    var photo_author = document.createElement("p");
    var add_tag = document.createElement("div");
    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var input = document.createElement("input");
    var button = document.createElement("button");
	$(photo).addClass("photo");
	$(photo).attr("style", "background-image: url(\"" + photos_data[photoID].url + "\");");
	
	var close = document.createElement("div");
	$(close).addClass("closeIcon");
	
	$(".fullScreen").append(close);
	$(".fullScreen").append(photo);
	$(".fullScreen").show();
	$(info).addClass("info");
	$(photo_title).addClass("photo_title");
	$(photo_title).text("title: " + photos_data[photoID].title);
	$(photo_author).addClass("photo_author");
	$(photo_author).on("click", function(e) {
		getID(users_data[albums_data[photos_data[photoID].albumId - 1].userId - 1].id);
	});
	$(photo_author).text("uploaded by: " + users_data[albums_data[photos_data[photoID].albumId - 1].userId - 1].name);
	$(add_tag).addClass("header-user-menu");
	$(input).attr("placeholder", "New Tag");
	$(button).text("Add Tag");
	$(li1).append(input);
	$(li2).append(button);
	$(ul).append(li1);
	$(ul).append(li2);
	$(add_tag).append(ul);
	$(info).append(photo_title);
	$(info).append(photo_author);
	$(info).append(add_tag);
	$(".photo").append(info);
	$(close).on("click", function(e) {
        $(".fullScreen").hide();
		$(".fullScreen").empty();
	});
}