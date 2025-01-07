'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Clock, Star, Users } from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  students: string;
  rating: string;
  topics: string[];
  instructor: {
    name: string;
    title: string;
  };
}

const WEB_DEV_COURSES: Course[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    description: "Learn full-stack web development from scratch. Cover HTML, CSS, JavaScript, React, Node.js, and more.",
    duration: "24 weeks",
    level: "Beginner to Advanced",
    students: "10,000+",
    rating: "4.8",
    topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express"],
    instructor: {
      name: "Sarah Johnson",
      title: "Senior Web Developer at Google"
    }
  },
  {
    id: "2",
    title: "Frontend Development Masterclass",
    description: "Master modern frontend development with React, TypeScript, and Next.js. Build real-world projects.",
    duration: "12 weeks",
    level: "Intermediate",
    students: "5,000+",
    rating: "4.9",
    topics: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Testing"],
    instructor: {
      name: "Michael Chen",
      title: "Frontend Lead at Meta"
    }
  },
  {
    id: "3",
    title: "Backend Development with Node.js",
    description: "Learn server-side development, APIs, databases, and deployment using Node.js and related technologies.",
    duration: "16 weeks",
    level: "Intermediate to Advanced",
    students: "3,000+",
    rating: "4.7",
    topics: ["Node.js", "Express", "MongoDB", "REST APIs", "GraphQL", "AWS"],
    instructor: {
      name: "David Kumar",
      title: "Backend Engineer at Amazon"
    }
  }
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">
            Web Development Training
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Master the art of web development with our comprehensive courses.
            Learn from industry experts and build real-world projects.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search courses..."
                className="pl-10 w-full"
              />
            </div>
            <Button>Search</Button>
          </div>
        </section>

        {/* Course Grid */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WEB_DEV_COURSES.map((course) => (
            <div 
              key={course.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {course.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {course.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>{course.rating}/5.0</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.topics.map((topic) => (
                    <span 
                      key={topic}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <p className="font-medium">{course.instructor.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {course.instructor.title}
                  </p>
                </div>

                <Button className="w-full mt-4">
                  Enroll Now
                </Button>
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="my-16 text-center bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            Start Your Web Development Journey Today
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join thousands of students who have transformed their careers through our web development courses.
          </p>
          <Button size="lg">
            View All Courses
          </Button>
        </section>
      </div>
    </main>
  );
} 