'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { getCourses, Course } from '@/lib/services/courseService';
import { Plus } from 'lucide-react';

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        console.log('API Response:', data); // Debug uchun
        // API javobini to'g'ri parse qilish
        const coursesArray = Array.isArray(data) 
          ? data 
          : Array.isArray(data?.body) 
          ? data.body 
          : Array.isArray(data?.data)
          ? data.data
          : [];
        console.log('Parsed courses:', coursesArray); // Debug uchun
        setCourses(coursesArray);
      } catch (error) {
        console.error('Kurslarni yuklashda xatolik:', error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

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
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Kurslar</h1>
              <p className="text-muted-foreground">
                Barcha kurslarni boshqaring
              </p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Yangi kurs
            </Button>
          </div>

          {/* Empty State */}
          {courses.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground mb-4">
                  Hozircha kurslar mavjud emas
                </p>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Birinchi kursni qo'shing
                </Button>
              </CardContent>
            </Card>
          ) : (
            /* Courses Grid */
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <Card key={course._id || course.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{course.name || 'Noma\'lum kurs'}</CardTitle>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          course.is_freeze
                            ? 'bg-destructive/10 text-destructive'
                            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        }`}
                      >
                        {course.is_freeze ? 'Muzlatilgan' : 'Aktiv'}
                      </span>
                    </div>
                    {course.description && (
                      <CardDescription>{course.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        Ko'rish
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1">
                        Tahrirlash
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
