<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<link rel="stylesheet" href="./css/style.css">
		<script src="./JS/jquery-3.2.1.min.js"></script>
		<script src="./JS/script.js"></script>
	</head>
	
	<body>
		<header>
		    <h1>twatter.</h1>
			<p id="options">
				<a href="#" class="links">User: ${sessionScope.un}</a>
				<a href="profile.jsp" class="links">Profile</a>
				<a href="userFeed.jsp" class="links">News Feed</a>
				<a href="logout" class="links">Logout</a>
				<input type="text" placeholder="search" />
			</p>
		</header>
		<article class="photos_div">
		    <p class="nextphotos">show next 15 photos</p>
		</article>
	</body>
</html>