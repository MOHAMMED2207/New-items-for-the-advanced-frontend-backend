// src/data/payments.ts
import { Payment } from "@/types/payment";

export const payments: Payment[] = [
  {
    id: "pay_001",
    email: "user1@gmail.com",
    status: "success",
    amount: 120,
    customerId: "cust_001",
    createdAt: "2025-01-12",
  },
  {
    id: "pay_002",
    email: "user2@yahoo.com",
    status: "failed",
    amount: 90,
    customerId: "cust_002",
    createdAt: "2025-02-10",
  },
  {
    id: "pay_003",
    email: "admin@test.com",
    status: "success",
    amount: 300,
    customerId: "cust_003",
    createdAt: "2025-03-05",
  },
  {
    id: "pay_004",
    email: "alice@example.com",
    status: "success",
    amount: 150,
    customerId: "cust_004",
    createdAt: "2025-03-15",
  },
  {
    id: "pay_005",
    email: "bob@gmail.com",
    status: "pending",
    amount: 75,
    customerId: "cust_005",
    createdAt: "2025-04-01",
  },
  {
    id: "pay_006",
    email: "charlie@hotmail.com",
    status: "success",
    amount: 220,
    customerId: "cust_006",
    createdAt: "2025-04-20",
  },
  {
    id: "pay_007",
    email: "david@company.com",
    status: "failed",
    amount: 180,
    customerId: "cust_007",
    createdAt: "2025-05-05",
  },
  {
    id: "pay_008",
    email: "emma@gmail.com",
    status: "success",
    amount: 95,
    customerId: "cust_008",
    createdAt: "2025-05-15",
  },
];
