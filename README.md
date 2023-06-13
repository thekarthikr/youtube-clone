# YouTube Clone React Application

This project is a YouTube clone built using React.js with the Vite bundler. It leverages Material-UI for the UI components and utilizes the YouTube v3 API through the Rapid API platform for fetching videos and related data.

## Features

- **Video Search**: Users can search for videos by entering keywords in the search bar. The application uses the YouTube v3 API to fetch the search results and display them in a visually appealing manner.

- **Video Player**: When a user clicks on a video from the search results, the application renders a video player component that allows users to watch the selected video. The player also displays related videos in a sidebar.

- **Responsive Design**: The application is designed to be responsive and can adapt to different screen sizes, ensuring a seamless user experience across devices.

## Tech Stack

The YouTube clone application is built using the following technologies:

- **React.js**: A JavaScript library for building user interfaces, providing a fast and efficient way to create interactive UI components.

- **Vite**: A next-generation frontend build tool that offers blazing fast development and bundling, enabling quick project setup and hot module replacement.

- **Material-UI**: A popular React UI framework that provides pre-designed components and themes, allowing for rapid development and consistent styling.

- **YouTube v3 API**: The YouTube API v3 provides access to YouTube features such as searching for videos, retrieving video information, and interacting with user activities on YouTube.

- **Rapid API**: A platform that simplifies the process of integrating third-party APIs into applications, including the YouTube v3 API used in this project.

## Getting Started

To run the YouTube clone application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/thekarthikr/youtube-clone.git`
2. Navigate to the project directory: `cd youtube-clone`
3. Install the dependencies: `npm install`
4. Obtain an API key from the YouTube v3 API and Rapid API.
5. Create a `.env` file in the root directory and add the following:
  `VITE_RAPID_API_KEY = YOUR API KEY`
6. Start the development server: `npm run dev`
7. Open your browser and visit `http://localhost:3000` to see the application running.

## License

This project is licensed under the [MIT License](LICENSE).


