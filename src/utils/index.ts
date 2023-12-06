// 生成一个参数为指定长度的随机id的函数
// 更好的问题:使用JavaScript生成指定长度的随机ID的函数
export function generateRandomId(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
 
  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
 
  return result;
 }
