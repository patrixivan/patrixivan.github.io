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

$("index.html").ready(function(){
    setTimeout(function(){
		displayPosts();
		$(".nextposts").on("click", function() {
			displayPosts();
		});
	}, 1000);
});

function displayPosts() {
	$(".nextposts").show();
	if(posts_num >= 0) {
		for(var i = posts_num; i >= posts_num - 9; i--) {
			var post = document.createElement("div");
            var post_user = document.createElement("a");
            var post_title = document.createElement("p");
            var post_content = document.createElement("p");
			$(post).addClass("post_container");
			$(post_user).addClass("post_user");
			$(post_user).on("click", function(e) {
                if(i >= 0)
				    getID(users_data[posts_data[i].userId].id);
                else
                    getID(users_data[0].id);
			});
			$(post_user).text(users_data[posts_data[i].userId - 1].username);
			$(post_title).addClass("post_title");
			$(post_title).text(posts_data[i].title);
			$(post_content).addClass("post_content");
			$(post_content).text(posts_data[i].body);
			$(post).append(post_user);
			$(post).append(post_title);
            $(post).append(post_content);
			$(".posts_div").append(post);
			$(post).show();
		}
		$(".nextposts" ).insertAfter(post);
		posts_num -= 10;
	}
	else {
		$(".nextposts").hide();
	}
}

$("photos.html").ready(function(){
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
    var photo_album = document.createElement("p");
	$(photo).addClass("photo");
	$(photo).attr("style", "background-image: url(\"" + photos_data[photoID].url + "\");");
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
	$(photo_album).addClass("photo_album");
    $(photo_album).on("click", function(e) {
        getAlbumID(albums_data[photos_data[photoID].albumId - 1].id);
    });
	$(photo_album).text("album: " + albums_data[photos_data[photoID].albumId - 1].title);
	$(info).append(photo_title);
	$(info).append(photo_author);
	$(info).append(photo_album);
	$(".photo").append(info);
	$(".photo").on("click", function(e) {
        $(".fullScreen").hide();
		$(".fullScreen").empty();
	});
}

function getAlbumID(val) {
	console.log(val);
	localStorage.setItem("album_id", val);
	window.location.href = "album.html";
}

$("album.html").ready(function(){
    $.get("https://jsonplaceholder.typicode.com/albums/" + localStorage.getItem("album_id") + "/photos", function(data) {
        album_photos = data;
    });
    setTimeout(function(){
        displayAlbumPics();
	}, 1000);
});

function displayAlbumPics(){
    for(var i = albumphotos_num; i >= 0; i--) {
        var photos = document.createElement("div");
        $(photos).addClass("photo_container");
        $(photos).attr("style", "background-image: url(\"" + album_photos[i].thumbnailUrl + "\");");
        $(photos).attr("onClick", "displayFullScreen(" + album_photos[i].id + ")");
        $(".album_div").append(photos);
        $(".album_div").show();
    }
}

function getID(val) {
	console.log(val);
	localStorage.setItem("id", val);
	window.location.href = "profile.html";
}

$("profile.html").ready(function(){
    $.get("https://jsonplaceholder.typicode.com/users/" + localStorage.getItem("id"), function(data) {
		user_profile = data;
	});
	$.get("https://jsonplaceholder.typicode.com/users/" + localStorage.getItem("id") + "/posts", function(data) {
		user_posts = data;
	});
    $.get("https://jsonplaceholder.typicode.com/users/" + localStorage.getItem("id") + "/albums", function(data) {
		user_albums = data;
	});
	setTimeout(function(){
		displayProfile();
		displayProfilePosts();
        $(".nextprofileposts").on("click", function() {
			displayProfilePosts();
		});
        displayProfileAlbums();
        $(".nextprofilealbums").on("click", function() {
			displayProfileAlbums();
		});
	}, 1000);
});

function displayProfile() {
	var name = document.createElement("p");
    var user = document.createElement("p");
    var email = document.createElement("p");
    var street = document.createElement("p");
    var suite = document.createElement("p");
    var city = document.createElement("p");
    var zipcode = document.createElement("p");
    var phone = document.createElement("p");
    var website = document.createElement("p");
    var company = document.createElement("p");
    var company_catchphrase = document.createElement("p");
    var company_bs = document.createElement("p");
	$(name).addClass("profile_name");
	$(name).text(user_profile.name);
	$(user).addClass("profile_user");
	$(user).text("Username: " + user_profile.username);
	$(email).addClass("email");
	$(email).text("Email: " + user_profile.email);
	$(street).addClass("street");
	$(street).text("Street: " + user_profile.address.street);
	$(suite).addClass("suite");
	$(suite).text("Suite: " + user_profile.address.suite);
	$(city).addClass("city");
	$(city).text("City: " + user_profile.address.city);
	$(zipcode).addClass("zipcode");
	$(zipcode).text("Zipcode: " + user_profile.address.zipcode);
	$(phone).addClass("phone");
	$(phone).text("Phone: " + user_profile.phone);
	$(website).addClass("website");
	$(website).text("Website: " + user_profile.website);
	$(company).addClass("company");
	$(company).text("Company: " + user_profile.company.name);
	$(company_catchphrase).addClass("company_catchphrase");
	$(company_catchphrase).text("Catchphrase: " + user_profile.company.catchPhrase);
	$(company_bs).addClass("company_bs");
	$(company_bs).text("BS: " + user_profile.company.bs);
	$(".profile_info").append(name);
	$(".profile_info").append(user);
	$(".profile_info").append(email);
	$(".profile_info").append(street);
	$(".profile_info").append(suite);
	$(".profile_info").append(city);
	$(".profile_info").append(zipcode);
	$(".profile_info").append(phone);
	$(".profile_info").append(website);
	$(".profile_info").append(company);
	$(".profile_info").append(company_catchphrase);
	$(".profile_info").append(company_bs);
}

function displayProfilePosts() {
    if(profileposts_num >= 0) {
        $(".nextprofileposts").show();
        for(var i = profileposts_num; i >= profileposts_num - 1; i--) {
            var profile_post = document.createElement("div");
            var pp_user = document.createElement("a");
            var pp_title = document.createElement("p");
            var pp_content = document.createElement("p");
            $(profile_post).addClass("pp_div");
            $(pp_user).addClass("pp_user");
            $(pp_user).text(user_profile.username);
            $(pp_title).addClass("pp_title");
            $(pp_title).text(user_posts[i].title);
            $(pp_content).addClass("pp_content");
            $(pp_content).text(user_posts[i].body);
            $(profile_post).append(pp_user);
            $(profile_post).append(pp_title);	
            $(profile_post).append(pp_content);	
            $(".profile_posts").append(profile_post);
            $(profile_post).show();
        }
        $(".nextprofileposts").insertAfter(profile_post);
        profileposts_num -= 2;
    }
    else {
        $(".nextprofileposts").hide();
    }
}

function displayProfileAlbums() {
    if(profilealbums_num >= 0) {
        $(".nextprofilealbums").show();
        for(var i = profilealbums_num; i >= profilealbums_num - 1; i--) {
            var pa_div = document.createElement("div");
            var pa_title = document.createElement("p");
            $(pa_div).addClass("pa_div");
            $(pa_title).addClass("pa_title");
            $(pa_title).on("click", function(e) {
                if(i % 2 == 0)
                    getAlbumID(user_albums[i].id);
                else
                    getAlbumID(user_albums[i].id - 1);
            });
            $(pa_title).text(user_albums[i].title);
            $(pa_div).append(pa_title);
            $(".profile_albums").append(pa_div);
            $(pa_div).show();
        }
        $(".nextprofilealbums").insertAfter(pa_div);
        profilealbums_num -= 2;
    }
    else {
        $(".nextprofilealbums").hide();
    }
}