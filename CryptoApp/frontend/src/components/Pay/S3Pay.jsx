import phone from '../../images/pay-phone.webp'

export default function Section3Pay() {
    return (
        <section className="section3-Pay">
            <h1>More ways to pay at over 300,000 shops</h1>
            <div style={{ display: 'flex', gap: '30px', justifyContent:'center' }}>
                <img style={{
                    width: '315px',
                    height: '600px',
                    borderRadius: '24px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)'
                }} src={phone} alt="" />
                <h2 style={{
                    fontSize: '40px',
                    width: '350px',
                    position: 'relative',
                    top: '200px',
                    left: '40px',
                    color: 'black'
                }}>Pay with crypto at checkout</h2>
            </div>
        </section>
    )
}