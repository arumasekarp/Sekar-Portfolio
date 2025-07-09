"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Linkedin,
  Mail,
  Lightbulb,
  FolderOpen,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  ArrowUp,
  BarChart3,
  TrendingUp,
  Database,
  Shield,
  Activity,
  Award,
  Maximize2,
  Building2,
  Code,
  Users,
  Star,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)
  const [selectedSiInvenImage, setSelectedSiInvenImage] = useState<string | null>(null)

  const skills = ["Data Analytics", "System Analysis", "Information Systems", "Problem Solving", "Research & Reporting"]

  const projects = [
    {
      id: 1,
      title: "Monthly Regional Tax Revenue Realization Data",
      author: "Wahyu Aji Aruma Sekar Puri",
      tags: ["SQL", "Preprocessing", "Visualize"],
      icon: <TrendingUp className="h-5 w-5" />,
      link: "https://drive.google.com/drive/folders/1CZvB8-pLuZaEF56Cwy4qd4K3bPlyrOQW?usp=sharing",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      id: 2,
      title: "Employee Welfare Data",
      author: "Diptolk Team",
      tags: ["Data Analytics", "Research", "Classification", "Regression"],
      icon: <Database className="h-5 w-5" />,
      link: "https://drive.google.com/drive/folders/1szJSHNlsdIS06PEXitjN8HhbVr4qvEHq?usp=sharing",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      id: 3,
      title: '"Oke Gas" Meta Ads Performance Analytics',
      author: "Wahyu Aji Aruma Sekar Puri",
      tags: ["Digital Marketing", "Performance Analytics"],
      icon: <TrendingUp className="h-5 w-5" />,
      link: "https://drive.google.com/drive/folders/1-xh37YBk18w1NGPokMSZfTNBTXmzuqfC?usp=sharing",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      id: 4,
      title: "Outstanding of Private Deposits (March 2025)",
      author: "Wahyu Aji Aruma Sekar Puri",
      tags: ["Financial Analysis", "Banking"],
      icon: <BarChart3 className="h-5 w-5" />,
      link: "https://drive.google.com/drive/folders/1NKcvaRddUxSpK1wPRh8Bb1rSEpauzuQW?usp=sharing",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      id: 5,
      title: "Netflix Userbase (2023)",
      author: "Wahyu Aji Aruma Sekar Puri",
      tags: ["Data Visualization", "Entertainment Analytics"],
      icon: <Activity className="h-5 w-5" />,
      link: "/project/netflix",
      gradient: "from-red-500 to-pink-600",
    },
    {
      id: 6,
      title: "Health Insurance and Facilities in West Java (2020)",
      author: "Wahyu Aji Aruma Sekar Puri",
      tags: ["Healthcare Analytics", "Tableau"],
      icon: <Shield className="h-5 w-5" />,
      link: "/project/health-insurance",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      id: 7,
      title: "Credit Risk (2024)",
      author: "Wahyu Aji Aruma Sekar Puri",
      tags: ["Data Preprocessing", "Risk Analysis"],
      icon: <Database className="h-5 w-5" />,
      link: "https://drive.google.com/drive/folders/1DobW9W8r5NJkFq6fLvZ7JytFuZCmC_fA?usp=sharing",
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      id: 8,
      title: "FukiKnow Systems",
      author: "Wahyu Aji Aruma Sekar Puri (with team)",
      tags: ["UI/UX", "Figma", "System Analytic"],
      icon: <Database className="h-5 w-5" />,
      link: "https://www.figma.com/proto/jlydqbwiCvBCcZv5PRUgVB/FukiKnow?node-id=4451-560&p=f&t=TLWDhSOasWHiYVpB-1&scaling=scale-down&content-scaling=fixed&page-id=4403%3A42&starting-point-node-id=4451%3A560",
      gradient: "from-orange-600 to-indigo-600",
    },
    {
      id: 9,
      title: "Sustainify Systems",
      author: "Wahyu Aji Aruma Sekar Puri (with team)",
      tags: ["UI/UX", "Figma", "System Analytic", "Workflow System"],
      icon: <Database className="h-5 w-5" />,
      link: "https://drive.google.com/file/d/15pq2Vt7yHpzEAc_46Pi52F0zrpN9ufvM/view",
      gradient: "from-green-600 to-indigo-600",
    },
  ]

  const certificates = [
    {
      id: 1,
      title: "Intro to Data Analytics",
      issuer: "RevoU",
      date: "August 2024",
      image: "/images/certificate-revou.jpeg",
      type: "Mini Course",
    },
    {
      id: 2,
      title: "Data Wrangling Python",
      issuer: "DQLab",
      date: "January 2023",
      image: "/images/certificate-dqlab.jpeg",
      type: "Certification",
    },
    {
      id: 3,
      title: "Data Visualisation: Empowering Business",
      issuer: "TATA & Forage",
      date: "January 2025",
      image: "/images/certificate-tata.jpeg",
      type: "Professional Certificate",
    },
    {
      id: 4,
      title: "Introduction to Data Science with Python",
      issuer: "DQLab",
      date: "January 2023",
      image: "/images/certificate-dqlab-intro-python.jpeg",
      type: "Certification",
    },
    {
      id: 5,
      title: "Python Fundamental for Data Science",
      issuer: "DQLab",
      date: "January 2023",
      image: "/images/certificate-dqlab-python-fundamental.jpeg",
      type: "Certification",
    },
  ]

  const siInvenImages = ["/images/si-inven-1.jpeg", "/images/si-inven-2.jpeg", "/images/si-inven-3.jpeg"]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Preload background image for better performance
    const img = new Image()
    img.src = "/images/portfolio-collage.png"
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const openCertificateModal = (image: string) => {
    setSelectedCertificate(image)
  }

  const closeCertificateModal = () => {
    setSelectedCertificate(null)
  }

  const openSiInvenModal = (image: string) => {
    setSelectedSiInvenImage(image)
  }

  const closeSiInvenModal = () => {
    setSelectedSiInvenImage(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 relative overflow-hidden">
      {/* Optimized Animated Background for Mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 md:w-80 h-60 md:h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 md:opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-60 md:w-80 h-60 md:h-80 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 md:opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 md:opacity-15 animate-pulse delay-500"></div>
      </div>

      {/* Optimized Scroll Blur Effect */}
      <div
        className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none z-10 hidden md:block"
        style={{
          backdropFilter: `blur(${Math.min(scrollY / 100, 3)}px)`,
          opacity: Math.min(scrollY / 500, 0.3),
        }}
      ></div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              onClick={closeCertificateModal}
              size="icon"
              className="absolute -top-12 right-0 bg-gray-800 hover:bg-[#7E4B96] text-white z-10"
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <img
                src={selectedCertificate || "/placeholder.svg"}
                alt="Certificate"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* SI INVEN Modal */}
      {selectedSiInvenImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              onClick={closeSiInvenModal}
              size="icon"
              className="absolute -top-12 right-0 bg-gray-800 hover:bg-[#7E4B96] text-white z-10"
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <img
                src={selectedSiInvenImage || "/placeholder.svg"}
                alt="SI INVEN System"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
            Sekar's Portfolio
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-purple-600"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Certifications
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 border-t border-purple-800/30 p-4">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("certifications")}
                className="text-gray-600 hover:text-purple-600 transition-colors text-left"
              >
                Certifications
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="container mx-auto px-4 py-16 md:py-20 relative z-20 min-h-[60vh] md:min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `url('/images/portfolio-collage.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll", // Changed from fixed for mobile performance
        }}
      >
        {/* Background Overlay with Responsive Blur */}
        <div className="absolute inset-0 bg-white/70 md:bg-white/60 backdrop-blur-[1px] md:backdrop-blur-[2px] rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10 text-center w-full">
          <div className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-purple-500/50 ring-4 ring-purple-500/20">
            <img
              src="/images/profile.jpeg"
              alt="Wahyu Aji Aruma Sekar Puri"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Wahyu Aji Aruma Sekar Puri</h1>
          <p className="text-base md:text-lg text-gray-600 mb-6">Information Systems Student</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-[#7E4B96] hover:to-purple-700 text-white shadow-lg shadow-purple-500/25 text-sm md:text-base px-4 md:px-6"
            >
              View Projects <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-12 relative z-20">
        <div className="grid gap-6 md:gap-8">
          {/* University */}
          <Card className="border-purple-200 bg-white/80 shadow-xl hover:shadow-2xl transition-shadow backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Education</h3>
                  <p className="text-gray-600">
                    <strong>Universitas Indonesia</strong>
                    <br />
                    Information Systems Major
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="border-purple-200 bg-white/80 shadow-xl hover:shadow-2xl transition-shadow backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <Mail className="h-5 w-5 text-purple-400 mr-2" />
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-4 w-4 text-blue-400" />
                  <Link
                    href="https://www.linkedin.com/in/wahyu-aji-aruma-sekar-puri-251021244"
                    className="text-blue-400 hover:text-blue-300 hover:underline text-sm transition-colors"
                    target="_blank"
                  >
                    LinkedIn Profile
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-purple-400" />
                  <Link
                    href="mailto:wahyu.aji21@ui.ac.id"
                    className="text-purple-400 hover:text-purple-300 hover:underline text-sm transition-colors"
                  >
                    wahyu.aji21@ui.ac.id
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="border-purple-200 bg-white/80 shadow-xl hover:shadow-2xl transition-shadow backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <Lightbulb className="h-5 w-5 text-purple-400 mr-2" />
                Interest & Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 border border-purple-300 hover:bg-purple-200 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Professional Experience - SI INVEN */}
          <Card className="border-purple-200 bg-white/80 shadow-xl hover:shadow-2xl transition-shadow backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <Building2 className="h-5 w-5 text-blue-500 mr-2" />
                Professional Experience
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2">Contract Developer</h4>
                    <p className="text-gray-600 mb-2">
                      <strong>LB LIA English Course</strong>
                    </p>
                    <div className="mb-4">
                      <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border border-blue-300 mb-2">
                        System Development
                      </Badge>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Database className="h-4 w-4 text-blue-500 mr-2" />
                        SI INVEN (Sistem Informasi Inventaris)
                      </h5>
                      <p className="text-gray-600 text-sm mb-3">
                        Developed a comprehensive inventory management system to streamline asset tracking, procurement
                        processes, and inventory operations for Yayasan LIA's educational facilities.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" className="bg-white/80 text-blue-600 border border-blue-300 text-xs">
                          Web Development
                        </Badge>
                        <Badge variant="secondary" className="bg-white/80 text-blue-600 border border-blue-300 text-xs">
                          Database Design
                        </Badge>
                        <Badge variant="secondary" className="bg-white/80 text-blue-600 border border-blue-300 text-xs">
                          System Analysis
                        </Badge>
                        <Badge variant="secondary" className="bg-white/80 text-blue-600 border border-blue-300 text-xs">
                          UI/UX Design
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SI INVEN Images Gallery */}
                <div className="mt-6">
                  <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Users className="h-4 w-4 text-blue-500 mr-2" />
                    System Overview
                  </h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    {siInvenImages.map((image, index) => (
                      <div
                        key={index}
                        className="rounded-lg overflow-hidden border border-blue-200 cursor-pointer hover:border-blue-400 transition-colors group"
                        onClick={() => openSiInvenModal(image)}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`SI INVEN System ${index + 1}`}
                          className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs mt-2 text-center">Click images to view in full size</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-12 relative z-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Main Projects</h2>
          <p className="text-gray-600 mb-6">Explore my portfolio of data analytics and system analysis projects</p>
        </div>

        {/* Google Drive Link - Enhanced Design */}
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm mb-8 relative overflow-hidden group">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/40 to-violet-300/30 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-200/40 to-purple-300/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500 delay-100"></div>

          {/* Sparkle Effects */}
          <div className="absolute top-4 left-4 text-purple-300/60 group-hover:text-purple-400/80 transition-colors">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="absolute top-6 right-8 text-violet-300/60 group-hover:text-violet-400/80 transition-colors">
            <Star className="h-3 w-3" />
          </div>
          <div className="absolute bottom-4 right-4 text-indigo-300/60 group-hover:text-indigo-400/80 transition-colors">
            <Sparkles className="h-3 w-3" />
          </div>

          <CardContent className="p-8 text-center relative z-10">
            {/* Enhanced Icon */}
            <div className="relative mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl w-fit mx-auto shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-105">
                <FolderOpen className="h-16 w-16 text-white" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-violet-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            </div>

            {/* Enhanced Text */}
            <div className="space-y-3 mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                🚀 Complete Portfolio Collection
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Discover my comprehensive collection of data analytics projects, visualizations, UI/UX, and system analysis
                work
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-purple-600">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-medium">7+ Projects Available</span>
                <Star className="h-4 w-4 fill-current" />
              </div>
            </div>

            {/* Enhanced Button */}
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 text-base md:text-lg px-8 py-3 group-hover:scale-105 font-semibold"
            >
              <Link
                href="https://drive.google.com/drive/folders/1HVoQgibbP8chfq4T9ydxkEwawEB4vBZw?usp=sharing"
                target="_blank"
                className="flex items-center gap-3"
              >
                <FolderOpen className="h-5 w-5" />
                View Full Portfolio
                <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            {/* Subtle Badge */}
            <div className="mt-4">
              <Badge className="bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 border border-purple-300 px-3 py-1">
                Google Drive Collection
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="border-purple-200 bg-white/80 shadow-xl hover:shadow-2xl transition-all duration-300 group backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-300 transition-colors flex items-center">
                      <span className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} mr-3`}>{project.icon}</span>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">oleh {project.author}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border border-gray-300 hover:border-purple-400 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
                </div>
                <Button
                  asChild
                  size="sm"
                  className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white shadow-lg`}
                >
                  <Link href={project.link} target={project.link.startsWith("http") ? "_blank" : "_self"}>
                    View Details <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="container mx-auto px-4 py-12 relative z-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Certifications</h2>
          <p className="text-gray-600 mb-6">Professional certifications and completed courses</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className="border-purple-200 bg-white/80 shadow-xl hover:shadow-2xl transition-all duration-300 group backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg mr-3">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm group-hover:text-yellow-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => openCertificateModal(cert.image)}
                    size="icon"
                    variant="ghost"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>

                <div
                  className="rounded-lg overflow-hidden border border-purple-700/30 mb-4 cursor-pointer group-hover:border-yellow-500/50 transition-colors"
                  onClick={() => openCertificateModal(cert.image)}
                >
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-500/30"
                  >
                    {cert.type}
                  </Badge>
                  <span className="text-gray-600 text-xs">{cert.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-purple-200 py-8 relative z-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">© 2025 Wahyu Aji Aruma Sekar Puri. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-[#7E4B96] hover:to-purple-700 shadow-lg shadow-purple-500/25 z-50"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
