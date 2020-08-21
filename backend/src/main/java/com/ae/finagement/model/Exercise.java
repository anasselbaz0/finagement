package com.ae.finagement.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Exercise implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private Integer month;
    private Integer year;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    public Exercise() {}

    public Exercise(String title, Integer month, Integer year) {
        this.title = title;
        this.month = month;
        this.year = year;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
