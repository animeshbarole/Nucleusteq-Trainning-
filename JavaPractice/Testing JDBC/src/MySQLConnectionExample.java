import java.math.BigDecimal;
import java.sql.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySQLConnectionExample {
    public static void main(String[] args) {


        String url ="jdbc:mysql://localhost:3306/animeshdb";
        String username = "root";
        String password = "Animesh@123";
        String query = "Select * from sales";

        try {
            Class.forName("com.mysql.jdbc.Driver");
            System.out.println("Drivers Loaded Successfully!!!");
        }catch (ClassNotFoundException e)
        {
            System.out.println(e.getMessage());
        }

        try{

            Connection con = DriverManager.getConnection(url,username,password);
            System.out.println("Conncetion Established Successfully");
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);

            while(rs.next()){
                String region = rs.getString("region");
                int year = rs.getInt("year");
                BigDecimal sales_amount = rs.getBigDecimal("sales_amount");

                System.out.println();
                System.out.println("=============");
                System.out.println("region: "+region);
                System.out.println("year: "+year);
                System.out.println("sales_amount: "+sales_amount);
            }

            rs.close();
            stmt.close();
            con.close();

            System.out.println("Connection Closed Successfully");

        }catch (SQLException e)
        {
            System.out.println(e.getMessage());
        }
    }
}
