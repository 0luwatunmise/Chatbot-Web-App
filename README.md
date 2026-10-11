# Chatbot Web App

A responsive chat interface built with React. Users send messages and receive replies from a rule-based chatbot, with timestamps and conversation history that persists across page refreshes.



## Features

- Chat interface with user and bot messages
- Timestamps on every message
- Chat history saved in `localStorage`, so conversations survive a refresh
- Loading state while the bot "responds"
- Handling for empty messages
- Responsive layout for desktop and mobile


## Tech Stack

- **React** for the UI and state management
- **JavaScript (ES6+)**
- **HTML/CSS**
- **[supersimpledev](https://www.npmjs.com/package/supersimpledev)** (`chatbot.js`) for generating bot responses
- **localStorage** for persisting chat history


## How It Works

1. The user types a message and submits it.
2. The message is added to the chat state and displayed with a timestamp.
3. The message is passed to the chatbot library, which matches it against a set of known phrases and returns a response asynchronously.
4. The bot's reply is added to the chat and shown in the interface.
5. The full message list is saved to `localStorage` and loaded again when the app starts.

## Note on the Chatbot

This is a frontend-only project. The bot is **rule-based, not AI-powered**: the `supersimpledev` library compares the user's message to a small set of predefined phrases (for example greetings, flipping a coin, rolling a dice, and today's date) and returns a canned reply. There is no backend and no external AI service.

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

```bash
git clone https://github.com/0luwatunmise/Chatbot-Web-App.git

cd chatbot-project

npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown in your terminal.



## Credits

This project was built by following the [SuperSimpleDev](https://www.youtube.com/@SuperSimpleDev) React tutorial series. Features such as chat history persistence and message timestamps came from the tutorial's exercises. The chatbot response library is also provided by SuperSimpleDev.

## Planned Improvements

- Replace the rule-based library with a real AI API
- Add a Node/Express backend to proxy API requests and keep keys off the client

## Author

**Oluwatunmise**
@0luwatunmise 
