const dados = [
    { url: "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png",
    nome: "Dogecoin",
    preco: "$0.33",
    variacao: "+17%" },
    { url: "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png",
    nome: "Bitcoin",
    preco: "$103,812",
    variacao: "+12%" },
    { url: "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png",
    nome: "Ethereum",
    preco: "$2,871",
    variacao: "+11%" },
    { url: "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png",
    nome: "Solana",
    preco: "$201.34",
    variacao: "+7%" },
];

function MaioresPerdas() {
    return (
    <div className="card h-100">

        <h4 class="text-body m-3">
                Maiores Perdas
            </h4>

            <hr className="m-0 mt-1"/>

            <table className="table fs-10 px-4">
                <thead>
                <tr >
                    <th className="text-start">Criptomoeda</th>
                    <th className="text-center">Preço</th>
                    <th className="text-end">Variação</th>
                </tr>
                </thead>
                <tbody className="list">
                {dados.map(dado => {
                    return (
                        <tr className="text-start px-5">
                            <td className="py-2 white-space-nowrap ps-2 country">
                                <div
                                    className="d-flex align-items-center text-primary py-md-1 py-xxl-0"
                                    href="#!"
                                >
                                    <img
                                        src={dado.url}
                                        alt=""
                                        width="15"
                                    />
                                    <h6 className="mb-0 ps-3 fw-bold fs-9">
                                        {dado.nome}
                                    </h6>
                                </div>
                            </td>
                            <td className="py-2 text-center">
                                <h6>{dado.preco}</h6>
                            </td>
                            <td className="py-2 text-end text-success">
                                <h6>{dado.variacao}</h6>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default MaioresPerdas;