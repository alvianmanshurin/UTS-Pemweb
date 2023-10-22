document.addEventListener("DOMContentLoaded", function () {
    const dataForm = document.getElementById("data-form");
    const dataTable = document.getElementById("data-table").querySelector("tbody");
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function () {
        const nama = document.getElementById("nama").value;
        const nim = document.getElementById("nim").value;
        const prodi = document.getElementById("prodi").value;
        const email = document.getElementById("email").value;

        // Buat baris data baru untuk tabel
        const newRow = dataTable.insertRow(dataTable.rows.length);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        cell1.innerHTML = nama;
        cell2.innerHTML = nim;
        cell3.innerHTML = prodi;
        cell4.innerHTML = email;

        // Reset form
        dataForm.reset();
    });
});
