## Informasi
Sebelum clone github ini, pastikan anda sudah menginstall Node.js pada sistem anda

## Instalasi Node.js
1. Kunjungi website [Node.js](https://nodejs.org/id)
2. Pilih yang LTS (Long Term Support) dengan file berekstensi .msi (x64 atau x86) untuk sistem operasi Windows
3. Download dan Install
4. Untuk mengetahui apakah Node.js berhasil terisntall, anda bisa menjalankan perintah berikut pada terminal anda
```bash
node -v
npm -v
```
5. Jika muncul versi dari Node.js dan npm, artinya instalasi Node.js telah berhasil

## Instalasi Three.js dengan npm
1. Masuk ke dalam folder untuk workspace proyek Three.js
2. Membuat file `package.json` untuk menyimpan informasi dan dependencies dengan perintah berikut :
```bash
npm init -y
```
3. Install Three.js dengan npm dengan perintah berikut :
```bash
npm install three
```
4. Perintah tersebut akan menambahkan Three.js ke proyek dan menyimpannya di folder `node_modules`
5. Instalasi Three.js telah berhasil