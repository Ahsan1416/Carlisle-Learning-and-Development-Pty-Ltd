import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import GuaranteedDeliveryBanner from '@/components/GuaranteedDeliveryBanner';
import { ShieldCheck, CheckCircle2, Clock, FileCheck, ArrowRight, Phone, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Verification of Competency (VOC) Adelaide & SA | Carlisle Learning RTO 0581',
  description: 'Nationally compliant Verification of Competency (VOC) assessments for earthmoving plant, civil machinery, and high risk work licences across South Australia. On-site at your project or our Mount Barker facility.'
};

export default function VocPage() {
  const machineryList = [
    'Hydraulic Excavator (RIIMPO320F / 301E)',
    'Civil Skid Steer Loader / Bobcat (RIIMPO318F)',
    'Wheeled Front End Loader (RIIMPO321F / 304E)',
    'Smooth Drum & Padfoot Roller (RIIMPO317F)',
    'Backhoe Loader (RIIMPO319F)',
    'Telescopic Materials Handler / Telehandler (RIIHAN309F)',
    'Forklift Truck LF (TLILIC0003)',
    'Boom-Type Elevated Work Platform WP > 11m (TLILIC0005)',
    'Elevating Work Platform Scissor Lift < 11m (RIIHAN301E)',
    'Water Vehicle (RIIMPO326E)',
    'Articulated & Rigid Haul Trucks (RIIMPO337E / 338E)',
    'Civil Construction Dozer & Grader (RIIMPO323E / 324F)',
    'Chainsaws & Farm Tractors (AHCMOM213 / 202)'
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Work Health & Safety Compliance Assessment
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Verification of Competency (VOC)
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Confirm your workers are safe, skilled, and fully compliant with current WHS legislation. Carlisle Learning delivers rigorous on-site and yard VOC assessments for tier-1 civil, mining, and construction sites throughout South Australia.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5 text-amber-400">
                <CheckCircle2 className="w-4 h-4" />
                Valid for 2 Years
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                Conducted by Accredited SafeWork SA / RTO Assessors
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* What is a VOC & Assessment Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                What is a Verification of Competency (VOC)?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A Verification of Competency (VOC) is an industry-standard method used by employers, principal contractors, and site supervisors to ensure workers have retained the critical skills and knowledge required to operate specific machinery safely.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                While a High-Risk Work Licence or Statement of Attainment confirms initial certification, a VOC demonstrates that an operator is currently competent and up-to-date with current safety standards and machinery controls.
              </p>
            </div>

            {/* Assessment Structure */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                How is the VOC Assessment Conducted?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Theory Knowledge Check</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A thorough review of operator safety rules, risk management, emergency controls, load capacity ratings, and WHS obligations.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Practical Demonstration</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct hands-on demonstration of pre-start inspections, machine maneuvering, load handling, shutdown, and site risk awareness.
                  </p>
                </div>
              </div>
            </div>

            {/* Evidence Requirements */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileCheck className="w-6 h-6 text-amber-500" />
                Evidence Required from Candidates
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                To undergo a VOC assessment, participants must already hold prior formal proof of training:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Statement of Attainment for the relevant unit of competency, OR</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Valid High-Risk Work Licence (HRWL) for applicable equipment (e.g. LF, WP), OR</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Recognised previous training or grandfathered operator tickets</span>
                </li>
              </ul>
              <div className="p-3.5 rounded-xl bg-slate-100 text-slate-600 text-xs mt-3">
                <em>Note: A VOC is an assessment of existing competency and does not replace the requirement for an initial High-Risk Work Licence or Nationally Recognised qualification.</em>
              </div>
            </div>
          </div>

          {/* Right Column: Machines & Bookings */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Equipment Covered
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  Plant & Machinery for VOC
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  We assess single machines or multi-plant operators in one session:
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-300">
                {machineryList.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-2 py-1 border-b border-slate-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                    <span className="line-clamp-1">{m}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Card Validity:</span>
                  <span className="font-bold text-white">2 Years with Date of Issue</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Add to Certificate Course:</span>
                  <span className="font-bold text-emerald-400">Yes (Discounted rate)</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <Link
                  href="/contact?course=VOC"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book Corporate VOC Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:0883985468"
                  className="w-full py-3 px-6 rounded-xl font-bold text-xs bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call (08) 8398 5468 For Group Quotes</span>
                </a>
              </div>
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

