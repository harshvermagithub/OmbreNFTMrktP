import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, Users, Star, BookOpen } from "lucide-react";

interface Course {
  id: string;
  title: string;
  instructor: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  description: string;
  topics: string[];
  category: string;
}

const FEATURED_COURSES: Course[] = [
  {
    id: "1",
    title: "Full Stack Web Development Bootcamp",
    instructor: "Sarah Johnson",
    level: "Intermediate",
    duration: "12 weeks",
    students: 1234,
    rating: 4.8,
    price: "$499",
    description: "Master modern web development with React, Node.js, and MongoDB. Build real-world projects and deploy them to the cloud.",
    topics: ["React", "Node.js", "MongoDB", "Express", "AWS"],
    category: "Web Development"
  },
  {
    id: "2",
    title: "Data Science Fundamentals",
    instructor: "Dr. Michael Chen",
    level: "Beginner",
    duration: "8 weeks",
    students: 856,
    rating: 4.7,
    price: "$399",
    description: "Learn the basics of data science, including Python programming, data analysis, and machine learning fundamentals.",
    topics: ["Python", "Pandas", "NumPy", "Scikit-learn", "Statistics"],
    category: "Data Science"
  },
  {
    id: "3",
    title: "UI/UX Design Essentials",
    instructor: "Emma Davis",
    level: "Beginner",
    duration: "6 weeks",
    students: 645,
    rating: 4.9,
    price: "$299",
    description: "Master the fundamentals of UI/UX design. Learn industry-standard tools and design principles.",
    topics: ["Figma", "Design Principles", "Wireframing", "Prototyping", "User Research"],
    category: "Design"
  }
];

const CATEGORIES = [
  "All Categories",
  "Web Development",
  "Data Science",
  "Mobile Development",
  "Cloud Computing",
  "DevOps",
  "Design",
  "Machine Learning",
  "Cybersecurity"
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">
            Level Up Your Skills
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn from industry experts and get certified in the most in-demand tech skills.
            Start your learning journey today.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for courses..."
                className="pl-10 w-full"
              />
            </div>
            <Button>Search</Button>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Browse by Category</h2>
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((category) => (
              <Button 
                key={category}
                variant="outline" 
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Course Grid */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_COURSES.map((course) => (
            <div 
              key={course.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-muted relative">
                <div className="absolute top-2 right-2">
                  <span className="bg-background/95 text-foreground px-2 py-1 rounded-md text-sm">
                    {course.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  by {course.instructor}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>{course.rating} rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{course.level}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {course.topics.map((topic) => (
                    <span 
                      key={topic}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">
                    {course.price}
                  </span>
                  <Button>Enroll Now</Button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="my-16 text-center bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            Not sure where to start?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Take our skill assessment test to get personalized course recommendations
            based on your current level and goals.
          </p>
          <Button size="lg">
            Take Skill Assessment
          </Button>
        </section>
      </div>
    </main>
  );
} 