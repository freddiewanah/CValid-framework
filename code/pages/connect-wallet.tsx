import ConnectButton from "../components/connect-wallet-button";
import PageBanner from "../components/PageBanner";

const ConnectWallet = () => {
  return (

    <div style={{ textAlign: 'center' }}>

      <PageBanner
        pageTitle="Get Started"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Connecting wallet is like 'logging in' to Web3"
      />

      <div style={{ padding: '30px' }}>

        <div className="section" style={{ display: 'flex', justifyContent: 'space-between' }}>

          <div className="col" style={{ width: 'calc(50% - 10px)' }}>
           
        
            <h5 style={{ padding: '10px' }} >Click the button to start your Algorand journey!</h5>
            <ConnectButton id="connect-wallet-btn" title="Connect Wallet" />
          </div>
        </div>
      </div>
    </div>

  );
};

export default ConnectWallet;
