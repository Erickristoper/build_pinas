package com.buildpinas.materials;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class MaterialsApplication {

	public static void main(String[] args) {
		SpringApplication.run(MaterialsApplication.class, args);
	}

}
