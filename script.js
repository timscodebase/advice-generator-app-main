function getAdvice() {
  try {
		fetch("https://api.adviceslip.com/advice")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log("slip", data.slip);
				let slip = data.slip;
				let id = document.querySelector(".id");
				let advice = document.querySelector(".advice");

				id.innerHTML = `${slip.id}`;
				advice.innerHTML = `"${slip.advice}`;
			});
    } catch (error) {
      console.log(error);
    }
	}

  getAdvice();