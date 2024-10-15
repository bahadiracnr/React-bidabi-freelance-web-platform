import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import FirstBg from '../assets/FirstBg.png';
import BrandLogo from '../assets/bir.png'; // Tek bir görsel kullanmak için

function App() {
  const brandLogos = Array(6).fill(BrandLogo); // 6 kez aynı görseli kullanacak

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="brand-carousel">
        <div className="container">
          <div className="brand-list">
            {brandLogos.map((logo, index) => (
              <div className="brand-item" key={index}>
                <img src={logo} alt={`Brand ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>

      <div>
        <img className="FirstBg-Size" src={FirstBg} alt="Background" />
      </div>
    </>
  );
}

export default App;
