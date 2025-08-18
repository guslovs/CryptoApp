export default function Section1CryptoPrices() {
    return (
        <section className="section1-Prices">
            <header>
                <div style={{
                    display: 'flex',
                    gap: '20px',
                    position: 'relative',
                    left: '80px'
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '10px'
                    }}>
                        <p style={{
                            color: 'gray'
                        }}>Coins: </p>
                        <p style={{
                            fontWeight: 'bold'
                        }}>26,977</p>
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: '10px'
                    }}>
                        <p style={{
                            color: 'gray',
                        }}>Market Cap: </p>
                        <p style={{
                            fontWeight: 'bold'
                        }}>$3,975.27B USD</p>
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: '10px'
                    }}>
                        <p style={{
                            color: 'gray'
                        }}>24H Change: </p>
                        <p style={{
                            color: '#E64B60',
                            fontWeight: 'bold'
                        }}>-0.14%</p>
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: '10px'
                    }}>
                        <p style={{
                            color: 'gray'
                        }}>24H Volume: </p>
                        <p style={{
                            fontWeight: 'bold'
                        }}>$130.66B USD</p>
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: '10px'
                    }}>
                        <p style={{
                            color: 'gray'
                        }}>Dominance: </p>
                        <p style={{
                            fontWeight: 'bold'
                        }}>BTC: 57.12%, ETH: 10.60%</p>
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: '10px'
                    }}>
                        <p style={{
                            color: 'gray'
                        }}>ETH Gas: </p>
                        <p style={{
                            fontWeight: 'bold'
                        }}>0 Gwei</p>
                    </div>
                </div>
            </header>
        </section>
    )
}