import '../css/basic.css';
import '../css/Donate.css';
import {useState} from "react";

export default function Donate () {
    const [setCopiedId] = useState(null);

    const handleCopy = async (text, id) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedId(id);
            // después de 1s, quitamos el estilo
            setTimeout(() => setCopiedId(null), 200);
        } catch (err) {
            console.error("No se pudo copiar:", err);
        }
    };
    return (
        <section className="contentDonate">

            <article className="inBox">
                <header>
                    <h1>Bitcoin</h1>
                    <img id={"btcImg"} src={"/img/Bitcoin.svg"} alt="Bitcoin"/>
                </header>
                <div className="idsWallets">
                    <small>BTC: </small>
                    <button>
                        <code onClick={() => handleCopy("bc1pn7as9hanwyw0hc8fka46wkf6g6j6fptr7uarnfvl3fkxchmrrdmsusdcn5", "btc")}>bc1pn7as9hanwyw0hc8fka46wkf6g6j6fptr7uarnfvl3fkxchmrrdmsusdcn5</code>
                    </button>
                    <small>(Taproot)</small>
                </div>
            </article>

            <article className="inBox">
                <header>
                    <h1>Solana</h1>
                    <img id={"solImg"} src={"/img/Solana.svg"} alt="Solana"/>
                </header>
                <div className="idsWallets">
                    <small>SOL: </small>
                    <button>
                        <code onClick={() => handleCopy("4ErmQPFparv73Lkv1vosdcBWv9BDfhDtg2o7wP9QtJix", "sol")}>4ErmQPFparv73Lkv1vosdcBWv9BDfhDtg2o7wP9QtJix</code>
                    </button>
                </div>
                <small>Se puede recibir USDT y USDC</small>
            </article>
            <article className="inBox">
                <header>
                    <h1>Ethereum</h1>
                    <img src={"/img/Ethereum.svg"} alt="Bitcoin"/>
                </header>
                <div className="idsWallets">
                    <small>ETH:</small>
                    <button>
                        <code onClick={() => handleCopy("0x60171344ec7a372989642a89ede02933cf64be87", "eth")}>0x60171344ec7a372989642a89ede02933cf64be87</code>
                    </button>
                </div>
                <small>Se puede recibir USDT y USDC</small>
            </article>
            <article className="inBox">
                <header>
                    <h1>BNB Smart Chain</h1>
                    <img id={"bnbImg"} src={"/img/BNB.svg"} alt="Bitcoin"/>
                </header>
                <div className="idsWallets">
                    <small>BNB:</small>
                    <button>
                        <code onClick={() => handleCopy("0x60171344ec7a372989642a89ede02933cf64be87", "eth")}>0x60171344ec7a372989642a89ede02933cf64be87</code>
                    </button>
                </div>
                <small>Se puede recibir USDT y USDC</small>
            </article>
            <article className="inBox" id={"info"}>
                <p>
                    El dinero recaudado será destinado a mejorar el servidor (comprar más ram, cambiar de cpu...) y hacer publicidad a través de google ADS.
                </p>
                <small>
                    NO estoy en la obligacion de concedera rango vip o premium, por qué son DONACIONES enteramente filantropas
                </small>
            </article>
        </section>
    )
}