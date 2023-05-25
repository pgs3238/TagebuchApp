package tagebuch.user.usecase.impl;

import tagebuch.user.dao.UserDAO;
import tagebuch.user.entity.internal.User;
import tagebuch.user.usecase.IAnmelden;

import javax.inject.Inject;

public class Anmelden implements IAnmelden {
    @Inject
    private UserDAO userDAO;

    @Override
    public User findUserByEmail(String email) {
        return userDAO.findUserByEmail(email);
    }
}
