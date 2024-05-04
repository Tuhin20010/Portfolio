// Function to create the sidebar navigation
function createNav() {
    // Create the sidebar HTML structure
    let sidebarHTML = `
        <div class="sidebar">
            <div class="header">
                <div class="profile-photo">
                    <img src="Myimage.jpg" alt="Profile Photo">
                </div>
                <h2><i><b>Tuhin Pratihar</b></i></h2>
            </div>
            <a href="Home.html">Home</a>
            <a href="About.html">About</a>
            <a href="Projects.html">Projects & Skills</a>
            <a href="Contact.html">Contact</a>
        </div>
    `;

    // Insert the sidebar HTML into the document
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
}

// Call the function to create the navigation sidebar
createNav();



