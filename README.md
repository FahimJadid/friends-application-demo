# Friends Application Demo

![Friends Application Demo Screenshot]

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Friends Application is a simple web application built using Node.js, Express, Mongoose, EJS, dotenv, and multer. It allows users to manage a list of friends, add new friends, and view their details. The application is designed to provide a straightforward and user-friendly experience for managing friends.

## Features

- View a list of friends with their names, ages, and email addresses.
- Add new friends to the list through a user-friendly form.

## Technologies

- Node.js
- Express
- Mongoose
- EJS (Embedded JavaScript)
- dotenv (for managing environment variables)
- multer (for handling file uploads)

## Getting Started

To get started with the Friends Application, follow the installation and setup instructions below.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/FahimJadid/friends-application-demo.git
   cd friends-application-demo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

Before running the application, you need to set up your environment variables. Create a `.env` file in the root directory of the project and add the following configuration:

```
DB_CONNECTION_STRING=your_mongodb_connection_string_here
PORT=3000
```

Replace `your_mongodb_connection_string_here` with your actual MongoDB connection string.

## Usage

1. Start the application:

   ```bash
   npm run dev
   ```

2. Open your web browser and go to `http://localhost:3000/friends` to view your list of friends.

3. To add a new friend, fill out the form at the bottom of the page and click the "Add Friend" button.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to create an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or need assistance, you can reach me at [fahimaljadid@gamil.com]

---
