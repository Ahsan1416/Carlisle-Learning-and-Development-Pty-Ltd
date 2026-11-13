'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { COURSES } from '@/data/courses';
import GuaranteedDeliveryBanner from '@/components/GuaranteedDeliveryBanner';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Send, 
  Calendar, 
  Users 
} from 'lucide-react';

function ContactForm() {
  const searchParams = useSearchParams();
  const initialCourse = searchParams.get('course') || '';
  const initialCitb = searchParams.get('citb') === 'true';

  const [courseCode, setCourseCode] = useState(initialCourse);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [attendees, setAttendees] = useState('1');
  const [preferredDate, setPreferredDate] = useState('');
  const [hasCitb, setHasCitb] = useState(initialCitb);
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const selectedCourse = COURSES.find(c => c.code === courseCode || c.title === courseCode);
      const courseTitle = selectedCourse ? selectedCourse.title : (courseCode || 'General Training Enquiry');

      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseTitle,
          fullName,
          phone,
          email,
          company,
          attendees: parseInt(attendees) || 1,
          preferredDate,
          hasCitb,
          notes: message,
          source: 'Contact Page Form'
        })
      });

      if (!res.ok) {
        throw new Error('Failed to send enquiry. Please call us directly.');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error sending enquiry. Please call us at (08) 8398 5468.';
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-slate-900">Thank You, {fullName}!</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Your training enquiry has been delivered directly to Carlisle Learning admissions. A coordinator will contact you shortly to confirm dates and subsidies.
        </p>
        <div className="pt-4">
          <a
            href="tel:0883985468"
            className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs inline-flex items-center gap-2 hover:bg-slate-800"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            Direct Phone: (08) 8398 5468
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-5">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-xl font-bold text-slate-900">Send an Enquiry or Booking Request</h2>
        <p className="text-xs text-slate-500 mt-1">
          Complete the form below and our Mount Barker team will respond with course dates and CITB confirmation.
        </p>
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Select Course on Offer *
        </label>
        <select
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
        >
          <option value="">-- General Enquiry / Multiple Courses --</option>
          {COURSES.map((c) => (
            <option key={c.id} value={c.code}>
              {c.code} – {c.title} (${c.price})
            </option>
          ))}
          <option value="VOC">Verification of Competency (VOC Assessment)</option>
          <option value="REPLACEMENT_CARD">Lost Certificate / Replacement Card Reissue</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Smith"
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0412 345 678"
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com.au"
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Company / Business Name (Optional)
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Adelaide Earthmoving P/L"
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Number of Attendees
          </label>
          <select
            value={attendees}
            onChange={(e) => setAttendees(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
          >
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3-5">3 – 5 People</option>
            <option value="6-10">6 – 10 People (Group Rate)</option>
            <option value="10+">10+ People (Corporate On-Site)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Preferred Date or Timeline
          </label>
          <input
            type="text"
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            placeholder="e.g. Next available / Next month"
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 cursor-pointer">
          <input
            type="checkbox"
            checked={hasCitb}
            onChange={(e) => setHasCitb(e.target.checked)}
            className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500"
          />
          <span>
            <strong>Eligible for CITB South Australia Subsidy</strong> (Check this if you or your employees have an active CITB card to reduce course fees).
          </span>
        </label>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Your Message or Specific Requirements (Optional)
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Let us know if you require on-site training at your yard, specialized machinery, or group invoicing..."
          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 px-6 rounded-2xl font-black text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-md active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        <span>{submitting ? 'Sending Enquiry...' : 'Submit Training Enquiry'}</span>
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Phone className="w-4 h-4" />
              Get In Touch With Our Team
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Contact & Training Centre Locations
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Reach out to enquire about upcoming course dates, corporate group quotes, CITB funding eligibility, or visit our training yards in Mount Barker and Murray Bridge.
            </p>
          </div>
        </div>
      </div>

      {/* Main Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
                  Carlisle Learning Centre
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  Headquarters & Training Facility
                </h3>
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Mount Barker Training Facility</strong>
                    <span className="text-slate-600">20 Oborn Road, Mount Barker SA 5251</span>
                    <span className="block text-xs text-slate-400 mt-0.5">Adelaide Hills, South Australia</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Direct Telephone</strong>
                    <a href="tel:0883985468" className="text-amber-600 font-bold hover:underline">
                      (08) 8398 5468
                    </a>
                    <span className="block text-xs text-slate-400 mt-0.5">Monday to Friday 8:00 AM – 4:30 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Email Admissions</strong>
                    <a href="mailto:admin@carlislelearning.com.au" className="text-amber-600 hover:underline">
                      admin@carlislelearning.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">RTO & Business Registration</strong>
                    <span className="text-slate-600">RTO Code: <strong>0581</strong> (Since 2003)</span>
                    <span className="block text-xs text-slate-500">ABN: 30 008 165 062</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <strong className="text-slate-900 block font-semibold">Murray Bridge & On-Site Capabilities:</strong>
                <p>
                  We also operate dedicated training facilities in Murray Bridge and provide fully equipped mobile training units travelling to civil sites across South Australia.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="bg-white p-8 rounded-3xl border border-slate-200">Loading form...</div>}>
              <ContactForm />
            </Suspense>
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

