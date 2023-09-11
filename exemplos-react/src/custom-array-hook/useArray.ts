import { useState } from "react"

type UseArrayActions<T> = {
    adicionar: (item: T) => void
    remover: (item: T) => void
}

const useArray = <T>(itemsIniciais: T[]): [T[], UseArrayActions<T>] => {
    const [items, setItems] = useState<T[]>(itemsIniciais)

    const adicionar = (item: T) => setItems([...items, item])

    const remover = (item: T) => setItems([...items.filter(it => it !== item)])

    return [items, { adicionar, remover }]
}

export default useArray