# Becode_StarTup

Becode group project - Fullstack mobile-first messaging application

Backend Stack : **MongoDB** - **Mongoose** - **JOI** - **Node.js** - **Express.js** - **JsonWebToken**  
Frontend Stack : **React.js** - **[Coming soon]**

Deployment -> []() **[Coming soon]**

## Teamwork

- **Youssef Akanni** - Find my teammate, who provided the **frontend**, on his profile [YoussefAkanni](https://github.com/YoussefAkanni)
- **Victor Tardif** - That's me, i provided the **backend**, and you are already on my [Github profile](https://github.com/VictorT-GitHub)

## API Documentation

### Authentification Routes & Middlewares

### User Routes

1. **Get all users**

- **URL:** .../api/user/all
- **Methode:** GET
- **Params:** No params
- **Return:** id, email, firstname, birthday, motto, createdAt

Provide all users except the currently logged in one.  
Does not provide the password or the last-name.

2. **Get current user**

- **URL:** .../api/user/one
- **Methode:** GET
- **Params:** No params
- **Return:** id, email, firstname, lastname, birthday, motto, createdAt, updatedAt

Does not provide the password.  
Automatically selects the current user by his id contained in his authentification cookie.

3. **Edit current user profile**

- **URL:** .../api/user/modify
- **Methode:** PUT
- **Params:** req.body.[email, firstname, lastname, birthday, motto]
- **Return:** uptaded user profile without password

Parameters in [square brackets] are all optional.  
Cannot change the password or the id.  
Automatically selects the current user by his id contained in his authentification cookie.

4. **Delete current user profile**

- **URL:** .../api/user/delete
- **Methode:** DELETE
- **Params:** No params
- **Return:** deleted user profile without password

Deleting a user does not delete their messages and conversations BUT it will then be impossible to associate these messages with the information of the deleted user.  
Automatically selects the current user by his id contained in his authentification cookie.

### Conversations (& Messages) Routes
