import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Users, Briefcase, GraduationCap, Star } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-[90%] sm:max-w-2xl md:max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Launch Your Career with Real Experience
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
              Get matched with top companies, learn from industry experts, and build your professional portfolio through hands-on internships.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
              <Link 
                href="/internships"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 text-base sm:text-lg font-medium inline-flex items-center justify-center gap-2 group hover:scale-[1.02] shadow-lg shadow-primary/20"
              >
                Find Internships
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/courses"
                className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 text-base sm:text-lg font-medium hover:scale-[1.02] shadow-lg shadow-secondary/20 text-center"
              >
                Browse Courses
              </Link>
            </div>

            {/* Tech Illustration */}
            <div className="relative w-full max-w-[90%] sm:max-w-2xl lg:max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl sm:rounded-3xl blur-3xl -z-10" />
              <Image
                src="/images/tech-illustration.png"
                alt="Tech learning illustration showing coding, VR, UI/UX, and various tech elements"
                width={1200}
                height={800}
                className="w-full h-auto drop-shadow-2xl animate-fade-up rounded-xl sm:rounded-2xl transform-gpu"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-background via-background/50 to-background border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">500+</div>
              <div className="text-muted-foreground">Partner Companies</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">10k+</div>
              <div className="text-muted-foreground">Students Placed</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform provides comprehensive resources and opportunities to help you build your career.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl border bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all group">
              <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Internships</h3>
              <p className="text-muted-foreground">Find opportunities at top companies and startups worldwide.</p>
            </div>
            <div className="p-6 rounded-2xl border bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all group">
              <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Courses</h3>
              <p className="text-muted-foreground">Learn from industry experts with practical, hands-on courses.</p>
            </div>
            <div className="p-6 rounded-2xl border bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all group">
              <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
              <p className="text-muted-foreground">Get guidance from experienced professionals in your field.</p>
            </div>
            <div className="p-6 rounded-2xl border bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all group">
              <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Path</h3>
              <p className="text-muted-foreground">Plan your career journey with personalized guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-background via-background/50 to-background border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from students who have transformed their careers through our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border bg-background/50 backdrop-blur-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The internship opportunity I found through this platform kickstarted my career in tech. The mentorship and guidance were invaluable."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">AS</span>
                </div>
                <div>
                  <div className="font-semibold">Alex Smith</div>
                  <div className="text-sm text-muted-foreground">Software Engineer at Google</div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl border bg-background/50 backdrop-blur-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The courses here are practical and up-to-date. I learned skills that were directly applicable to my job search."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">MJ</span>
                </div>
                <div>
                  <div className="font-semibold">Maria Johnson</div>
                  <div className="text-sm text-muted-foreground">Data Scientist at Meta</div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl border bg-background/50 backdrop-blur-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The mentorship program connected me with industry experts who helped me navigate my career transition successfully."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">RK</span>
                </div>
                <div>
                  <div className="font-semibold">Ryan Kim</div>
                  <div className="text-sm text-muted-foreground">Product Manager at Apple</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students who have already taken the first step towards their dream career.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/signup"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full transition-colors text-lg font-medium inline-flex items-center gap-2 group"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/courses"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 rounded-full transition-colors text-lg font-medium"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
