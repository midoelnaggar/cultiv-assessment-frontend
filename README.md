# Next.js Frontend with TypeScript and Tailwind CSS

This is a frontend project built with Next.js, TypeScript, and Tailwind CSS. It provides a user interface to interact with the backend API for user authentication and contact management.

## Features

- Next.js for server-side rendering and client-side routing
- TypeScript for type safety
- Tailwind CSS for styling

## Getting Started

Before running the frontend project, make sure you have the backend project running.

1. First, run the backend project following the instructions provided in its README.

2. Create a `.env.local` file in the root directory of the frontend project with the following variable:

NEXT_PUBLIC_API_URL=backend_api_url

You can use the data provided in the `.env.example` file and replace `backend_api_url` with the URL of your backend API.

3. Install dependencies:

npm install

4. Run the project:
npm run dev

Now the frontend server is up and running and ready to be integrated with the backend.

Integration with Backend
Ensure that the backend API URL is correctly set in the .env.local file. The frontend project will make requests to this URL to communicate with the backend for user authentication and contact management.

Contributing
Contributions are welcome! Feel free to open issues or pull requests.

License
This project is licensed under the MIT License.
