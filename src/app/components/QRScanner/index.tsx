"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';

const QrScanner = dynamic<QRCodeScannerProps>(() => import('react-qr-scanner'), { ssr: false });
interface QRCodeScannerProps {
  delay?: number;
  onError?: (error: Error) => void;
  onScan?: (result: { text: string } | null) => void;
  style?: React.CSSProperties;
}
const QRScanner: React.FC = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);

  const handleScan = (data: { text: string } | null) => {
    if (data) {
      setScanResult(data.text);
    }
  };

  const handleError = (err: unknown) => {
    console.error(err);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Scan QR Code</h1>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '300px' }}
      />
      <p>Scanned Result: {scanResult}</p>
    </div>
  );
};

export default QRScanner;
