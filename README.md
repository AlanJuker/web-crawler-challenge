# Web Crawler Project

## Overview
- This project retrieves the top 30 entries from [Hacker News](https://news.ycombinator.com/) based on the number, the title, the points, and the number of comments for each entry, and apply filtering operations.

- **Filer1**: Filter all previous entries with more than five words in the title ordered by the number of comments first.
- **Filer2**: Filter all previous entries with less than or equal to five words in the title ordered by points.

## Technologies Used

- **JavaScript**: Core funcionality.
- **HTML/CSS**: Display results.
- **Jest**: Automated testing.

## Setup

- Install dependencies

    ```bash
    npm install
    ```

- Run the project
- 
   ```bash
    npm start
    ```
- Run the tests

    ```bash
    npm test
    ```

## CORS Issue
Due to CORS restrictions from Hacker News, you'll need to install a browser extension to bypass the policy.

Recommended extension for Chrome: 
[Allow CORS: Access-Control-Allow-Origin](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf).

If the CORS issue persists after installing the extension, toggle the ON/OFF button.
## Code Structure

- **newsCrawler.js**: Scrapes and filters data.
- **renderResults.js**: Renders filtered results.
- **utils.js**: Utility functions.
- **index.html**: User interface.
- **styles.css**: Styling for the UI. 
