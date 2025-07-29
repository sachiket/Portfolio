# Portfolio Project

A full-stack portfolio web application built with React (TypeScript) for the client, Node.js/Express for the server, and a shared schema for type safety. This project is designed to showcase your skills, experience, and education, and can be easily customized for your own use.

## Features
- Modern, responsive portfolio UI
- Sections for Hero, Skills, Experience, Education, and Contact
- Modular, reusable UI components
- Type-safe shared schema between client and server
- API server for backend logic and data
- Tailwind CSS for styling
- Easy local development with Vite

## Folder Structure
```
Portfolio/
├── client/         # Frontend React app (TypeScript)
│   ├── src/
│   │   ├── components/   # UI and section components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utilities and query client
│   │   ├── pages/        # Page components
│   │   └── index.css     # Global styles
│   └── index.html        # HTML entry point
├── server/         # Backend API (Node.js/Express)
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   ├── storage.ts       # Data storage logic
│   └── vite.ts          # Vite server config
├── shared/         # Shared code (e.g., schema)
│   └── schema.ts
├── attached_assets/ # Uploaded assets (images, etc.)
├── package.json     # Project metadata and scripts
├── tsconfig.json    # TypeScript configuration
├── tailwind.config.ts # Tailwind CSS config
├── vite.config.ts   # Vite config
└── README.md        # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm (v8+ recommended)

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd Portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

#### Start the Server
```bash
cd server
npm install # if needed
npm run dev
```

#### Start the Client
```bash
cd client
npm install # if needed
npm run dev
```

The client will typically run on `http://localhost:5173` and the server on `http://localhost:3000` (or as configured).

## Technologies Used
- React (TypeScript)
- Node.js & Express
- Vite
- Tailwind CSS
- Drizzle (for config)
- TypeScript (shared types)

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License
This project is open source and available under the [MIT License](LICENSE). 