import QRScanner from '../components/QRScanner';
import Link from 'next/link';

const ScanPage: React.FC = () => {
  return (
    <div>
      <QRScanner />
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Link href="/">
          <span style={{ color: 'blue', textDecoration: 'underline' }}>Go back to QR Code Generator</span>
        </Link>
      </div>
    </div>
  );
};

export default ScanPage;