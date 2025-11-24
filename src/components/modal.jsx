// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null; // Don't render the modal if it's not open
  }

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, // Ensure modal is on top
      }}
      onClick={onClose} // Close modal when clicking outside
    >
      <div 
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {children}
        <button 
          onClick={onClose} 
          style={{ 
            position: 'absolute', 
            top: '10px', 
            right: '10px', 
            background: 'none', 
            border: 'none', 
            fontSize: '1.2em', 
            cursor: 'pointer' 
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;