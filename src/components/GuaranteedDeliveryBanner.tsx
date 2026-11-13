import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function GuaranteedDeliveryBanner() {
  return (
    <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-300 relative overflow-hidden">
      <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-white/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-950/10 text-slate-900 font-extrabold text-[11px] uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
              Our Carlisle Learning Commitment
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950">
              Guaranteed Course Delivery — Never Cancelled
            </h3>
            <p className="text-sm font-medium text-slate-900/90 max-w-2xl leading-relaxed">
              If your course is booked, we guarantee to run it. No disruptions, no last-minute cancellations, and no lost workdays for your crew. Book with complete confidence.
            </p>
          </div>
        </div>

        <Link
          href="/courses"
          className="shrink-0 px-6 py-3.5 rounded-xl font-black text-sm bg-slate-950 text-white hover:bg-slate-900 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2"
        >
          <span>View Course Dates</span>
          <ArrowRight className="w-4 h-4 text-amber-400" />
        </Link>
      </div>
    </div>
  );
}

