import { useRouter } from "next/router";
import { useEffect, ReactElement } from "react";
import { peraWallet, useConnectWallet } from "../../pages/api/connector";

interface ConnectButtonProps {
  id: string;
  title: string;
}

const ConnectWalletButton = ({
  id,
  title,
}: ConnectButtonProps): ReactElement => {
  const { connectWallet, accountAddress } = useConnectWallet();
  const router = useRouter();

  useEffect(() => {
    if (peraWallet.isConnected) {
      // TODO: check user status to avoid unnecessary walletaddress update.
      updateUserWalletAddress(accountAddress);
    }
  }, [peraWallet.isConnected]);

  const updateUserWalletAddress = async (walletAddress: string) => {
    const res = await fetch("api/wallet-address", {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("AccessToken"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        walletAddress,
      }),
    });

    if (res.status === 200) {
      alert("Successfully update wallet address.");
      router.push("/issuerDashboard");
    } else {
      alert("Failed update wallet address, please login again.");
    }
  };

  return (
    <div className="col-12">
      <button
        className="default-btn btn-two"
        onClick={() => connectWallet()}
        data-testid={id}>
        {title}
      </button>
    </div>
  );
};

export default ConnectWalletButton;
