export default function Section5Bitcoin() {
    return (
        <section className="section5-Bitcoin">
            <div style={{
                width: '1000px',
                height: '1350px',
                textAlign: 'center',
                backgroundColor: 'white',
                margin: '0 auto',
                position: 'relative',
            }}> 
                <div style={{
                    position: 'relative',
                    top: '50px'
                }}>
                    <h1 style={{
                        textAlign: 'left',
                        fontSize: '60px',
                        width: '900px',
                        position: 'relative',
                        left: '50px',
                        marginBottom: '80px'
                    }}>Is Bitcoin Valuable?</h1>
                    <p style={{
                        color: '#323C52',
                        textAlign: 'left',
                        fontSize: '22.5px',
                        width: '925px',
                        position: 'relative',
                        left: '50px',
                        bottom: '30px',
                        marginTop: '40px',
                        marginBottom: '40px'
                    }}>Bitcoin is valued by members of the cryptocurrency community for several reasons. <span style={{ fontWeight: 'bold' }}>First</span>, it is a decentralised currency, meaning its issuance is not controlled by any government or central authority.</p>
                    <p style={{
                        color: '#323C52',
                        textAlign: 'left',
                        fontSize: '22.5px',
                        width: '925px',
                        position: 'relative',
                        left: '50px',
                        bottom: '30px',
                        marginTop: '40px',
                        marginBottom: '40px'
                    }}><span style={{ fontWeight: 'bold' }}>Second</span>, Bitcoin has a limited supply, with only 21 million coins ever to be mined. This scarcity is often compared to gold by the cryptocurrency community and makes Bitcoin an attractive asset for some. Unsurprisingly, Bitcoin has been dubbed ‘digital gold’.</p>
                    <p style={{
                        color: '#323C52',
                        textAlign: 'left',
                        fontSize: '22.5px',
                        width: '925px',
                        position: 'relative',
                        left: '50px',
                        bottom: '30px',
                        marginTop: '40px',
                        marginBottom: '40px'
                    }}><span style={{ fontWeight: 'bold' }}>Third</span>, Bitcoin operates on a secure and transparent technology called blockchain. This ensures that transactions are recorded and verified by a network of computers, making it virtually impossible to alter or counterfeit transactions. Some consider that these factors have combined to make Bitcoin a valuable and increasingly sought-after digital asset.</p>
                </div>
                <hr style={{
                    width: '90%',
                    position: 'relative',
                    top: '50px'
                }} />

                <div style={{
                    position: 'relative',
                    top: '50px'
                }}>
                    <h1 style={{
                        textAlign: 'left',
                        fontSize: '60px',
                        width: '900px',
                        position: 'relative',
                        left: '50px',
                        marginBottom: '80px'
                    }}>Sending and Receiving Bitcoin</h1>
                    <p style={{
                        color: '#323C52',
                        textAlign: 'left',
                        fontSize: '22.5px',
                        width: '925px',
                        position: 'relative',
                        left: '50px',
                        bottom: '30px',
                        marginTop: '40px',
                        marginBottom: '40px'
                    }}>While miners mine to be rewarded and receive bitcoins, their mining fulfils another important task (other than creating new bitcoins): It records Bitcoin transactions safely and immutably (i.e., they can’t be tampered with) on the Bitcoin blockchain.</p>
                    <p style={{
                        color: '#323C52',
                        textAlign: 'left',
                        fontSize: '22.5px',
                        width: '925px',
                        position: 'relative',
                        left: '50px',
                        bottom: '30px',
                        marginTop: '40px',
                        marginBottom: '40px'
                    }}>Both the sender and receiver need a Bitcoin wallet to complete a Bitcoin transaction with each other. The sender transmits the amount of Bitcoin and wallet address to the network, and within a few minutes, the transaction is verified by miners, included in the next block, and considered complete. The receiver can then log in to their wallet with their private key (i.e., the password to their wallet) and confirm the receipt of the transaction.</p>
                    <p style={{
                        color: '#323C52',
                        textAlign: 'left',
                        fontSize: '22.5px',
                        width: '925px',
                        position: 'relative',
                        left: '50px',
                        bottom: '30px',
                        marginTop: '40px',
                        marginBottom: '40px'
                    }}>In addition, everyone in the Bitcoin network can verify and accept the transaction as valid, as the wallet addresses are immutably recorded on the blockchain and can be viewed publicly with a block explorer.</p>
                </div>
                <hr style={{
                    width: '90%',
                    position: 'relative',
                    top: '50px'
                }} />
            </div>
        </section>
    )
}