import midnightCard from '../../images/midnight-card.webp'
import rubyCard from '../../images/ruby-card.webp'
import jadeCard from '../../images/jade-card.webp'
import roseCard from '../../images/rose-card.webp'
import obsidianCard from '../../images/obsidian-card.webp'
import primeCard from '../../images/prime-card.webp'

export default function Section2BenefitsPage() {
    return (
        <section className="section2-Benefits">
            <table style={{
                width: '90%',
                height: '200px',
                margin: 'auto',
                textAlign: 'center',
                marginTop: '30px',
                position: 'relative',
                bottom: '600px'
            }} className="cards-table" >
                <thead>
                    <h1 style={{
                        textAlign: 'left',
                        position: 'relative',
                        left: '50px'
                    }}>CARDS</h1>
                </thead>
                <tbody>
                    <tr style={{
                        position: 'relative',
                    }}>
                        <th style={{
                            textAlign: 'center',
                            fontSize: '25px',
                            position: 'relative',
                            bottom: '10px',
                            left: '15px'
                        }}>Card Design</th>
                        <td>
                            <img style={{ 
                                width: '80px',
                                height: '50px'
                             }} src={midnightCard} alt="Card" />
                            <p>Midnight Blue</p>
                        </td>
                        <td>
                            <img style={{ 
                                width: '80px',
                                height: '50px'
                             }} src={rubyCard} alt="Card" />
                            <p>Ruby</p>
                        </td>
                        <td>
                            <img style={{ 
                                width: '80px',
                                height: '50px'
                             }} src={jadeCard} alt="Card" />
                            <p>Jade Green</p>
                        </td>
                        <td>
                            <img style={{ 
                                width: '80px',
                                height: '50px'
                             }} src={roseCard} alt="Card" />
                            <p>Rose Gold</p>
                        </td>
                        <td>
                            <img style={{ 
                                width: '80px',
                                height: '50px'
                             }} src={obsidianCard} alt="Card" />
                            <p>Obsidian</p>
                        </td>
                        <td>
                            <img style={{ 
                                width: '80px',
                                height: '50px'
                             }} src={primeCard} alt="Card" />
                            <p>Prime</p>
                        </td>
                    </tr>
                    <tr style={{
                        position: 'relative',
                        bottom: '10px',
                    }}>
                        <th style={{
                            fontSize: '25px',
                            width: '150px',
                            position: 'relative',
                            bottom: '10px',
                            left: '15px'
                        }}>Max. CRO Rewards on Everyday Spending</th>
                        <td style={{
                            fontSize: '25px'
                        }}>0%</td>
                        <td style={{
                            fontSize: '25px'
                        }}>2%</td>
                        <td style={{
                            fontSize: '25px'
                        }}>3.5%</td>
                        <td style={{
                            fontSize: '25px'
                        }}>5%</td>
                        <td style={{
                            fontSize: '25px'
                        }}>6.5%</td>
                        <td style={{
                            fontSize: '25px'
                        }}>8%</td>
                    </tr>
                    <tr>
                        <th style={{
                            fontSize: '25px',
                            width: '150px',
                            position: 'relative',
                            left: '15px',
                            bottom: '5px'
                        }}>CRO Rewards on Crypto <span>Travel</span></th>
                        <td style={{
                            fontSize: '25px'
                        }}>0%</td>
                        <td style={{
                            fontSize: '25px'
                        }}>0%</td>
                        <td style={{
                            fontSize: '25px'
                        }}>5%</td>
                        <td style={{
                            fontSize: '25px'
                        }}>10%</td>
                        <td style={{
                            fontSize: '25px'
                        }}>10%</td>
                        <td style={{
                            fontSize: '25px'
                        }}>10%</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}