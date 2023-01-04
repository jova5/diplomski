package com.diplomski.onlinemarketing.service.generic;

import com.diplomski.onlinemarketing.exception.RestException;
import org.apache.commons.beanutils.BeanUtils;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

@SuppressWarnings("ALL")
public class GenericServiceImpl<T, ID> implements GenericService<T, ID> {
    private final JpaRepository<T, ID> repository;

    public GenericServiceImpl(JpaRepository<T, ID> repository) {
        this.repository = repository;
    }

    @Override
    public List<T> getAll() {
        return repository.findAll();
    }

    @Override
    public T getById(ID id) throws RestException {
        return repository.findById(id)
                .orElseThrow(() -> new RestException("Could not find object with id: " + id, HttpStatus.BAD_REQUEST));
    }

    @Transactional
    @Override
    public T insert(T object) {
        return repository.saveAndFlush(object);
    }

    @Transactional
    @Override
    public T update(ID id, T object) throws RestException, InvocationTargetException, IllegalAccessException {
        T dbObject = repository.findById(id)
                .orElseThrow(() -> new RestException("Could not find object with id: " + id, HttpStatus.BAD_REQUEST));
        BeanUtils.copyProperties(dbObject, object);
        return repository.saveAndFlush(dbObject);
    }

    @Override
    public Boolean delete(ID id) {
        repository.deleteById(id);
        return true;
    }
}
