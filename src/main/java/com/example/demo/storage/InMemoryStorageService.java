package com.example.demo.storage;

import com.example.demo.storage.data.Stuff;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class InMemoryStorageService implements IStorageService {

    private Map<String, Stuff> stuffMap;
    private Map<String, Set<Stuff>> searchMap;

    public InMemoryStorageService() {
        this.stuffMap = new HashMap<>();
        this.searchMap = new HashMap<>();
        loadTestData();
    }

    private void loadTestData() {
        this.put(new Stuff("rivercrest", "san diego house", null));
        this.put(new Stuff("garage", "main garage", "rivercrest"));
        this.put(new Stuff("drill toolbox", "drill bits", "garage"));
        this.put(new Stuff("red bicycle", "red bicycle", "garage"));
    }

    @Override
    public Collection<Stuff> listAll() {
        return stuffMap.values();
    }

    @Override
    public Stuff get(String name) {
        return stuffMap.get(name);
    }

    @Override
    public void put(Stuff stuff) {
        if(stuffMap.containsKey(stuff.getName())) {
           this.delete(stuff.getName());
        }

        stuffMap.put(stuff.getName(), stuff);
        String[] description = stuff.getDescription().split(" ");
        for(String token : description) {
            searchMap.putIfAbsent(token, new HashSet<>());
            searchMap.get(token).add(stuff);
        }
    }

    @Override
    public void delete(String name) {
        if(stuffMap.containsKey(name)) {
            Stuff stuff = stuffMap.get(name);
            stuffMap.remove(stuff.getName());
            String[] tokens = stuff.getDescription().split(" ");
            for(String token : tokens) {
                searchMap.get(token).remove(stuff);
            }
        } else {
            throw new RuntimeException(String.format("%s does not exist", name));
        }
    }

    @Override
    public Collection<Stuff> searchObjects(String searchString) {
        return searchMap.get(searchString);
    }

    @Override
    public Collection<Stuff> listChildren(String name) {
        List<Stuff> children = new ArrayList<>();
        for(Stuff stuff : stuffMap.values()) {
            if(stuff.getParent() != null && stuff.getParent().equals(name)) {
                children.add(stuff);
            }
        }
        return children;
    }
}