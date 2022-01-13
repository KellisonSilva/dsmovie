package com.devsuperior.dsmovie.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;

	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> result = repository.findAll(pageable);
		Page<MovieDTO> page = result.map(e -> new MovieDTO(e));
		return page;
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		/*Duas formas eu prefiro a segunda*/
		
		/*try {
			Movie result = repository.findById(id).get();
			MovieDTO dto = new MovieDTO(result);
			return dto;
		}catch (Exception e) {
			e.getMessage();
		}*/
		
		Optional<Movie> optional = repository.findById(id);
		if(optional.isPresent()) {
			MovieDTO dto = new MovieDTO(optional.get());
			return dto;
		}else {
			throw new NullPointerException("Entidade nao encontrada");
		}
	}
	

}
