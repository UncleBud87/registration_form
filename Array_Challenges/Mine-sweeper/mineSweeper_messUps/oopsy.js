

    function howMany(i, j, element) {
        console.log(i, j)
        if (isBetween(i, j)) total = between(i, j)
        else if (isFirstRow(i)) total = firstRow(i, j)
        else if (isLastRow(i)) total = lastRow(i, j)
        else if (isFirstColumn(j)) total = firstColumn(i, j)
        else total = lastColumn(i, j)
        element.innerText = total
        if (isFirstRow(i)) total = firstRow(i, j)
    }
    
    function isBetween(i, j) {
        if (i > 0 && i < 9 && j > 0 && j < 9) {
            return true
        } else {
            return false
        }
    }
    
    function isFirstRow(i) {
        if (i == 0) return true
        else return false
    }
    
    function isLastRow(i) {
        if (i == 9) return true
        else return false
    }
    
    function isFirstColumn(j) {
        if (j == 0) return true
        else return false
    }
    
    function isLastColumn(j) {
        if (j == 9) return true
        else return false
    }
    
    function between(i, j) {
        var topRow = 0
        var middleRow = 0
        var bottomRow = 0
        var total = 0
        var total = []
        topRow = theDojo[i - 1][j - 1] + theDojo[i - 1][j] + theDojo[i - 1][j + 1]
        middleRow = theDojo[i][j - 1] + theDojo[i][j + 1]
        bottomRow = theDojo[i + 1][j - 1] + theDojo[i + 1][j] + theDojo[i + 1][j + 1]
        total = topRow + middleRow + bottomRow
        return total
    }
    
    function firstRow(i, j) {
        var middleRow = 0
        var bottomRow = 0
        var total = 0
        middleRow = theDojo[i][j - 1] + theDojo[i][j + 1]
        bottomRow = theDojo[i + 1][j - 1] + theDojo[i + 1][j] + theDojo[i + 1][j + 1]
        total = middleRow + bottomRow
        return total
    }
    
    function lastRow(i, j) {
        var topRow = 0
        var middleRow = 0
        var total = 0
        topRow = theDojo[i - 1][j - 1] + theDojo[i - 1][j] + theDojo[i - 1][j + 1]
        middleRow = theDojo[i][j - 1] + theDojo[i][j + 1]
        total = topRow + middleRow
        return total
    }
    
    function firstColumn(i, j) {
        var topRow = 0
        var middleRow = 0
        var bottomRow = 0
        var total = 0
        topRow = theDojo[i - 1][j] + theDojo[i - 1][j + 1]
        middleRow = theDojo[i][j + 1]
        bottomRow = theDojo[i + 1][j] + theDojo[i + 1][j + 1]
        total = topRow + middleRow + bottomRow
        return total
    }
    
    function lastColumn(i, j) {
        var topRow = 0
        var middleRow = 0
        var bottomRow = 0
        var total = 0
        topRow = theDojo[i - 1][j - 1] + theDojo[i - 1][j]
        middleRow = theDojo[i][j - 1]
        bottomRow = theDojo[i + 1][j - 1] + theDojo[i + 1][j]
        total = topRow + middleRow + bottomRow
        return total
    }
    