// src/types/payment.ts
export type Payment = {
  id: string
  amount: number
  status: "pending" | "success" | "failed"
  email: string
  customerId: string
  createdAt: string
}
