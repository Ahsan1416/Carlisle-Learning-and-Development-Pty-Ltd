import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import GuaranteedDeliveryBanner from '@/components/GuaranteedDeliveryBanner';
import { ShieldCheck, Award, CheckCircle2, Clock, MapPin, Users, HardHat, Truck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Carlisle Learning | RTO 0581 Adelaide Hills & Murraylands SA',
  description: 'Registered Training Organisation (RTO 0581) delivering high quality industry equipment training and assessment in Mount Barker, South Australia since 2003.'
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Established 2003 • RTO 0581
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              About Carlisle Learning & Development
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              For over two decades, Carlisle Learning (Heavy Equipment Training and Assessment P/L) has been the premier local Registered Training Organisation supporting South Australian industries, primary producers, civil contractors, and job seekers.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5 text-amber-400">
                <CheckCircle2 className="w-4 h-4" />
                ABN: 30 008 165 062
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                Mount Barker & Murray Bridge Facilities
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <Image
              src="/images/equipment-lineup.png"
              alt="Carlisle Learning Fleet"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/20" />
          </div>
        </div>
      </div>

      {/* Main Story & Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
                Our History & Mission
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Reliable Local Workplace Training You Can Count On
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              CARLISLE LEARNING is a leading local Registered Training Organisation (RTO 0581 since 2003) based at Mount Barker that delivers quality training services throughout the Adelaide Hills, Fleurieu, and Murraylands for Industry, Primary Producers, and Job Seekers.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We specialise in supporting local business needs and ensuring regular, timely, and professional training for Work Health and Safety (WHS), High Risk Work Licences, and Equipment Operation Skills. We also provide on-site Training and Assessment and Verification of Competency (VOC) as needed.
            </p>

            {/* Standout Guarantee */}
            <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/30 space-y-2">
              <h3 className="font-extrabold text-slate-950 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                Our Core Guarantee: If a course is booked, we run it.
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                We know that downtime hurts your business and project milestones. Unlike other training providers who cancel sessions if class sizes are small, Carlisle Learning guarantees to deliver booked courses so your workers are certified and site-ready without delay.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <HardHat className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Industry Veteran Assessors</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our trainers have real-world backgrounds in civil earthmoving, construction safety, forestry, and high-risk work environments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">CITB & Austroads Approved</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Official accreditation that unlocks generous South Australian government training subsidies and nationally valid tickets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
                <Truck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Dedicated Machine Fleet</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Train on excavators, bobcats, rollers, boom lifts, and forklifts maintained to highest manufacturer and safety standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Adelaide Hills & Murraylands</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mount Barker Centre at 20 Oborn Road plus Murray Bridge facilities and full regional on-site capability.
              </p>
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

