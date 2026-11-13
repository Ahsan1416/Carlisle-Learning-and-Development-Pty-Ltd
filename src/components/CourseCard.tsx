'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Course } from '@/data/courses';
import { Clock, MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onBookNow?: (courseTitle: string) => void;
}

export default function CourseCard({ course, onBookNow }: CourseCardProps) {
  const netCitbPrice = course.citbSubsidy ? course.price - course.citbSubsidy : null;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      {/* Course Image Header */}
      <div className="relative h-48 sm:h-52 w-full bg-slate-800 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
        
        {/* Unit Code Tag */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 rounded-md text-xs font-black tracking-wider bg-slate-900/90 text-amber-400 backdrop-blur-sm border border-amber-400/30">
            {course.code}
          </span>
          <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">
            {course.categoryLabel}
          </span>
        </div>

        {/* CITB Subsidy Tag */}
        {course.citbSubsidy && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-600 text-white shadow-md flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              CITB Subsidised
            </span>
          </div>
        )}

        {/* Bottom Title on Image */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-extrabold text-lg leading-snug line-clamp-2 drop-shadow">
            {course.shortTitle || course.title}
          </h3>
        </div>
      </div>

      {/* Course Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Metadata chips */}
          <div className="flex items-center gap-4 text-xs text-slate-500 border-b border-slate-100 pb-3">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-500" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-500" />
              Mount Barker & On-Site
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {course.description}
          </p>

          {/* Quick learning points preview */}
          <ul className="space-y-1 text-xs text-slate-600">
            {course.outcomes.slice(0, 2).map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & CTAs */}
        <div className="pt-4 mt-4 border-t border-slate-100 flex items-end justify-between gap-3">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-600 block font-semibold">
              Course Fee
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900">
                ${course.price}
              </span>
              {course.citbSubsidy && (
                <div className="flex flex-col">
                  <span className="text-xs text-emerald-600 font-bold">
                    ${netCitbPrice} (With CITB)
                  </span>
                </div>
              )}
            </div>
            {course.citbSubsidy && (
              <span className="text-[10px] text-slate-600 font-semibold">
                Save ${course.citbSubsidy} for eligible SA workers
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/courses/${course.id}`}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="View full course information"
            >
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={() => onBookNow ? onBookNow(course.title) : (window.location.href = `/contact?course=${encodeURIComponent(course.code)}`)}
              className="px-4 py-2 rounded-xl text-xs font-extrabold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shadow-sm active:scale-95"
            >
              Enrol Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

