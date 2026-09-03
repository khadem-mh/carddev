"use client";

type Props = {
  categories: string[];
  selected: string;
  onChange: (cat: string) => void;
};

export default function CategoryFilter({ categories, selected, onChange }: Props) {
  return (
    <div className="flex gap-2 flex-wrap" dir="rtl">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selected === cat
              ? "bg-amber-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
