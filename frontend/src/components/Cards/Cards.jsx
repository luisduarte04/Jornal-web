export default function Cards(props) {
  return (
    <section className="flex flex-col gap-4 max-w-full shadow-md rounded-md bg-white p-6">
      <article className="flex items-start gap-4">
        <div className="flex-1">
          <h2 className="font-bold text-lg mb-2 text-gray-800">{props.title}</h2>
          <p className="text-sm text-gray-600">{props.text}</p>
        </div>
        <img src={props.banner} alt="Banner" className="w-32 h-32 object-cover rounded-md" />
      </article>

      <article className="flex items-center gap-4 mt-4">
        <div className="flex items-center gap-1 text-gray-500">
          <i className="bi bi-hand-thumbs-up text-lg"></i>
          <span className="text-sm">{props.likes}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <i className="bi bi-chat-dots text-lg"></i>
          <span className="text-sm">{props.comments}</span>
        </div>
      </article>
    </section>
  );
}
