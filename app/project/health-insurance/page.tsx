"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Calendar,
  User,
  Target,
  BarChart3,
  Shield,
  ExternalLink,
  TrendingUp,
  Users,
  MapPin,
  Building2,
} from "lucide-react"
import Link from "next/link"

export default function HealthInsuranceProject() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" asChild className="text-gray-600 hover:text-purple-600">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <h1 className="text-lg font-semibold text-gray-800">Health Insurance Analysis</h1>
          <div className="w-24" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Project Info */}
        <Card className="border-purple-200 bg-white/80 shadow-xl mb-8 backdrop-blur-sm">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl text-gray-800 mb-2 flex items-center">
                  <Shield className="h-6 w-6 text-violet-500 mr-3" />
                  Health Insurance and Facilities in West Java (2020)
                </CardTitle>
                <p className="text-gray-600">
                  Comprehensive analysis of healthcare infrastructure and insurance coverage in West Java using advanced
                  data visualization tools
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <Calendar className="h-6 w-6 text-violet-500 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Year</p>
                <p className="font-semibold text-gray-800">2020</p>
              </div>
              <div className="text-center">
                <User className="h-6 w-6 text-violet-500 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Author</p>
                <p className="font-semibold text-gray-800">Sekar</p>
              </div>
              <div className="text-center">
                <Target className="h-6 w-6 text-violet-500 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Focus</p>
                <p className="font-semibold text-gray-800">Healthcare Analytics</p>
              </div>
              <div className="text-center">
                <BarChart3 className="h-6 w-6 text-violet-500 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Tools</p>
                <p className="font-semibold text-gray-800">Tableau & Excel</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge className="bg-gradient-to-r from-violet-100 to-purple-200 text-violet-700 border border-violet-300">
                Tableau
              </Badge>
              <Badge className="bg-gradient-to-r from-green-100 to-emerald-200 text-green-700 border border-green-300">
                Microsoft Excel
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-100 to-indigo-200 text-blue-700 border border-blue-300">
                Regional Analysis
              </Badge>
              <Badge className="bg-gradient-to-r from-orange-100 to-amber-200 text-orange-700 border border-orange-300">
                Healthcare Infrastructure
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Image */}
        <Card className="border-purple-200 bg-white/80 shadow-xl mb-8 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-800">Health Insurance & Facilities Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden border border-purple-300">
              <img
                src="/images/health-insurance-dashboard.png"
                alt="Health Insurance and Facilities in West Java Dashboard"
                className="w-full h-auto"
              />
            </div>
          </CardContent>
        </Card>

        {/* Top 3 Key Insights */}
        <Card className="border-purple-200 bg-white/80 shadow-xl mb-8 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-800 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-violet-500" />
              Top 3 Key Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-violet-400 pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <MapPin className="h-4 w-4 text-violet-500 mr-2" />
                  1. Regional Coverage Disparity
                </h4>
                <p className="text-gray-600 mb-2">
                  <strong className="text-violet-600">Kabupaten Bogor</strong> leads significantly in health insurance
                  coverage with nearly <strong className="text-violet-600">3 million insured residents</strong>,
                  followed by Kabupaten Bekasi and Sukabumi. This indicates major urban and peri-urban areas have better
                  insurance penetration.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <Building2 className="h-4 w-4 text-blue-500 mr-2" />
                  2. Facility Distribution Imbalance
                </h4>
                <p className="text-gray-600 mb-2">
                  Health facility distribution doesn't correlate proportionally with insured population.{" "}
                  <strong className="text-blue-600">Kabupaten Bogor</strong> has the highest insured population but{" "}
                  <strong className="text-blue-600">Kabupaten Bandung</strong> leads in health facilities, suggesting
                  potential access issues in high-coverage areas.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <Users className="h-4 w-4 text-green-500 mr-2" />
                  3. High Overall Coverage Achievement
                </h4>
                <p className="text-gray-600 mb-2">
                  West Java achieved an impressive{" "}
                  <strong className="text-green-600">94.74% health insurance coverage</strong> (35.4 million people)
                  with <strong className="text-green-600">55,670 health facilities</strong>, indicating strong universal
                  health coverage progress but leaving 1.9 million people uninsured.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Coverage Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-purple-200 bg-white/80 shadow-xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-800 flex items-center">
                <Users className="mr-2 h-5 w-5 text-violet-500" />
                Coverage Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-3xl font-bold text-green-600 mb-2">94.74%</p>
                  <p className="text-gray-600 text-sm">Total Coverage Rate</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Insured Population</span>
                  <span className="text-green-600 font-semibold">35.4M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Uninsured Population</span>
                  <span className="text-red-500 font-semibold">1.9M</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-white/80 shadow-xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-800 flex items-center">
                <Building2 className="mr-2 h-5 w-5 text-violet-500" />
                Health Facilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-3xl font-bold text-blue-600 mb-2">55,670</p>
                  <p className="text-gray-600 text-sm">Total Facilities</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Public Hospitals</span>
                  <span className="text-blue-600 font-semibold">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Private Hospitals</span>
                  <span className="text-cyan-500 font-semibold">89</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-white/80 shadow-xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-800 flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-violet-500" />
                Top Regions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Kab. Bogor</span>
                  <span className="text-violet-600 font-semibold">~3M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Kab. Bekasi</span>
                  <span className="text-blue-500 font-semibold">~2.5M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Kab. Sukabumi</span>
                  <span className="text-green-500 font-semibold">~2M</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <Card className="border-purple-200 bg-white/80 shadow-xl mb-8 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-800">Strategic Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  <strong className="text-gray-800">Facility Expansion Priority:</strong> Prioritize building new health
                  facilities in Kabupaten Bogor and other high-insured population areas to prevent healthcare
                  bottlenecks and improve access-to-care ratios.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  <strong className="text-gray-800">Coverage Gap Closure:</strong> Launch intensive outreach programs in
                  underserved regions to close the 5.26% coverage gap and achieve true universal health coverage for all
                  37.3 million West Java residents.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  <strong className="text-gray-800">Resource Optimization:</strong> Implement data-driven resource
                  allocation to balance facility distribution with population density and insurance coverage patterns
                  across all kabupaten/kota.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* View Interactive Dashboard */}
        <Card className="border-purple-200 bg-white/80 shadow-xl backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <Shield className="h-16 w-16 text-violet-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Tableau Dashboard</h3>
            <p className="text-gray-600 mb-6">
              Explore the complete interactive visualization with detailed regional breakdowns, facility mapping, and
              dynamic coverage analysis
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg shadow-violet-500/25"
            >
              <Link
                href="https://public.tableau.com/views/Book1_17223329128220/HealthInsuranceinWestJava"
                target="_blank"
              >
                View Interactive Dashboard <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
