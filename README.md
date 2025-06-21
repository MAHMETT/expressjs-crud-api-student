# Backend CRUD API for Students 🧑‍🎓

Hello there! 👋 Welcome to my CRUD API repository. This project is a **robust backend API designed to empower your applications with seamless Create, Read, Update, and Delete (CRUD) operations for student data.** 🚀 It provides a solid foundation for any web or mobile application that needs efficient and reliable student data management.

---

## Prerequisites: MongoDB Setup & Running 🚀

This project relies on **MongoDB** as its database. Please follow the steps below that are specific to your operating system to get it up and running.

---

<details>
<summary><b>1. For Linux Users (Debian/Ubuntu) 🐧</b></summary>

Getting MongoDB ready on your Linux machine is straightforward:

1.  **Import the MongoDB Public GPG Key:**
    ```bash
    curl -fsSL [https://www.mongodb.org/static/pgp/server-7.0.asc](https://www.mongodb.org/static/pgp/server-7.0.asc) | \
       sudo gpg --dearmor -o /etc/apt/keyrings/mongodb-org-7.0.gpg
    ```
2.  **Create the MongoDB List File:**
    ```bash
    echo "deb [ arch=amd64,arm64 signed-by=/etc/apt/keyrings/mongodb-org-7.0.gpg ] [https://repo.mongodb.org/apt/ubuntu](https://repo.mongodb.org/apt/ubuntu) $(lsb_release -cs)/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
    ```
3.  **Update Your Local Package List:**
    ```bash
    sudo apt update
    ```
4.  **Install the MongoDB Packages:**
    ```bash
    sudo apt install -y mongodb-org
    ```
5.  **Start MongoDB:**
    ```bash
    sudo systemctl start mongod
    ```
6.  **Enable MongoDB to Start on Boot (Optional, but Recommended!):**
`bash
    sudo systemctl enable mongod
    `
</details>

<details>
<summary><b>2. For Windows Users 🪟</b></summary>

Setting up MongoDB on Windows is a breeze with the installer:

1.  **Download MongoDB Community Server:**
    Head over to the [official MongoDB download page](https://www.mongodb.com/try/download/community) and grab the Community Server version that suits your Windows system (look for the MSI installer).
2.  **Run the Installer:**
    Open the downloaded `.msi` file and follow the on-screen instructions. Opt for a **"Complete"** installation for the standard setup. You can choose to install MongoDB Compass if you'd like a GUI tool.
3.  **Verify Your Installation:**
    Once the installation is done, open your **Command Prompt** or **PowerShell** and type:
    ```bash
    mongod --version
    ```
    If successful, you'll see MongoDB version information.
4.  **Running MongoDB:**
MongoDB usually installs as a Windows service and starts automatically. If it doesn't, you can run it manually from the Command Prompt:
`bash
    "C:\Program Files\MongoDB\Server\[MongoDB_Version]\bin\mongod.exe" --dbpath "C:\data\db"
    `
_(Replace `[MongoDB_Version]` with the actual version you installed, e.g., `7.0`. You might need to manually create the `C:\data\db` folder if it doesn't exist.)_
</details>

<details>
<summary><b>3. For macOS Users 🍎</b></summary>

For our Mac users, Homebrew makes MongoDB installation super simple:

1.  **Install Homebrew (if you don't have it yet):**
    If Homebrew isn't already on your system, open your **Terminal** and run this command:
    ```bash
    /bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"
    ```
2.  **Install MongoDB using Homebrew:**
    ```bash
    brew tap mongodb/brew
    brew install mongodb-community@7.0
    ```
3.  **Start MongoDB:**
    ```bash
    brew services start mongodb-community@7.0
    ```
4.  **Verify MongoDB is Running:**
`bash
    mongosh --eval 'db.runCommand({ connectionStatus: 1 })'
    `
The output should show you the connection status, indicating it's ready to go!
</details>

---

## Getting Your Project Up and Running! ✨

Once MongoDB is happily running in the background, you're just a few steps away from launching this awesome project:

1.  **Clone the Repository:**
    Get your hands on the code by cloning this repository:

    ```bash
    git clone [https://github.com/MAHMETT/expressjs-crud-api-student.git](https://github.com/MAHMETT/expressjs-crud-api-student.git)
    cd expressjs-crud-api-student # Navigate into the project directory
    ```

2.  **Install Dependencies:**
    This project relies on **npm** for package management. Make sure you have Node.js and npm installed on your system. Then, install all necessary dependencies:

    ```bash
    npm install
    ```

    This command will fetch and set up all the packages listed in your `package.json` file.

3.  **Start the Project:**
    With all dependencies in place, you're ready to fire up the API!
    ```bash
    npm start
    ```
    This command will execute the `start` script defined in your `package.json`. You should see messages in your console indicating that the backend server is running and which port it's listening on. _Happy coding!_ 🎉

---
