package tagebuch.user.usecase;

import tagebuch.user.entity.internal.User;

public interface IAnmelden {
    public User findUserByEmail(String email);
}
