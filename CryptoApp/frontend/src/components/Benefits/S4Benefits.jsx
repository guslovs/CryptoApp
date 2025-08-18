export default function Section4BenefitsPage() {
    return (
        <section className="section4-Benefits">
            <table style={{
                width: '90%',
                height: '200px',
                margin: 'auto',
                textAlign: 'center',
                marginTop: '30px',
                position: 'relative',
                bottom: '510px'
            }} className="stocks-table" >
                <thead>
                    <h1 style={{
                        textAlign: 'left',
                        position: 'relative',
                        left: '50px'
                    }}>STOCKS<span>coming soon</span></h1>
                </thead>
                <tbody>
                    <tr style={{
                        position: 'relative',
                    }}>
                        <th style={{
                            textAlign: 'center',
                            fontSize: '25px',
                            position: 'relative',
                            left: '15px'
                        }}>
                            <td>Bonus on Stock Transfers</td>
                            <p style={{
                                position: 'relative',
                                right: '135px',
                                bottom: '10px',
                                fontWeight: '300',
                                fontSize: '15px'
                            }}>Bonus Cap</p>
                        </th>
                        <td>
                            <td style={{
                                fontSize: '25px'
                            }}>1%</td>
                            <p style={{
                                position: 'relative',
                                right: '27.5px'
                            }}>$1,000</p>
                        </td>
                        <td>
                            <td style={{
                                fontSize: '25px'
                            }}>1.25%</td>
                            <p style={{
                                position: 'relative',
                                right: '35px'
                            }}>$2,500</p>
                        </td>
                        <td>
                            <td style={{
                                fontSize: '25px'
                            }}>2.5%</td>
                            <p style={{
                                position: 'relative',
                                right: '30px'
                            }}>$50,000</p>
                        </td>
                        <td>
                            <td style={{
                                fontSize: '25px'
                            }}>2.5%</td>
                            <p style={{
                                position: 'relative',
                                right: '32.5px'
                            }}>$100,000</p>
                        </td>
                        <td>
                            <td style={{
                                fontSize: '25px'
                            }}>3%</td>
                            <p style={{
                                position: 'relative',
                                right: '40px'
                            }}>$300,000</p>
                        </td>
                        <td>
                            <td style={{
                                fontSize: '25px'
                            }}>3%</td>
                            <p style={{
                                position: 'relative',
                                right: '45px'
                            }}>$600,000</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}