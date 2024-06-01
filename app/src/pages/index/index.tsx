import "./index.css"
import {TonConnectButton, useTonWallet} from "@tonconnect/ui-react";

const IndexPage = () => {
    const wallet = useTonWallet();

    return (
        <div>
            <TonConnectButton/>

            {wallet &&
                <div>
                    <span>Connected wallet: {wallet.name}</span>
                    <span>Device: {wallet.device.appName}</span>
                </div>
            }

        </div>
    )
}

export default IndexPage