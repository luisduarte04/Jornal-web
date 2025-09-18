export default function Cards(props) {
  return (
    <section className="flex flex-col gap-4 max-w-full shadow-[rgba(50,50,105,0.149)_0px_2px_5px_0px,_rgba(0,0,0,0.05)_0px_1px_1px_0px] rounded-md bg-white p-8">
      <article className="flex items-center justify-center gap-4">
        <div>
          <h2 className="font-bold text-xl mb-4">{props.title}</h2>
          <p>{props.text}</p>
        </div>
        <img src={props.banner} alt="" className="w-[30%] object-cover object-center" />
      </article>

      <article className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{props.likes}</span>
        </div>
        <div className="flex items-center gap-1">
          <i className="bi bi-chat-dots"></i>
          <span>{props.comments}</span>
        </div>
      </article>
    </section>
  );
}
