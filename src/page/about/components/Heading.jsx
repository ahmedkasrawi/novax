function Heading ({pageTitle,title,paragraph}){
  return (
    <section className="text-center mb-16">
      <span className="inline-block text-sm font-semibold tracking-[0.35em] text-(--main-color) uppercase mb-4">
        {pageTitle}
      </span>
      <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
        {title}
      </h1>
      <p className="max-w-3xl mx-auto text-slate-600 text-base sm:text-lg leading-8">
        {paragraph}
      </p>
    </section>
  );
}

export default Heading