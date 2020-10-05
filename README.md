# Momentum-mimic

Momentum is a popular chrome homepage extension. This is an attempt to mimic that view using React.js

## Links:
**Deployed Application:** <https://maharit108.github.io/Momentum-mimic/>

**Open API Used:**

  - **Unsplash API:** (for Images) <https://unsplash.com/>

  -**Open Weather API:** (for weather of the day in the given city) <https://openweathermap.org/api>

  -**Forismatic API:** (for Random Quotes) <https://forismatic.com/en/api/>


## Technologies Used:
- react.js
-Axiom
-curl and Postman.app

## Planning Story
The idea was to build the front end similar to momentum extension. So, app would have a random background image and a quote at each reload, a weather widget at top right corner showing weather of the day of the given city and digital clock and greeting at the main body of app.

Open API were used to get the random images, quotes and weather. I used Postman.app and curl-scripts to test the public APIs before using them in the app. Unsplash and Open Weather requires access key to make requests which can be received easily by signing up. API documentation is specially helpful to interact with the APIs. Axiom was used to make the actual requests to the API in the app.

Moment was used to get the current time, which is rendered at the center of the app.

## Future Plans:
  - Add calendar
  -Add To-do-list
  -Responsive Color of text with respect to background image contrast
  -Incorporate location and username



## React Notes
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deploy React App: <https://medium.com/mobile-web-dev/how-to-build-and-deploy-a-react-app-to-github-pages-in-less-than-5-minutes-d6c4ffd30f14>
