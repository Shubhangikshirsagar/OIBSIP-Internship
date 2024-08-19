import java.util.HashMap;

public class AuthenticationSystem {
    private HashMap<String, User> users = new HashMap<>();
    private User loggedInUser = null;

    public void register(String username, String password) {
        if (users.containsKey(username)) {
            System.out.println("Username already taken. Please choose another one.");
        } else {
            User newUser = new User(username, password);
            users.put(username, newUser);
            System.out.println("Registration successful!");
        }
    }

    public void login(String username, String password) {
        if (users.containsKey(username)) {
            User user = users.get(username);
            if (user.getPassword().equals(password)) {
                loggedInUser = user;
                System.out.println("Login successful!");
            } else {
                System.out.println("Incorrect password. Please try again.");
            }
        } else {
            System.out.println("Username not found. Please register first.");
        }
    }

    public void accessSecuredPage() {
        if (loggedInUser != null) {
            System.out.println("Welcome to the secured page, " + loggedInUser.getUsername() + "!");
        } else {
            System.out.println("You need to log in first to access this page.");
        }
    }

    public void logout() {
        if (loggedInUser != null) {
            System.out.println("You have been logged out.");
            loggedInUser = null;
        } else {
            System.out.println("No user is logged in.");
        }
    }
}
