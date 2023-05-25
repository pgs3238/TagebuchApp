package tagebuch.security;

import javax.ws.rs.core.SecurityContext;

public class Permissions {
    public static boolean check(SecurityContext securityContext, int buchId) {
        return securityContext.isUserInRole("ADMIN") || securityContext.isUserInRole("Event" + buchId);
    }
}
