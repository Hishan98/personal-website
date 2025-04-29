import Image from "next/image"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Layers,
  Menu,
  Palette,
  GraduationCap,
  BadgeIcon as Certificate,
  User,
  Code2,
  FileText,
  PenTool,
  Server,
  Briefcase,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header - Now Sticky */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              Hishan Abeysiriwardana
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#about" className="hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="#qualifications" className="hover:text-purple-400 transition-colors">
                Qualifications
              </Link>
              <Link href="#projects" className="hover:text-purple-400 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900 border-gray-800">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="#about" className="text-lg hover:text-purple-400 transition-colors py-2">
                    About
                  </Link>
                  <Link href="#qualifications" className="text-lg hover:text-purple-400 transition-colors py-2">
                    Qualifications
                  </Link>
                  <Link href="#projects" className="text-lg hover:text-purple-400 transition-colors py-2">
                    Projects
                  </Link>
                  <Link href="#contact" className="text-lg hover:text-purple-400 transition-colors py-2">
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section - Full screen and better alignment */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-purple-500">Hishan</span>
                <br />
                Developer & Designer
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-md">
                I create engaging digital experiences through code and design, specializing in web development and
                prototype design.
              </p>
              <div className="flex gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700">View My Work</Button>
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                  Download CV
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="mailto:contact@hishan.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-purple-600">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Hishan Abeysiriwardana"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Full screen */}
      <section id="about" className="min-h-screen flex items-center py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-16 rounded-full"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Image and Quick Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="relative rounded-2xl overflow-hidden border-2 border-purple-600 shadow-lg shadow-purple-600/20 group">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Hishan Abeysiriwardana"
                  width={600}
                  height={600}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-4 justify-center">
                    <a
                      href="https://github.com"
                      className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-purple-600/80 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-purple-600/80 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="mailto:contact@hishan.com"
                      className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-purple-600/80 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-purple-600 transition-all hover:transform hover:scale-105">
                  <h3 className="text-xl font-bold text-purple-400 mb-1">5+</h3>
                  <p className="text-gray-300">Years of Experience</p>
                </div>
                <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-purple-600 transition-all hover:transform hover:scale-105">
                  <h3 className="text-xl font-bold text-purple-400 mb-1">50+</h3>
                  <p className="text-gray-300">Projects Completed</p>
                </div>
                <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-purple-600 transition-all hover:transform hover:scale-105">
                  <h3 className="text-xl font-bold text-purple-400 mb-1">10+</h3>
                  <p className="text-gray-300">Happy Clients</p>
                </div>
                <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-purple-600 transition-all hover:transform hover:scale-105">
                  <h3 className="text-xl font-bold text-purple-400 mb-1">3</h3>
                  <p className="text-gray-300">Industry Awards</p>
                </div>
              </div>
            </div>

            {/* Right Column - Bio and Skills */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-purple-600/20 p-2 rounded-lg mr-3">
                    <User className="h-5 w-5 text-purple-400" />
                  </span>
                  Who I Am
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    I'm a passionate developer and designer with a focus on creating intuitive and visually appealing
                    digital experiences. With expertise in both coding and prototype design, I bring a unique
                    perspective to every project.
                  </p>
                  <p className="text-lg leading-relaxed">
                    My journey in tech began with a fascination for how design and functionality intersect. Today, I
                    leverage my skills to build solutions that not only work flawlessly but also engage users through
                    thoughtful design.
                  </p>
                  <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-400 my-6">
                    "I believe great design is not just about aesthetics, but about creating meaningful experiences that
                    solve real problems."
                  </blockquote>
                </div>
              </div>

              <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="bg-purple-600/20 p-2 rounded-lg mr-3">
                    <Code2 className="h-5 w-5 text-purple-400" />
                  </span>
                  My Skills
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Skill Item */}
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors">
                    <div className="bg-purple-600/20 p-3 rounded-lg">
                      <Code className="h-6 w-6 text-purple-400" />
                    </div>
                    <span className="font-medium text-lg">PHP / Laravel</span>
                  </div>

                  {/* Skill Item */}
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors">
                    <div className="bg-purple-600/20 p-3 rounded-lg">
                      <Code2 className="h-6 w-6 text-purple-400" />
                    </div>
                    <span className="font-medium text-lg">JavaScript / TypeScript</span>
                  </div>

                  {/* Skill Item */}
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors">
                    <div className="bg-purple-600/20 p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-purple-400" />
                    </div>
                    <span className="font-medium text-lg">CSS / Tailwind / Bootstrap</span>
                  </div>

                  {/* Skill Item */}
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors">
                    <div className="bg-purple-600/20 p-3 rounded-lg">
                      <Code className="h-6 w-6 text-purple-400" />
                    </div>
                    <span className="font-medium text-lg">Python</span>
                  </div>

                  {/* Skill Item */}
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors">
                    <div className="bg-purple-600/20 p-3 rounded-lg">
                      <Server className="h-6 w-6 text-purple-400" />
                    </div>
                    <span className="font-medium text-lg">REST API</span>
                  </div>

                  {/* Skill Item */}
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors">
                    <div className="bg-purple-600/20 p-3 rounded-lg">
                      <Server className="h-6 w-6 text-purple-400" />
                    </div>
                    <span className="font-medium text-lg">Node.js / Express</span>
                  </div>

                  {/* Skill Item */}
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors">
                    <div className="bg-purple-600/20 p-3 rounded-lg">
                      <Layers className="h-6 w-6 text-purple-400" />
                    </div>
                    <span className="font-medium text-lg">AngularJS</span>
                  </div>

                  {/* Skill Item */}
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors">
                    <div className="bg-purple-600/20 p-3 rounded-lg">
                      <PenTool className="h-6 w-6 text-purple-400" />
                    </div>
                    <span className="font-medium text-lg">Figma / Adobe XD</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm font-medium hover:bg-purple-600/30 transition-colors cursor-default">
                    Responsive Design
                  </span>
                  <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm font-medium hover:bg-purple-600/30 transition-colors cursor-default">
                    Tailwind CSS
                  </span>
                  <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm font-medium hover:bg-purple-600/30 transition-colors cursor-default">
                    TypeScript
                  </span>
                  <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm font-medium hover:bg-purple-600/30 transition-colors cursor-default">
                    Redux
                  </span>
                  <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm font-medium hover:bg-purple-600/30 transition-colors cursor-default">
                    MongoDB
                  </span>
                  <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm font-medium hover:bg-purple-600/30 transition-colors cursor-default">
                    PostgreSQL
                  </span>
                  <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm font-medium hover:bg-purple-600/30 transition-colors cursor-default">
                    Git
                  </span>
                  <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm font-medium hover:bg-purple-600/30 transition-colors cursor-default">
                    Docker
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section - Full screen */}
      <section id="qualifications" className="min-h-screen flex items-center py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Qualifications</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-16 rounded-full"></div>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            My educational background, professional certifications, and work experience that have shaped my career.
          </p>

          {/* Tabs for different qualification types */}
          <Tabs defaultValue="education" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="education" className="data-[state=active]:bg-purple-600">
                <GraduationCap className="h-4 w-4 mr-2" />
                Education
              </TabsTrigger>
              <TabsTrigger value="certifications" className="data-[state=active]:bg-purple-600">
                <Certificate className="h-4 w-4 mr-2" />
                Certifications
              </TabsTrigger>
              <TabsTrigger value="experience" className="data-[state=active]:bg-purple-600">
                <Briefcase className="h-4 w-4 mr-2" />
                Experience
              </TabsTrigger>
            </TabsList>

            {/* Education Content */}

            <TabsContent value="education" className="mt-0">
              <div className="space-y-8">
                <div className="flex gap-6 items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-600 transition-colors">
                  <div className="bg-purple-600/20 p-3 rounded-full flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between items-start w-full mb-2">
                      <h3 className="text-xl font-bold pr-4">MSc in Computer Science (Merit)</h3>
                      <span className="text-purple-400 text-sm font-medium px-3 py-1 bg-purple-500/10 rounded-full flex-shrink-0">
                        2023-2024
                      </span>
                    </div>
                    <p className="text-gray-300">York St' Johns University</p>
                    <p className="text-gray-400 mt-3">
                      Advanced studies in computer science with a focus on modern software development and systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-600 transition-colors">
                  <div className="bg-purple-600/20 p-3 rounded-full flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between items-start w-full mb-2">
                      <h3 className="text-xl font-bold pr-4">
                        BSc.(Hons) in Software Engineering - 2nd Upper Honorary
                      </h3>
                      <span className="text-purple-400 text-sm font-medium px-3 py-1 bg-purple-500/10 rounded-full flex-shrink-0">
                        2017-2020
                      </span>
                    </div>
                    <p className="text-gray-300">University of Plymouth</p>
                    <p className="text-gray-400 mt-3">
                      Comprehensive education in software engineering principles, development methodologies, and
                      practical applications.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Certifications Content */}
            <TabsContent value="certifications" className="mt-0">
              <div className="space-y-8">
                <div className="flex gap-6 items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-600 transition-colors">
                  <div className="bg-purple-600/20 p-3 rounded-full flex-shrink-0">
                    <Certificate className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">Red Hat Certified System Administrator</h3>
                      <span className="text-purple-400 text-sm font-medium px-3 py-1 bg-purple-500/10 rounded-full">
                        October 01, 2019
                      </span>
                    </div>
                    <p className="text-gray-300">Red Hat</p>
                    <p className="text-gray-400 mt-3">Certification ID: 190-250-332</p>
                    <p className="text-gray-400 mt-1">
                      Validated expertise in essential system administration skills including installation,
                      configuration, and management of Red Hat Enterprise Linux systems.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Experience Content */}
            <TabsContent value="experience" className="mt-0">
              <div className="space-y-8">
                <div className="flex gap-6 items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-600 transition-colors">
                  <div className="bg-purple-600/20 p-3 rounded-full flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">IT Executive</h3>
                      <span className="text-purple-400 text-sm font-medium px-3 py-1 bg-purple-500/10 rounded-full">
                        May 2024 - April 2025
                      </span>
                    </div>
                    <p className="text-gray-300">Swadisht Italian Pizzaria</p>
                    <div className="mt-3 space-y-2">
                      <p className="text-gray-400">
                        <span className="text-purple-400">•</span> Enhanced Online Presence by optimizing and
                        maintaining the restaurant's website, improving functionality and search rankings through SEO
                        strategies.
                      </p>
                      <p className="text-gray-400">
                        <span className="text-purple-400">•</span> Strengthened Brand Identity by designing marketing
                        materials with consistent and visually appealing brand presence.
                      </p>
                      <p className="text-gray-400">
                        <span className="text-purple-400">•</span> Improved Operational Efficiency by providing IT
                        support, minimizing technical disruptions and ensuring smooth daily operations.
                      </p>
                      <p className="text-gray-400">
                        <span className="text-purple-400">•</span> Increased IT Security by leading training sessions on
                        IT best practices, equipping employees with essential technical skills.
                      </p>
                      <p className="text-gray-400">
                        <span className="text-purple-400">•</span> Increased User Engagement & Control by developing
                        interactive dashboards using React, Angular, Bootstrap, and JavaScript.
                      </p>
                      <p className="text-gray-400">
                        <span className="text-purple-400">•</span> Enhanced System Reliability & Performance by
                        identifying and resolving bugs across multiple browsers and devices.
                      </p>
                      <p className="text-gray-400">
                        <span className="text-purple-400">•</span> Improved Usability & Customer Satisfaction by
                        designing intuitive, user-friendly interfaces with Figma and Photoshop.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-600 transition-colors">
                  <div className="bg-purple-600/20 p-3 rounded-full flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">Junior Developer</h3>
                      <span className="text-purple-400 text-sm font-medium px-3 py-1 bg-purple-500/10 rounded-full">
                        July 2022 - January 2023
                      </span>
                    </div>
                    <p className="text-gray-300">Kasper Global Pvt Ltd</p>
                    <div className="mt-3 space-y-2">
                      <p className="text-gray-400">
                        <span className="text-purple-400">•</span> Accelerated SDLC by collaborating with senior
                        developers, following best coding practices, and optimizing development workflows.
                      </p>
                      <p className="text-gray-400">
                        <span className="text-purple-400">•</span> Reduced Debugging Time by documenting errors,
                        troubleshooting steps, and best practices.
                      </p>
                      <p className="text-gray-400">
                        <span className="text-purple-400">•</span> Contributed to front-end development using
                        JavaScript, HTML, and CSS to create responsive user interfaces.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-600 transition-colors">
                  <div className="bg-purple-600/20 p-3 rounded-full flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">Web Developer</h3>
                      <span className="text-purple-400 text-sm font-medium px-3 py-1 bg-purple-500/10 rounded-full">
                        April 2021 - June 2022
                      </span>
                    </div>
                    <p className="text-gray-300">Don Bosco International Media Academy</p>
                    <div className="mt-3 space-y-2">
                      <p className="text-gray-400">
                        <span className="text-purple-400">•</span> Delivered High-Quality Web Applications by
                        collaborating with an Agile Scrum team, ensuring timely and efficient project completion.
                      </p>
                      <p className="text-gray-400">
                        <span className="text-purple-400">•</span> Built a Scalable Backend using PHP and MySQL for a
                        Student Management System, ensuring secure data handling and smooth system operations.
                      </p>
                      <p className="text-gray-400">
                        <span className="text-purple-400">•</span> Optimized Payment Processing by integrating a secure
                        payment gateway, enabling hassle-free online student fee transactions.
                      </p>
                      <p className="text-gray-400">
                        <span className="text-purple-400">•</span> Enhanced Application Performance by designing REST
                        APIs for seamless front-end and back-end communication.
                      </p>
                      <p className="text-gray-400">
                        <span className="text-purple-400">•</span> Improved UI/UX & Visibility by developing a dynamic
                        Angular-based application with SCSS, JavaScript, and Bootstrap.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Design Section - Full screen */}
      <section id="design" className="min-h-screen flex items-center py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Graphic Design</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-16 rounded-full"></div>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Showcasing my creative work and design capabilities across various mediums and styles.
          </p>

          {/* Design Skills Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-black/40 p-6 rounded-xl border border-gray-800 hover:border-purple-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-600/20 p-3 rounded-full">
                  <Palette className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold">Visual Identity</h3>
              </div>
              <p className="text-gray-300">
                Creating cohesive brand identities through logos, color palettes, typography, and visual guidelines.
              </p>
            </div>

            <div className="bg-black/40 p-6 rounded-xl border border-gray-800 hover:border-purple-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-600/20 p-3 rounded-full">
                  <Layers className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold">Digital Illustration</h3>
              </div>
              <p className="text-gray-300">
                Crafting custom illustrations, icons, and visual elements for web, mobile, and print applications.
              </p>
            </div>

            <div className="bg-black/40 p-6 rounded-xl border border-gray-800 hover:border-purple-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-600/20 p-3 rounded-full">
                  <Code className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold">UI/UX Design</h3>
              </div>
              <p className="text-gray-300">
                Designing intuitive user interfaces and experiences that balance aesthetics with functionality.
              </p>
            </div>
          </div>

          {/* Design Portfolio Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Design Item 1 */}
            <div className="group relative overflow-hidden rounded-xl aspect-square bg-gray-800">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Brand Identity Design"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold text-white">Brand Identity</h4>
                <p className="text-gray-200 mt-2">Complete visual identity for a tech startup</p>
              </div>
            </div>

            {/* Design Item 2 */}
            <div className="group relative overflow-hidden rounded-xl aspect-square bg-gray-800">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Mobile App UI Design"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold text-white">Mobile App UI</h4>
                <p className="text-gray-200 mt-2">User interface design for a fitness tracking app</p>
              </div>
            </div>

            {/* Design Item 3 */}
            <div className="group relative overflow-hidden rounded-xl aspect-square bg-gray-800">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Website Redesign Concept"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold text-white">Website Redesign</h4>
                <p className="text-gray-200 mt-2">Modern redesign concept for a travel agency website</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Full screen */}
      <section id="projects" className="min-h-screen flex items-center py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-16 rounded-full"></div>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            A selection of projects showcasing my skills and experience in web development and design.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative h-[200px]">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 1" fill className="object-cover" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">E-Commerce Platform</h3>
                  <Code className="h-5 w-5 text-purple-500" />
                </div>
                <p className="text-gray-400">
                  A full-stack e-commerce solution with modern UI and secure payment processing.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">Node.js</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">MongoDB</span>
                </div>
                <div className="flex gap-4 pt-2">
                  <Link href="#" className="text-purple-500 hover:text-purple-400 flex items-center">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Link>
                  <Link href="#" className="text-purple-500 hover:text-purple-400 flex items-center">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative h-[200px]">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 2" fill className="object-cover" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Mobile App Prototype</h3>
                  <Layers className="h-5 w-5 text-purple-500" />
                </div>
                <p className="text-gray-400">
                  Interactive prototype for a fitness tracking mobile application with user-centered design.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">Figma</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">Prototyping</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">UI/UX</span>
                </div>
                <div className="flex gap-4 pt-2">
                  <Link href="#" className="text-purple-500 hover:text-purple-400 flex items-center">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Project
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative h-[200px]">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 3" fill className="object-cover" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Dashboard Interface</h3>
                  <Code className="h-5 w-5 text-purple-500" />
                </div>
                <p className="text-gray-400">
                  Data visualization dashboard with real-time analytics and responsive design.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">Next.js</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">D3.js</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">Tailwind</span>
                </div>
                <div className="flex gap-4 pt-2">
                  <Link href="#" className="text-purple-500 hover:text-purple-400 flex items-center">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Link>
                  <Link href="#" className="text-purple-500 hover:text-purple-400 flex items-center">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Full screen */}
      <section id="contact" className="min-h-screen flex items-center py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Contact</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-16 rounded-full"></div>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Let's Work Together</h3>
              <p className="text-gray-300 text-lg">
                I'm currently available for freelance work and full-time positions. If you have a project that needs
                some creative coding or design, feel free to reach out.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-purple-500 mr-3" />
                  <span>hishan@example.com</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-purple-500 mr-3" />
                  <span>linkedin.com/in/hishan</span>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 text-purple-500 mr-3" />
                  <span>github.com/hishan</span>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Subject"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Hishan Abeysiriwardana. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
