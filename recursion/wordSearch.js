/*
Given a 2D board and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighoring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
*/

const wordSearch = (board, word) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0] && dfs(board, i, j, 0, word)) return true;
    }
  }
  return false;
};

const dfs = (board, i, j, count, word) => {
  if (count === word.length) return true;

  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[i].length ||
    board[i][j] !== word[count]
  )
    return false;
  let temp = board[i][j];

  board[i][j] = "";
  const found =
    dfs(board, i + 1, j, count + 1, word) ||
    dfs(board, i - 1, j, count + 1, word) ||
    dfs(board, i, j + 1, count + 1, word) ||
    dfs(board, i, j - 1, count + 1, word);
  board[i][j] = temp;
  return found;
};
