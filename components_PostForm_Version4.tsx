import { useState } from "react";

export default function PostForm({ channel }) {
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [date, setDate] = useState("");

  return (
    <form
      className="dw-card p-6 flex flex-col gap-6 shadow-dw-neon"
      onSubmit={e => {
        e.preventDefault();
        alert("Поки що мок! Тут буде публікація у Telegram.");
      }}
    >
      <div>
        <label className="block mb-1 font-medium text-dw-accent">Текст поста</label>
        <textarea
          className="w-full h-28 p-3 border border-dw-glow rounded bg-dw-bg text-dw-text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Введіть текст або натисніть 'Згенерувати AI'"
        />
        <button
          type="button"
          className="mt-2 px-3 py-1 bg-dw-accent text-dw-bg rounded hover:bg-dw-glow transition font-semibold"
          onClick={() => setText("AI-згенерований демо текст для Telegram-каналу.")}
        >
          Згенерувати AI-текст
        </button>
      </div>
      <div>
        <label className="block mb-1 font-medium text-dw-accent">Картинка до поста</label>
        <div className="flex gap-2 items-center">
          <input
            className="w-full p-2 border border-dw-glow rounded bg-dw-bg text-dw-text"
            value={img}
            onChange={e => setImg(e.target.value)}
            placeholder="Вставте URL картинки або натисніть 'AI-картинка'"
          />
          <button
            type="button"
            className="px-3 py-1 bg-dw-pink neon-pink rounded hover:bg-dw-accent transition font-bold"
            onClick={() => setImg("https://placehold.co/400x200?text=AI+Image")}
          >
            AI-картинка
          </button>
        </div>
        {img && (
          <img src={img} alt="preview" className="mt-2 rounded w-full max-w-xs ring-2 ring-dw-accent shadow-dw-neon"/>
        )}
      </div>
      <div>
        <label className="block mb-1 font-medium text-dw-accent">Час публікації</label>
        <input
          type="datetime-local"
          className="p-2 border border-dw-glow rounded w-full bg-dw-bg text-dw-accent"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-dw-accent text-dw-bg rounded font-semibold hover:bg-dw-glow shadow-dw-neon transition"
      >
        Запланувати/Опублікувати
      </button>
    </form>
  );
}