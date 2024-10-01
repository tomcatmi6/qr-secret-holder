import QRScanner from './components/QRScanner';
import Link from 'next/link';

const ScanPage: React.FC = () => {
  return (
    <div>
      <QRScanner />
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Link href="/">
          <a style={{ color: 'blue', textDecoration: 'underline' }}>Go back to QR Code Generator</a>
        </Link>
      </div>
    </div>
  );
};

export default ScanPage;