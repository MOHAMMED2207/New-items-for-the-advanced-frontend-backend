import { Toaster } from "react-hot-toast";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 5000,
              style: {
                background: "#333",
                color: "#fff",
                padding: "16px",
                borderRadius: "8px",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
