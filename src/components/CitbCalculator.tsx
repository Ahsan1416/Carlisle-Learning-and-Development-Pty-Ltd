'use client';

import React, { useState } from 'react';
import { COURSES } from '@/data/courses';
import { Award, CheckCircle2, ArrowRight, HelpCircle, Calculator } from 'lucide-react';

interface CitbCalculatorProps {
  onOpenBooking?: (courseTitle: string) => void;
}

export default function CitbCalculator({ onOpenBooking }: CitbCalculatorProps) {
  const citbCourses = COURSES.filter(c => c.citbSubsidy && c.citbSubsidy > 0);
  const [selectedCourseId, setSelectedCourseId] = useState<string>(citbCourses[0]?.id || '');
  const [enrolmentType, setEnrolmentType] = useState<'individual' | 'employer'>('individual');
  const [attendeeCount, setAttendeeCount] = useState<number>(1);

  const selectedCourse = citbCourses.find(c => c.id === selectedCourseId) || citbCourses[0];
  const unitPrice = selectedCourse.price;
  const unitSubsidy = selectedCourse.citbSubsidy || 0;
  const unitNet = unitPrice - unitSubsidy;

  const totalFullPrice = unitPrice * attendeeCount;
  const totalSubsidy = unitSubsidy * attendeeCount;
  const totalNet = unitNet * attendeeCount;
  const percentageSaved = Math.round((unitSubsidy / unitPrice) * 100);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-2xl border border-emerald-500/20 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              CITB South Australia Funding Estimator
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Calculate Your CITB Training Subsidies
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
              Eligible South Australian building & construction workers, apprentices, and registered employers can save hundreds of dollars per ticket through Construction Industry Training Board (CITB) funding.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-white block">Save up to {percentageSaved}%</span>
              <span className="text-slate-400">Direct discount off course fees</span>
            </div>
          </div>
        </div>

        {/* Interactive Controls & Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label htmlFor="citb-course-select" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. Select Course with CITB Funding
              </label>
              <select
                id="citb-course-select"
                aria-label="Select course with CITB funding"
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3.5 text-white font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                {citbCourses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.code} – {c.title} (Subsidy: ${c.citbSubsidy})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  2. Booking Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setEnrolmentType('individual')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                      enrolmentType === 'individual'
                        ? 'bg-emerald-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Individual / Tradie
                  </button>
                  <button
                    type="button"
                    onClick={() => setEnrolmentType('employer')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                      enrolmentType === 'employer'
                        ? 'bg-emerald-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Company / Crew
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="citb-students-count" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  3. Number of Students
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="citb-students-count"
                    type="number"
                    min={1}
                    max={50}
                    value={attendeeCount}
                    onChange={(e) => setAttendeeCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-white font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none text-center"
                  />
                  <span className="text-xs text-slate-400 whitespace-nowrap">Attendee(s)</span>
                </div>
              </div>
            </div>

            {/* Eligibility Criteria checklist */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-slate-300">
              <span className="font-bold text-white flex items-center gap-1.5 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                CITB Eligibility Checklist:
              </span>
              <p>• Must be an eligible South Australian building and construction worker or apprentice.</p>
              <p>• Hold an active CITB Registration Number (card starts with &apos;9&apos; or 8 digits).</p>
              <p>• Carlisle Learning verifies your CITB number directly upon enrolment for instant subsidy deduction.</p>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950/80 border border-emerald-500/30 rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Estimated Summary ({attendeeCount} {attendeeCount > 1 ? 'attendees' : 'attendee'})
                </span>
                <h4 className="text-lg font-bold text-white mt-1">
                  {selectedCourse.shortTitle || selectedCourse.code}
                </h4>

                <div className="space-y-3 mt-5 pt-4 border-t border-white/10 text-sm">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Standard Full Price:</span>
                    <span className="line-through text-slate-500 font-semibold">${totalFullPrice}</span>
                  </div>

                  <div className="flex justify-between items-center text-emerald-400 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      CITB Subsidy Savings:
                    </span>
                    <span>-${totalSubsidy}</span>
                  </div>

                  <div className="flex justify-between items-baseline pt-4 border-t border-white/10">
                    <div>
                      <span className="text-xs uppercase font-extrabold text-amber-400 block tracking-wider">
                        Your Net Out-of-Pocket:
                      </span>
                      <span className="text-3xl sm:text-4xl font-black text-white">
                        ${totalNet}
                      </span>
                      <span className="text-xs text-slate-400 block">
                        (${unitNet} per person)
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold text-xs">
                        SAVE {percentageSaved}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => onOpenBooking ? onOpenBooking(selectedCourse.title) : (window.location.href = `/contact?course=${encodeURIComponent(selectedCourse.code)}&citb=true`)}
                  className="w-full py-3.5 px-6 rounded-xl font-black text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2"
                >
                  <span>Enrol With CITB Discount</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-400">
                  Questions? Call our Mount Barker office at <a href="tel:0883985468" className="text-amber-400 underline font-semibold">(08) 8398 5468</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

