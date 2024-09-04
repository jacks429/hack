import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-md">
        <header className="mb-6">
          <img src="logo.png" alt="Presov logo" className="w-10 mb-4" />
          <h1 className="text-2xl font-semibold">Presov</h1>
        </header>
        <p className="text-gray-700 mb-4">Autorizacia s pomocou Banky</p>
        <p className="text-xs text-red-600 mb-6">*Ja poznam a cital povolenie na pouzitie osobnych udajov</p>
        <div className="space-y-4">
          <button className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md flex items-center justify-between">
            <span>Tatra Banka</span>
          </button>
          <button className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md flex items-center justify-between">
            <span>CSOB</span>
          </button>
          <button className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md flex items-center justify-between">
            <span>VUB Banka</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
