package com.example.demo.controller;

import com.example.demo.storage.IStorageService;
import com.example.demo.storage.data.Stuff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class StorageController {

    @Autowired
    private IStorageService storageService;

    @RequestMapping(value = "/stuff/list", method = RequestMethod.GET)
    public Collection<Stuff> listAllStuff() {
        Collection<Stuff> stuff = storageService.listAll();
        return stuff;
    }

    @RequestMapping(value = "/stuff/get", method = RequestMethod.GET)
    public Stuff getStuff(@RequestParam String name) {
        Stuff stuff = storageService.get(name);
        return stuff;
    }

    @RequestMapping(value = "/stuff/put", method = RequestMethod.PUT)
    public void putStuff(@RequestBody Stuff stuff) {
        System.out.println(stuff);
        storageService.put(stuff);
    }

    @RequestMapping(value = "/stuff/delete", method = RequestMethod.DELETE)
    public void deleteStuff(@RequestParam String name) {
        storageService.delete(name);
    }

    @RequestMapping(value = "/stuff/search", method = RequestMethod.POST)
    public Collection<Stuff> searchCity(String searchString) {
        return storageService.searchObjects(searchString);
    }
}