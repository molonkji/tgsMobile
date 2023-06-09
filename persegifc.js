const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Melakukan inputan pada keyboard
rl.question("Masukan Nomor Punggung : ", (no) => {
  let nomor = parseInt(no);
  let posisi = "";
  let status = "";

  if (nomor % 2 == 0) {
    posisi = "Target Attacker";
    status = "tidak berhak dipilih menjadi capten team";
    if (nomor >= 50 && nomor <= 100) {
      status = "berhak dipilih menjadi capten team";
    }
  }

  if (nomor % 2 == 1) {
    if (nomor > 90) {
      posisi = "Playmaker";
    } else if (nomor % 3 == 0 || nomor % 5 == 0) {
      posisi = "Keeper";
    } else {
      posisi = "Defender";
    }
    status = "tidak berhak dipilih menjadi capten team";
  }

  console.log(`Posisi Anda adalah ${posisi} dan ${status}`);

  rl.close();
});
