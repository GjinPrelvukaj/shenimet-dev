
# Shenime

Shenime is a note-taking application built with Electron and React. It leverages the power of modern development tools to provide a lightweight and efficient note-taking experience.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (>=14.0.0)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/GjinPrelvukaj/shenimet-dev.git
   cd shenimet-dev
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the application in development mode, run:

```bash
npm run dev
```

This will launch the application with hot-reloading enabled.

### Building the Application

To build the application for production, use the following commands depending on your target platform:

- **Windows**:

  ```bash
  npm run build:win
  ```

- **macOS**:

  ```bash
  npm run build:mac
  ```

- **Linux**:

  ```bash
  npm run build:linux
  ```

For a more granular build (e.g., just unpacking):

```bash
npm run build:unpack
```

### Available Scripts

- `npm run format` - Format the codebase using Prettier.
- `npm run lint` - Lint the codebase using ESLint.
- `npm run typecheck` - Run TypeScript type checks for both Node and Web.
- `npm run start` - Start the application in preview mode.
- `npm run dev` - Start the application in development mode.
- `npm run build` - Build the application for production.
- `npm run postinstall` - Install app dependencies after installation.
- `npm run build:unpack` - Build and unpack the application.
- `npm run build:win` - Build for Windows.
- `npm run build:mac` - Build for macOS.
- `npm run build:linux` - Build for Linux.

### Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.


For more information, visit the [homepage](https://electron-vite.org).

