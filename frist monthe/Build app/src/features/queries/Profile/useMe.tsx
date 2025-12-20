// "use client";
// // context/AuthContext.tsx
// "use client";
// import React, { createContext, useContext } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { AuthUser } from "@/types/formAuth";

// interface AuthContextProps {
//   authUser: AuthUser;
//   isLoading: boolean;
// }

// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const { data: authUser, isLoading } = useQuery({
//     queryKey: ["authUser"],
//     queryFn: async () => {
//       try {
//         const token = localStorage.getItem("jwt");

//         const res = await fetch(
//           "https://twitter-backend-mauve.vercel.app/api/auth/me",
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//             credentials: "include",
//           }
//         );
//         const data = await res.json();
//         if (data.error) return null;
//         if (!res.ok) return;

//         // console.log(data);

//         return data;
//       } catch (error: any) {
//         throw error;
//       }
//     },
//     retry: false,
//   });

//   return (
//     <AuthContext.Provider value={{ authUser, isLoading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };


