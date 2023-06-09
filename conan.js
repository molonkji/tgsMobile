const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//Melakukan inputan pada keyboard
rl.question("Nama : ", (n) => {
  rl.question("Umur : ", (u) => {
    rl.question("Tempat Tinggal : ", (a) => {
      rl.question("Tabungan : $ ", (t) => {
        //menampung inputan pada variabel
        let nama = n;
        let umur = parseInt(u);
        let asal = a.toLowerCase();
        let tabungan = parseInt(t);

        //Kondisi
        if (umur > 40) {
          if (asal == "nevada" || asal == "new york" || asal == "havana") {
            if (tabungan > 10000000) {
              console.log(
                `${nama} kemungkinan adalah seorang anggota mafia dengan pangkat Don`
              );
            } else {
              console.log(`${nama} tidak mencurigakan`);
            }
          } else {
            console.log(`${nama} tidak mencurigakan`);
          }
        } else if (umur >= 24 && umur <= 40) {
          if (asal == "new jersey" || asal == "menhattan" || asal == "nevada") {
            if (tabungan >= 1000000 && tabungan <= 2000000) {
              console.log(
                `${nama} kemungkinan adalah seorang anggota mafia dengan pangkat Underbos`
              );
            } else {
              console.log(`${nama} tidak mencurigakan`);
            }
          } else {
            console.log(`${nama} tidak mencurigakan`);
          }
        } else if (umur >= 18 && umur <= 24) {
          if (asal == "calivornia" || asal == "detroit" || asal == "boston") {
            if (tabungan < 1000000) {
              console.log(
                `${nama} kemungkinan adalah seorang anggota mafia dengan pangkat Capo`
              );
            } else {
              console.log(`${nama} tidak mencurigakan`);
            }
          } else {
            console.log(`${nama} tidak mencurigakan`);
          }
        } else {
          console.log(`${nama} tidak mencurigakan`);
        }

        rl.close();
      });
    });
  });
});
