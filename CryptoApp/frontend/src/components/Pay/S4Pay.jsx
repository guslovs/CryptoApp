import starCard from '../../images/starbucks-card.jpg'
import appleCard from '../../images/apple-card.jpg'
import adidasCard from '../../images/adidas-card.png'

export default function Section4Pay() {
    return (
        <section className="section4-Pay">
            <h1>Buy gift cards with crypto</h1>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <div style={{
                    backgroundImage: `url(${starCard})`,
                    backgroundSize: 'cover',
                    width: '530px',
                    height: '300px',
                    borderRadius: '28px'
                }}>
                    <h5 style={{
                        fontSize: '16px',
                        position: 'relative',
                        left: '320px',
                        top: '225px',
                        color: 'white'
                    }}>Starbucks gift card</h5>
                </div>
                <div style={{
                    backgroundImage: `url(${appleCard})`,
                    backgroundSize: 'cover',
                    width: '530px',
                    height: '300px',
                    borderRadius: '28px'
                }}>
                    <h5 style={{
                        fontSize: '16px',
                        position: 'relative',
                        left: '20px',
                        top: '225px'
                    }}>Apple gift card</h5>
                </div>
                <div style={{
                    backgroundImage: `url(${adidasCard})`,
                    backgroundSize: 'cover',
                    width: '530px',
                    height: '300px',
                    borderRadius: '28px'
                }}>
                    <h5 style={{
                        color: 'white',
                        fontSize: '16px',
                        position: 'relative',
                        left: '20px',
                        top: '225px'
                    }}>Adidas gift card</h5>
                </div>
            </div>
            <div style={{
                display: 'grid',
                placeItems: 'center',
                marginTop: '50px'
            }}>
                <a href='https://help.crypto.com/en/articles/3073295-crypto-com-gift-cards'>
                    <button style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        height: '50px',
                        width: '180px',
                        borderRadius: '24px',
                        cursor: 'pointer'
                    }}>All gift cards 🡢</button>
                </a>
                <p>Availability varies by country</p>
            </div>
        </section>
    )
}