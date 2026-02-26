# Netflix GPT

[REDME.md documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## What we have done
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
- Created Redux store with user slice and movie slice
- Fetch data for Trailer Video
- Update the movie store data with fetch data from triler video
- We used tailwind classes to add CSS in our code.



## What we have to do
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

# Firebase 
**[Documentation](https://firebase.google.com/docs/auth/web/manage-users)**
**To fullfil the requirements for my backend code** 

- Hosting
- Authentication
    
## Commands Related to FireBase
```
    npm install -g firebase-tools
    firebase login
    firebase init then select hosting
    firebase deploy
```
### Adding constant file 

### Bug 
- Unable to move further without login but we go with the path variable
=> To resolve that we change our location of onAuthStateChanged() from body to Header


### Improvement
- Unsubscribe the onAuthStateChanged() after the component get unmount in use effect 
- [Q. Why some time API get called double Time](/src/image/doubleCallAPI.png)
  => Becuase of react strict mode <br/>
  ```
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ```

# Redux
1) for store mangement we have appStore.js
**Used hooks to perform store management **
1) useDispatch()
2) useSelector()
3) useSlice()


# Browse Page ( API TMDB )
- To show movies in browse page we used Third party API that is
- We are creating two container
    - Main Container
        - Video title
        - Video background
    - Secondary Container
        - Movie list : now playing
        - Movie List : trending movie
        - Movie List : featuring movie

**Step**<!-- U-HarveySpector, P-Harvey2408 -->
1) Login the Official site [The Movie Database](https://www.themoviedb.org/settings/account)
2) Click on logo -> go to settings -> Click on API
3) Create your account to generate API key and Acess token
4) [Documentation](themoviedb.org/login?to=read_me&redirect_uri=/docs)

**How we add background video** we add code in below component
```react
    <VideoBackground/>
 ```

# Custom Hooks
1) Removed browse page logic rendering logic to useNowPlayingMovies() hook

# Hide Scrollbar
1) using tailwind.config.js
```React.js
plugins: [ 
    function({addUtilities}){
      const newUtilities = {
          ".no-scrollbar::webkit-scrollbar":{
            display:"none",
          },
          ".no-scrollbar":{
            "-ms-overflow-style":"none",
            "scrollbar-width":"none",
          },
      };
      addUtilities(newUtilities);
    },
  ],
```
2) Using custom Css
```CSS
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none;    /* Firefox */
}

```






