function Card({title,paragraph,children}) {
  return (
    <article className="group bg-white border border-slate-200 rounded-xl p-8 shadow-sm transition duration-400 hover:-translate-y-1 hover:shadow-lg">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">{title}</h2>
      <p className="text-slate-600 leading-7">{paragraph}</p>
      {children}
    </article>
  );
}
export default Card
