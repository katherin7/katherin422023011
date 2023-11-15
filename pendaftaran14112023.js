alert("Selamat Anda Berhasil Masuk")
prompt("Masukan Bias Favoritmu")

function validasi() {
		var nama = document.getElementById("nama").value;
		var email = document.getElementById("email").value;
		var password = document.getElementById("Password").value;
		var username = document.getElementById("Username").value;
		
		if (nama != "" && email!="" && password !="" && username !="" ) {
			return true;
		}else{
			alert('Mohon maaf anda harus mengisi data terlebih dahulu !');
		}
	}


$(document).ready(function(){
	let h1 = $('h1')
	console.log(h1.text())
})