import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Internship {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  stipend: string;
  description: string;
  skills: string[];
  postedDate: string;
}

const FEATURED_INTERNSHIPS: Internship[] = [
  {
    id: "1",
    role: "Frontend Developer Intern",
    company: "TechCorp Solutions",
    location: "Remote",
    type: "Full-time",
    duration: "6 months",
    stipend: "$1000/month",
    description: "Join our team to build modern web applications using React, Next.js, and TypeScript. You'll work directly with senior developers and contribute to real projects.",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    postedDate: "2 days ago"
  },
  {
    id: "2",
    role: "Data Science Intern",
    company: "AI Innovations",
    location: "Hybrid",
    type: "Part-time",
    duration: "3 months",
    stipend: "$800/month",
    description: "Work on real-world machine learning projects. Help analyze data and build predictive models using Python and popular ML frameworks.",
    skills: ["Python", "Machine Learning", "SQL"],
    postedDate: "1 day ago"
  },
  // Add more internships...
];

export default function InternshipsPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-8 md:mb-16 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Find Your Perfect Internship
          </h1>
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
            Kickstart your career with hands-on experience at top companies. 
            We've helped thousands of students land their dream internships.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by role, company, or skill..."
                className="pl-10 w-full"
              />
            </div>
            <Button className="w-full sm:w-auto">Search</Button>
          </div>
        </section>

        {/* Mobile Training Button - Visible only on small screens */}
        <div className="block md:hidden mb-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Training Programs
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>Training Programs</SheetTitle>
                <SheetDescription>
                  Explore our training programs to enhance your skills
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-2">
                <Link 
                  href="/training/web-development"
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Web Development</span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Sidebar - Hidden on mobile */}
          <aside className="hidden md:block md:col-span-3 lg:col-span-2">
            <div className="sticky top-24 border rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Training Programs
              </h2>
              <div className="space-y-2">
                <Link 
                  href="/training/web-development"
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Web Development</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="col-span-1 md:col-span-9 lg:col-span-10">
            {/* Filters Section */}
            <section className="mb-6 md:mb-8">
              <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
                <Button variant="outline" size="sm" className="whitespace-nowrap">Remote Only</Button>
                <Button variant="outline" size="sm" className="whitespace-nowrap">Full-time</Button>
                <Button variant="outline" size="sm" className="whitespace-nowrap">Part-time</Button>
                <Button variant="outline" size="sm" className="whitespace-nowrap">Paid Only</Button>
                <Button variant="outline" size="sm" className="whitespace-nowrap">Sort: Latest First</Button>
              </div>
            </section>

            {/* Internships List */}
            <section className="grid gap-4 md:gap-6">
              {FEATURED_INTERNSHIPS.map((internship) => (
                <div 
                  key={internship.id}
                  className="border rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold mb-1">
                        {internship.role}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {internship.company} • {internship.location}
                      </p>
                    </div>
                    <Button className="w-full sm:w-auto">Apply Now</Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-medium">{internship.duration}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Type</p>
                      <p className="font-medium">{internship.type}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Stipend</p>
                      <p className="font-medium">{internship.stipend}</p>
                    </div>
                  </div>

                  <p className="mb-4 text-sm md:text-base text-muted-foreground">
                    {internship.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="bg-secondary text-secondary-foreground px-2 md:px-3 py-1 rounded-full text-xs md:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 text-xs md:text-sm text-muted-foreground">
                    Posted {internship.postedDate}
                  </div>
                </div>
              ))}
            </section>

            {/* Pagination */}
            <section className="mt-6 md:mt-8 flex justify-center gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </section>
          </div>
        </div>

        {/* CTA Section */}
        <section className="my-8 md:my-16 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Not finding what you're looking for?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Create a profile and get notified when relevant internships are posted
          </p>
          <Button size="lg" className="w-full sm:w-auto">
            Create Profile
          </Button>
        </section>
      </div>
    </main>
  );
} 