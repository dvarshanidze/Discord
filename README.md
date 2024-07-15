# Discord Clone

Welcome to the **Discord Clone** repository! This project aims to replicate the core functionalities of Discord, providing a platform for voice, video, and text communication, as well as server and channel management.

## Features

- **User Authentication**: Secure user registration and login.
- **Real-Time Messaging**: Instant messaging with real-time updates.
- **Voice and Video Calls**: High-quality voice and video communication.
- **Server Management**: Create and manage servers with multiple channels.
- **Text Channels**: Organized text channels for topic-based discussions.
- **Direct Messages**: Private conversations between users.
- **File Sharing**: Upload and share files within channels and direct messages.
- **Custom Emojis**: Support for custom emojis and reactions.
- **Push Notifications**: Stay updated with push notifications.


## Tech Stack

- **Frontend**: Next.js 13, React, Tailwind CSS
- **Backend**: Node.js, Express.js, Socket.io
- **Database**: MySQL with Prisma

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm
- MySQL

### Clone the Repository
```bash
git clone https://github.com/dvarshanidze/discord.git
```
```bash
cd discord-clone
```
```bash
npm install
```

Create a .env file in the backend directory and add the following environment variables:
```bash
DATABASE_URL="mysql://user:password@localhost:3306/database_name"
JWT_SECRET=your_jwt_secret
```
### Start the Development Server
```bash
npm run dev
```

## Usage

### User Authentication
Register a new user or log in with an existing account.

### Creating a Server
Click on the "Add Server" button.
Enter the server details and create your server.

### Joining a Server
Use an invite link to join an existing server.

### Messaging
Send messages in text channels or through direct messages.
Upload and share files.

### Voice and Video Calls
Join voice channels to start a voice call.
Enable video for video calls.
