import "./globals.css";

export const metadata = {
  title: "Codifi Webhooks",
  description: "Web App to test Codifi Webhooks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
