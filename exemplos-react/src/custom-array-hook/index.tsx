// import { useState } from "react";
import useArray from "./useArray";

interface Produto {
    id: string;
    nome: string;
    preco: number
}

const Exemplo: React.FC = () => {

    const [produtos, { adicionar, remover }] = useArray<Produto>([])


    // const [produtos, setProdutos] = useState<Produto[]>([])

    // const adicionarProdutos = (produto: Produto) => {
    //     setProdutos([...produtos, produto])
    // }

    // const removerProduto = (produto: Produto) => {
    //     setProdutos([...produtos.filter(prod => prod.id !== produto.id)])
    // }

    return <div>
        {produtos.map(prod => <li key={prod.id}>{prod.nome} </li>)}
    </div>
}

export default Exemplo