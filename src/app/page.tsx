import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COURSES } from '@/data/courses';
import CourseCard from '@/components/CourseCard';
import CitbCalculator from '@/components/CitbCalculator';
import GuaranteedDeliveryBanner from '@/components/GuaranteedDeliveryBanner';
import CertificateReplacementCard from '@/components/CertificateReplacementCard';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Calendar, 
  Truck, 
  HardHat, 
  Clock, 
  MapPin, 
  FileCheck, 
  Users 
} from 'lucide-react';

export default function HomePage() {
  const featuredCourses = COURSES.filter((c) => c.featured);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* ========================================================
          HERO SECTION
      ======================================================== */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-12 pb-20 sm:pb-28 overflow-hidden">
        {/* Ambient lighting & grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* RTO Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold tracking-wide">
                <ShieldCheck className="w-4 h-4" />
                <span>Registered Training Organisation (RTO 0581 Since 2003)</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Quality Industry Equipment & <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400">
                  Workplace Training
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Carlisle Learning is your trusted South Australian RTO based in <strong className="text-white">Mount Barker</strong> & <strong className="text-white">Murray Bridge</strong>. We specialise in certified White Card, High-Risk Licences, Civil Plant, Chainsaw, and Austroads Traffic Management.
              </p>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs text-slate-200 font-semibold">100% Guaranteed Course Delivery</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-slate-200 font-semibold">CITB Subsidies for SA Workers</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <Truck className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs text-slate-200 font-semibold">On-Site & Yard Plant Training</span>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/courses"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-sm sm:text-base bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-xl hover:shadow-amber-500/25 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Explore Courses & Bookings</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/citb-subsidies"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl font-bold text-sm sm:text-base bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 transition-all flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Check CITB Subsidies</span>
                </Link>

                <a
                  href="tel:0883985468"
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl font-semibold text-sm sm:text-base text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>(08) 8398 5468</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 group">
                <div className="relative h-96 sm:h-[460px] w-full">
                  <Image
                    src="/images/heavy-equipment-hero.jpg"
                    alt="Carlisle Learning Heavy Equipment and Civil Plant"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-xs space-y-1">
                  <div className="flex items-center justify-between text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                    <span>Mount Barker Training Facility</span>
                    <span>SA 5251</span>
                  </div>
                  <p className="text-white font-medium text-sm">
                    Modern fleet of excavators, forklifts, boom lifts, rollers, and earthmoving plant.
                  </p>
                </div>
              </div>

              {/* Floating CITB Pill */}
              <div className="hidden sm:flex absolute -top-4 -left-6 bg-slate-900/95 border border-emerald-500/40 rounded-2xl p-3.5 shadow-xl items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">CITB Subsidies</span>
                  <span className="text-xs font-semibold text-white">Save Up To $1,300 Per Course</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ACCREDITATION LOGOS ROW
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 block">
              Official Industry Accreditations & Regulators
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
            {/* NRT */}
            <div className="flex flex-col items-center text-center p-3">
              <div className="relative w-36 h-14">
                <Image
                  src="/images/nrt-nationally-recognised-training.png"
                  alt="Nationally Recognised Training"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[11px] font-bold text-slate-700 mt-2">Nationally Recognised Training</span>
            </div>

            {/* CITB */}
            <div className="flex flex-col items-center text-center p-3">
              <div className="relative w-36 h-14">
                <Image
                  src="/images/citb-accredited.png"
                  alt="Construction Industry Training Board SA"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[11px] font-bold text-emerald-700 mt-2">CITB Approved Provider</span>
            </div>

            {/* Austroads */}
            <div className="flex flex-col items-center text-center p-3">
              <div className="relative w-36 h-14">
                <Image
                  src="/images/austroads-approved.png"
                  alt="Austroads Approved Training Provider"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[11px] font-bold text-slate-700 mt-2">Approved Austroads TTM</span>
            </div>

            {/* AQF RTO */}
            <div className="flex flex-col items-center text-center p-3">
              <div className="relative w-36 h-14">
                <Image
                  src="/images/aqf-qualification.jpg"
                  alt="Australian Qualifications Framework"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[11px] font-bold text-slate-700 mt-2">RTO 0581 • Registered Since 2003</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FEATURED POPULAR COURSES
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-wider mb-2">
              <HardHat className="w-3.5 h-3.5" />
              Regular Timetabled Intakes
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Featured Workplace & Equipment Courses
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
              Courses run on a regular basis at Mount Barker or on-site across South Australia. Guaranteed to run when booked.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-amber-600 hover:text-amber-700"
          >
            <span>View All 20+ Courses on Offer</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* ========================================================
          GUARANTEED COURSE DELIVERY PROMISE BANNER
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GuaranteedDeliveryBanner />
      </section>

      {/* ========================================================
          CITB REBATE CALCULATOR
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CitbCalculator />
      </section>

      {/* ========================================================
          WHY CHOOSE CARLISLE LEARNING
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            Why Choose Carlisle Learning
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Built for Tradies, Earthmovers & Primary Producers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Since 2003, Carlisle Learning (RTO 0581) has provided hands-on, compliant vocational training throughout the Adelaide Hills, Murraylands, and Fleurieu Peninsula.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 hover:border-amber-400 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-black">
              <Calendar className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Guaranteed Course Dates
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              If your course is booked, we guarantee to run it. No unexpected cancellations delaying your project starts, apprentice tickets, or site inductions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 hover:border-emerald-400 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-black">
              <Truck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              On-Site or Yard Training
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Train on our dedicated heavy equipment fleet at our Mount Barker facility, or let our accredited assessors travel directly to your mine, farm, or civil job site.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 hover:border-amber-400 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-black">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Maximum CITB Subsidies
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              As an authorized CITB provider, we verify your eligibility and apply generous rebates instantly, saving your business thousands across your workforce.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          LOST CERTIFICATE & REPLACEMENT CARD
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CertificateReplacementCard />
      </section>

      {/* ========================================================
          LOCATION & TRAINING CENTRE MAP SECTION
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12">
          {/* Info Side */}
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                South Australia Location
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                Visit Our Mount Barker Training Centre
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Conveniently located in the Adelaide Hills with extensive plant machinery yards, simulated confined space chambers, scaffolding height training, and modern classrooms.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Carlisle Learning Centre</strong>
                  <span className="text-slate-300">20 Oborn Road, Mount Barker SA 5251</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <a href="tel:0883985468" className="text-amber-400 font-bold hover:underline">
                  (08) 8398 5468
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-slate-300">Monday – Friday: 8:00 AM – 4:30 PM</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors"
              >
                <span>Book In Person Or Call Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Visual Map / Facility Card */}
          <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full bg-slate-800">
            <Image
              src="/images/equipment-lineup.png"
              alt="Carlisle Learning Yard Equipment Fleet"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/40" />
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
              <div className="bg-slate-950/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 max-w-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mx-auto font-black text-xl">
                  SA
                </div>
                <h4 className="text-white font-extrabold text-lg">Adelaide Hills & Murraylands</h4>
                <p className="text-xs text-slate-300">
                  Easy highway access from South Eastern Freeway, serving Mount Barker, Murray Bridge, Strathalbyn, Adelaide, and the Fleurieu region.
                </p>
                <a
                  href="https://maps.google.com/?q=20+Oborn+Road+Mount+Barker+SA+5251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-amber-400 text-xs font-bold transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
