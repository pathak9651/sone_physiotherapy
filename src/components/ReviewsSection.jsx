import { Trash2, UserRoundPen } from 'lucide-react';
import { useMemo, useState } from 'react';
import SectionHeading from './SectionHeading';
import StarRating from './StarRating';
import { initialReviews } from '../data/siteContent';
import { useLocalStorage } from '../hooks/useLocalStorage';

const REVIEW_KEY = 'dr-atul-reviews';
const ADMIN_FLAG_KEY = 'dr-atul-admin-mode';
const ADMIN_PASSCODE = 'atul-admin';

function formatDate(dateString) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(new Date(dateString));
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useLocalStorage(REVIEW_KEY, initialReviews);
  const [isAdmin, setIsAdmin] = useLocalStorage(ADMIN_FLAG_KEY, false);
  const [form, setForm] = useState({
    name: '',
    location: '',
    rating: 5,
    comment: ''
  });

  const averageRating = useMemo(() => {
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return reviews.length ? (total / reviews.length).toFixed(1) : '0.0';
  }, [reviews]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextReview = {
      id: crypto.randomUUID(),
      name: form.name.trim(),
      location: form.location.trim() || 'Sonbhadra',
      rating: form.rating,
      comment: form.comment.trim(),
      date: new Date().toISOString().slice(0, 10)
    };

    setReviews((currentReviews) => [nextReview, ...currentReviews]);
    setForm({ name: '', location: '', rating: 5, comment: '' });
  };

  const handleAdminToggle = () => {
    if (isAdmin) {
      setIsAdmin(false);
      return;
    }

    const enteredPasscode = window.prompt('Enter admin passcode to manage reviews');
    if (enteredPasscode === ADMIN_PASSCODE) {
      setIsAdmin(true);
    } else if (enteredPasscode) {
      window.alert('Incorrect passcode.');
    }
  };

  const handleDelete = (reviewId) => {
    setReviews((currentReviews) => currentReviews.filter((review) => review.id !== reviewId));
  };

  return (
    <section className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Patient Reviews"
          title="Reviews that reflect comfort, convenience, and recovery at home."
          description="Patients can submit reviews locally from the website. An admin-only delete option is available for moderation on the same device."
        />
        <div className="mt-10 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div className="card-surface flex flex-wrap items-center justify-between gap-4 p-6">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                  Home Visit Satisfaction
                </div>
                <div className="mt-2 flex items-end gap-3">
                  <div className="font-display text-4xl font-bold text-slate-900 dark:text-white">{averageRating}</div>
                  <div className="pb-1 text-sm text-slate-500 dark:text-slate-400">Average rating from {reviews.length} reviews</div>
                </div>
              </div>
              <button type="button" onClick={handleAdminToggle} className="btn-secondary px-4 py-2">
                {isAdmin ? 'Exit Admin' : 'Admin'}
              </button>
            </div>

            <div className="grid gap-5">
              {reviews.map((review) => (
                <article key={review.id} className="card-surface p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white">{review.name}</div>
                      <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {review.location} • {formatDate(review.date)}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <StarRating rating={review.rating} />
                      {isAdmin ? (
                        <button
                          type="button"
                          onClick={() => handleDelete(review.id)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-rose-200 bg-rose-50 text-rose-600 transition hover:bg-rose-100 dark:border-rose-900/60 dark:bg-rose-950/30 dark:text-rose-300"
                          aria-label={`Delete review by ${review.name}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      ) : null}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{review.comment}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="card-surface p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-200">
                <UserRoundPen size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Share Your Experience</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Submit a local review with date and rating.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Your Name</span>
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand-400 dark:border-slate-700 dark:bg-slate-950"
                  placeholder="Enter your full name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Location</span>
                <input
                  value={form.location}
                  onChange={(event) => setForm((current) => ({ ...current, location: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand-400 dark:border-slate-700 dark:bg-slate-950"
                  placeholder="Robertsganj / Obra / Sonbhadra"
                />
              </label>

              <div>
                <span className="mb-3 block text-sm font-semibold text-slate-700 dark:text-slate-200">Rating</span>
                <StarRating
                  rating={form.rating}
                  interactive
                  onChange={(rating) => setForm((current) => ({ ...current, rating }))}
                />
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Review</span>
                <textarea
                  required
                  rows="5"
                  value={form.comment}
                  onChange={(event) => setForm((current) => ({ ...current, comment: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand-400 dark:border-slate-700 dark:bg-slate-950"
                  placeholder="Tell others about your home visit experience and recovery support."
                />
              </label>

              <button type="submit" className="btn-primary w-full">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
