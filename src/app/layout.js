import { Lato, Roboto } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Sentiment Analysis",
  description: "Welcome To The World Of Sentiment. Get AI-powered access to mentions across social media, news, blogs, videos, forums, podcasts, reviews, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <ToastContainer />
        </body>
    </html>
  );
}
