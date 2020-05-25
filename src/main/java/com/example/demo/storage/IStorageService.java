package com.example.demo.storage;

import com.example.demo.storage.data.Stuff;

import java.util.Collection;

public interface IStorageService {
    Collection<Stuff> listAll();

    Stuff get(String name);

    void put(Stuff stuff);

    void delete(String name);

    Collection<Stuff> searchObjects(String searchString);

    Collection<Stuff> listChildren(String stuffName);
}