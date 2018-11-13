document.addEventListener("DOMContentLoaded", function (evt) {
	console.log("aaa");
	document.querySelector("#submit").addEventListener("click", function (evt) {
		if(document.querySelector("#file").files[0] ==undefined) {
			document.querySelector(".alert").innerText = "파일을 선택해주세요!";
		} else {
			document.querySelector(".alert").innerText = "";

		LastName = document.querySelector("#LastName").value;
		MiddleName = document.querySelector("#MiddleName").value;
		FirstName = document.querySelector("#FirstName").value
		information = document.querySelector("#information").value;
		goal = document.querySelector("#goal").value;
		fileUrl = document.querySelector("#file").files[0].name;


		document.querySelector(".resumeResult").style.display = "block";
		document.querySelector(".div").innerHTML = "";
		document.querySelector(".name").innerText = LastName+" "+MiddleName+" "+FirstName;
		document.querySelector(".image").innerHTML +=  "<img src=" + fileUrl + " width='200px'>";
		document.querySelector(".information").innerText = information;
		document.querySelector(".goal").innerText = goal;
		}
	})
})
