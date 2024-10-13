# Animal Farm

Animal Farm is a simple React and Node.js project that allows users to search through a list of 250 randomly generated animals using an input field. The project demonstrates basic search functionality, client-server interaction, and state management using hooks in React.

**Credits:** This project is based on a Firebase course and is not my intellectual property. It is intended for educational purposes only.

## Features 

- **Animal Search:** Users can type in the search bar to filter through a list of 250 animals by their type (e.g., dog, cat, lion, etc.).
- **Randomized Data:** Animals are randomly generated using the `chance` library, with attributes like `id`, `type`, `age`, and `name`.
- **Client-Server Communication:** The React frontend fetches data from a Node.js backend that filters animals based on the search query.
- **State Management:** The `useState` and `useEffect` hooks are used to manage the state of the animals and store the last search query locally. 

## Technologies Used 

- **React**: For building the interactive UI, handling state, and rendering the list of animals.
- **Node.js and Express**: Backend server that handles API requests and serves filtered animal data to the frontend.
- **Chance**: Used to generate random animal data with attributes like name, type, and age.
- **LocalStorage**: To persist the user's last search query across sessions.
- **CORS**: Enables cross-origin requests from the client to the server.

## How to Run 

### Prerequisites 
Make sure you have [Node.js](https://nodejs.org/) installed on your machine. 
### 1. Clone the repository 
  ```bash 
  git clone https://github.com/wimthomzik/animalfarm.git
  ``` 
### 2. Install dependencies 
#### Backend (Node.js) 
Navigate to the server folder and install the required packages: 
  ```bash 
  cd server npm install
  ``` 
#### Frontend (React) 
Navigate to the client folder and install the required packages: 
  ```bash 
  cd client npm install
  ``` 
### 3. Run the backend server: 
  ```bash 
  npm start
  ```
This will start the server and listen on `http://localhost:8080`. 
### 4. Run the React app In a new terminal: 
  ```bash 
  npm start
  ```
This will open the React app in the browser at `http://localhost:3000`. 
### 5. Search for Animals 
Once the app is running, you can type in the search bar to filter the list of animals based on their type. 
The search results are fetched from the Node.js server running at `http://localhost:8080`.

## Future Improvements 
- **Pagination:** Adding pagination for large datasets to improve performance and user experience.
- **Sorting and Filtering:** Implement additional filters such as sorting by age, name, or type.
- **Better UI/UX:** Enhance the design and make the UI more interactive.
