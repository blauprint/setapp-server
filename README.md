# SetApp - Beginner's MVP Creation App

<p align="center">
<img src="https://img.shields.io/badge/Next.js-000000.svg?style&logo=Next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Redux-764ABC.svg?style&logo=Redux&logoColor=white" alt="Redux" />
<img src="https://img.shields.io/badge/Jest-C21325.svg?style&logo=Jest&logoColor=white" alt="Jest" />
</p>
<p>
<img src="https://img.shields.io/github/languages/top/blauprint/setapp-client?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/blauprint/setapp-client?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/blauprint/setapp-client?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
</p>

Welcome to SetApp, an app designed to help beginner developers create their first Minimum Viable Product (MVP). This app provides valuable tips on which frameworks to use, the database schema, color schema, and step-by-step guidance on how to proceed. Powered by OpenAI, SetApp aims to simplify the MVP creation process for aspiring developers.

## Organization: BlauPrint

BlauPrint is an organization consisting of four talented developers who are passionate about helping beginners kickstart their development journey. Our team has created separate repositories for the client-side (https://github.com/blauprint/setapp-client) and server-side (https://github.com/blauprint/setapp-server) components of the app.

## Features

- Step-by-step guidance for creating your first MVP
- Framework recommendations for different aspects of your project
- Database schema suggestions 
- Color schema suggestions for a visually appealing interface
- Seamless integration with OpenAI for enhanced functionality

## Getting Started

To get started with SetApp, follow the instructions below:

### Client-Side Installation

1. Clone the client-side repository from GitHub.
2. Open a terminal and navigate to the cloned directory.
3. Install the necessary dependencies by running the following command:

```shell
npm install
```

4. Create a new file named `.env` in the root directory and populate it with the required environment variables listed in the `sample.env` file.

5. Run the development server using the following command:

```shell
npm run dev
```

6. Access the app by opening your browser and visiting the provided `PORT` (e.g., `http://localhost:3000`).

### Server-Side Installation

1. Clone the server-side repository from GitHub.
2. Open a terminal and navigate to the cloned directory.
3. Install the necessary dependencies by running the following command:

```shell
npm install
```

4. Create a new file named `env.local` in the root directory and populate it with the required environment variables listed in the `sample.env.local` file.

5. Start the development server using the following command:

```shell
npm run start:dev
```

**Note:** Make sure the MongoDB database is running and accessible.

## Environment Variables

Below are the environment variables required for running the SetApp app:

### Client-Side Environment Variables

- `PORT`: The port number on which the client-side app will run.
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: The public key for Clerk authentication.
- `CLERK_SECRET_KEY`: The secret key for Clerk authentication.
- `DATABASE_URL`: The URL of the MongoDB database.

### Server-Side Environment Variables

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: The public key for Clerk authentication.
- `CLERK_SECRET_KEY`: The secret key for Clerk authentication.
- `NEXT_PUBLIC_BASE_URL`: The base URL of the server-side app.
- `OPENAI_API_KEY`: The API key for OpenAI integration.
- `COMPLETION_PROMPT`: The prompt for OpenAI to generate suggestions.

Please ensure you have these variables set correctly for the app to function properly.

## Technologies Used

BlauPrint is built using the following technologies:

- [Nest.js](https://nestjs.com/): A progressive Node.js framework for building efficient and scalable server-side applications.
- [MongoDB with Prisma](https://www.prisma.io/): A modern database toolkit for TypeScript and Node.js that integrates seamlessly with MongoDB.
- [Next.js](https://nextjs.org/): A React framework for building server-side rendered and statically generated web applications.
- [Redux](https://redux.js.org/): A predictable state container for JavaScript apps.

## Contributing

We welcome contributions from the community to improve and enhance BlauPrint. If you would like to contribute, please follow these guidelines:

1. Fork the repository and create your branch from `main`.
2. Make your desired changes and ensure the codebase adheres to the existing style.
3. Test your changes thoroughly.
4. Create a pull request describing your changes and the problem they solve.

We appreciate your contributions in making BlauPrint better for aspiring developers.

## Support

If you encounter any issues or have questions about BlauPrint, please [open an issue](https://github.com/BlauPrint/issues) on GitHub. Our team will be happy to assist you.

## License

BlauPrint is released under the [MIT License](LICENSE). Please review the license file for more details.

---

Thank you for choosing BlauPrint as your guide to create your first MVP! We hope you find this app helpful on your development journey. Happy coding!
