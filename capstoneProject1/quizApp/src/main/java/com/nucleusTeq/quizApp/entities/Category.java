package com.nucleusTeq.quizApp.entities;

import jakarta.persistence.*;

@Entity
@Table(name="categories")
public class Category {

       @Id
       @GeneratedValue(strategy = GenerationType.IDENTITY)
       private Long id;

       @Column(nullable = false,unique = true)
       private  String categoryName;

    public Category(Long id, String categoryName) {
        this.id = id;
        this.categoryName = categoryName;
    }

    public Category() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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
