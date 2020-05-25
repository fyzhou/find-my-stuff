package com.example.demo;

import com.example.demo.storage.IStorageService;
import com.example.demo.storage.data.Stuff;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.Collection;

@SpringBootTest
class DemoApplicationTests {

	@Autowired
	private IStorageService cityService;

	@BeforeAll
	public static void setup() {
		SpringApplication.run(DemoApplication.class);
	}

	@Test
	public void testGet() {
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<Stuff> response =
				restTemplate.getForEntity("http://localhost:8080/stuff/get?name=rivercrest", Stuff.class);

		Assertions.assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
		Assertions.assertThat(response.getBody().getName()).isEqualTo("rivercrest");
		Assertions.assertThat(response.getBody().getDescription()).isEqualTo("san diego house");
	}

	@Test
	public void testPut() {
		Stuff stuff = new Stuff("ward pl", "Seattle", null);
		RestTemplate restTemplate = new RestTemplate();
		restTemplate.put("http://localhost:8080/stuff/put", stuff);
	}

	@Test
	public void testList() {
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<Collection> response =
				restTemplate.getForEntity("http://localhost:8080/stuff/list", Collection.class);
		System.out.println(response);

		Assertions.assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
		Assertions.assertThat(response.getBody().size()).isGreaterThanOrEqualTo(4);
	}
}