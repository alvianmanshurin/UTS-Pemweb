document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const nama = urlParams.get("nama");
    const nim = urlParams.get("nim");
    const prodi = urlParams.get("prodi");
    const email = urlParams.get("email");
    const password = urlParams.get("password");
    const jk = urlParams.get("jk");
    const tgl_lahir = urlParams.get("tgl_lahir");
    const alamat = urlParams.get("alamat");

    if (nama) {
        const table = document.getElementById("registration-table").getElementsByTagName('tbody')[0];
        const newRow = table.insertRow(table.rows.length);
        const cells = [nama, nim, prodi, email, password, jk, tgl_lahir, alamat];
        for (let i = 0; i < cells.length; i++) {
            newRow.insertCell(i).textContent = cells[i];
        }
    }
});
