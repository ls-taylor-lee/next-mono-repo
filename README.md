# Next.js Monorepo

This is a Next.js monorepo that serves multiple applications based on the city and app name specified in environment variables. Each application is organized under its respective directory, utilizing Next.js's App Router feature for efficient routing and organization.

## Directory Structure

The directory structure of this monorepo is as follows:

```
/my-monorepo
├── /app
│   ├── /detroit
│   │   └── /DCoin
│   │       ├── /layout.ts
│   │       └── /page.ts
│   ├── /newyork
│   │   └── /SomeApp
│   │       ├── /layout.ts
│   │       └── /page.ts
│   └── /losangeles
│        └── /AnotherApp
│           ├── /layout.ts
│           └── /page.ts
├── /shared
│   └── config
├── /public
├── package.json
└── next.config.js
```

- **`app/`**: Contains all applications structured under their respective city directories.
- **`shared/`**: Contains shared components or utilities that can be used across different applications.
- **`public/`**: Contains static files such as images, fonts, and other assets.
- **`next.config.js`**: Configuration file for Next.js.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd my-monorepo
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables in a `.env.local` file at the root of the project:

   ```plaintext
   NEXT_PUBLIC_CITY=detroit
   NEXT_PUBLIC_APP_NAME=DCoin
   ```

   You can change the `CITY` and `APP_NAME` values based on which application you want to serve.

### Running the Application

To start the development server, run:

```bash
npm run dev
```

### Accessing the Applications

- Open your browser and navigate to `http://localhost:3000/` to access the main page of the current application specified in your environment variables.
- You can also access subpages directly using URLs like `http://localhost:3000/subpage`.

### Adding New Applications

To add a new application:

1. Create a new directory under `app/<city>/` for the new application.
2. Add a `page.js` file in the new application directory with the desired content.
3. Update the environment variables in `.env.local` to serve the new application.

### Shared Components

You can place any reusable components or utilities in the `shared` directory. They can be imported into your applications as needed.

### Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.
