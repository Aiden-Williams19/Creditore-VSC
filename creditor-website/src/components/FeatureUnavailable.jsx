import React, { useEffect, useState } from 'react';

export default function FeatureUnavailable() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('This feature is not available yet.');

  useEffect(() => {
    function show(e) {
      if (e && e.detail && e.detail.message) setMessage(e.detail.message);
      setOpen(true);
    }
    window.addEventListener('showFeatureUnavailable', show);
    return () => window.removeEventListener('showFeatureUnavailable', show);
  }, []);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Feature unavailable" style={overlayStyle} onClick={() => setOpen(false)}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ marginTop: 0 }}>Not available yet</h3>
        <p style={{ margin: '8px 0 16px' }}>{message}</p>
        <div style={{ textAlign: 'right' }}>
          <button onClick={() => setOpen(false)} style={btnStyle}>OK</button>
        </div>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1500,
};
const modalStyle = {
  maxWidth: 520, width: '90%', background: '#fff', padding: '20px 20px', borderRadius: 10, boxShadow: '0 10px 40px rgba(2,6,23,0.4)'
};
const btnStyle = { padding: '.6rem 1rem', background: '#0b5ed7', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' };
