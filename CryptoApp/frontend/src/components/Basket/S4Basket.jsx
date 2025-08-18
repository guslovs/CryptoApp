import Section4HomePage from "../HomePage/S4HomePage";

export default function Section4CryptoBasket() {
    return (
        <section style={{
            position: 'relative',
            bottom: '16px'
        }} className="section4-Basket">
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                position: 'relative',
                top: '50px'
            }}>
                <div style={{
                    width: '340px',
                    height: '410px',
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: '24px'
                }}>
                    <p style={{
                        fontWeight: '500',
                        position: 'relative',
                        left: '32.5px',
                        top: '20px'
                    }} className="blue-words">Crypto Basket</p>
                    <h1 style={{
                        fontSize: '50px',
                        width: '250px',
                        position: 'relative',
                        left: '30px',
                        bottom: '15px'
                    }}>How does it work?</h1>
                    <a href="https://help.crypto.com/en/articles/10116164-crypto-basket">
                        <button style={{
                            position: 'relative',
                            left: '20px',
                            top: '80px'
                        }}>Help Article 🡢</button>
                    </a>
                </div>
                <div>
                    <iframe
                        src="https://www.youtube.com/embed/dbszswaWnm0"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            height: '410px',
                            width: '720px',
                            borderRadius: '24px'
                        }}
                    >
                    </iframe>
                </div>
            </div>
            <div style={{
                height: '210px',
                width: '1080px',
                position: 'relative',
                top: '45px',
                left: '220px',
                backgroundColor: 'white',
                borderRadius: '24px'
            }}>
                <ol style={{
                    color: 'black',
                    fontSize: '25px',
                    fontWeight: '600',
                    position: 'relative',
                    top: '30px',
                    left: '10px'
                }}>
                    <li style={{ marginBottom: '10px' }}>Tap Crypto Basket from the main menu</li>
                    <li style={{ marginBottom: '10px' }}>Select your preferred basket in the Discover tab</li>
                    <li style={{ marginBottom: '10px' }}>Enter your purchase amount</li>
                    <li style={{ marginBottom: '10px' }}>Turn on auto-rebalance (or not) and pay with your preferred method</li>
                </ol>
            </div>
            <div style={{
                position: 'relative',
                top: '100px'
            }}>
                <Section4HomePage />
            </div>
        </section>
    )
}