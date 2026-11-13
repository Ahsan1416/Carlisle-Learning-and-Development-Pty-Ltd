import React from 'react';
import { Metadata } from 'next';
import CourseSearch from '@/components/CourseSearch';
import GuaranteedDeliveryBanner from '@/components/GuaranteedDeliveryBanner';
import { HardHat, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Full List of Courses on Offer | Carlisle Learning RTO 0581',
  description: 'Explore all certified workplace training courses offered by Carlisle Learning in Mount Barker SA. Construction safety, White Card, Forklift LF, Boom Lift WP, Civil Excavator, Skid Steer, Chainsaw, and Austroads Traffic Management.'
};

export default function CoursesPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <HardHat className="w-3.5 h-3.5" />
              Nationally Recognised Training Catalog
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Courses & Bookings
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Browse our comprehensive range of regularly timetabled courses and on-demand corporate training programs. All courses are delivered by experienced accredited assessors using compliant plant and equipment.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5 text-amber-400">
                <ShieldCheck className="w-4 h-4" />
                Guaranteed Course Delivery
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Award className="w-4 h-4" />
                CITB Rebates for Eligible SA Workers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Search & Filter Catalog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CourseSearch />
      </div>

      {/* Guaranteed Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GuaranteedDeliveryBanner />
      </div>
    </div>
  );
}

