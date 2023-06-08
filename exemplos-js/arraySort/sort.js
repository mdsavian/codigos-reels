[99, 100, 12, 11].sort((a, b) => { // [11, 12, 99, 100]
    if (a < b) {
        return -1
    }

    if (a > b) {
        return 1
    }

    return 0
})


[200, 100].sort((a, b) => a - b) // [100, 200]

// 200 - 100 = 100 ---> 100 (b) vai para esquerda

[10, 12].sort((a, b) => a - b) // [10, 12]

// 10 - 12  = -2 ---> 10 (a) fica a esquerda

[100, 100].sort((a, b) => a - b) // [100, 100]

// 100 - 100  = 0 ---> Não altera nenhuma posição


