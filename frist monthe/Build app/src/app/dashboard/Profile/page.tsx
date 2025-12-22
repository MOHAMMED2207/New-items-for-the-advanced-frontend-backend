"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useAuthStore } from "@/State Managemet/store/authStore";
import { User } from "@/types/formAuth";

export default function ProfilePage() {
  const { user } = useAuthStore() as { user: User };
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
  });

  if (!user) {
    return <p className="p-6">Unauthorized</p>;
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">Profile</h2>
        <p className="text-muted-foreground">Manage your account information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card>
          <CardHeader className="items-center text-center">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="text-2xl">
                {user.fullname[0]}
              </AvatarFallback>
            </Avatar>

            <CardTitle className="mt-4">{user.fullname}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {user.role.toUpperCase()}
            </p>
          </CardHeader>

          <CardContent>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </Button>
          </CardContent>
        </Card>

        {/* Details Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input
                disabled={!isEditing}
                value={form.fullname}
                onChange={(e) => setForm({ ...form, fullname: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                disabled={!isEditing}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Role</Label>
              <Input disabled value={user.role} />
            </div>

            {isEditing && (
              <div className="flex gap-2 pt-4">
                <Button>Save Changes</Button>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
