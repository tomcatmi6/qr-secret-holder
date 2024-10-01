declare module 'react-qr-scanner' {
    interface QRCodeScannerProps {
      delay?: number;
      onError?: (error: Error) => void;
      onScan?: (result: { text: string } | null) => void;
      style?: React.CSSProperties;
    }
  
    const QRCodeScanner: React.FC<QRCodeScannerProps>;
    export default QRCodeScanner;
  }