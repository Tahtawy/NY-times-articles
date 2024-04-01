# NY Times Articles React App

This is a React application that allows users to view the most viewed articles from the New York Times and read detailed information about each article. It utilizes TypeScript along with various modern technologies for development and testing.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router Dom**: Library for routing in React applications.
- **@tanstack/react-query**: Library for managing server state in React applications.
- **Axios**: HTTP client for making requests to the New York Times API.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **PostCSS**: Tool for transforming CSS with JavaScript plugins.
- **TypeScript**: Typed superset of JavaScript.
- **Vite**: Frontend build tool.
- **Cypress**: End-to-end testing framework.
- **Istanbul**: JavaScript test coverage report generator.
- **Vitest**: Testing library for Vite projects.
- **ESLint**: JavaScript and TypeScript linter.
- **Prettier**: Code formatter.
- **Husky**: Git hooks manager.
- **Stylelint**: CSS linter.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ny-times-articles.git

2. Navigate to the project directory:

   ```bash
   cd ny-times-articles

3. install dependencies:
   ```bash
   npm install

## Configuration

1. Before running the application, you need to obtain an API key from [the New York Times API](https://developer.nytimes.com/) by creating new app and enable both (Article Search API, Most Popular API). Once you have the API key, create a .env file in the root directory of the project and add the following lines:

    ```bash
       VITE_API_URL=https://api.nytimes.com/svc
       VITE_API_KEY=your-api-key

## Usage

1. To start the development server, run:

    ```bash
       npm run dev
  This will start the server and open the application in your default web browser.

## Testing

  ### Unit Tests
  
  1. To run unit tests, execute:
  
      ```bash
         npm run test:unit

  ### End-to-End Tests
    
  1. To run end-to-end tests, first start the development server:
    
      ```bash
         npm run test:e2e

   ### Test coverage
    
  1. To generate test coverage report (I used [Istanbul](https://istanbul.js.org/)) run:
      ```bash
         npm run test:unit:coverage

## Building

1. To build the application for production, run:

    ```bash
       npm run build

## License
  This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
  Special thanks to the developers of the libraries and tools used in this project.
