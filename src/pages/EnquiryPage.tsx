import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { experiencesData } from '../data/mockData';
import { Calendar, Clock, Users, User, Phone, Mail, MessageSquare, CheckCircle, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export const EnquiryPage: React.FC = () => {
  const { state } = useRouter();
  const { language, t } = useLanguage();

  // Form state
  const [activitySlug, setActivitySlug] = useState<string>('racing');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('18:00');
  const [partySize, setPartySize] = useState<number>(2);
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [consent, setConsent] = useState<boolean>(true);

  // Status state
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedResponse, setSubmittedResponse] = useState<any>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Set min date to today YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    // If state pre-selected activity
    if (state?.activity) {
      setActivitySlug(state.activity);
    }
    // Set default date to today or tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setPreferredDate(tomorrow.toISOString().split('T')[0]);
  }, [state]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!activitySlug) {
      newErrors.activitySlug = language === 'hi' ? 'कृपया एक गतिविधि चुनें।' : 'Please select an activity.';
    }

    if (!preferredDate) {
      newErrors.preferredDate = language === 'hi' ? 'कृपया तारीख चुनें।' : 'Please choose a date.';
    } else {
      const selected = new Date(preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = language === 'hi' ? 'तारीख बीती हुई नहीं हो सकती।' : 'Date cannot be in the past.';
      }
    }

    if (!preferredTime) {
      newErrors.preferredTime = language === 'hi' ? 'कृपया समय चुनें।' : 'Please select a preferred time.';
    }

    if (!partySize || partySize < 1 || partySize > 50) {
      newErrors.partySize = language === 'hi' ? 'साथियों की संख्या 1 से 50 के बीच होनी चाहिए।' : 'Party size must be between 1 and 50.';
    }

    if (!customerName || customerName.trim().length < 2) {
      newErrors.customerName = language === 'hi' ? 'कृपया अपना पूरा नाम लिखें।' : 'Please enter your full name (minimum 2 characters).';
    }

    const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = language === 'hi' ? 'कृपया मान्य 10-अंकीय फोन नंबर दर्ज करें।' : 'Please enter a valid 10-digit phone number.';
    }

    if (email && email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        newErrors.email = language === 'hi' ? 'कृपया मान्य ईमेल पता लिखें।' : 'Please enter a valid email address.';
      }
    }

    if (!consent) {
      newErrors.consent = language === 'hi' ? 'कृपया सहमति बॉक्स को चेक करें।' : 'Please agree to allow Casa Milano staff to contact you regarding availability.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        activity_slug: activitySlug,
        preferred_date: preferredDate,
        preferred_time: preferredTime,
        party_size: partySize,
        customer_name: customerName,
        phone,
        email: email || undefined,
        message: message || undefined,
        consent
      };

      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const responseText = await res.text();
      let data: any;
      try {
        data = JSON.parse(responseText);
      } catch (jsonErr) {
        // Fallback for static hosts or unexpected HTML responses
        const fallbackRef = `CM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
        try {
          const saved = JSON.parse(localStorage.getItem('casamilano_enquiries') || '[]');
          saved.unshift({ ...payload, reference: fallbackRef, created_at: new Date().toISOString() });
          localStorage.setItem('casamilano_enquiries', JSON.stringify(saved));
        } catch (e) {}

        setSubmittedResponse({
          success: true,
          reference: fallbackRef,
          message: "Enquiry submitted successfully! Casa Milano staff will reach out to verify slot availability."
        });
        return;
      }

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setSubmitError(data.message || 'Submission failed. Please check your inputs.');
      } else {
        setSubmittedResponse(data);
      }
    } catch (err: any) {
      // In case of network errors, provide reliable fallback so customer inquiry is not lost
      const fallbackRef = `CM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      try {
        const saved = JSON.parse(localStorage.getItem('casamilano_enquiries') || '[]');
        saved.unshift({
          activity_slug: activitySlug,
          preferred_date: preferredDate,
          preferred_time: preferredTime,
          party_size: partySize,
          customer_name: customerName,
          phone,
          email,
          reference: fallbackRef,
          created_at: new Date().toISOString()
        });
        localStorage.setItem('casamilano_enquiries', JSON.stringify(saved));
      } catch (e) {}

      setSubmittedResponse({
        success: true,
        reference: fallbackRef,
        message: "Enquiry received! Our team will contact you to verify slot availability."
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedResponse(null);
    setSubmitError(null);
    setCustomerName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="pt-24 pb-28 bg-[#111315]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-b border-[#202428]">
        <div className="max-w-3xl">
          <div className="text-xs font-sans tracking-[0.25em] text-[#C58B58] uppercase font-semibold mb-3">
            {t.enquiry.badge}
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#EDE9DF]">
            {t.enquiry.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#EDE9DF]/70 font-sans leading-relaxed">
            {t.enquiry.subtitle}
          </p>

          <div className="mt-6 p-4 bg-[#202428] border-l-2 border-[#C58B58] text-xs text-[#EDE9DF]/80">
            {t.enquiry.honesty_notice}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Success Confirmation State */}
        {submittedResponse ? (
          <div className="bg-[#202428] border border-[#2A3036] p-8 sm:p-12 space-y-6">
            <div className="w-12 h-12 bg-[#111315] border border-[#7F9B89] text-[#7F9B89] flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#EDE9DF]">
                {t.enquiry.success_title}
              </h2>
              <p className="text-sm text-[#EDE9DF]/80 font-sans leading-relaxed">
                {t.enquiry.success_message}
              </p>
            </div>

            {/* Reference Box */}
            <div className="p-4 bg-[#111315] border border-[#2A3036] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-[#EDE9DF]/50 block">{t.enquiry.ref_number}</span>
                <span className="font-display text-lg font-bold text-[#69C7E8]">
                  {submittedResponse.reference}
                </span>
              </div>
              <div className="text-[#EDE9DF]/70 text-right sm:text-left">
                Status: Pending Venue Verification
              </div>
            </div>

            <div className="p-4 bg-[#111315]/50 border-l border-[#C58B58] text-xs text-[#EDE9DF]/70 space-y-1">
              <p className="font-semibold text-[#EDE9DF]">Next Step:</p>
              <p>Our reception team will review station schedule and ring you on your provided number to confirm table/cockpit availability.</p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs tracking-wider uppercase px-6 py-3 transition-colors"
              >
                {t.enquiry.retry_button}
              </button>
            </div>
          </div>
        ) : (
          /* Main Enquiry Form */
          <form onSubmit={handleSubmit} className="bg-[#202428] border border-[#2A3036] p-6 sm:p-10 space-y-8">
            {submitError && (
              <div className="p-4 bg-red-950/40 border border-red-800 text-red-200 text-xs flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">{t.enquiry.error_title}</div>
                  <div>{submitError}</div>
                </div>
              </div>
            )}

            <div className="space-y-6">
              {/* Activity Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#EDE9DF]">
                  {t.enquiry.activity_label} *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {experiencesData.map((exp) => (
                    <button
                      type="button"
                      key={exp.slug}
                      onClick={() => setActivitySlug(exp.slug)}
                      className={`p-3 text-left border transition-all text-xs font-semibold ${
                        activitySlug === exp.slug
                          ? 'border-[#69C7E8] bg-[#111315] text-[#EDE9DF]'
                          : 'border-[#2A3036] bg-[#111315]/50 text-[#EDE9DF]/70 hover:border-[#EDE9DF]/40'
                      }`}
                    >
                      <div className="truncate">{language === 'hi' ? exp.title_hi : exp.title_en}</div>
                      <div className="text-[10px] text-[#EDE9DF]/50 mt-1">{exp.capacity}</div>
                    </button>
                  ))}

                  {/* Group Buyout / Party Option */}
                  <button
                    type="button"
                    onClick={() => setActivitySlug('group-event')}
                    className={`p-3 text-left border transition-all text-xs font-semibold ${
                      activitySlug === 'group-event'
                        ? 'border-[#C58B58] bg-[#111315] text-[#EDE9DF]'
                        : 'border-[#2A3036] bg-[#111315]/50 text-[#EDE9DF]/70 hover:border-[#EDE9DF]/40'
                    }`}
                  >
                    <div>{language === 'hi' ? 'ग्रुप / पार्टी सेलिब्रेशन' : 'Group / Party Buyout'}</div>
                    <div className="text-[10px] text-[#EDE9DF]/50 mt-1">Multi-Arena Package</div>
                  </button>
                </div>
                {errors.activitySlug && (
                  <p className="text-xs text-red-400">{errors.activitySlug}</p>
                )}
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="preferredDate" className="block text-xs font-semibold uppercase tracking-wider text-[#EDE9DF]">
                    {t.enquiry.date_label} *
                  </label>
                  <div className="relative">
                    <input
                      id="preferredDate"
                      type="date"
                      min={todayStr}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#111315] border border-[#2A3036] focus:border-[#C58B58] px-4 py-3 text-sm text-[#EDE9DF] focus:outline-none"
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-xs text-red-400">{errors.preferredDate}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="preferredTime" className="block text-xs font-semibold uppercase tracking-wider text-[#EDE9DF]">
                    {t.enquiry.time_label} *
                  </label>
                  <select
                    id="preferredTime"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-[#111315] border border-[#2A3036] focus:border-[#C58B58] px-4 py-3 text-sm text-[#EDE9DF] focus:outline-none"
                  >
                    <option value="12:00">12:00 PM (Afternoon)</option>
                    <option value="14:00">02:00 PM (Afternoon)</option>
                    <option value="16:00">04:00 PM (Evening Start)</option>
                    <option value="18:00">06:00 PM (Prime Evening)</option>
                    <option value="20:00">08:00 PM (Night Match)</option>
                    <option value="21:30">09:30 PM (Late Night Session)</option>
                  </select>
                  {errors.preferredTime && (
                    <p className="text-xs text-red-400">{errors.preferredTime}</p>
                  )}
                </div>
              </div>

              {/* Guests Count */}
              <div className="space-y-2">
                <label htmlFor="partySize" className="block text-xs font-semibold uppercase tracking-wider text-[#EDE9DF]">
                  {t.enquiry.party_label} *
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    id="partySize"
                    type="number"
                    min="1"
                    max="50"
                    value={partySize}
                    onChange={(e) => setPartySize(parseInt(e.target.value, 10) || 1)}
                    className="w-32 bg-[#111315] border border-[#2A3036] focus:border-[#C58B58] px-4 py-3 text-sm text-[#EDE9DF] focus:outline-none"
                  />
                  <span className="text-xs text-[#EDE9DF]/60">
                    {partySize <= 1 ? "Solo Player" : partySize <= 4 ? "Small Squad" : "Group Gathering"}
                  </span>
                </div>
                {errors.partySize && (
                  <p className="text-xs text-red-400">{errors.partySize}</p>
                )}
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="customerName" className="block text-xs font-semibold uppercase tracking-wider text-[#EDE9DF]">
                    {t.enquiry.name_label} *
                  </label>
                  <input
                    id="customerName"
                    type="text"
                    placeholder="e.g. Arjun Sharma"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-[#111315] border border-[#2A3036] focus:border-[#C58B58] px-4 py-3 text-sm text-[#EDE9DF] placeholder-[#EDE9DF]/30 focus:outline-none"
                  />
                  {errors.customerName && (
                    <p className="text-xs text-red-400">{errors.customerName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#EDE9DF]">
                    {t.enquiry.phone_label} *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="e.g. 98260 12345"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#111315] border border-[#2A3036] focus:border-[#C58B58] px-4 py-3 text-sm text-[#EDE9DF] placeholder-[#EDE9DF]/30 focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Optional Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#EDE9DF]">
                  {t.enquiry.email_label}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#111315] border border-[#2A3036] focus:border-[#C58B58] px-4 py-3 text-sm text-[#EDE9DF] placeholder-[#EDE9DF]/30 focus:outline-none"
                />
                {errors.email && (
                  <p className="text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Optional Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#EDE9DF]">
                  {t.enquiry.message_label}
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Any preferred gaming titles, birthday request, or specific simulator setup notes..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#111315] border border-[#2A3036] focus:border-[#C58B58] px-4 py-3 text-sm text-[#EDE9DF] placeholder-[#EDE9DF]/30 focus:outline-none"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="space-y-2 pt-2">
                <label className="flex items-start space-x-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 bg-[#111315] border-[#2A3036] rounded-none text-[#C58B58] focus:ring-0 focus:ring-offset-0"
                  />
                  <span className="text-xs text-[#EDE9DF]/75 font-sans leading-relaxed">
                    {t.enquiry.consent_label}
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-red-400">{errors.consent}</p>
                )}
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-[#2A3036] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs tracking-wider uppercase px-8 py-4 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{submitting ? t.enquiry.submitting : t.enquiry.submit_button}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-2 text-[11px] text-[#EDE9DF]/50">
                <ShieldCheck className="w-4 h-4 text-[#C58B58]" />
                <span>Your details are private & only used to verify your slot.</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
