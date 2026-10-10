# 🛒 Bazar Dor
 
**Know the market price before you step into the market.**
 
Bazar Dor is a modern web application that helps people keep track of the market prices of different products and see how those prices change over time. Instead of guessing or asking around, users can quickly check current prices, compare them with earlier ones, and make smarter buying decisions.
 

 ---
 
## ✨ Features
 
- 💰 **Live market prices**: Browse the current prices of a wide range of everyday products in one place.
- 📈 **Price change tracking**: See whether a product's price has gone up, gone down, or stayed the same compared to before.
- 🔍 **Search and filter**: Quickly find the product you are looking for by name or category.
- 🔐 **Secure authentication**: Sign up and sign in with email or Google, powered by Better Auth.
- 👤 **User profile**: View your account details, email verification status, and update your name anytime.
- 🔔 **Instant feedback**: Clear toast notifications for actions like sign in, sign out, and profile updates.
- 📱 **Fully responsive**: A smooth experience on mobile phones, tablets, laptops, and large desktop screens.

---

## 🛠️ Technologies Used
 
| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) | React framework for routing, rendering, and performance |
| [React](https://react.dev/) | Building the user interface |
| [TypeScript](https://www.typescriptlang.org/) | Type safety and better developer experience |
| [Tailwind CSS](https://tailwindcss.com/) | Fast, utility-first styling and responsive design |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications |
| [Better Auth](https://www.better-auth.com/) | Authentication and session management |
 
---

## 🚀 Getting Started
 
### Prerequisites
 
- Node.js 18 or later
- npm, yarn, or pnpm
### Installation
 
```bash
# 1. Clone the repository
git clone https://github.com/md-ashraful-islam-ullas/BazarDor-PH-B14-A7.git
 
# 2. Move into the project folder
cd bazar-dor
 
# 3. Install dependencies
npm install
```
 
### Environment Variables
 
Create a `.env` file in the root of the project and add your own values:
 
```env
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URL=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```
 
### Run the App
 
```bash
npm run dev
```
 
Then open [http://localhost:3000](http://localhost:3000) in your browser.
 
---