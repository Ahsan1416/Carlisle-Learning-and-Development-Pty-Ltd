import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { COURSES } from '@/data/courses';
import GuaranteedDeliveryBanner from '@/components/GuaranteedDeliveryBanner';
import { 
  Clock, 
  MapPin, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  Phone, 
  Calendar, 
  FileCheck, 
  Users, 
  HelpCircle 
} from 'lucide-react';

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.id,
  }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((c) => c.id === slug);

  if (!course) {
    return { title: 'Course Not Found | Carlisle Learning' };
  }

  return {
    title: `${course.code} – ${course.shortTitle || course.title} | Carlisle Learning RTO 0581`,
    description: course.overview || course.description,
    openGraph: {
      title: `${course.code} – ${course.title} | Carlisle Learning`,
      description: course.description,
      images: [{ url: course.image }]
    }
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.id === slug);

  if (!course) {
    notFound();
  }

  const netCitb = course.citbSubsidy ? course.price - course.citbSubsidy : null;

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${course.code} - ${course.title}`,
    description: course.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Carlisle Learning & Development Pty Ltd',
      sameAs: 'https://www.carlislelearning.com.au'
    },
    offers: {
      '@type': 'Offer',
      price: course.price,
      priceCurrency: 'AUD',
      category: course.categoryLabel,
      availability: 'https://schema.org/InStock'
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Onsite',
      courseWorkload: course.duration,
      location: {
        '@type': 'Place',
        name: 'Carlisle Learning Centre',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '20 Oborn Road',
          addressLocality: 'Mount Barker',
          addressRegion: 'SA',
          postalCode: '5251',
          addressCountry: 'AU'
        }
      }
    }
  };

  return (
    <div className="py-8 sm:py-12 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-amber-600 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all courses
        </Link>
      </div>

      {/* Course Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800 text-white grid grid-cols-1 lg:grid-cols-12">
          {/* Left Details */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-black tracking-wider bg-amber-500 text-slate-950">
                  {course.code}
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-white/10 text-slate-300">
                  {course.categoryLabel}
                </span>
                {course.citbSubsidy && (
                  <span className="px-3 py-1 rounded-md text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    CITB Subsidised
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Quick Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block font-semibold">Duration:</span>
                <span className="text-white font-bold flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {course.duration}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">Location:</span>
                <span className="text-white font-bold flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Mount Barker / On-site
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-slate-400 block font-semibold">RTO Code:</span>
                <span className="text-white font-bold flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  RTO 0581 (Since 2003)
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-950">
            <Image
              src={course.image}
              alt={course.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
          </div>
        </div>
      </div>

      {/* Main Content & Sticky Booking Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-10">
            {/* Overview Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Course Overview & Objectives
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {course.overview}
              </p>
            </div>

            {/* What You Will Learn (Outcomes) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Key Learning Outcomes & Units Covered
              </h2>
              <ul className="space-y-3">
                {course.outcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Entry Requirements & Prerequisites */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <FileCheck className="w-6 h-6 text-amber-500" />
                Prerequisites & What to Bring
              </h2>
              <ul className="space-y-2.5">
                {course.prerequisites.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1 mt-4">
                <strong className="block font-bold">Important SafeWork SA / USI Compliance:</strong>
                <p>
                  All candidates must supply their Unique Student Identifier (USI) and photo identification prior to statement of attainment issuance. For high-risk licences, 100 points of original ID are legally required on assessment day.
                </p>
              </div>
            </div>

            {/* Target Audience */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <Users className="w-6 h-6 text-amber-500" />
                Who Should Enrol?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {course.targetAudience}
              </p>
            </div>
          </div>

          {/* Sticky Booking & Pricing Sidebar */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-500/30 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                  Course Investment & Subsidies
                </span>
                <div className="flex items-baseline gap-3 mt-2">
                  <span className="text-4xl font-black text-slate-900">
                    ${course.price}
                  </span>
                  <span className="text-xs text-slate-600 font-semibold">
                    (Standard Fee)
                  </span>
                </div>

                {course.citbSubsidy && (
                  <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                    <div className="flex justify-between items-center text-xs font-bold text-emerald-800">
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4 text-emerald-600" />
                        CITB Eligible Price:
                      </span>
                      <span className="text-lg font-black text-emerald-700">${netCitb}</span>
                    </div>
                    <p className="text-[11px] text-emerald-700">
                      Eligible South Australian workers save <strong>${course.citbSubsidy}</strong> per person with active CITB registration.
                    </p>
                  </div>
                )}
              </div>

              {/* Guarantees */}
              <div className="space-y-2.5 text-xs text-slate-600 border-t border-b border-slate-100 py-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>100% Guaranteed to Run</strong> when booked</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Nationally accredited Statement of Attainment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Experienced assessors & modern fleet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Corporate on-site delivery available across SA</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Link
                  href={`/contact?course=${encodeURIComponent(course.code)}`}
                  className="w-full py-4 px-6 rounded-2xl font-black text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2 text-center"
                >
                  <span>Enquire / Book This Course</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:0883985468"
                  className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call (08) 8398 5468</span>
                </a>
              </div>
            </div>

            {/* Replacement Card Note */}
            <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 space-y-2">
              <span className="font-bold text-slate-900 block">Already completed this course in the past?</span>
              <p>
                Need a replacement card or statement reprinted? Carlisle Learning issues replacement cards for $40 with fast verification.
              </p>
              <Link href="/resources#lost-card" className="text-amber-600 font-bold hover:underline inline-block">
                Request replacement card →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Guaranteed Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GuaranteedDeliveryBanner />
      </div>
    </div>
  );
}
