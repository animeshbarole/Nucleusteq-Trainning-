package com.nucleusTeq.quizApp.entities;

import jakarta.persistence.*;

@Entity
@Table(name="categories")
public class Category {

       @Id
       @GeneratedValue(strategy = GenerationType.AUTO)
       private int category_id;

       @Column(nullable = false,unique = true)
       private  String categoryName;

    public Category(int category_id, String categoryName) {
        this.category_id = category_id;
        this.categoryName = categoryName;
    }

    public Category() {
        super();
    }

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
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
                "category_id=" + category_id +
                ", categoryName='" + categoryName + '\'' +
                '}';
    }

}
