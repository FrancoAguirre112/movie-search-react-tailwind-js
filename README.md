# Movie Search Website

<div style="width: 100%;">
  [![Banner for the Movie Search website](https://i.imgur.com/DXAG4m6.png)](https://movie-search-react-tailwind-js.vercel.app/)
</div>

Movie Search is a web application built with React, Tailwind CSS, and JavaScript. It allows users to search for movies, access their details, and add them to favorites. The app incorporates various functionalities, including form handling with React Hook Form, fake login and authentication using contexts, movie search by title using the OMDB API, retrieving movie details from the API, and safe routing with React Router DOM.

## Features
Forms with React Hook Forms: The app utilizes the React Hook Form library for efficient form handling. It provides validation and error handling for user input, ensuring that required fields are filled out correctly.

**Login and Authentication using Contexts:** The app simulates a login and authentication system using React contexts. Users can log in with fake credentials to access certain features or restrict access to authenticated users only.

**Movie Search by Title using OMDB API:** The app integrates with the OMDB API to search for movies based on their titles. Users can enter a movie title in the search bar, and the app retrieves relevant movie results from the API.

**Retrieve Movie Details from API:** Once a user selects a movie from the search results, the app fetches additional details about the movie from the OMDB API. This includes information such as the movie's title, release year, and poster image.

**Add to Favorites Functionality using Context:** Users can add movies to their favorites list by clicking on a "Add to Favorites" button. The app manages the favorites functionality using React contexts, allowing users to keep track of their preferred movies.

**Safe Routing with React Router DOM:** The app utilizes React Router DOM for safe and seamless navigation between different pages and components. It ensures that users can access specific routes and components based on their authentication status.
