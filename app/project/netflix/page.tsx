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
  Activity,
  TrendingDown,
  AlertTriangle,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function NetflixProject() {
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
          <h1 className="text-lg font-semibold text-gray-800">Netflix Userbase Analysis</h1>
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
                  <Activity className="h-6 w-6 text-red-500 mr-3" />
                  Netflix Userbase (2023)
                </CardTitle>
                <p className="text-gray-600">
                  Comprehensive analysis of Netflix subscription patterns, user demographics, and revenue insights using
                  advanced data visualization
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <Calendar className="h-6 w-6 text-red-500 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Year</p>
                <p className="font-semibold text-gray-800">2023</p>
              </div>
              <div className="text-center">
                <User className="h-6 w-6 text-red-500 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Author</p>
                <p className="font-semibold text-gray-800">Sekar</p>
              </div>
              <div className="text-center">
                <Target className="h-6 w-6 text-red-500 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Focus</p>
                <p className="font-semibold text-gray-800">User Analytics</p>
              </div>
              <div className="text-center">
                <BarChart3 className="h-6 w-6 text-red-500 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Tools</p>
                <p className="font-semibold text-gray-800">Power BI & Excel</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge className="bg-gradient-to-r from-red-100 to-red-200 text-red-700 border border-red-300">
                Microsoft Power BI
              </Badge>
              <Badge className="bg-gradient-to-r from-green-100 to-green-200 text-green-700 border border-green-300">
                Microsoft Excel
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border border-blue-300">
                Subscription Analysis
              </Badge>
              <Badge className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 border border-orange-300">
                Revenue Analytics
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Image 1 */}
        <Card className="border-purple-200 bg-white/80 shadow-xl mb-8 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-800">Subscription & Demographics Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden border border-purple-300">
              <img
                src="/images/netflix-dashboard.png"
                alt="Netflix Subscription Analysis Dashboard"
                className="w-full h-auto"
              />
            </div>
          </CardContent>
        </Card>

        {/* Top 3 Key Insights - Dashboard 1 */}
        <Card className="border-purple-200 bg-white/80 shadow-xl mb-8 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-800 flex items-center">
              <BarChart3 className="mr-2 h-5 w-5 text-red-500" />
              Top 3 Key Insights - Market & User Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-red-400 pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  1. Market Concentration in Core English-Speaking Markets
                </h4>
                <p className="text-gray-600 mb-2">
                  Spain and United States dominate the subscription base with{" "}
                  <strong className="text-red-600">451 subscribers each</strong>, representing 36% of total
                  subscriptions (902 out of 2,500). This indicates heavy reliance on these mature markets.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  2. Balanced Gender Distribution with Slight Male Preference
                </h4>
                <p className="text-gray-600 mb-2">
                  The gender split shows relatively balanced distribution (
                  <strong className="text-blue-600">1.24K female vs 1.26K male</strong>), with males having a slight
                  1.6% advantage. This suggests Netflix content appeals broadly across genders without significant bias.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">3. Device Usage Preference Hierarchy</h4>
                <p className="text-gray-600 mb-2">
                  Smart TV leads device usage (<strong className="text-green-600">636 users</strong>), followed by
                  Smartphone (633), Tablet (621), and Laptop (610). The relatively even distribution suggests
                  multi-device consumption behavior, with slight preference for larger screens.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Image 2 */}
        <Card className="border-purple-200 bg-white/80 shadow-xl mb-8 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-800">Revenue & Subscription Plans Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden border border-purple-300">
              <img
                src="/images/netflix-dashboard-2.png"
                alt="Netflix Revenue Analysis Dashboard"
                className="w-full h-auto"
              />
            </div>
          </CardContent>
        </Card>

        {/* Top 3 Key Insights - Dashboard 2 */}
        <Card className="border-purple-200 bg-white/80 shadow-xl mb-8 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-800 flex items-center">
              <TrendingDown className="mr-2 h-5 w-5 text-red-500" />
              Top 3 Key Insights - Revenue Crisis Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
                  1. Severe Revenue Decline After Peak Performance
                </h4>
                <p className="text-gray-600 mb-2">
                  Revenue peaked at <strong className="text-red-600">15.30K in April 2022</strong>, then dramatically
                  crashed by 31% to 10.57K in July 2022, followed by continuous decline to just 0.14K by April 2023.
                  This represents a <strong className="text-red-600">99% revenue drop</strong> from peak, indicating a
                  critical business crisis requiring immediate intervention.
                </p>
              </div>

              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  2. Premium Plan Dominance but Basic Plan Revenue Leadership
                </h4>
                <p className="text-gray-600 mb-2">
                  Premium plans lead in subscriber count (
                  <strong className="text-orange-600">999 vs 768 Standard vs 733 Basic</strong>), yet Basic plans
                  generate the highest revenue (12K vs 10K Standard vs 9K Premium). This pricing paradox suggests either
                  Premium pricing is too low or Basic pricing is too high relative to value proposition.
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <Globe className="h-4 w-4 text-yellow-600 mr-2" />
                  3. US Market Revenue Concentration Risk
                </h4>
                <p className="text-gray-600 mb-2">
                  United States generates <strong className="text-yellow-600">38% of total revenue</strong> (5.66K out
                  of ~15K total), creating dangerous over-dependence. Spain follows as second (5.67K), while other
                  markets contribute significantly less. This concentration makes Netflix vulnerable to US market
                  disruptions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-purple-200 bg-white/80 shadow-xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-800">Market Diversification Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h5 className="font-semibold text-red-600 mb-2">Immediate Action:</h5>
                  <p className="text-sm">
                    Reduce over-dependence on Spain/US by investing in high-growth potential markets like Brazil,
                    Canada, and Australia
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-red-600 mb-2">Long-term Strategy:</h5>
                  <p className="text-sm">
                    Develop localized content for underperforming regions (France, Germany, Italy) to increase market
                    penetration
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-white/80 shadow-xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-800">Emergency Revenue Recovery Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h5 className="font-semibold text-red-600 mb-2">Crisis Response:</h5>
                  <p className="text-sm">Form emergency task force to identify root cause of 99% revenue decline</p>
                </div>
                <div>
                  <h5 className="font-semibold text-red-600 mb-2">Content Strategy:</h5>
                  <p className="text-sm">
                    Audit content library and user engagement metrics from April 2022 peak vs current state
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
