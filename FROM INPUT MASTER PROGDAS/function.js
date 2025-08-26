let autoincrement = 1;
let productArray = [];
let edi

function saveForm(){
    const kodeProduk = (document.getElementById("kode-produk").value = "MD-0" + autoincrement);
    const namaProduk = document.getElementById("nama-produk").value;
    const hargaProduk = document.getElementById("harga-produk").value;
    const satuan = document.getElementById("satuan").value;
    const kategori = document.getElementById("kategori").value;
    const url = document.getElementById("url").value;
    const stokAwal = document.getElementById("stok-awal").value;

    if (!namaProduk || !hargaProduk || !satuan || !kategori || !url || !stokAwal) {
        alert("Opss!! Semua input harus anda isi terlebih dahulu");
        return;
    }

    productArray.push({
        kodeProduk,
        namaProduk,
        hargaProduk,
        satuan,
        kategori,
        url,
        stokAwal,

})

autoincrement++;

rendertable();
}

function rendertable(){
    const tablebody = document
    .getElementById("produktabel")
    .getElementsByTagName("tbody")[0];
    tablebody.innerHTML = "";

    productArray.forEach((produk, index) =>{
        const row = tablebody.insertRow();

    row.innerHTML = `<td>${index + 1}</td>
                         <td>${produk.kodeProduk}</td>
                         <td>${produk.namaProduk}</td>
                         <td>${produk.hargaProduk}</td>
                         <td>${produk.satuan}</td>
                         <td>${produk.kategori}</td>
                         <td><img src="${produk.url}" alt="Gambar Produk" width="50"></td>
                         <td class="${produk.stokAwal < 5 ? 'red-background' : ''}">${produk.stokAwal}</td>
                         <td>
                         <button onclick="editproduk(${index})">Edit</button>
                         <button onclick="deleteProduk(${index})">Hapus</button>
                         </td>
                        `;
    });
}
function deleteProduk(index) {
    const tanya = confirm("Apakah Anda Yakin Ingin Menghapus?")
    if (tanya == true) {
        productArray.splice(index, 1);
        rendertable();
    }else {

    }
    
}
function editproduk(index) {
    const produk = productArray [index];
    document.getElementById("kode-produk").value = produk.kodeProduk;
    document.getElementById("nama-produk").value = produk.namaProduk;
    document.getElementById("harga-produk").value = produk.hargaProduk;
    document.getElementById("satuan").value = produk.satuan;
    document.getElementById("kategori").value = produk.kategori;
    document.getElementById("url").value = produk.url;
    document.getElementById("stok-awal").value = produk.stokAwal;
    deleteProduk(index);

    editIndex = index; //Simpan indeks produk yang sedang diedit
}

function updateKodeProduk() {
    // Perbarui kode produk berdasarkan indeks
    productArray.forEach((produk, index) => {
        produk.kodeProduk = `MD - ${index + 1}`;
    });
    autoincrement = productArray.length + 1; //Sesuaikan nilai autoincrement
}
