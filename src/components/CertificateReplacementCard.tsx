import React from 'react';
import Link from 'next/link';
import { FileText, CreditCard, Sparkles, Phone, ArrowRight } from 'lucide-react';

export default function CertificateReplacementCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Fast Re-issuance Service
          </div>
          <h3 className="text-2xl font-black text-white tracking-tight">
            Lost Your Certificate? Need a Replacement Card?
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Carlisle Learning can reprint your certified qualification statement or durable plastic wallet card. Provide your USI or completion year and our team will verify your records and issue your replacement promptly.
          </p>
        </div>

        {/* Pricing Options Pill */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          <div className="grid grid-cols-3 gap-2 w-full sm:w-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 text-center">
              <FileText className="w-5 h-5 text-amber-400 mx-auto mb-1" />
              <span className="text-[11px] text-slate-400 block font-medium">New Certificate</span>
              <span className="text-lg font-black text-white">$40</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 text-center">
              <CreditCard className="w-5 h-5 text-amber-400 mx-auto mb-1" />
              <span className="text-[11px] text-slate-400 block font-medium">New Card</span>
              <span className="text-lg font-black text-white">$40</span>
            </div>
            <div className="bg-amber-500/20 border border-amber-500/40 rounded-2xl p-3.5 text-center">
              <Sparkles className="w-5 h-5 text-amber-400 mx-auto mb-1" />
              <span className="text-[11px] text-amber-300 block font-bold">Both (Combo)</span>
              <span className="text-lg font-black text-amber-400">$60</span>
            </div>
          </div>

          <Link
            href="/resources#lost-card"
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span>Request Replacement</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

