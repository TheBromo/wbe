function connect4Winner(element, board) {
  for (const [x, row] of board.entries()) {
    for (const [y, field] of row.entries()) {
      if (field !== element) {
        continue
      }
      let right = checkDirection(element, board, x, y, 1, 0)
      let left = checkDirection(element, board, x, y, -1, 0)
      let top = checkDirection(element, board, x, y, 0, -1)
      let bottom = checkDirection(element, board, x, y, 0, 1)
      let bottom_left = checkDirection(element, board, x, y, -1, 1)
      let bottom_right = checkDirection(element, board, x, y, 1, 1)
      let top_left = checkDirection(element, board, x, y, -1, -1)
      let top_right = checkDirection(element, board, x, y, 1, -1)

      if (right || left || top || bottom || bottom_left || bottom_right || top_right || top_left) return true
    }
  }
  return false
}

function checkDirection(element, board, xOrigin, yOrigin, xDir, yDir) {
  const xMax = board.length;
  const xEnd = xOrigin + 3 * xDir;
  if (xEnd < 0 || xEnd >= xMax) return false

  const yMax = board[0].length;
  const yEnd = yOrigin + 3 * yDir;
  if (yEnd < 0 || yEnd >= yMax) return false

  for (let diff = 0; diff < 4; diff++) {
    let x = xOrigin + xDir * diff;
    let y = yOrigin + yDir * diff;

    const field = board[x][y];
    if (field !== element) {
      return false
    }
  }
  return true
}
