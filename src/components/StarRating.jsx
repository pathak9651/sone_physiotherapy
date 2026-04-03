import { Star } from 'lucide-react';

export default function StarRating({ rating, interactive = false, onChange }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          type="button"
          disabled={!interactive}
          onClick={() => onChange?.(value)}
          className={interactive ? 'transition hover:scale-110' : 'cursor-default'}
          aria-label={`Rate ${value} stars`}
        >
          <Star
            size={18}
            className={value <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-600'}
          />
        </button>
      ))}
    </div>
  );
}
