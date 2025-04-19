import { useState } from "react";

const challenges = Array(7).fill({ id: "#001", title: "First Challange", difficulty: "Hard" });
const ranking = Array(3).fill({ id: "#001", name: "User 01", medal: "Gold" });

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono p-8 grid grid-cols-3 gap-6">
      {/* Left Panel */}
      <div className="col-span-1 space-y-8">
        <div>
          <h1 className="text-5xl text-lime-400 font-bold mb-4">Guitar Pick</h1>
          <h2 className="text-xl text-gray-400 mb-2">Challenges</h2>
          <div className="space-y-1">
            {challenges.map((c, i) => (
              <button
                key={i}
                className="w-full flex justify-between bg-black px-2 py-1 hover:bg-gray-800 transition"
                onClick={() => setSelected(c)}
              >
                <span className="text-lime-400">{c.id}</span>
                <span className="flex-1 text-left ml-2 text-white">{c.title}</span>
                <span className="text-red-500 font-bold">{c.difficulty}</span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl text-gray-600 mb-2">Ranking</h2>
          <div className="space-y-1">
            {ranking.map((r, i) => (
              <div key={i} className="w-full flex justify-between bg-black px-2 py-1">
                <span className="text-lime-400">{r.id}</span>
                <span className="flex-1 text-left ml-2">{r.name}</span>
                <span className="text-white">{r.medal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="col-span-2 flex items-center justify-center">
        {selected && (
          <div className="bg-black p-6 space-y-4 w-full max-w-md">
            <h2 className="text-gray-600 text-lg">Challange</h2>
            <h3 className="text-lime-400 text-md">Play what you hear</h3>
            <p>Get the notes right of the lick</p>
            <div className="space-y-2">
              <button className="bg-lime-400 text-black px-4 py-1 w-full text-left hover:bg-lime-300">
                Listen
              </button>
              <button className="bg-lime-300 text-black px-4 py-1 w-full text-left hover:bg-lime-200">
                Record
              </button>
              <button className="bg-lime-200 text-black px-4 py-1 w-full text-left hover:bg-lime-100">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}