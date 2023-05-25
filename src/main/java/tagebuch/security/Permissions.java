package tagebuch.security;

import javax.ws.rs.core.SecurityContext;

public class Permissions {
    public static boolean check(SecurityContext securityContext) {
        return securityContext.isUserInRole("ADMIN");
    }
}
