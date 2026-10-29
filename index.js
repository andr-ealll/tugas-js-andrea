//tugas 1 Membuat variabel NamaSiswa (string)
let NamaSiswa = "Lee Jeno";

//tugas 2 Membuat variabel NilaiUjian (number)
let NilaiUjian = 98;

//tugas 3 Membuat fungsi untuk menampilkan NamaSiswa dan NilaiUjian
function cekKelulusan(number) {
    if (number >= 80) {
        return "Lulus";
    } else if (number <= 75) {
        return "Nilai Pas KKM";
    } else {
        return "Remedial";
    }
}

//tugas 4 Memanggil fungsi cekKelulusan
let StatusSiswa = cekKelulusan(NilaiUjian);  
console.log (" Siswa bernama " + NamaSiswa + " mendapatkan nilai " + NilaiUjian + " status kelulusan " + StatusSiswa);