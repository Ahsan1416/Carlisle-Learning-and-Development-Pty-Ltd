import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import GuaranteedDeliveryBanner from '@/components/GuaranteedDeliveryBanner';
import { Award, ShieldCheck, CheckCircle2, Clock, MapPin, ArrowRight, Phone, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Austroads Temporary Traffic Management (TTM) Courses SA | Carlisle Learning',
  description: 'Approved Austroads Training Provider in South Australia. Traffic Controller (TC1/TC2) and Traffic Management Implementer (TMI1/TMI2) courses with CITB subsidies.'
};

export default function TrafficManagementPage() {
  const trafficCourses = [
    {
      code: 'RIISS00058 / RIISS00060',
      title: 'Combination Traffic Controller (TC1) & Implementer (TMI1)',
      scope: 'Category 1: Urban Streets & Low Volume Rural Roads',
      price: 1200,
      citbSubsidy: 440,
      netPrice: 760,
      duration: '2 – 3 Days',
      description: 'The premier entry ticket for traffic control. Covers stop/slow bat operations, road closure setups, and implementing traffic control guidance schemes.'
    },
    {
      code: 'RIISS00059 / RIISS00061',
      title: 'Combination Traffic Controller (TC2) & Implementer (TMI2)',
      scope: 'Category 2: High Volume Roads & Expressways',
      price: 1100,
      citbSubsidy: 295,
      netPrice: 805,
      duration: '2 Days',
      description: 'Advanced qualifications for high-speed multi-lane roads, highway tapers, and truck-mounted attenuator coordination.'
    },
    {
      code: 'RIISS00058',
      title: 'Traffic Controller Skill Set (TC1 Only)',
      scope: 'Urban Streets & Low Volume Rural Roads',
      price: 900,
      citbSubsidy: 310,
      netPrice: 590,
      duration: '1 – 2 Days',
      description: 'Dedicated Stop/Slow bat operator skill set for controlling moving vehicular and pedestrian traffic safely around work zones.'
    },
    {
      code: 'RIISS00059',
      title: 'Traffic Controller Skill Set (TC2 Only)',
      scope: 'High Volume Roads',
      price: 700,
      citbSubsidy: 185,
      netPrice: 515,
      duration: '1 Day',
      description: 'Upgrade your traffic control ticket to manage high volume, high-speed arterial corridors.'
    },
    {
      code: 'RIISS00060',
      title: 'Traffic Management Implementer Skill Set (TMI1 Only)',
      scope: 'Urban Streets & Low Volume Rural Roads',
      price: 850,
      citbSubsidy: 280,
      netPrice: 570,
      duration: '1 – 2 Days',
      description: 'Learn to interpret traffic guidance schemes, position signs, barriers, cones, and ensure site compliance.'
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              Approved Austroads Training Provider
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Temporary Traffic Management (TTM)
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              As an official Approved Training Provider for Austroads, Carlisle Learning delivers certified Temporary Traffic Management programs scheduled regularly and on-demand to match your civil and infrastructure timelines.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                CITB Rebates Available (Save up to $440)
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <CheckCircle2 className="w-4 h-4" />
                Guaranteed Course Delivery
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <Image
              src="/images/traffic-management-hero.jpg"
              alt="Austroads Temporary Traffic Management Training"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/20" />
          </div>
        </div>
      </div>

      {/* Course Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
            National Skill Sets
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Austroads TTM Courses on Offer
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            Whether you require entry-level controller certification or advanced high-speed expressway implementer skill sets, our courses ensure full regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {trafficCourses.map((tc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-3">
                  <span className="px-3 py-1 rounded-md text-xs font-black bg-slate-900 text-amber-400">
                    {tc.code}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Save ${tc.citbSubsidy} (CITB)
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {tc.title}
                </h3>

                <p className="text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg inline-block">
                  {tc.scope}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {tc.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    {tc.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    Mount Barker & Road Site
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-slate-900">${tc.price}</span>
                    <span className="text-xs text-emerald-600 font-bold">(${tc.netPrice} with CITB)</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Fee includes learning materials & assessment</span>
                </div>

                <Link
                  href={`/contact?course=${encodeURIComponent(tc.code)}`}
                  className="px-5 py-2.5 rounded-xl font-black text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors"
                >
                  Enrol / Enquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guaranteed Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GuaranteedDeliveryBanner />
      </div>
    </div>
  );
}

