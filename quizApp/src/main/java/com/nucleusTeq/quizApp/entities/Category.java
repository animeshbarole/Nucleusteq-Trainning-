package com.nucleusTeq.quizApp.entities;

import jakarta.persistence.*;

@Entity
@Table(name="categories")
public class Category {

       @Id
       @GeneratedValue(strategy = GenerationType.IDENTITY)
       private int id;

       @Column(nullable = false,unique = true)
       private  String categoryName;

    public Category(int id, String categoryName) {
        this.id = id;
        this.categoryName = categoryName;
    }

    public Category() {
        super();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }



    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", categoryName='" + categoryName + '\'' +
                '}';
    }

}
