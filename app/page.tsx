import App from '@/components/band/App';
import Main from '@/components/main/App';

export default function Home() {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'relative', zIndex: 0 }}>
          <App />
        </div>

        {/* Main will render above App */}
        <div style={{ margin: '10%', position: 'absolute', width: '50%', top: 0, right: 0, bottom: 0, left: 0, zIndex: 50 }}>
          <Main />
        </div>
      </div>
    </>
  );
}
