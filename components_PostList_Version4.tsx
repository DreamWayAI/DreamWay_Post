export default function PostList({ posts }) {
  if (!posts.length) return (
    <div className="text-center text-dw-glow mt-6">Поки що немає постів для цього каналу.</div>
  );
  return (
    <div className="mt-8">
      <h2 className="text-lg font-bold mb-3 text-dw-accent neon-text">Заплановані та опубліковані пости</h2>
      <ul className="flex flex-col gap-4">
        {posts.map(post => (
          <li key={post.id} className="dw-card p-4 shadow-dw-neon">
            <div className="text-dw-accent font-medium mb-2">{post.text}</div>
            <div className="text-sm text-dw-glow">{post.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}