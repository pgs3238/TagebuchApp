package tagebuch.buch.dao;

import tagebuch.buch.entity.internal.Buch;
import tagebuch.user.dao.GenericDAO;
import tagebuch.user.entity.internal.User;

import javax.inject.Inject;
import javax.persistence.EntityManager;

public class BuchDAO extends GenericDAO<Buch> {
    @Inject
    public BuchDAO(EntityManager em) {super(em, Buch.class);}

    public void delete(Buch buch) {super.delete(buch.getBuchId(),Buch.class);}

    public Buch find(int buchID) {return super.find(buchID);}

    public boolean addUserToBuch(User user, Buch buch){
        try {
            buch.getUser().add(user);
            user.getBuch().add(buch);
            em.merge(user);

            return update(buch);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
