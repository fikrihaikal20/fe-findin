import { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">Sulit untuk mencari talent yang sesuai?</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transform transition-transform duration-300 ease-in-out"
          viewBox="0 0 20 20"
          fill="currentColor"
          rotate={isOpen ? "180" : "0"}
        >
          <path
            fillRule="evenodd"
            d="M5.293 6.707a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="px-4 py-2 bg-gray-200 shadow">
          <p className="text-base font-medium mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            totam aspernatur nisi consectetur quia.
          </p>
          <p className="text-base font-medium mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            totam aspernatur nisi consectetur quia.
          </p>
          <p className="text-base font-medium mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            totam aspernatur nisi consectetur quia.
          </p>
          <p className="text-base font-medium mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            totam aspernatur nisi consectetur quia.
          </p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <div className="relative">
        <h1 className="absolute text-5xl font-semibold text-black mt-[70px] ml-[150px]">
          Temukan talent mahasiswa
        </h1>
        <p className="absolute text-5xl font-semibold text-black mt-[120px] ml-[150px]">
          yang anda butuhkan
        </p>
        <p className="absolute text-5xl font-semibold text-black mt-[170px] ml-[150px]">
          dengan cepat
        </p>
      </div>
      <Dropdown />
    </div>
  );
}

export default App;
