package tn.esprit.ms_api_gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;


@SpringBootApplication
@EnableDiscoveryClient
public class MsApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsApiGatewayApplication.class, args);
	}


	@Bean
	public RouteLocator gatewayRoutes(RouteLocatorBuilder builder){

		return builder.routes()
				.route("universitie", r->r.path("/universities/**")
							.uri("http://university:8080/"))//localhostuniversity
				.build();
	}

}
