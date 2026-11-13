import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { COURSES } from '@/data/courses';
import CitbCalculator from '@/components/CitbCalculator';
import GuaranteedDeliveryBanner from '@/components/GuaranteedDeliveryBanner';
import { Award, CheckCircle2, ShieldCheck, ArrowRight, ExternalLink, HelpCircle, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CITB Subsidies & Training Rebates South Australia | Carlisle Learning RTO 0581',
  description: 'Save hundreds on nationally recognised training with CITB subsidies at Carlisle Learning. White Card, Civil Plant Excavator, Bobcat, Forklift, and Traffic Management subsidies for eligible South Australian construction workers.'
};

export default function CitbSubsidiesPage() {
  const citbCourses = COURSES.filter((c) => c.citbSubsidy && c.citbSubsidy > 0);

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              <Award className="w-4 h-4" />
              Construction Industry Training Board (CITB) South Australia
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              CITB Training Subsidies & Funding
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Eligible South Australian building and construction workers, apprentices, and licensed trade employers can access significant subsidies across our civil equipment, safety induction, and high-risk licensing programs.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                Instant Subsidy Deduction at Carlisle Learning
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <CheckCircle2 className="w-4 h-4" />
                Save Up To $1,300 Per Machine Ticket
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CitbCalculator />
      </div>

      {/* Transparent CITB Subsidies Price Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">
            Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            South Australian CITB Subsidised Course Fees
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            Compare full standard fees against your subsidised out-of-pocket costs with active CITB registration.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6">Course Code & Name</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">Standard Price</th>
                  <th className="py-4 px-6 text-emerald-400 font-bold">CITB Subsidy</th>
                  <th className="py-4 px-6 text-amber-400 font-bold">Your Net Fee</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {citbCourses.map((c) => {
                  const net = c.price - (c.citbSubsidy || 0);
                  return (
                    <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-slate-900">
                        <div className="flex flex-col">
                          <span className="text-xs font-black text-amber-600">{c.code}</span>
                          <span>{c.shortTitle || c.title}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-xs text-slate-500 font-medium whitespace-nowrap">
                        {c.categoryLabel}
                      </td>
                      <td className="py-4 px-6 text-slate-400 line-through font-medium">
                        ${c.price}
                      </td>
                      <td className="py-4 px-6 text-emerald-600 font-extrabold whitespace-nowrap">
                        -${c.citbSubsidy}
                      </td>
                      <td className="py-4 px-6 text-base font-black text-slate-900 whitespace-nowrap">
                        ${net}
                      </td>
                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        <Link
                          href={`/contact?course=${encodeURIComponent(c.code)}&citb=true`}
                          className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors inline-block"
                        >
                          Enrol
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CITB Eligibility & How to Claim */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-black">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Who is Eligible for CITB Funding?
            </h3>
            <div className="space-y-2 text-sm text-slate-600 leading-relaxed">
              <p>To qualify for CITB training subsidies in South Australia, you must:</p>
              <ul className="space-y-2 pl-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                  <span>Work in the South Australian building and construction industry.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                  <span>Be an Australian Citizen or Permanent Resident working in SA.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                  <span>Hold a valid CITB number (8 digits, or starting with 9 for apprentices).</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-black">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Don&apos;t Have a CITB Number Yet?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Applying for CITB registration is free and takes only a few minutes online. You can register on the official CITB website, and once approved, provide your number to Carlisle Learning when booking.
            </p>
            <div className="pt-2">
              <a
                href="https://www.citb.org.au"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
              >
                <span>Visit CITB.org.au to Apply</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>
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

