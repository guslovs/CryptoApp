import img1 from '../../images/ethereum-img.png'
import img2 from '../../images/ethereum-img2.png'
import img3 from '../../images/ethereum-img3.png'

export default function Section4Ethereum() {
    return (
        <section className="section4-Ethereum">
            <div style={{
                width: '1000px',
                height: '5000px',
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
                    }}>What Is Ethereum Classic? </h1>
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
                    }}><span style={{ fontWeight: 'bold' }}>Ethereum Classic (ETC) is a blockchain-based, open-source, decentralised network</span> consisting of a blockchain ledger, native cryptocurrency, and an ecosystem of on-chain applications and services. Conceived by Vitalik Buterin and launched by Ethereum Foundation in 2015, it is a canonical chain that allows developers to build and deploy smart contracts.</p>
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
                    }}>Essentially, <span style={{ fontWeight: 'bold' }}>Ethereum Classic is the pre-forked version of Ethereum:</span> a continuation of the original Ethereum built in 2015. The network we know today, referred to simply as Ethereum, is the post-fork version of the Ethereum (Classic) mainnet chain.</p>
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
                    }}>Ethereum Classic’s origins trace back to a multimillion-dollar exploit of The DAO, a decentralised autonomous organisation (DAO) launched by blockchain solutions company Slock.it in 2016. The DAO was one of the largest crowdfunding campaigns in crypto history, raising over US$150 million worth of ether.</p>
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
                    }}>Concerns were expressed about the vulnerabilities to The DAO’s code during the crowdsale, and three months after its inception, The DAO was hacked. The hack was mainly due to the flaw of ‘recursive calls’, and about 3.6 million ether (worth ~$50 million at the time) were drained as a result.</p>
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
                    }}>This event forced Ethereum to eventually hard fork, where the new chain rolled back the original chain prior to The DAO attack, restoring 70% of the stolen funds. The new fork was branded as Ethereum by the trademark-owning Ethereum Foundation, and the original non-fork Ethereum network was rebranded to Ethereum Classic after the hard fork.</p>
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
                    }}>The hard fork was controversial at that time, as blockchains were viewed to be immutable and censorship-resistant. <span style={{ fontWeight: 'bold' }}>One defining attribute of Ethereum Classic is that it upholds the concept of ‘Code is Law’</span>. In the context of cryptocurrency, it refers to the ideology that rules and regulations of a decentralised network are enforced solely through its underlying code.</p>
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
                    }}>Within Ethereum Classic, it’s the founding principle stating that a smart contract’s code is the “ultimate arbiter of the outcome of an on-chain interaction, as opposed to some overriding force from outside the network.” Proponents consider it as a necessary component of a pure and truly decentralised system, which is how some draw a parallel between Ethereum Classic and Bitcoin.</p>
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
                    }}>How Is Ethereum Different From Ethereum Classic?</h1>
                    <img style={{
                        width: '90%',
                        position: 'relative',
                        bottom: '40px',
                        borderRadius: '24px'
                    }} src={img1} alt="" />
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
                    }}>There are several differences between the two networks, including: </p>
                    <ul>
                        <li style={{
                        color: '#323C52',
                        textAlign: 'left',
                        fontSize: '22.5px',
                        width: '925px',
                        position: 'relative',
                        left: '30px',
                        bottom: '30px',
                        marginTop: '40px',
                        marginBottom: '40px'
                    }}><span style={{ fontWeight: 'bold' }}>Token</span>. Since Ethereum and Ethereum Classic are two separate blockchains, each has its own native token: ETH and ETC, respectively. As the second-largest cryptocurrency in the world, ETH features a market cap of $192 billion today. Meanwhile, ETC has a much smaller market cap, standing at around $2.7 billion. (Figures current at the time of writing.)</li>
                    </ul>
                    <img style={{
                        width: '90%',
                        position: 'relative',
                        bottom: '40px',
                        borderRadius: '24px'
                    }} src={img2} alt="" />
                    <img style={{
                        width: '90%',
                        position: 'relative',
                        borderRadius: '24px'
                    }} src={img3} alt="" />
                    <ul style={{
                        position: 'relative',
                        top: '40px'
                    }}>
                        <li style={{
                        color: '#323C52',
                        textAlign: 'left',
                        fontSize: '22.5px',
                        width: '925px',
                        position: 'relative',
                        left: '30px',
                        bottom: '30px',
                        marginTop: '40px',
                        marginBottom: '40px'
                    }}><span style={{ fontWeight: 'bold' }}>Supply</span>. Ethereum has no fixed supply, while Ethereum Classic has adopted a fixed monetary policy and a limited supply of around 210 million tokens in its lifespan.</li>
                        <li style={{
                        color: '#323C52',
                        textAlign: 'left',
                        fontSize: '22.5px',
                        width: '925px',
                        position: 'relative',
                        left: '30px',
                        bottom: '30px',
                        marginTop: '40px',
                        marginBottom: '40px'
                    }}><span style={{ fontWeight: 'bold' }}>Consesus mechanism</span>. Ethereum Classic prioritises censorship resistance and is committed to remaining under the Proof of Work (PoW) consensus mechanism, which relies on miners to verify transactions on the blockchain; in return, they receive ETC in rewards. Ethereum, however, made its transition to the Proof of Stake (PoS) mechanism in 2022, which allows network participants — called validators — to stake their tokens in order to activate their ability to get rewards.</li>
                        <li style={{
                        color: '#323C52',
                        textAlign: 'left',
                        fontSize: '22.5px',
                        width: '925px',
                        position: 'relative',
                        left: '30px',
                        bottom: '30px',
                        marginTop: '40px',
                        marginBottom: '40px'
                    }}><span style={{ fontWeight: 'bold' }}>Design philosophy</span>. The hard fork that led to the creation of Ethereum Classic sparked an ideological debate within the wider crypto community. The ETC community argues that it has stayed loyal to the notion that the blockchain should remain immutable and never be changed, pointing out that Ethereum Classic contains the original blockchain showing every transaction — including the exploit. But for some, the hard fork was considered a ‘bailout’ and goes against the concept of immutability. In terms of principles, if Ethereum Classic follows ‘Code is Law’, Ethereum’s philosophy can therefore be referred to as ‘social slashing’.</li>
                    </ul>
                </div>
                <hr style={{
                    width: '90%',
                    position: 'relative',
                    top: '90px'
                }} />

                <div style={{
                    position: 'relative',
                    top: '90px'
                }}>
                    <h1 style={{
                        textAlign: 'left',
                        fontSize: '60px',
                        width: '900px',
                        position: 'relative',
                        left: '50px',
                        marginBottom: '80px'
                    }}>Conclusion — What Is Different About Ethereum Classic?</h1>
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
                    }}>More upcoming upgrades are awaiting Ethereum on its current roadmap. As Ethereum Classic currently has no formal executive roadmap, its future is not so clear. However, both Ethereum and Ethereum Classic have their own features and unique positioning, which can cater to specific needs and use cases in the market today.</p>
                </div>
            </div>
        </section>
    )
}