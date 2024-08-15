import { useEffect, useState } from "react"

function FreddoBitcoin() {
    
    const [bitcoinPrice, setBitcoinPrice] = useState(0)
    const [numFreddoBars, setNumFreddoBars] = useState(0)

    useEffect(fetchBitcoin, [])

    function fetchBitcoin() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
            .then(res => res.json())
            .then(bitcoinData => {
                setBitcoinPrice(bitcoinData.bpi.GBP.rate)

                var numFormatted = bitcoinData.bpi.GBP.rate.replace(',', '')
                numFormatted = parseFloat(numFormatted)
                numFormatted = Math.round(numFormatted/0.25)
                numFormatted = numFormatted.toLocaleString()

                setNumFreddoBars(numFormatted)
            })
    }
    
    setInterval(function(){
        fetchBitcoin()
        console.log('fetched!')
    }, 30000)
    
    return (
        <div>
            <h2>1 Bitcoin = £{bitcoinPrice} thats {numFreddoBars} Freddo bars</h2>
        </div>
    )
}

export default FreddoBitcoin