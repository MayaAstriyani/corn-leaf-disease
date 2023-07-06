$(document).ready(function(){
  
	// -[Prediksi Model]---------------------------
	
	// Fungsi untuk memanggil API ketika tombol prediksi diklik
	$("#prediksi_submit").click(function(e) {
	  e.preventDefault();
	
	  // Get File Gambar yg telah diupload pengguna
	  var file_data = $('#input_gambar').prop('files')[0];   
	  var pics_data = new FormData();                  
	  pics_data.append('file', file_data);
  
	  // Panggil API dengan timeout 1 detik (1000 ms)
	  setTimeout(function() {
		try {
		  $.ajax({
			url         : "/api/deteksi",
			type        : "POST",
			data        : pics_data,
			processData : false,
			contentType : false,
			success     : function(res){
			  // Ambil hasil prediksi dan path gambar yang diprediksi dari API
			  res_data_prediksi   = res['prediksi']
			  res_gambar_prediksi = res['gambar_prediksi'];
			  
			  // Tampilkan hasil prediksi ke halaman web
			  generate_prediksi(res_data_prediksi, res_gambar_prediksi); 
			}
		  });
		}
		catch(e) {
		  // Jika gagal memanggil API, tampilkan error di console
		  console.log("Gagal !");
		  console.log(e);
		} 
	  }, 1000)  
	})
	 
	// Fungsi untuk menampilkan hasil prediksi model
	function generate_prediksi(data_prediksi, image_prediksi) {
	  var str="";
	  
	  if(image_prediksi == "(none)") {
		str += "<h5>Hasil Prediksi</h5>";
		str += "<br>";
		str += "<h5>Silahkan masukkan file gambar (.jpg)</h5>";
	  }
	  else {
		str += "<p style='margin-bottom:15px'><b>Hasil Prediksi</b></p>";
		str += "<img src='" + image_prediksi + "' width=\"200\" height=\"200\"></img>"
		str += "<br>";
		str += "<br>";
		str += "<p><b>" + data_prediksi + "</b></p>";
  
		// Penanganan dan perawatan berdasarkan klasifikasi penyakit
		switch(data_prediksi) {
		  case 'Blight':
			str += "<p>Nama lain&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Hawar Daun</p>";
			str += "<p>Nama ilmiah : Northern corn leaf blight (Exserohilum turcicum)</p>";
			str += "<p>Penyebab&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Jamur Helminthosporium turcicum</p>";
			str += "<p>Ciri-ciri :</p>";
			str += "<ol>";
			str += "<li>Terdapat bercak-bercak berwarna cokelat pada daun, biasanya berukuran kecil namun dapat membesar seiring perkembangan penyakit.</li>";
			str += "<li>Bercak berbentuk oval yang semakin lama semakin menyebar dan memanjang.</li>";
			str += "<li>Bercak hawar daun cenderung menguning pada bagian tengahnya, dengan warna cokelat atau keabu-abuan di sekitarnya.</li>";
			str += "<li>Seiring perkembangan penyakit, bercak hawar daun dapat menyebabkan pembusukan jaringan daun jagung.</li>";
			str += "</ol>";
			str += "<p>Penanganan dan Perawatan :</p>";
			str += "<ol>";
			str += "<li>Menanam jenis bibit jagung yang tahan hawar daun, seperti: Bisma, Pioner-2, Pioner-14, Semar-2,dan Semar-5.</li>";
			str += "<li>Melakukan rotasi tanaman dengan tanaman non-serealia contohnya umbi-umbian dan kacang-kacangan untuk mengurangi risiko penyebaran penyakit.</li>";
			str += "<li>Memusnahkan tanaman dengan cara membakar keseluruhan batang jagung yang terinfeksi penyakit hawar.</li>";
			str += "<li>Membasmi populasi serangga/hama yang dapat membawa dan menyebarkan penyakit hawar daun.</li>";
			str += "<li>Menggunakan fungisida dengan bahan aktif mankozeb dan dithiocarbamate sesuai petunjuk dan aturan.</li>";
			str += "<li>Menerapkan praktik budidaya yang baik, termasuk pemupukan yang seimbang, penyiraman yang tepat, dan pengendalian gulma.</li>";
			str += "</ol>";
			break;
		  case 'Common Rust':
			str += "<p>Nama lain&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Karat Daun</p>";
			str += "<p>Nama ilmiah : Puccinia sorghi</p>";
			str += "<p>Penyebab&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Jamur Puccinia sorghi</p>";
			str += "<p>Ciri-ciri :</p>";
			str += "<ol>";
			str += "<li>Terdapat bercak-bercak kecil berwarna oranye atau kuning pada permukaannya.</li>";
			str += "<li>Bercak-bercak tersebut biasanya terdapat di bagian atas dan bawah daun serta pada tangkai daun.</li>";
			str += "<li>Pada perkembangan penyakit yang parah, bercak-bercak tersebut dapat membesar dan saling menyatu, membentuk lesi (kerusakan) besar berwarna oranye pada daun jagung.</li>";
			str += "<li>Dapat terjadi di dataran rendah sampai tinggi dan mampu berkembang biak pada musim penghujan maupun kemarau.</li>";
			str += "</ol>";
			str += "<p>Penanganan dan Perawatan :</p>";
			str += "<ol>";
			str += "<li>Menanam jenis bibit jagung yang tahan karat daun, sepertiLamuru, Sukmaraga, Palakka, Bima-1, atau Semar-10.</li>";
			str += "<li>Menerapkan rotasi tanaman dengan tanaman non-serealia (umbi-umbian dan kacang-kacangan) untuk mengurangi risiko penyebaran penyakit.</li>";
			str += "<li>Mengendalikan gulma di sekitar tanaman jagung untuk mengurangi kelembaban dan penyebaran spora penyakit.</li>";
			str += "<li>Menghilangkan sisa-sisa tanaman yang terinfeksi agar tidak menular pada tanaman jagung lain.</li>";
			str += "<li>Menggunakan fungisida berbahan aktif benomil, metil tiofanat, karbendazim, atau difenokonazole dengan dosis/konsentrasi sesuai dengan petunjuk pada kemasan.</li>";
			str += "</ol>";
			break;
		  case 'Gray Leaf Spot':
			str += "<p>Nama lain&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Hawar bercak daun abu-abu</p>";
			str += "<p>Nama ilmiah : Cercospora zeae-maydis</p>";
			str += "<p>Penyebab&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Jamur Cercospora zeae-maydis</p>";
			str += "<p>Ciri-ciri :</p>";
			str += "<ol>";
			str += "<li>Terbentuknya bercak abu-abu kecil atau besar pada daun jagung dengan tepi yang jelas dan berbentuk bulat/oval.</li>";
			str += "<li>Bercak dapat membesar seiring perkembangan penyakit dan menyebabkan klorosis (penguningan) pada daun di sekitarnya.</li>";
			str += "<li>Pada kondisi yang parah, daun jagung yang terinfeksi akan mengering, menggulung, dan mengalami nekrosis (kematian jaringan).</li>";
			str += "<li>Pada batang dan malai jagung juga dapat terbentuk bercak-bercak abu-abu yang membusuk.</li>";
			str += "<li>Menular melalui media angin ataupun percikan air hujan.</li>";
			str += "<li>Penyakit ini bisa menyebabkan biji buah jagung rusak bahkan tongkol jagung dapat gugur (terlepas dari pohonnya).</li>";
			str += "</ol>";			
			str += "<p>Penanganan dan perawatan :</p>";
			str += "<ol>";
			str += "<li>Menanam varietas yang tahan bercak daunseperti: Bima-1, Srikandi Kuning-1, Sukmaraga, atau Palakka.</li>";
			str += "<li>Memusnahkan sisa-sisa tanaman yang terinfeksi setelah panen untuk mengurangi sumber infeksi pada musim berikutnya.</li>";
			str += "<li>Memastikan ruang antar tanaman yang cukup untuk meningkatkan sirkulasi udara dan mengurangi kelembaban di daun jagung.</li>";
			str += "<li>Membersihkan alat dan peralatan pertanian yang digunakan untuk menghindari penyebaran penyakit.</li>";
			str += "<li>Pengendalian gulma/rumput yang baik untuk mengurangi persaingan dan menjaga kebersihan lingkungan pertanaman.</li>";
			str += "<li>Menghindari penumpukan air yang berlebih di daun jagung dengan pengairan yang tepat.</li>";
			str += "<li>Menggunakan fungisida yang mengandung bahan aktif mancozebatau karbendazim.</li>";
			str += "</ol>";
			break;
		  case 'Healthy':
			str += "<p>Jagung Anda sehat. Tetap jaga kebersihan lahan pertanian dan berikan perawatan rutin seperti pemupukan dan pengairan yang memadai.</p>";
			break;
		  default:
			str += "<p>Penyakit tidak dikenali atau terjadi kesalahan dalam prediksi.</p>";
		}
	  }
	  $("#hasil_prediksi").html(str);
	}  
  })
  