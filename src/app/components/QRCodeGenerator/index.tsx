"use client";
import { useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import { useReactToPrint } from 'react-to-print';

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null);
const reactToPrintFn = useReactToPrint({ contentRef });
 

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Generate QR Code</h1>
      <textarea
        
        placeholder="Enter some text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      {text && (
        <div ref={contentRef} style={{ margin: '20px' }}>
          <QRCode value={text} />
        </div>
      )}
       <button onClick={() => reactToPrintFn()} disabled={!text} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Print QR Code
      </button>
    </div>
  );
};

export default QRCodeGenerator;