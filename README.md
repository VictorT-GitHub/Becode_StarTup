# Becode_StarTup

Becode group project - Fullstack mobile-first messaging application

Backend Stack : **MongoDB** - **Mongoose** - **JOI** - **Node.js** - **Express.js** - **JsonWebToken**  
Frontend Stack : **React.js** - **[Coming soon]**

Deployment -> []() **[Coming soon]**

## Teamwork

- **Youssef Akanni** - Find my teammate, who provided the **frontend**, on his profile [YoussefAkanni](https://github.com/YoussefAkanni)
- **Victor Tardif** - That's me, i provided the **backend**, and you are already on my [Github profile](https://github.com/VictorT-GitHub)

# API Documentation

### API Homepage

- **URL:** .../api
- **Methode:** GET
- **Params:** No params
- **Body:** No body
- **Return:** "Welcome on the StarTup API !"

## Authentication Routes

### Register (Post new user)

- **URL:** .../api/auth/register
- **Methode:** POST
- **Params:** No params
- **Body:** email, password, firstname, lastname, [birthday, motto]
- **Return:** user id

Parameters in [square brackets] are all optional.  
Create a new user and automatically bcrypt his password. This password cannot be modified later.

- "email" field must be a valid email (+ unique).
- "birthday" field must be a valid date.

### Login

- **URL:** .../api/auth/login
- **Methode:** POST
- **Params:** No params
- **Body:** email, password
- **Return:** user id

Create a jwt-cookie and a res.locals.user_id for the currently logged in user.

### Logout

- **URL:** .../api/auth/logout
- **Methode:** GET
- **Params:** No params
- **Body:** No body
- **Return:** Redirect to API homepage

Delete the jwt-cookie and the res.locals.user_id.  
**A MODIFIER:** Redirect to the API homepage.

## User Routes

### Get all users

- **URL:** .../api/user/all
- **Methode:** GET
- **Params:** No params
- **Body:** No body
- **Return:** id, email, firstname, birthday, motto, createdAt

Provide all users except the currently logged in one.  
Does not provide the password or the last-name.

### Get current user

- **URL:** .../api/user/one
- **Methode:** GET
- **Params:** No params
- **Body:** No body
- **Return:** id, email, firstname, lastname, birthday, motto, createdAt, updatedAt

Does not provide the password.  
Automatically selects the current user by his id contained in his authentication cookie.

### Edit current user profile

- **URL:** .../api/user/modify
- **Methode:** PUT
- **Params:** No params
- **Body:** [email, firstname, lastname, birthday, motto]
- **Return:** uptaded user profile data without password

Parameters in [square brackets] are all optional.  
Cannot change the password or the id.  
Automatically selects the current user by his id contained in his authentication cookie.

### Delete current user profile

- **URL:** .../api/user/delete
- **Methode:** DELETE
- **Params:** No params
- **Body:** No body
- **Return:** deleted user profile data without password

Deleting a user does not delete their messages and conversations BUT it will then be impossible to associate these messages with the information of the deleted user.  
Automatically selects the current user by his id contained in his authentication cookie.

## Conversations (& Messages) Routes

### Post new conversation

- **URL:** .../api/conv/add
- **Methode:** POST
- **Params:** No params
- **Body:** userID
- **Return:** conversation data

**userID** is the id of the user that does NOT create the conversation. The user that create the conversation is the currently logged in user, and we automatically select his id by his jwt-cookie.

- "userID" field must be a valid id.

### Get all conversations

- **URL:** .../api/conv/all
- **Methode:** GET
- **Params:** No params
- **Body:** No body
- **Return:** id, usersID, messages:[{authorID, text, date},...], createdAt, updatedAt

Return all conversations data of the currently logged in user. Conversations data contains their messages data as well.  
Automatically selects the current user by his id contained in his authentication cookie.

### Get one conversation

- **URL:** .../api/conv/one/:id
- **Methode:** GET
- **Params:** id
- **Body:** No body
- **Return:** id, usersID, messages:[{authorID, text, date},...], createdAt, updatedAt

Return conversation data. Conversations data contains their messages data too.  
Automatically selects the current user by his id contained in his authentication cookie.

- "id" parameter must be a valid conversation id.

### Get one message

### Put add new message

### Put edit message

### Put delete message
