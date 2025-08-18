import chart from '../../images/bitcoin-chart.webp'

export default function Section7Bitcoin() {
    return (
        <section className="section7-Bitcoin">
            <div style={{
                width: '1000px',
                height: '1900px',
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
                    }}>How Has the Price of Bitcoin Changed Over Time?</h1>
                    <img style={{
                        width: '90%',
                        position: 'relative',
                        bottom: '35px'
                    }} src={chart} alt="" />
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
                    }}>Since its launch in 2009, Bitcoin has experienced significant price fluctuations, making it a highly volatile asset. In its early years, Bitcoin was traded for less than a cent per coin. In 2011, it reached its first milestone by surpassing the US$1 mark. BTC continued to gain traction, and in 2013, it reached a peak of $260.</p>
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
                    }}>Bitcoin's first notable price surge came in 2017 when it reached an all-time high (ATH) of nearly $20,000. However, the price sharply corrected in the following months, dropping to around $3,000 by the end of 2018.</p>
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
                    }}>The cryptocurrency market as a whole experienced another major surge in 2021, with Bitcoin reaching over $60,000 in April of that year. However, it experienced a subsequent correction, and the price dropped to under $20,000 by November 2022.</p>
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
                    }}>At the end of October 2023, Bitcoin's price was over $33,000. As of June 2024, it is over $71,000.</p>
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
                    }}>Conclusion</h1>
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
                    }}>Bitcoin has come a long way since its early days, revolutionising the financial landscape and soaring in price to unprecedented heights. Despite its volatility, Bitcoin has shown resilience and a degree of potential as a decentralised digital currency. Its ability to operate without traditional financial intermediaries and provide secure, transparent transactions has captured the attention of individuals and institutions worldwide.</p>
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
                    }}>With increasing adoption and acceptance, Bitcoin's future looks promising. As the cryptocurrency market continues to evolve, it's clear that Bitcoin has the potential to reshape the way we think about money and finance. Whether crypto serious or curious — it's hard not to be excited about the possibilities Bitcoin holds.</p>
                </div>
            </div>
        </section>
    )
}