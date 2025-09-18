export default function Cards({ news }) {
  console.log(news);
  return (
    <section className="flex flex-col  gap-4 bg-slate-300 ">
      <article className="">
        <div>
          <h2>{news.title}</h2>
          <p>{news.text}</p>
        </div>
        <img src={news.image} alt="" className="" />
      </article>

      <article className="">
        <i className="bi bi-hand-thumbs-up"></i>
        <span>{news.like}</span>
        <i className="bi bi-chat-dots"></i>
        <span>{news.comments}</span>
      </article>
    </section>
  );
}
