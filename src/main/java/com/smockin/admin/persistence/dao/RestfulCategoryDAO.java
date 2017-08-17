package com.smockin.admin.persistence.dao;

import com.smockin.admin.persistence.entity.RestfulCategory;
import com.smockin.admin.persistence.entity.RestfulMock;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by mgallina.
 */
public interface RestfulCategoryDAO extends JpaRepository<RestfulCategory, Long> {

    RestfulCategory findByExtId(final String extId);

}
