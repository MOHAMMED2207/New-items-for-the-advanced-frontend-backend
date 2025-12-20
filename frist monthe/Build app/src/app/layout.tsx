import "../styles/globals.css";
import { ThemeProvider } from "../providers/ThemeProvider";
import { QueryProvider } from "../providers/QueryProvider";
// import { AuthProvider } from "@/features/queries/Profile/useMe";
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
            {/* <AuthProvider> */}
              <ConfirmationProvider>{children}</ConfirmationProvider>
            {/* </AuthProvider> */}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
