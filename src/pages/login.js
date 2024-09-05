import React from 'react';
import logo from '../images/logo.png'; // Import the logo image
import checkBlackBox from '../images/check-black-box.png'; // Import the checkbox image
import tatraBanka from '../images/asob-bank.png'; // Import Tatra Banka image
import csob from '../images/asob-bank.png'; // Import CSOB image (assuming same image, update path if different)
import vubBanka from '../images/vub-bank.png'; // Import VUB Banka image

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-md md:max-w-md md:p-8 md:rounded-xl">
        <header className="mb-6 flex items-center">
          <img src={logo} alt="Presov logo" className="w-10 mr-2" />
          <h1 className="text-2xl font-semibold">Presov</h1>
        </header>
        <p className="text-gray-700 mb-4">Autorizacia s pomocou Banky</p>
        <div className="flex items-center mb-6">
          <p className="text-xs text-red-600">
            Ja poznam a cital povolenie na pouzitie{' '}
            <a href="#" className="text-red-600 underline">
              osobnych udajov
            </a>
          </p>
        </div>
        <div className="space-y-4">
          {/* Tatra Banka Button */}
          <button className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md flex items-center">
            <img src={checkBlackBox} alt="Tatra Banka" className="w-10 h-10 mr-4" />
            <span className="flex-1 text-left">Tatra Banka</span>
          </button>
          {/* CSOB Button */}
          <button className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md flex items-center">
            <img src={csob} alt="CSOB" className="w-10 h-10 mr-4" />
            <span className="flex-1 text-left">CSOB</span>
          </button>
          {/* VUB Banka Button */}
          <button className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md flex items-center">
            <img src={vubBanka} alt="VUB Banka" className="w-10 h-10 mr-4" />
            <span className="flex-1 text-left">VUB Banka</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
