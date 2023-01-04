package com.diplomski.onlinemarketing.service.generic;

import com.diplomski.onlinemarketing.exception.RestException;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

public interface GenericService<T, ID>{
    List<T> getAll();

    T getById(ID id) throws RestException;

    T insert(T object);

    T update(ID id, T object) throws RestException, InvocationTargetException, IllegalAccessException;

    Boolean delete(ID id);
}
