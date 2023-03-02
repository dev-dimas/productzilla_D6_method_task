const namaLengkap = 'Dimas Octa Maulana';
const asalDaerah = 'Surabaya';
const suku = 'Jawa';
const asalKampus = 'Universitas Pembangunan Nasional Veteran Jawa Timur';
const programStudi = 'Informatika';

const outputDatadiri = () => {
	console.log(
		`Halo, nama saya ${namaLengkap}. Saya berasal dari ${asalDaerah} dan merupakan keturunan suku ${suku}.`
	);
};

const outputDataMahasiswa = () => {
	console.log(
		`Halo, saya mahasiswa ${asalKampus} yang sedang menempuh program studi ${programStudi}.`
	);
};

const fungsiMatematika1 = (x) => {
	return console.log(x ** 2);
};

const fungsiMatematika2 = (x, y) => {
	return console.log(x * 2 + y * 2);
};

const fungsiMatematika3 = (x, y) => {
	return console.log((x * y) / 2);
};

const fungsiMatematika4 = (x, y) => {
	return console.log(x * y);
};

const fungsiMatematika5 = (x) => {
	return console.log(Math.PI * 2 * x);
};

outputDatadiri();
outputDataMahasiswa();
fungsiMatematika1(1);
fungsiMatematika2(1, 1);
fungsiMatematika3(1, 1);
fungsiMatematika4(1, 1);
fungsiMatematika5(1);
