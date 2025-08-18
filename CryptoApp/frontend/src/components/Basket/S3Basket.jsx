import phone1 from '../../images/basket-phone.webp'
import diverse from '../../images/diverse.webp'
import phone2 from '../../images/basket-phone2.webp'
import recurring from '../../images/recurring.webp'
import phone3 from '../../images/basket-phone3.webp'

export default function Section3CryptoBasket() {
    return (
        <section className="section3-Basket">
            <h1>Get into your favourite coins, one basket at a time.</h1>
            <div style={{ display: 'flex' }}>
                <img style={{
                    width: '420px',
                    height: '740px',
                    position: 'relative',
                    left: '300px',
                    fontSize: '30px'
                }} src={phone1} alt="" />
                <h2 style={{
                    position: 'relative',
                    left: '350px',
                    top: '300px'
                }}>Crypto made accessible</h2>
                <p style={{
                    position: 'relative',
                    top: '350px',
                    left: '65px',
                    width: '500px',
                }}>Simple and elegant user experience makes it easy to buy into the most popular crypto projects — all in just one tap.</p>
            </div>
            <div style={{ display: 'flex' }}>
                <img style={{
                    width: '445px',
                    height: '240px',
                    position: 'relative',
                    left: '800px',
                    fontSize: '30px'
                }} src={diverse} alt="" />
                <h2 style={{
                    position: 'relative',
                    right: '242.5px',
                    top: '70px'
                }}>Instant diversification</h2>
                <p style={{
                    position: 'relative',
                    top: '120px',
                    right: '500px',
                    width: '500px'
                }}>Buy multiple tokens in your preferred Crypto Basket to diversify your portfolio easily.</p>
            </div>
            <div style={{ display: 'flex' }}>
                <img style={{
                    width: '420px',
                    height: '740px',
                    position: 'relative',
                    left: '300px',
                    fontSize: '30px'
                }} src={phone2} alt="" />
                <h2 style={{
                    position: 'relative',
                    left: '350px',
                    top: '300px'
                }}>Auto-rebalancing</h2>
                <p style={{
                    position: 'relative',
                    top: '350px',
                    left: '142.5px',
                    width: '500px',
                }}>Set and execute buy-low-sell-high strategies automatically and maintain your portfolio allocation.</p>
            </div>
            <div style={{ display: 'flex' }}>
                <img style={{
                    width: '445px',
                    height: '280px',
                    position: 'relative',
                    left: '800px',
                    fontSize: '30px',
                    borderRadius: '24px'
                }} src={recurring} alt="" />
                <h2 style={{
                    position: 'relative',
                    right: '242.5px',
                    top: '70px'
                }}>Recurring Buy</h2>
                <p style={{
                    position: 'relative',
                    top: '120px',
                    right: '412px',
                    width: '500px'
                }}>Buy your favourite baskets automatically and calculate your potential PnL with the DCA Calculator.</p>
            </div>
            <div style={{ display: 'flex' }}>
                <img style={{
                    width: '420px',
                    height: '740px',
                    position: 'relative',
                    left: '300px',
                    fontSize: '30px'
                }} src={phone3} alt="" />
                <h2 style={{
                    position: 'relative',
                    left: '350px',
                    top: '300px'
                }}>Your basket, customised</h2>
                <p style={{
                    position: 'relative',
                    top: '350px',
                    left: '65px',
                    width: '500px',
                }}>Create and manage personalized crypto baskets with AI Basket Builder or manually, updating anytime with historical performance data.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <a href="/signup"><button>Explore Crypto Basket</button></a>
            </div>
        </section>
    )
}