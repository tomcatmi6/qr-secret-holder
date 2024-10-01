"use client";
import { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState<string>('');

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Generate QR Code</h1>
      <input
        type="text"
        placeholder="Enter some text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      {text && (
        <div style={{ margin: '20px' }}>
          <QRCode value={text} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;