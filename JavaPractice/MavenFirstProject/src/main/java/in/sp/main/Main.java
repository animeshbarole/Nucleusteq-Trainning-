package in.sp.main;

import in.sp.beans.Student;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {

        String confiLocattion = "applicationContext.xml";
        ApplicationContext context = new ClassPathXmlApplicationContext(confiLocattion);

        Student std = context.getBean(Student.class);
       std.display();
    }
}
