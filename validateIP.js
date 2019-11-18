/*
Write a function that validates an IP address (IPv4). An address is valid if and only if it is in the form "X.X.X.X",
where each X is a number from 0 to 255.

For example, "12.34.5.6", "0.23.25.0", and "255.255.255.255" are valid IP addresses, while "12.34.56.oops", "1.2.3.4.5", and
"123.235.153.425" are invalid IP addresses.

Examples:

ip = '192.168.0.1'
output: true

ip = '0.0.0.0'
output: true

ip = '123.24.59.99'
output: true

ip = '192.168.123.456'
output: false
*/

function validateIP(ip) {
  if (ip.length < 7) return false;
  ip = ip.split(".");

  if (ip.length !== 4) return false;

  for (let chunk of ip) {
    if (!fitsOneByte(chunk)) return false;
  }

  return true;
}

function fitsOneByte(chunk) {
  if (chunk.length === 0) return false;

  for (let val of chunk) {
    if (val < "0" || val > "9") return false;
  }

  if (chunk.length >= 2 && chunk[0] === "0") return false;
  return 0 <= Number(chunk) && Number(chunk) <= 255;
}
