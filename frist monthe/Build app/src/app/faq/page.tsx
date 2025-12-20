export default function FAQ() {
  const faqs = [
    { q: 'How to contact support?', a: 'Email support@example.com' },
    { q: 'Refund policy?', a: '14 days refund' }
  ];
  return (
    <main className="max-w-3xl mx-auto py-20">
      <h1 className="text-3xl font-bold mb-8">FAQ</h1>
      {faqs.map((f, i) => (
        <div key={i} className="mb-6">
          <h3 className="font-semibold">{f.q}</h3>
          <p className="text-muted">{f.a}</p>
        </div>
      ))}
    </main>
  );
}
