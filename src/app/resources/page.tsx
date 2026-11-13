import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import CertificateReplacementCard from '@/components/CertificateReplacementCard';
import GuaranteedDeliveryBanner from '@/components/GuaranteedDeliveryBanner';
import { 
  BookOpen, 
  FileText, 
  ShieldCheck, 
  HelpCircle, 
  ExternalLink, 
  AlertCircle, 
  DollarSign, 
  Phone, 
  Mail, 
  CheckCircle2 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Student Resources, Policies & Replacement Cards | Carlisle Learning RTO 0581',
  description: 'Student Handbook, enrolment information, USI help, complaints & appeals, fee administration, and replacement certificate/card requests for Carlisle Learning (RTO 0581).'
};

export default function ResourcesPage() {
  const policies = [
    {
      id: 'student-handbook',
      num: '01',
      title: 'Student Handbook',
      summary: 'Essential policies, rights, obligations, code of conduct, and WHS guidelines for all enrolled students.',
      details: 'Our Student Handbook outlines the academic and behavioural standards expected of all candidates attending Carlisle Learning courses. It covers workplace health and safety on our plant yards, equal opportunity, assessment appeal procedures, and learner support services.'
    },
    {
      id: 'enrolment',
      num: '02',
      title: 'Course Enrolment Information',
      summary: 'Enrolment procedures, identification verification, pre-requisites, and course confirmation.',
      details: 'All enrolments require the completion of an enrolment form, provision of a valid Unique Student Identifier (USI), and payment guarantee via credit card, company purchase order, or approved invoice.'
    },
    {
      id: 'privacy',
      num: '03',
      title: 'Privacy Policy',
      summary: 'How Carlisle Learning protects, stores, and handles your personal information under the Australian Privacy Principles.',
      details: 'We strictly protect student data under the Privacy Act 1988 (Cth). Information collected is used solely for training administration, reporting to the National Centre for Vocational Education Research (NCVER), and regulatory compliance with SafeWork SA and ASQA.'
    },
    {
      id: 'austroads-ttm',
      num: '04',
      title: 'Austroads TTM Information',
      summary: 'National standards, guidelines, and certification requirements for temporary traffic management.',
      details: 'All Temporary Traffic Management (TTM) courses are delivered under the national Austroads framework. Visit www.austroads.gov.au for technical guidelines, state specific harmonisation updates, and national registers.',
      link: 'https://www.austroads.gov.au',
      linkText: 'Visit Austroads.gov.au'
    },
    {
      id: 'safework-sa',
      num: '05',
      title: 'SafeWork SA Information',
      summary: 'Latest industry health and safety notices, high risk licence renewals, and safety alerts.',
      details: 'As the state work health and safety regulator, SafeWork SA oversees High Risk Work Licencing (HRWL) in South Australia. All Carlisle Learning assessors are certified and approved under SafeWork SA mandates.',
      link: 'https://www.safework.sa.gov.au',
      linkText: 'Visit SafeWork.sa.gov.au'
    },
    {
      id: 'usi',
      num: '06',
      title: 'USI (Unique Student Identifier) Help',
      summary: 'Having trouble locating your USI? Or do not have one yet? Direct guide to the Australian USI Registry.',
      details: 'A Unique Student Identifier (USI) is a 10-character code allocated by the Australian Government. By federal law, Carlisle Learning cannot issue your Nationally Recognised Statement of Attainment or Certificate without a verified USI. Creating a free USI takes less than 3 minutes.',
      link: 'https://www.usi.gov.au',
      linkText: 'Find or Create Your USI at USI.gov.au'
    },
    {
      id: 'complaints',
      num: '07',
      title: 'Complaints and Appeals Procedure',
      summary: 'We are committed to providing a fair, transparent, and supportive learning environment.',
      details: 'If something hasn’t gone to plan or you wish to dispute an assessment outcome, we want to know so we can resolve it quickly and fairly. Formal appeals are reviewed by senior management within 10 working days, with third-party mediation options available.'
    },
    {
      id: 'refund-policy',
      num: '08',
      title: 'Fee Administration & Refund Policy',
      summary: 'Course fees, deposits, admin charges, cancellations, and refund conditions.',
      details: 'Course fees include all learning materials, standard assessment, and initial certification issuing. Course bookings include a non-refundable $50 administration fee. Cancellations made more than 5 business days prior to course commencement are eligible for full transfer or refund less admin fees.'
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              Student Support & Regulatory Compliance
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Student Resources & Policies
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Find essential student policy documentation, Unique Student Identifier (USI) assistance, regulator resources, and replacement card forms for Carlisle Learning (RTO 0581).
            </p>
          </div>
        </div>
      </div>

      {/* Replacement Card Spotlight */}
      <div id="lost-card" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CertificateReplacementCard />
      </div>

      {/* Policies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
            Policies & Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Registered Training Organisation (RTO 0581) Policies
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            Operating under the Standards for RTOs to deliver transparent, compliant, and supportive vocational education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policies.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 hover:border-amber-400 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-amber-500 bg-amber-50 px-2.5 py-1 rounded-md">
                    SECTION {p.num}
                  </span>
                  {p.link && (
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Official Portal
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {p.title}
                </h3>

                <p className="text-xs font-semibold text-slate-500">
                  {p.summary}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {p.details}
                </p>
              </div>

              {p.link && (
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-amber-700"
                  >
                    <span>{p.linkText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Need Help Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900">
              Have a Specific Policy or Enrolment Question?
            </h3>
            <p className="text-sm text-slate-600">
              Our administration office is here to help with student records, CITB status checks, or customized workplace policies.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:0883985468"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              Call (08) 8398 5468
            </a>
            <a
              href="mailto:admin@carlislelearning.com.au"
              className="px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-xs hover:bg-slate-50 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              Email Us
            </a>
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

