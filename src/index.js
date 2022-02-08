
// You should implement your task here.

module.exports =function towelSort(matrix) {
  const mat = matrix
    if (mat === undefined) {
    return [];
  }
    const towS = mat.reduce((res, cur, i) => {
      return res.concat((i % 2 == 0) ? cur : cur.reverse())
    }, []
    )
  //}
  
return towS
}
