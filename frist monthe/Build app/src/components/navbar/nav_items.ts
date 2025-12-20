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
  { icon: Home, label: "Home", href: "#" },
  { icon: Bell, label: "Notifications", href: "#" },
  { icon: MessageCircleMore, label: "Message", href: "#" },
  { icon: User, label: "Profile", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
  { icon: Heart, label: "Wishlist", href: "#" },
  { icon: Trash, label: "Delete", href: "#" },
  { icon: ShoppingCart, label: "Cart", href: "#" },
  { icon: ThemeToggle, label: "Theme", href: "#" },
  { icon: LogOut, label: "Logout", href: "#" },
];
