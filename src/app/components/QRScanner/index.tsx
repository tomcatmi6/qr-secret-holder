import { useState } from 'react';
import dynamic from 'next/dynamic';

// Używamy dynamicznego importu, ponieważ react-qr-scanner wymaga dostępu do przeglądarki
const QrScanner = dynamic(() => import('react-qr-scanner'), { ssr: false });

const QRScanner: React.FC = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);

  const handleScan = (data: { text: string } | null) => {
    if (data) {
      setScanResult(data.text);
    }
  };

  const handleError = (err: any) => {
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
