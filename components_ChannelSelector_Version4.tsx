export default function ChannelSelector({ channels, selected, onSelect }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <label className="font-semibold text-dw-glow">Канал:</label>
      <select
        className="p-2 rounded border border-dw-glow bg-dw-panel text-dw-accent focus:outline-none shadow-dw-neon"
        value={selected}
        onChange={e => onSelect(e.target.value)}
      >
        {channels.map(ch => (
          <option key={ch.id} value={ch.id}>{ch.title}</option>
        ))}
      </select>
      <button className="ml-4 px-3 py-1 bg-dw-pink neon-pink rounded hover:bg-dw-accent transition font-bold">
        + Додати канал
      </button>
    </div>
  );
}