import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Section2HomePage() {

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

    const coinstToShow = prices.slice(0, 5)

    return (
        <section className="section2-HomePage">
            <h4><span className="blue-words">CRYPTO PRICE</span></h4>
            <h1>Buy Bitcoin, Ethereum, and 400+ crypto</h1>
            <h5>Prices of some of the top cryptocurrencies</h5>
            <table>
                <tbody>
                    {coinstToShow.map((price, index) => {
                        return (
                            <>
                                <motion.tr
                                    key={price.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    <td className="ul-name">{price.name}</td>
                                    <td className="ul-symbol">{price.symbol}</td>
                                    <td className="ul-price">${price.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                    <td className={`ul-change ${price.priceChange1d >= 0 ? 'green' : 'red'}`}>{price.priceChange1d}%</td>
                                    <td className="ul-cap">${price.marketCap.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                </motion.tr>
                            </>
                        )
                    })
                    }
                </tbody>
            </table>
        </section>
    )
}