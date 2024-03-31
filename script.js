document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const address = document.getElementById("address").value;

    const resultCards = document.getElementById("resultCards");
    const card = document.createElement("div");
    card.classList.add("card");
    let placeholderImageSrc;
    if (gender === "Male") {
        placeholderImageSrc = "male_icon.png";
    } else {
        placeholderImageSrc = "female_icon.png";
    }
    card.innerHTML = `
        <img src="${placeholderImageSrc}" class="card-img-top" alt="${gender} Image">
        <div class="card-body">
          <h5 class="card-title">${firstName} ${lastName}</h5>
          <p class="card-text"><strong>Email:</strong> ${email}</p>
          <p class="card-text"><strong>Phone:</strong> ${phone}</p>
          <p class="card-text"><strong>Date of Birth:</strong> ${dob}</p>
          <p class="card-text"><strong>Gender:</strong> ${gender}</p>
          <p class="card-text"><strong>Address:</strong> ${address}</p>
        </div>
      `;
    resultCards.appendChild(card);

    // Reset form
    this.reset();
});

function clearForm() {
    document.getElementById("userForm").reset();
}
