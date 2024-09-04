// src/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
        <div className="space-y-4">
          <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-100">
            <i className="icon-info mr-3"></i>
            Full information
          </button>
          <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-100">
            <i className="icon-sort mr-3"></i>
            Change the order of documents
          </button>
          <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-100">
            <i className="icon-help mr-3"></i>
            Questions and answers
          </button>
        </div>
        <div className="mt-4">
          <button
            onClick={onClose}
            className="w-full p-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
