import React from "react"
import "./styles.css"
const List: React.FC = () => {

    const items = [{ id: "9ef5d7q", name: "coca cola", quantidade: 12 }, { id: "9ef48ea", name: "pepsi", quantidade: 5 }, { id: "9efetgh", name: "fanta", quantidade: 10 }]

    const listItems = items.map(item => <ListItem key={item.id} name={item.name} quantidade={item.quantidade} />)

    return (
        <ul>
            {listItems}
        </ul>
    )
}


interface Props {
    name: string
    quantidade: number
}

const ListItem: React.FC<Props> = ({ name, quantidade }: Props) => {
    return <li className="listItem">
        {name} - Qtd: {quantidade}
    </li>
}

export default List