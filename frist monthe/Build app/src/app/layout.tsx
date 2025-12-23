import "../styles/globals.css";
import { ThemeProvider } from "../providers/ThemeProvider";
import { QueryProvider } from "../providers/QueryProvider";
import { ConfirmationProvider } from "@/providers/ConfirmationProvider";

export const metadata = { title: "Next App" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <QueryProvider>
            <ConfirmationProvider>{children}</ConfirmationProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
