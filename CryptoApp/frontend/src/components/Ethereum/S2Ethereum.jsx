import classic from '../../images/eth-classic.jpg'

export default function Section2Ethereum() {
    return (
        <section className="section2-Ethereum">
            <div style={{
                width: '1000px',
                height: '1900px',
                textAlign: 'center',
                backgroundColor: 'white',
                margin: '0 auto',
                position: 'relative',
                bottom: '90px',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px'
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
                    }}>Ethereum vs Ethereum Classic - What Is The Difference?</h1>
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
                    }}>They may share the name, but Ethereum and Ethereum Classic are different in many ways. Here’s a comparison of both chains.</p>
                    <img style={{
                        width: '90%',
                        borderRadius: '24px'
                    }} src={classic} alt="" />
                    <h3 style={{
                        textAlign: 'left',
                        fontSize: '30px',
                        width: '900px',
                        position: 'relative',
                        left: '50px',
                        marginBottom: '80px'
                    }}>Key Takeaways:</h3>
                    <ul style={{
                        position: 'relative',
                        right: '20px'
                    }}>
                        <li style={{
                        color: '#323C52',
                        textAlign: 'left',
                        fontSize: '22.5px',
                        width: '900px',
                        position: 'relative',
                        left: '50px',
                        bottom: '30px',
                        marginTop: '40px',
                        marginBottom: '40px'
                    }}>Ethereum Classic (ETC) is a blockchain-based, open-source, decentralised network used to build smart contracts and decentralised apps (dapps).</li>
                        <li style={{
                        color: '#323C52',
                        textAlign: 'left',
                        fontSize: '22.5px',
                        width: '900px',
                        position: 'relative',
                        left: '50px',
                        bottom: '30px',
                        marginTop: '40px',
                        marginBottom: '40px'
                    }}>Ethereum Classic was created after The DAO hack in 2016; it is the continuation of the original Ethereum platform built in 2015. The new hard-forked chain, named Ethereum (ETH), is maintained by the Ethereum Foundation.</li>
                        <li style={{
                        color: '#323C52',
                        textAlign: 'left',
                        fontSize: '22.5px',
                        width: '900px',
                        position: 'relative',
                        left: '50px',
                        bottom: '30px',
                        marginTop: '40px',
                        marginBottom: '40px'
                    }}>There are several key differences between Ethereum and Ethereum Classic, mainly regarding market value, mechanisms, and design philosophy.</li>
                        <li style={{
                        color: '#323C52',
                        textAlign: 'left',
                        fontSize: '22.5px',
                        width: '900px',
                        position: 'relative',
                        left: '50px',
                        bottom: '30px',
                        marginTop: '40px',
                        marginBottom: '40px'
                    }}>Ethereum might be the more popular choice, but both it and Ethereum Classic have their own features and unique positioning that cater to specific needs and use cases in the market today. </li>
                    </ul>
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
                    }}>Introduction</h1>
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
                    }}>The second-largest blockchain in the market today, Ethereum has a market cap of around US$192 billion (at the time of writing) and is one of the most trusted blockchains for developers and users alike. Its predecessor in design, Ethereum Classic, has begun generating interest since ‘The Merge’ was successfully completed in 2022. However, not everyone new to crypto is familiar with Ethereum Classic.</p>
                </div>
            </div>
        </section>
    )
}