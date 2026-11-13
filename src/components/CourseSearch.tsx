'use client';

import React, { useState, useMemo } from 'react';
import { COURSES, CATEGORIES } from '@/data/courses';
import CourseCard from '@/components/CourseCard';
import BookingModal from '@/components/BookingModal';
import { Search, Filter, Award, Sparkles, X } from 'lucide-react';

interface CourseSearchProps {
  initialCategory?: string;
}

export default function CourseSearch({ initialCategory = 'all' }: CourseSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [citbOnly, setCitbOnly] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activeCourseBooking, setActiveCourseBooking] = useState('');

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      // Category check
      if (selectedCategory !== 'all' && course.category !== selectedCategory) {
        return false;
      }

      // CITB only filter
      if (citbOnly && (!course.citbSubsidy || course.citbSubsidy <= 0)) {
        return false;
      }

      // Search term check
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesCode = course.code.toLowerCase().includes(query);
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesShort = course.shortTitle.toLowerCase().includes(query);
        const matchesDesc = course.description.toLowerCase().includes(query);
        return matchesCode || matchesTitle || matchesShort || matchesDesc;
      }

      return true;
    });
  }, [searchTerm, selectedCategory, citbOnly]);

  const handleBookNow = (title: string) => {
    setActiveCourseBooking(title);
    setBookingModalOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Search and Category Control Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search Input Box */}
          <div className="relative flex-1 w-full">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by course code (e.g. CPCWHS1001, TLILIC0003) or keyword (Excavator, White Card, Forklift)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* CITB Subsidy Toggle */}
          <button
            onClick={() => setCitbOnly(!citbOnly)}
            className={`px-4 py-3.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 border ${
              citbOnly
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>CITB Subsidised Only</span>
            {citbOnly && <span className="w-2 h-2 rounded-full bg-white ml-1"></span>}
          </button>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600 shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Category:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-sm text-slate-500 px-1">
        <span>
          Showing <strong>{filteredCourses.length}</strong> of {COURSES.length} courses
          {selectedCategory !== 'all' && ` in ${CATEGORIES.find(c => c.id === selectedCategory)?.name}`}
          {citbOnly && ' (CITB Subsidised)'}
        </span>
        {(searchTerm || selectedCategory !== 'all' || citbOnly) && (
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setCitbOnly(false);
            }}
            className="text-xs text-amber-600 hover:text-amber-700 font-bold underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onBookNow={handleBookNow}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 p-8 space-y-3">
          <p className="text-lg font-bold text-slate-800">No matching training courses found</p>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Try adjusting your search terms or clearing your filters. If you require a specialized unit or VOC not listed, we can schedule it on request.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setCitbOnly(false);
            }}
            className="mt-3 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Dynamic Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultCourseTitle={activeCourseBooking}
      />
    </div>
  );
}

