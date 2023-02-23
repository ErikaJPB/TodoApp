# Todo App

A simple Todo app built with Next.js, TypeScript, and Tailwind. It allows users to manage their to-do list. The app uses Firebase as its database.

## Getting Started

These instructions will help you run the app on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm (or yarn)
- A Firebase project and API key

### Installation

1. Clone the repository: `git clone https://github.com/[your_username]/todo-app.git`
2. Install the dependencies: `npm install` (or `yarn`)
3. Create a .env file in the root of the project and add your Firebase API key: 
```
     NEXT_PUBLIC_FIREBASE_API_KEY = [your_api_key]
     
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = [your_auth_domain]
     
     NEXT_PUBLIC_FIREBASE_PROJECT_ID = [your_project_id]
     
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = [your_storage_bucket]
     
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = [your_messaging_sender_id]
     
     NEXT_PUBLIC_FIREBASE_APP_ID = [your_app_id]
     
     NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = [your_measurement_id]
 ```
     
 
                                                 

4. Start the development server: `npm run dev` (or `yarn dev`)
5. Open your browser and navigate to `http://localhost:3000`

## Built With

- Next.js - A framework for building server-rendered React applications
- Tailwind CSS - A utility-first CSS framework
- TypeScript - A typed superset of JavaScript
- Firebase - A cloud-based database and hosting platform

## Author

ErikaJPB

## Acknowledgments

- Next.js documentation: [Link](https://nextjs.org/docs)
- Tailwind CSS documentation: [Link](https://tailwindcss.com/docs)
- TypeScript documentation: [Link](https://www.typescriptlang.org/docs)
- Firebase documentation: [Link](https://firebase.google.com/docs)
