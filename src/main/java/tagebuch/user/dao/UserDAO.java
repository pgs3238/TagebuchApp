package tagebuch.user.dao;

import tagebuch.user.entity.internal.User;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;

@Transactional
@RequestScoped
public class UserDAO extends GenericDAO<User> {

    @Inject
    public UserDAO(EntityManager em) {
        super(em, User.class);
    }

    public User findUserByEmail(String email) {
        return em.find(User.class,email);
    }


    public void delete(User aUser) {
        super.delete(aUser.getEmail(), User.class);
    }
}
