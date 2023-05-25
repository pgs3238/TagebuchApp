package tagebuch.user.entity.internal;

import io.quarkus.elytron.security.common.BcryptUtil;
import io.quarkus.security.jpa.Password;
import io.quarkus.security.jpa.Roles;
import io.quarkus.security.jpa.UserDefinition;
import io.quarkus.security.jpa.Username;
import tagebuch.buch.entity.internal.Buch;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@UserDefinition
@Table(name = "tagebuch_user")
public class User {

    @Password
    @Column(unique = true)
    private String password;

    @Id
    @Username
    private String email;
    private String name;
    private String vorname;
    @Roles
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<String>(List.of("user"));

    //TODO One To Many not Many To Many
    @ManyToMany(targetEntity = Buch.class, fetch = FetchType.EAGER)
    @JoinTable(name = "tagebuch_buch_tagebuch_user",
            joinColumns = @JoinColumn(name = "user_email"),
            inverseJoinColumns = @JoinColumn(name = "buch_buchid"))
    private Set<Buch> buch = new HashSet<>();

    public User() {}

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = BcryptUtil.bcryptHash(password);
    }

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }

    private String getName() { return name; }

    public void setName(String name) { this.name = name; }

    private String getVorname() { return vorname; }

    public void setVorname(String vorname) { this.vorname = vorname; }

    public Set<Buch> getBuch() {
        return buch;
    }

    public void setBuch(Set<Buch> buch) {
        this.buch = buch;
    }

    public List<String> getRoles() { return roles; }

    public void setRoles(List<String> roles) { this.roles = roles; }

    public String getRole() {
        if (roles.contains("ADMIN")) {
            return "ADMIN";
        } else if (roles.contains("OWNER")) {
            return "OWNER";
        } else {
            return "USER";
        }
    }

    public void addRole(String role) {
        this.roles.add(role);
    }

    public void removeRole(String role) {
        this.roles.remove(role);
    }

    @Override
    public boolean equals(Object obj) {
        if(obj instanceof User) {
            User user = (User) obj;
            return user.email.equals(getEmail());
        }
        return false;
    }
}
