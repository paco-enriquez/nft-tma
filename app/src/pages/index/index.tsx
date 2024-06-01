import "./index.css"
import {TonConnectButton, useTonWallet} from "@tonconnect/ui-react";

const IndexPage = () => {
    const wallet = useTonWallet();

    return (
        <div>
            <TonConnectButton/>

            {wallet &&
                <div>
                    Wallet connected
                </div>
            }

        </div>
    )
}

export default IndexPage