$.getJSON('data/pizza.json', function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data) {
        $('#daftar-menu').append('<div class="col-md-4"><div class="card"><img src="img/pizza/'+ data.gambar +'" class="card-img-top" alt="all menu pizza"/><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan </a></div></div></div>');
    });
});