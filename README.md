# Backend CRUD API STUDENT

## Halo! Selamat datang di CRUD API saya. Repositori ini berisi **projek backend API yang memungkinkan Anda melakukan operasi CRUD (Create, Read, Update, Delete) untuk data mahasiswa (student). API ini dibangun untuk memberikan fondasi yang kokoh bagi aplikasi web atau mobile yang memerlukan manajemen data mahasiswa yang efisien.**

## Prasyarat: Instalasi dan Menjalankan MongoDB

Proyek ini membutuhkan **MongoDB** sebagai database. Ikuti langkah-langkah di bawah sesuai dengan sistem operasi Anda.

---

<details>
<summary><b>1. Untuk Pengguna Linux (Debian/Ubuntu)</b></summary>

1.  **Impor Kunci GPG Publik MongoDB:**
    ```bash
    curl -fsSL [https://www.mongodb.org/static/pgp/server-7.0.asc](https://www.mongodb.org/static/pgp/server-7.0.asc) | \
       sudo gpg --dearmor -o /etc/apt/keyrings/mongodb-org-7.0.gpg
    ```
2.  **Buat File Daftar Sumber List:**
    ```bash
    echo "deb [ arch=amd64,arm64 signed-by=/etc/apt/keyrings/mongodb-org-7.0.gpg ] [https://repo.mongodb.org/apt/ubuntu](https://repo.mongodb.org/apt/ubuntu) $(lsb_release -cs)/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
    ```
3.  **Perbarui Daftar Paket Lokal Anda:**
    ```bash
    sudo apt update
    ```
4.  **Instal Paket MongoDB:**
    ```bash
    sudo apt install -y mongodb-org
    ```
5.  **Mulai MongoDB:**
    ```bash
    sudo systemctl start mongod
    ```
6.  **Pastikan MongoDB Berjalan Saat Boot (Opsional):**
`bash
    sudo systemctl enable mongod
    `
</details>

<details>
<summary><b>2. Untuk Pengguna Windows</b></summary>

1.  **Unduh MongoDB Community Server:**
    Kunjungi [situs unduh resmi MongoDB](https://www.mongodb.com/try/download/community) dan unduh versi Community Server yang sesuai untuk Windows (MSI installer).
2.  **Jalankan Installer:**
    Buka file `.msi` yang telah diunduh dan ikuti instruksi instalasi. Pilih **"Complete"** untuk instalasi standar. Anda dapat memilih untuk menginstal MongoDB Compass jika Anda menginginkannya.
3.  **Verifikasi Instalasi:**
    Setelah instalasi selesai, buka **Command Prompt** atau **PowerShell** dan ketik:
    ```bash
    mongod --version
    ```
    Jika berhasil, Anda akan melihat informasi versi MongoDB.
4.  **Menjalankan MongoDB:**
MongoDB biasanya akan terinstal sebagai layanan Windows dan akan berjalan secara otomatis. Jika tidak, Anda dapat menjalankannya secara manual dari Command Prompt:
`bash
    "C:\Program Files\MongoDB\Server\[Versi_MongoDB]\bin\mongod.exe" --dbpath "C:\data\db"
    `
(Ganti `[Versi_MongoDB]` dengan versi MongoDB yang Anda instal, contoh: `7.0`. Anda mungkin perlu membuat folder `C:\data\db` secara manual jika belum ada.)
</details>

<details>
<summary><b>3. Untuk Pengguna macOS</b></summary>

1.  **Instal Homebrew (Jika Belum Ada):**
    Jika Anda belum memiliki Homebrew, buka **Terminal** dan jalankan perintah ini:
    ```bash
    /bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"
    ```
2.  **Instal MongoDB Menggunakan Homebrew:**
    ```bash
    brew tap mongodb/brew
    brew install mongodb-community@7.0
    ```
3.  **Jalankan MongoDB:**
    ```bash
    brew services start mongodb-community@7.0
    ```
4.  **Verifikasi MongoDB Berjalan:**
`bash
    mongosh --eval 'db.runCommand({ connectionStatus: 1 })'
    `
Output akan menunjukkan status koneksi.
</details>

---

## Menjalankan Proyek

Setelah MongoDB berjalan, Anda bisa menjalankan proyek ini dengan langkah-langkah berikut:

1.  **Klon Repositori:**

    ```bash
    git clone [https://github.com/NamaPenggunaAnda/NamaProyekAnda.git](https://github.com/NamaPenggunaAnda/NamaProyekAnda.git)
    cd NamaProyekAnda
    ```

    (Ganti `NamaPenggunaAnda` dan `NamaProyekAnda` dengan detail repositori Anda.)

2.  **Instal Dependensi:**
    Proyek ini menggunakan **npm** untuk mengelola dependensi. Pastikan Node.js dan npm sudah terinstal di sistem Anda.

    ```bash
    npm install
    ```

    Perintah ini akan menginstal semua paket yang dibutuhkan oleh proyek, seperti yang terdaftar dalam `package.json`.

3.  **Jalankan Proyek:**
    Setelah semua dependensi terinstal, Anda dapat menjalankan proyek dengan perintah shortcut npm:
    ```bash
    npm start
    ```
    Perintah ini biasanya akan menjalankan skrip `start` yang didefinisikan dalam file `package.json` Anda. Ini bisa berupa menjalankan server lokal, membuka aplikasi di browser, atau lainnya, tergantung konfigurasi proyek Anda.

---
