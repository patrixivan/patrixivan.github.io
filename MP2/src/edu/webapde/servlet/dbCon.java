package edu.webapde.servlet;

import java.sql.Connection;
import java.sql.DriverManager;

public class dbCon {
	 static Connection con=null;
	    public static Connection getConnection()
	    {
	        if (con != null) return con;
	        // get db, user, pass from settings file
	        return getConnection("webapde", "root", "1234");
	    }

	    private static Connection getConnection(String db_name,String user_name,String password)
	    {
	        try
	        {
	            Class.forName("com.mysql.jdbc.Driver");
	            con=DriverManager.getConnection("jdbc:mysql://localhost:3306/"+db_name+"?user="+user_name+"&password="+password);
	        }
	        catch(Exception e)
	        {
	            e.printStackTrace();
	        }

	        return con;        
	    }
}
