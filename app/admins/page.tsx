'use client';

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllAdmins } from "@/lib/services/adminService";
import { Users, Search } from "lucide-react";

interface Admin {
  _id?: string;
  id?: string;
  first_name?: string;
  last_name?: string;
  name?: string;
  email?: string;
  role?: string;
  status?: string;
  createdAt?: string;
}

export default function AdminsPage() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [filteredAdmins, setFilteredAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const res = await getAllAdmins();
        const data = Array.isArray(res.data) ? res.data : Array.isArray(res.data?.data) ? res.data.data : [];
        setAdmins(data);
        setFilteredAdmins(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAdmins();
  }, []);

  useEffect(() => {
    const filtered = admins.filter((admin) =>
      (admin.first_name?.toLowerCase() || admin.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (admin.email?.toLowerCase() || "").includes(searchTerm.toLowerCase())
    );
    setFilteredAdmins(filtered);
  }, [searchTerm, admins]);

  if (loading) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <div className="flex items-center justify-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Adminlar</h1>
              <p className="text-muted-foreground">Barcha adminlarni boshqaring</p>
            </div>
            <Button>
              <Users className="mr-2 h-4 w-4" />
              Yangi admin
            </Button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredAdmins.map((admin) => (
              <Card key={admin._id || admin.id}>
                <CardHeader>
                  <CardTitle>{admin.first_name || admin.name || "Noma'lum"} {admin.last_name || ""}</CardTitle>
                  <CardDescription>{admin.email || "Email mavjud emas"}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{admin.role || "Admin"}</span>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      admin.status === 'active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                    }`}>
                      {admin.status === 'active' ? 'Faol' : 'Nofaol'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAdmins.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground">Ma'lumot topilmadi</p>
              </CardContent>
            </Card>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
