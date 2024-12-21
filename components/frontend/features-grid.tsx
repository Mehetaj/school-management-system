import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Users, Calendar, Clipboard, DollarSign, BookOpen } from 'lucide-react'
import SectionHeader from "./section-header"


const features = [
    {
        icon: User,
        title: "Student Management",
        description: "Efficiently track and manage student data, including profiles, attendance, and grades.",
    },
    {
        icon: Users,
        title: "Teacher Management",
        description: "Streamline teacher schedules, performance tracking, and classroom assignments.",
    },
    {
        icon: Calendar,
        title: "Class Scheduling",
        description: "Create, modify, and manage dynamic timetables with ease.",
    },
    {
        icon: Clipboard,
        title: "Examination Management",
        description: "Automate exam creation, scheduling, and results processing for accuracy and speed.",
    },
    {
        icon: DollarSign,
        title: "Fee Management",
        description: "Simplify fee collection, invoices, and payment tracking with real-time updates.",
    },
    {
        icon: BookOpen,
        title: "Library Management",
        description: "Organize library resources, track borrowing, and manage catalog updates effortlessly.",
    }
];



export default function FeaturesGrid() {
    return (
        <section className="py-10 bg-white container mx-auto max-w-6xl">
            <SectionHeader title="Features" heading="All-in-One School Management Platform
" description="Streamline your entire school operations with our comprehensive suite of integrated modules designed specifically for modern educational institutions.

"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((module, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <module.icon className="w-6 h-6 text-primary" /> {module.title}
                            </CardTitle>
                            <CardDescription>{module.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src="/images/features.webp"
                                alt={module.title}
                                width={600}
                                height={300}
                                className="rounded-lg object-cover"
                            />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

