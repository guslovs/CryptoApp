import { useState, useEffect } from "react";

export default function CryptoConverter() {
    const [prices, setPrices] = useState([]);
    const [selectedCoin, setSelectedCoin] = useState("");
    const [amount, setAmount] = useState("1");
    const [usdValue, setUsdValue] = useState("");


    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                "X-API-KEY": "t2JsejzHiFv1WvzJn5Ltl1aiGhRY7T9CXHa8IUzb7y8="
            }
        };

        fetch("https://openapiv1.coinstats.app/coins?limit=50", options)
            .then(res => res.json())
            .then(data => {
                setPrices(data.result);
                if (data.result.length > 0) {
                    setSelectedCoin(data.result[0].id);
                }
            });
    }, []);


    useEffect(() => {
        const coin = prices.find(c => c.id === selectedCoin);
        if (coin && amount) {
            setUsdValue((coin.price * parseFloat(amount)).toFixed(2));
        }
    }, [amount, selectedCoin, prices]);

    return (
        <section className="converter">
            <div style={{
                display: 'flex',
                gap: '100px',
                justifyContent: 'center',
                height: '500px'
            }}>
                <div style={{
                    position: 'relative',
                    top: '90px'
                }}>
                    {(() => {
                        const coin = prices.find(c => c.id === selectedCoin);
                        return (
                            <>
                                <h1 style={{
                                    fontSize: '50px',
                                    width: '350px'
                                }}>Convert {coin?.symbol} to USD</h1>
                                <p style={{
                                    fontSize: '20px',
                                    width: '480px',
                                    color: '#D3D3D3'
                                }}>{coin?.name} to United States Dollar</p>
                            </>
                        );
                    })()}
                </div>


                <div style={{
                    position: 'relative',
                    top: '90px',
                    backgroundColor: '#002f61',
                    height: '300px',
                    width: '500px',
                    borderRadius: '18px'
                }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px", color: 'white' }}>

                        <select className="custom-select" style={{
                            height: '50px',
                            width: '425px',
                            position: 'relative',
                            left: '40px',
                            top: '30px',
                            border: '2px solid',
                            color: 'white',
                            backgroundColor: '#002f61',
                            fontSize: '18px',
                            borderRadius: '12px',
                            fontWeight: 'bold'
                        }} value={selectedCoin} onChange={(e) => setSelectedCoin(e.target.value)}>
                            {prices.map((coin) => (
                                <option key={coin.id} value={coin.id}>
                                    {coin.name}
                                </option>
                            ))}
                        </select>

                        <input style={{
                            height: '30px',
                            width: '370px',
                            height: '30px',
                            padding: '10px 40px 10px 10px',
                            position: 'relative',
                            left: '40px',
                            top: '40px',
                            border: '2px solid',
                            color: 'white',
                            backgroundColor: '#002f61',
                            fontSize: '18px',
                            borderRadius: '12px',
                            fontWeight: 'bold',
                            MozAppearance: 'textfield'
                        }}
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Amount of coins"
                        />

                        {usdValue && (
                            <p style={{
                                position: 'relative',
                                top: '25px',
                                left: '40px',
                                fontSize: '30px',
                                width: '500px'
                            }}>
                                {amount} {prices.find(c => c.id === selectedCoin)?.symbol} = ${usdValue}
                            </p>
                        )}

                        {(() => {
                            const coin = prices.find(c => c.id === selectedCoin);
                            return (
                                <>
                                    <a href="/signup">
                                        <button style={{
                                            position: 'relative',
                                            left: '40px',
                                            top: '10px',
                                            height: '40px',
                                            width: '422.5px',
                                            fontSize: '20px',
                                            backgroundColor: '#1199FA',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            border: '0px',
                                            borderRadius: '18px',
                                            cursor: 'pointer'
                                        }}>Buy {coin?.symbol} on App</button>
                                    </a>
                                </>
                            );
                        })()}
                    </div>
                </div>
            </div>
        </section>
    );
}