﻿# TeliMedi

## Realtime chat-app with auth made with Supabase and React.js


## 👨‍💻 To run this project locally

### 1.Clone the Repository

Open your terminal and execute the following command to clone the repository:

```bash
git clone https://github.com/maciekt07/supabase-chat.git
```

Then navigate to the project directory:

```bash
cd supabase-chat
```

Install Node Modules

```bash
npm install
```

### 2.Setup your Supabase project

To set up your Supabase project, you need to perform the following steps:

- Add a `Chat` table to your Supabase database. You can refer to the following screenshot for guidance:

<img width="600px" alt="2" src="public/screenshots/chattable.png" />

- Create a `.env` file in the project directory and add the `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` variables to it. Make sure to provide the appropriate values for these variables.

- Enable GitHub or Google authorization in your Supabase project. This step will allow users to authenticate using their GitHub or Google accounts.

### 3. Run the Project

Finally, execute the following command to run the project:

```bash
npm run dev
```

The project will be accessible at http://localhost:5173 in your web browser.

Now you can test and explore the project locally on your machine.
