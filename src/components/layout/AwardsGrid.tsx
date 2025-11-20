type Category = {
id: string;
title: { en: string; sw?: string } | string;
winner?: string;
nominees?: string[];
};


export default function AwardsGrid({ categories }: { categories: Category[] }) {
return (
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{categories.map((c) => (
<div key={c.id} className="p-4 border rounded-md">
<h4 className="text-lg font-semibold">{typeof c.title === 'string' ? c.title : c.title.en}</h4>
{c.winner && <p className="mt-2 text-sm">Winner: {c.winner}</p>}
</div>
))}
</div>
);
}