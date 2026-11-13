import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  ExternalLink, 
  Award, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Accreditation & Quality Trust Bar */}
      <div className="bg-slate-900 border-b border-slate-800/80 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-950 font-black text-2xl shadow-lg">
              CL
            </div>
            <div>
              <h3 className="text-white font-extrabold text-lg tracking-tight">
                Carlisle Learning & Development Pty Ltd
              </h3>
              <p className="text-sm text-slate-400">
                Heavy Equipment Training and Assessment P/L • Registered Training Organisation <strong className="text-amber-400 font-semibold">(RTO 0581)</strong>
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                ABN: 30 008 165 062 • Delivering Certified Workplace Training Since 2003
              </p>
            </div>
          </div>

          {/* Partner & Accreditation Badges */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image 
                  src="/images/nrt-nationally-recognised-training.png" 
                  alt="Nationally Recognised Training" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="text-left text-xs">
                <span className="font-bold text-white block">Nationally Recognised</span>
                <span className="text-slate-400">Accredited Training</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image 
                  src="/images/citb-accredited.png" 
                  alt="CITB South Australia" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="text-left text-xs">
                <span className="font-bold text-white block">CITB Approved</span>
                <span className="text-emerald-400 font-semibold">SA Subsidies Available</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image 
                  src="/images/austroads-approved.png" 
                  alt="Austroads Approved Training Provider" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="text-left text-xs">
                <span className="font-bold text-white block">Austroads Approved</span>
                <span className="text-slate-400">Traffic Management TTM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: About & Headquarters */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase text-amber-400">
              Training Headquarters
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Carlisle Learning is a leading Registered Training Organisation (RTO 0581) based at Mount Barker in the Adelaide Hills and Murray Bridge. We specialise in certified Work Health & Safety (WHS), high-risk plant operation, heavy equipment licences, and Austroads traffic management.
            </p>
            <div className="space-y-3 pt-2 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Carlisle Learning Centre</strong>
                  20 Oborn Road, Mount Barker SA 5251, Australia
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="tel:0883985468" className="hover:text-amber-400 transition-colors font-semibold text-white">
                  (08) 8398 5468
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="mailto:admin@carlislelearning.com.au" className="hover:text-amber-400 transition-colors">
                  admin@carlislelearning.com.au
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Monday – Friday: 8:00 AM – 4:30 PM (Weekend sessions by arrangement)</span>
              </div>
            </div>
          </div>

          {/* Col 2: High Demand Courses */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Popular Courses
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/courses/white-card-cpcwhs1001" className="hover:text-amber-400 transition-colors">
                  CPCWHS1001 – White Card
                </Link>
              </li>
              <li>
                <Link href="/courses/forklift-licence-tlilic0003" className="hover:text-amber-400 transition-colors">
                  TLILIC0003 – Forklift Licence (LF)
                </Link>
              </li>
              <li>
                <Link href="/courses/boom-type-ewp-over-11m-tlilic0005" className="hover:text-amber-400 transition-colors">
                  TLILIC0005 – Boom Lift (WP &gt; 11m)
                </Link>
              </li>
              <li>
                <Link href="/courses/working-at-heights-riiwhs204e" className="hover:text-amber-400 transition-colors">
                  RIIWHS204E – Working at Heights
                </Link>
              </li>
              <li>
                <Link href="/courses/confined-spaces-riiwhs202e" className="hover:text-amber-400 transition-colors">
                  RIIWHS202E – Confined Spaces
                </Link>
              </li>
              <li>
                <Link href="/courses/excavator-riimpo320f" className="hover:text-amber-400 transition-colors">
                  RIIMPO320F – Civil Excavator
                </Link>
              </li>
              <li>
                <Link href="/courses/skid-steer-riimpo318f" className="hover:text-amber-400 transition-colors">
                  RIIMPO318F – Skid Steer / Bobcat
                </Link>
              </li>
              <li>
                <Link href="/courses/chainsaw-ahcmom213" className="hover:text-amber-400 transition-colors">
                  AHCMOM213 – Chainsaw Operations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialized Training */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Specialized Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/citb-subsidies" className="hover:text-emerald-400 transition-colors font-medium text-slate-300">
                  CITB Subsidies & Rebates
                </Link>
              </li>
              <li>
                <Link href="/voc" className="hover:text-amber-400 transition-colors">
                  Verification of Competency (VOC)
                </Link>
              </li>
              <li>
                <Link href="/traffic-management" className="hover:text-amber-400 transition-colors">
                  Austroads Traffic Control (TC1/TC2)
                </Link>
              </li>
              <li>
                <Link href="/traffic-management" className="hover:text-amber-400 transition-colors">
                  Traffic Management Implementer (TMI)
                </Link>
              </li>
              <li>
                <Link href="/courses?category=earthmoving" className="hover:text-amber-400 transition-colors">
                  Civil & Mining Plant Operations
                </Link>
              </li>
              <li>
                <Link href="/courses?category=agriculture" className="hover:text-amber-400 transition-colors">
                  Agricultural & Farm Machinery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Corporate On-Site Group Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Student Support & Policies */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Student Resources
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/resources#lost-card" className="hover:text-amber-400 transition-colors font-medium text-amber-300/90">
                  Lost Card / Certificate Reissue ($40)
                </Link>
              </li>
              <li>
                <Link href="/resources#student-handbook" className="hover:text-amber-400 transition-colors">
                  Student Handbook
                </Link>
              </li>
              <li>
                <Link href="/resources#usi" className="hover:text-amber-400 transition-colors">
                  USI (Unique Student Identifier) Help
                </Link>
              </li>
              <li>
                <Link href="/resources#enrolment" className="hover:text-amber-400 transition-colors">
                  Course Enrolment Policy
                </Link>
              </li>
              <li>
                <Link href="/resources#refund-policy" className="hover:text-amber-400 transition-colors">
                  Fee Administration & Refunds
                </Link>
              </li>
              <li>
                <Link href="/resources#complaints" className="hover:text-amber-400 transition-colors">
                  Complaints & Appeals Procedure
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.safework.sa.gov.au" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 hover:text-amber-400 transition-colors"
                >
                  SafeWork SA Portal
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.usi.gov.au" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 hover:text-amber-400 transition-colors"
                >
                  USI Registry (usi.gov.au)
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Guaranteed Delivery Notice */}
        <div className="mt-12 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" />
            <p className="text-sm text-slate-200">
              <strong className="text-amber-300 font-semibold">100% Guaranteed Course Delivery:</strong> If your course is booked with Carlisle Learning, we guarantee to run it. No unexpected cancellations delaying your project or tickets.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors"
          >
            Book With Confidence
          </Link>
        </div>

        {/* Bottom Strip */}
        <div className="mt-10 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Carlisle Learning & Development Pty Ltd (RTO 0581). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/resources#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/resources#terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Mount Barker & Murray Bridge Facilities
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

