import { useState, useEffect } from 'react';
import BTC from '../../images/bitcoin.png'

export default function Section3Bitcoin() {

    const [prices, setPrices] = useState([])

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'X-API-KEY': 't2JsejzHiFv1WvzJn5Ltl1aiGhRY7T9CXHa8IUzb7y8='
            }
        };

        fetch('https://openapiv1.coinstats.app/coins?limit=50', options)
            .then(res => res.json())
            .then(data => {
                setPrices(data.result)
            })
    }, [])

    return (
        <section className="section3-Bitcoin">
            <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    backgroundColor: 'white',
                    height: '80px',
                    width: '200px',
                    position: 'relative',
                    top: '80px',
                    borderRadius: '46px'
                }}>
                    <img style={{
                        width: '50px',
                        height: '50px',
                        position: 'relative',
                        top: '15px',
                        left: '20px'
                    }} src={BTC} alt="" />
                    <h1 style={{
                        fontSize: '45px',
                        position: 'relative',
                        bottom: '25px',
                        left: '25px'
                    }}>BTC</h1>
                </div>
                <div style={{
                    position: 'relative',
                    top: '50px'
                }}>
                    <h1 style={{
                        color: 'white',
                        fontSize: '45px'
                    }}>=</h1>
                </div>
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    backgroundColor: 'white',
                    height: '80px',
                    width: '400px',
                    position: 'relative',
                    top: '80px',
                    borderRadius: '46px'
                }}>
                    <p style={{
                        fontWeight: 'bold',
                        fontSize: '45px',
                        position: 'relative',
                        bottom: '30px',
                        left: '18px'
                    }}>$113,912.14 <p style={{
                        color: '#D3D3D3',
                        position: 'relative',
                        left: '270px',
                        bottom: '100px'
                    }}>USD</p></p>
                </div>
            </div>
        </section>
    )
}