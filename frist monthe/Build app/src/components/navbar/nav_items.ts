import {
  Home,
  Bell,
  User,
  Settings,
  Heart,
  ShoppingCart,
  LogOut,
  MessageCircleMore,
  Trash,
} from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle";

export const navItems = [
  { icon: Home, label: "Home", href: "/dashboard", type: "link" },
  { icon: Bell, label: "Notifications", href: "/dashboard/Notifications", type: "link" },
  { icon: MessageCircleMore, label: "Message", href: "/dashboard/Messages", type: "link" },
  { icon: User, label: "Profile", href: "/dashboard/Profile", type: "link" },
  { icon: Settings, label: "Settings", href: "/dashboard/Settings", type: "link" },
  { icon: Heart, label: "Wishlist", href: "/dashboard/Wishlist", type: "link" },
  { icon: Trash, label: "Delete", href: "/dashboard/Deleted", type: "link" },
  { icon: ShoppingCart, label: "Cart", href: "/dashboard/Cart", type: "link" },
  { icon: ThemeToggle, label: "Theme", href: "#", type: "action" },
  { icon: LogOut, label: "Logout", href: "#", type: "action" },
];
