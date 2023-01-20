import React from "react"
import "./styles.css"

const List: React.FC = () => {

    const produtos = [
        { id: "9ef5d7q", nome: "coca cola", quantidade: 12 },
        { id: "9ef48ea", nome: "pepsi", quantidade: 5 },
        { id: "9efetgh", nome: "fanta", quantidade: 10 }]

    const listaProdutos = produtos.map(item =>
        <ListItem key={item.id}
            nome={item.nome}
            quantidade={item.quantidade} />)

    return (
        <ul>
            {listaProdutos}
            </ul>
    )
}


interface Props {
    nome: string
    quantidade: number
}

const ListItem: React.FC<Props> = ({ nome, quantidade }: Props) => {
    return <li className="listItem">
        {nome} - Qtd: {quantidade}
    </li>
}

export default List