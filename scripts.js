document.addEventListener("DOMContentLoaded", function () {
    const signInBtn = document.getElementById("signInBtn");
    const rewardsLink = document.getElementById("rewardsLink");
    const dropdown = document.getElementById("dropdown");

    const accountName = document.getElementById("accountName");
    const discountInfo = document.getElementById("discountInfo");

    // Simulate user login data
    let user = null;

    // Sign In button opens login modal
    signInBtn.addEventListener("click", function (event) {
        event.preventDefault();
        const username = prompt("Enter your username:");
        if (username) {
            // Simulate login success
            user = {
                name: username,
                discount: "15% off your next purchase!",
            };

            // Update dropdown with user information
            accountName.textContent = `Account Name: ${user.name}`;
            discountInfo.textContent = `Discount: ${user.discount}`;
            alert("You are now logged in!");
        }
    });

    // Show dropdown on hover
    rewardsLink.addEventListener("mouseenter", function () {
        if (user) {
            dropdown.style.display = "block";
        }
    });

    // Hide dropdown when mouse leaves
    rewardsLink.addEventListener("mouseleave", function () {
        dropdown.style.display = "none";
    });

    // Ensure dropdown stays visible when hovering over it
    dropdown.addEventListener("mouseenter", function () {
        dropdown.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function () {
        dropdown.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popupMessage");
    const closeBtn = document.querySelector(".close-popup");

    // Show the pop-up after a short delay
    setTimeout(() => {
        popup.style.display = "block";
    }, 1000);

    // Close the pop-up when the close button is clicked
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close the pop-up if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});