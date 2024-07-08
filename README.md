
## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine:
```bash
git clone https://github.com/Aryan-Bhargav8/my-waitlist-app.git
```

2. Navigate to the project directory:
```bash
cd my-waitlist-app
```

3. Install the dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Introduction

This project is a waitlist app for the Lexicon app built with Next.js. It allows users to sign up for a product launch waitlist and receive updates.


## Features

- User-friendly interface
- Sign up for the waitlist
- Receive updates on product launch

## Technologies Used

The project uses the following technologies:

- Next.js: A React framework for building server-side rendered and static websites.
- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.

## Folder Structure

The project structure is as follows:

```
my-waitlist-app/
    ├── components/
    │   └── ...  # UI components used across the application.
    ├── emails/
    │   └── ...  # Email templates for the application.
    ├── lib/
    │   ├── email.js  # Handles email sending logic.
    │   └── sheets.js  # Interacts with Google Sheets for data storage.
    ├── pages/
    │   ├── index.js  # The homepage of the app.
    │   └── api/
    │       └── join-waitlist.js  # API route for joining the waitlist.
    ├── public/
    │   └── ...  # Static assets like images or fonts.
    ├── styles/
    │   └── ...  # CSS files for styling the app.
    ├── .gitignore
    ├── package.json
    ├── README.md
    └── ...
```

The `components` directory contains the UI components that are used throughout the application, helping to maintain a consistent look and feel.

The `emails` directory is used for storing email templates, which are utilized for communication with users.

The `lib` directory contains important files like `email.js` for email handling and `sheets.js` for interactions with Google Sheets, centralizing the application's core functionality.

The `pages` directory houses the main pages of the app, including the `index.js` file which serves as the homepage. The `api` directory within it contains the API routes the app uses.

The `public` directory is designated for static assets such as images or fonts, which are publicly accessible.

The `styles` directory is where the CSS files for styling the application are located.

The `.gitignore` file is crucial for specifying which files and directories should be ignored by Git, preventing unnecessary files from being tracked or uploaded.

## Learn More

To learn more about Next.js, visit the [Next.js Documentation](https://nextjs.org/docs) and [Learn Next.js](https://nextjs.org/learn).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.