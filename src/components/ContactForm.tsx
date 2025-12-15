import { type FormEvent } from "react";

import { type ContactSchema } from "@/lib/validators";

type ContactErrors = Partial<Record<keyof ContactSchema, string>>;

type Props = {
  contact: ContactSchema;
  errors: ContactErrors;
  onChange: (next: ContactSchema) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function ContactForm({ contact, errors, onChange, onSubmit }: Props) {
  return (
    <section className="space-y-5 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm sm:p-7">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800 ring-1 ring-blue-200">
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          Step 1
        </div>
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Your details</h2>
        <p className="text-sm text-slate-600 sm:text-base">Enter your information to get started</p>
      </div>
      <form className="space-y-5" onSubmit={onSubmit}>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Full name*
          </label>
          <input
            type="text"
            name="fullName"
            value={contact.fullName ?? ""}
            onChange={(event) =>
              onChange({ ...contact, fullName: event.target.value })
            }
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="mt-2 text-sm text-rose-500">{errors.fullName}</p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Organization name (optional)
            </label>
            <input
              type="text"
              name="organizationName"
              value={contact.organizationName ?? ""}
              onChange={(event) =>
                onChange({ ...contact, organizationName: event.target.value })
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Organization name"
            />
            {errors.organizationName && (
              <p className="mt-2 text-sm text-rose-500">{errors.organizationName}</p>
            )}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Phone*
            </label>
            <input
              type="tel"
              name="phone"
              value={contact.phone ?? ""}
              onChange={(event) =>
                onChange({ ...contact, phone: event.target.value })
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Phone number"
            />
            {errors.phone && <p className="mt-2 text-sm text-rose-500">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email (optional)
            </label>
            <input
              type="email"
              name="email"
              value={contact.email ?? ""}
              onChange={(event) =>
                onChange({ ...contact, email: event.target.value })
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="you@email.com"
            />
            {errors.email && <p className="mt-2 text-sm text-rose-500">{errors.email}</p>}
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-lg hover:shadow-orange-200/70 focus:outline-none focus:ring-2 focus:ring-blue-200 sm:w-auto"
          >
            Start Quiz
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </form>
    </section>
  );
}

