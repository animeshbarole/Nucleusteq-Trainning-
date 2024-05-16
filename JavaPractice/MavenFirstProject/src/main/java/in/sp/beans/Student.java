package in.sp.beans;

public class Student {

    private String name;
    private int roll_no;
    private  float marks;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRoll_no() {
        return roll_no;
    }

    public void setRoll_no(int roll_no) {
        this.roll_no = roll_no;
    }

    public float getMarks() {
        return marks;
    }

    public void setMarks(float marks) {
        this.marks = marks;
    }

    public void display(){
        System.out.println("name: "+name);
        System.out.println("roll_no: "+roll_no);
        System.out.println("marks : "+marks);
    }
}