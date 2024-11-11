package com.example.projectapigetway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
@EnableDiscoveryClient
public class ProjectApiGetwayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectApiGetwayApplication.class, args);
	}


	@Bean
	public RouteLocator gatewayRoutes(RouteLocatorBuilder builder){

		return builder.routes()
				.route("reservation", r->r.path("/reservations/**")
						.uri("http://reservation:8083/"))//localhostreservation


				.build();
	}

}
