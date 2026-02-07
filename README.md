# Netflix GPT

- Create React app
- Configure tailwind css https://v3.tailwindcss.com/docs/guides/create-react-app
- Header
- Login Form  
- Sign up form ( We can use form lib https://formik.org/docs/overview#installation )
- Form validation
- useRef
- Firebase setup
- Deploying our app to the production
- Create sign up in firebase
- Implement Sign in user API
- Created Redux store with user slice


# Features
- Login / Sign up page ()
    - Sign in / sign up page
    - redirect page
- Browser ( after authentication)
    - Header
    - Main movie
        - Trailer in backgroud
        - movie title and discription
        - Movie suggestion
            - movie list * N
            - 
- Netflix GPT
    - Search bar
    - Movie suggestion


## Commands Related to FireBase
```
    npm install -g firebase-tools
    firebase login
    firebase init then select hosting
    firebase deploy
```
# Adding constant file 

# Bug 
- Unable to move further without login but we go with the path variable
=> To resolve that we change our location of onAuthStateChanged() from body to Header


# Improvement
- Unsubscribe the onAuthStateChanged() after the component get unmount in use effect 




