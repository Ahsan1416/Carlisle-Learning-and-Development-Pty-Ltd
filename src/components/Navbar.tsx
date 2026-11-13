'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronDown, 
  HardHat, 
  Award, 
  Clock, 
  BookOpen
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking?: (courseTitle?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-slate-100">
      {/* Top Banner / Accreditation Strip */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5" />
              Registered Training Organisation (RTO 0581 Since 2003)
            </span>
            <span className="hidden md:inline-block text-slate-500">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              CITB Approved Subsidies Available for SA
            </span>
            <span className="hidden lg:inline-block text-slate-500">•</span>
            <span className="hidden lg:inline-block text-slate-300">
              Approved Austroads TTM Provider
            </span>
          </div>

          <div className="flex items-center gap-5 text-slate-300">
            <a 
              href="tel:0883985468" 
              className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              (08) 8398 5468
            </a>
            <a 
              href="mailto:admin@carlislelearning.com.au" 
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              admin@carlislelearning.com.au
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-2">
          {/* Logo / RTO Identity */}
          <Link href="/" className="flex items-center gap-2.5 xl:gap-3 group shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 rounded-xl flex items-center justify-center text-slate-950 font-black text-xl sm:text-2xl shadow-md group-hover:bg-amber-400 transition-colors shrink-0">
              <HardHat className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl xl:text-2xl tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors whitespace-nowrap">
                  CARLISLE
                </span>
                <span className="font-semibold text-lg sm:text-xl xl:text-2xl tracking-tight text-amber-500 whitespace-nowrap">
                  LEARNING
                </span>
              </div>
              <span className="text-[10px] xl:text-[11px] font-semibold uppercase tracking-wider text-slate-500 whitespace-nowrap">
                Heavy Equipment & Workplace Training • RTO 0581
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
            <Link 
              href="/" 
              className="px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              Home
            </Link>

            {/* Courses Mega Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <Link 
                href="/courses" 
                className="px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-lg hover:bg-slate-50 transition-colors inline-flex items-center gap-1 whitespace-nowrap"
              >
                <span>Courses &amp; Bookings</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </Link>

              {coursesDropdownOpen && (
                <div className="absolute left-0 top-full pt-1 w-72 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 text-sm">
                    <Link 
                      href="/courses" 
                      className="block px-3 py-2 rounded-lg font-bold text-slate-900 hover:bg-amber-50 hover:text-amber-600 border-b border-slate-100 mb-1 whitespace-nowrap"
                    >
                      View All Courses on Offer →
                    </Link>
                    <Link 
                      href="/courses?category=safety" 
                      className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                    >
                      <span className="font-semibold block">Construction Safety</span>
                      <span className="text-xs text-slate-500">White Card, Heights, Confined Space</span>
                    </Link>
                    <Link 
                      href="/courses?category=high-risk" 
                      className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                    >
                      <span className="font-semibold block">High Risk Work Licences</span>
                      <span className="text-xs text-slate-500">Forklift (LF), Boom Lift (WP &gt; 11m)</span>
                    </Link>
                    <Link 
                      href="/courses?category=earthmoving" 
                      className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                    >
                      <span className="font-semibold block">Civil & Mining Machinery</span>
                      <span className="text-xs text-slate-500">Excavator, Bobcat, Loader, Roller, Dozer</span>
                    </Link>
                    <Link 
                      href="/courses?category=traffic" 
                      className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                    >
                      <span className="font-semibold block">Traffic Management</span>
                      <span className="text-xs text-slate-500">Austroads TC1, TC2, TMI1, TMI2</span>
                    </Link>
                    <Link 
                      href="/courses?category=agriculture" 
                      className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                    >
                      <span className="font-semibold block">Ag & Land Management</span>
                      <span className="text-xs text-slate-500">Chainsaw, Tractor, Side-by-Side</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/citb-subsidies" 
              className="px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold text-emerald-700 hover:text-emerald-800 rounded-lg hover:bg-emerald-50 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span>CITB Subsidies</span>
            </Link>

            <Link 
              href="/voc" 
              className="px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              VOC
            </Link>

            <Link 
              href="/traffic-management" 
              className="px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              Traffic Management
            </Link>

            <Link 
              href="/resources" 
              className="px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              Student Resources
            </Link>

            <Link 
              href="/about" 
              className="px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className="px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button 
              onClick={() => onOpenBooking ? onOpenBooking() : (window.location.href = '/contact')}
              className="px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-xl font-bold text-xs xl:text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Enquire / Book Now</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-amber-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-50"
          >
            Home
          </Link>
          <Link 
            href="/courses" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-50"
          >
            All Courses & Bookings
          </Link>
          <div className="pl-4 space-y-1 text-sm text-slate-600">
            <Link href="/courses?category=safety" onClick={() => setMobileMenuOpen(false)} className="block py-1">
              • Construction Safety (White Card, Heights, Confined Space)
            </Link>
            <Link href="/courses?category=high-risk" onClick={() => setMobileMenuOpen(false)} className="block py-1">
              • High Risk Licences (Forklift LF, Boom Lift WP)
            </Link>
            <Link href="/courses?category=earthmoving" onClick={() => setMobileMenuOpen(false)} className="block py-1">
              • Civil Earthmoving (Excavator, Bobcat, Loader, Roller)
            </Link>
            <Link href="/courses?category=traffic" onClick={() => setMobileMenuOpen(false)} className="block py-1">
              • Austroads Traffic Management (TC1, TMI1, TC2, TMI2)
            </Link>
            <Link href="/courses?category=agriculture" onClick={() => setMobileMenuOpen(false)} className="block py-1">
              • Agriculture & Land Management (Chainsaw, Tractor)
            </Link>
          </div>

          <Link 
            href="/citb-subsidies" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-emerald-700 bg-emerald-50"
          >
            CITB Subsidies & Funding
          </Link>
          <Link 
            href="/voc" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-50"
          >
            Verification of Competency (VOC)
          </Link>
          <Link 
            href="/traffic-management" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-50"
          >
            Austroads Traffic Management
          </Link>
          <Link 
            href="/resources" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-50"
          >
            Student Resources & Replacement Cards
          </Link>
          <Link 
            href="/about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-50"
          >
            About Carlisle Learning
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-50"
          >
            Contact & Training Locations
          </Link>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a 
              href="tel:0883985468" 
              className="w-full text-center py-2.5 rounded-xl font-bold bg-slate-900 text-white flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call (08) 8398 5468
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
                else window.location.href = '/contact';
              }}
              className="w-full text-center py-2.5 rounded-xl font-bold bg-amber-500 text-slate-950"
            >
              Enquire / Book Course
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

