# SearchBar-function

This project implements a **search bar** for efficient filtering and an **add new chat box** feature for dynamic chat creation. It is built with Node.js and provides an intuitive framework for managing chat functionality.

---

## Features

- **Real-Time Search**:
  - Instantly filters chat lists based on user input.
  - Updates dynamically as you type in the search bar.

- **Add New Chat Box**:
  - Easily create new chat boxes with custom titles or user IDs.
  - Handles multiple chats seamlessly.

- **Scalable Framework**:
  - Built for easy expansion and integration into larger systems.

---

## Project Structure

```
/data                 # Stores chat data or mock datasets
/node_modules         # Auto-managed dependencies
/public               # Static assets such as CSS, JavaScript, and images
package.json          # Dependency and project configuration
package-lock.json     # Dependency lock file
server.js             # Entry point for the application
```

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (Node Package Manager)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/youle1999/SearchBar-function.git
   cd SearchBar-function
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and go to:
   ```
   http://localhost:3000
   ```

3. Use the **search bar** to filter existing chats in real-time and the **Add Chat** button to dynamically add new chat boxes.

---

## API Endpoints

- **GET `/api/chats`**:
  - Retrieves a list of existing chats.

- **POST `/api/chats`**:
  - Adds a new chat box.
  - Payload example:
    ```json
    {
      "title": "New Chat",
      "userId": "User123"
    }
    ```

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---
