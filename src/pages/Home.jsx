import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import HowitWorks from '../components/HowitWorks';
import Question from '../components/Question';
import SwapForm from '../components/SwapForm';
import { colors } from '../values/colors';

function Home() {
  const title = 'Swap';

  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-fluid">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold text-white">SWAP ANY <span style={{ color: colors.primary }}>CRYPTO </span>INSTANTLY</h1>
          <div className="col-lg-6 mx-auto mb-4">
            <p className="lead mb-4 text-white">
              Fast Crypto Swaps, Free of Custody
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button"
                className="btn btn-success btn-lg px-4 text-black"
                style={{ background: colors.primary }}
              >
                Create Transaction
              </button>
              <button type="button"
                className="btn btn-success btn-lg px-5 gap-3"
                style={{ background: '#204D46' }}
              >
                Check Pricing
              </button>
            </div>
          </div>
        </div>
        <div className="px-4 py-5">
          <SwapForm />
        </div>
        <div className="px-4 py-5">
          <HowitWorks />
        </div>
        <div className="px-4 py-5">
          <Question />
        </div>
      </main>
    </>
  );
}

export default Home;
