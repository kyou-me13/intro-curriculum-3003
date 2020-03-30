'use strict';

//update:202003302132

const memo = new Map();
<<<<<<< HEAD
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);

=======
memo.set(1, 1);
memo.set(2, 1);
>>>>>>> parent of 57c81b4... ０番目から出力するよう修正
function trib(n) {
  if(memo.has(n)) {
    return memo.get(n);
  }
  const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
  memo.set(n, value);
  return value;
}
const length = 40;
<<<<<<< HEAD
for (let i = 0; i <= length; i++) {
  console.log(trib(i));
=======
for (let i = 1; i <= length; i++) {
    console.log(trib(i));
>>>>>>> parent of 57c81b4... ０番目から出力するよう修正
}
