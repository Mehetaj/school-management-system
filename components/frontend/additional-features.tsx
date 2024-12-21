"use client"
import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Users, BookOpen, DollarSign, BarChart2, Sparkles } from 'lucide-react'
// import featureImage from '/images/features.webp'
import Image from 'next/image'

interface Feature {
    title: string
    description: string
    features: string[]
    buttonText: string
}

const features: Record<string, Feature> = {
    students: {
        title: "Student Management",
        description: "Comprehensive student information system for managing enrollments, profiles, and academic records with ease",
        features: [
            "Digital student profiles with complete academic history",
            "Automated enrollment and registration process",
            "Parent portal access with real-time updates",
            "Student performance tracking and analytics",
            "Digital document management for student records",
            "Custom fields for additional student information",
            "Bulk student data import/export capabilities",
            "Student behavior and disciplinary record tracking"
        ],
        buttonText: "Learn more about Student Management"
    },
    academics: {
        title: "Academic Management",
        description: "Streamline curriculum planning, examinations, grading, and report card generation in one unified system",
        features: [
            "Dynamic curriculum and syllabus management",
            "Automated grade calculation and GPA tracking",
            "Custom report card generation",
            "Assignment and homework management",
            "Online examination system with multiple question types",
            "Academic calendar management",
            "Course and class scheduling",
            "Learning resource distribution"
        ],
        buttonText: "Learn more about Academic Management"
    },
    finance: {
        title: "Financial Management",
        description: "Complete fee management system with online payments, invoicing, and comprehensive financial reporting",
        features: [
            "Online fee payment gateway integration",
            "Automated invoice generation",
            "Payment reminder system",
            "Financial reporting and analytics",
            "Salary and payroll management",
            "Expense tracking and budgeting",
            "Scholarship management",
            "Multiple payment method support"
        ],
        buttonText: "Learn more about Financial Management"
    },
    analytics: {
        title: "Analytics & Reports",
        description: "Powerful analytics tools for data-driven decisions with customizable reporting and insights",
        features: [
            "Customizable dashboard with key metrics",
            "Performance trend analysis",
            "Attendance and enrollment statistics",
            "Financial insights and projections",
            "Student progress tracking",
            "Staff performance analytics",
            "Custom report generation",
            "Data export in multiple formats"
        ],
        buttonText: "Learn more about Analytics & Reports"
    }
}

export default function AdditionalFeatures() {
    const [activeTab, setActiveTab] = useState("students")

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="mb-4">
                        <Sparkles className="w-4 h-4 mr-1" />
                        Additional Features
                    </Badge>
                    <h1 className="text-4xl font-bold mb-4">
                        All-in-One School Management Platform
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                        Streamline your entire school operations with our comprehensive suite of integrated modules
                        designed specifically for modern educational institutions.
                    </p>
                </div>

                {/* Features Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
                    <TabsList className="grid grid-cols-4 max-w-2xl mx-auto">
                        <TabsTrigger value="students" className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span className="hidden sm:inline">Students</span>
                        </TabsTrigger>
                        <TabsTrigger value="academics" className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            <span className="hidden sm:inline">Academics</span>
                        </TabsTrigger>
                        <TabsTrigger value="finance" className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            <span className="hidden sm:inline">Finance</span>
                        </TabsTrigger>
                        <TabsTrigger value="analytics" className="flex items-center gap-2">
                            <BarChart2 className="w-4 h-4" />
                            <span className="hidden sm:inline">Analytics</span>
                        </TabsTrigger>
                    </TabsList>

                    {Object.entries(features).map(([key, feature]) => (
                        <TabsContent key={key} value={key} className="space-y-4">
                            <div className="grid lg:grid-cols-[1fr,400px] gap-8">
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
                                    <p className="text-muted-foreground mb-8">{feature.description}</p>

                                    <Card className="p-6">
                                        <ul className="grid gap-4">
                                            {feature.features.map((item, index) => (
                                                <li key={index} className="flex gap-4">
                                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                                                        {index + 1}
                                                    </span>
                                                    <span className="text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>

                                    <Button className="mt-6" size="lg">
                                        {feature.buttonText}
                                    </Button>
                                </div>

                                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image src="/images/features.webp" alt='Features Image' width={512} height={875}/>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}

