import "./index.css"
import {TonConnectButton, useTonWallet, Wallet} from "@tonconnect/ui-react";

const IndexPage = () => {
    const wallet: Wallet = useTonWallet();

    return (
        <div>
            <TonConnectButton/>

            {wallet &&
                <div>
                    Wallet connectet
                </div>
            }

        </div>
    )
}

export default IndexPage