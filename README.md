## i. database structure
![db structure](https://github.com/axlgtm/tokopedia_play/blob/f036ed533862f0a06a7567ff6b7b5b1522c1ffef/db.png) <br>
Struktur database memiliki 3 collection yang terdiri dari videos, products dan comments. _id pada collection videos digunakan sebagai foreign key pada collection comments dan products untuk mencari data comment dan produk sesuai id video.
<br>

## ii. API structure
file pertama yang akan dijalankan adalah server.js yang akan memanggil router yang sudah dibuat pada folder app/routes, router akan memanggil controller yang berperan untuk melakukan proses bisnis atau memanipulasi database namun sebelum menjalankan controller models akan dipanggil untuk membuat collection pada db
## iii. API request and response
<a href="https://gist.github.com/axlgtm/433e5ad4eb6b3258fed8f06f7f1ca439">API gist</a>
## iv. how to run
- Clone repo
- Pindah branch dari main ke dev
- Navigasi pada folder server
- jalnkan command
```
npm i
```
- Untuk seeding database matikan comment pada index.js line 20 
- setelah node_modules yang dibutuhkan telah terunduh jalankan command
```
npm start
```
- Pastikan server telah berjalan dan databaset telah terhubung dengan baik dan pastikan console memiliki output seperti berikut
```
Server Started at 8000
Database Connected
```
- Gunakan postman untuk memudahkan dalam mengetes API
