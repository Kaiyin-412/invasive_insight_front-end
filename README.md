# Basic setup to run the  project

### `Install Node.js`
1. First we will need to install node.js here is the link https://nodejs.org/en

### `clone the repo`
2. run this command on your cmd 
```sh
git clone https://github.com/Kaiyin-412/invasive_insight_front-end.git
```

### `install packages`
3. Enter the following command in your cmd to install all necessary packages listed in package.json .
```sh
cd invasive_insight_front-end
npm install
```
### `run the project` 
 4. just run the command on cmd and the webpage will come out
```sh
npm start
```

### `open the src code on vs code`
5. if u are using vs code just run 
```sh
cd invasive_insight_front-end
code .
```

### route path
6. for front-end 
a) Login page 
```sh
verify user using username and password
http://localhost:3000/
```
b) sign up page
```sh
sign up a new user with username , email , password 
verify email and send otp
http://localhost:3000/SignUp
```

c) Password reset page
```sh
user will enter a email
http://localhost:3000/PasswordPage
```

d) Password reset page 2
```sh
send otp to verify the email
http://localhost:3000/PasswordPage2
```

e) Password Reset 
```sh
user enter a new password send to backend to update the new password 
http://localhost:3000/PasswordPage2/PasswordReset
```

f) Forum Page
```sh
user can post forum with topic and content , need to send to backend and save in database
get from backend about the forum content ( topic , content , user who post the forum )
http://localhost:3000/LandingPage/Forum
```

g) Quiz page 
```sh
get question and hint from backend
send the score to the backend 
get the quiz ranking from the backend ( rank , username , score)
http://localhost:3000/LandingPage/QuizList/Quiz
```

h) Dashboard page 
```sh
get the quiz had be done by user ( No , QuizName , score)
get the number of badges earn by user ( image save at front end )
http://localhost:3000/LandingPage/Dashboard
```

i) Profile page
```sh

http://localhost:3000/LandingPage/Profile
```