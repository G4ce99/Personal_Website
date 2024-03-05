document.addEventListener("DOMContentLoaded", (event) => {
    // Buttons
    const ExpButton = document.getElementById('exp');
    const ProjButton = document.getElementById('proj');
    const ExtraButton = document.getElementById('extra');
    const ResumeButton = document.getElementById('resume');
    const ButtonsList = [ExpButton, ProjButton, ExtraButton, ResumeButton]

    // Content for each button
    const ExpContent = document.getElementById('Experience');
    const ProjContent = document.getElementById('Projects');
    const ExtraContent = document.getElementById('Extracurriculars');
    const ResumeContent = document.getElementById('Resume');
    const ContentList = [ExpContent, ProjContent, ExtraContent, ResumeContent]

    // Handling swapping between pages of content on button clicks
    for (let i = 0; i < 4; i++) {
        ButtonsList[i].addEventListener("click", (event) => {
            const ThisContentIsOpen = ButtonsList[i].classList.contains("opened");
            console.log(ContentList[i].classList)
            if (!ThisContentIsOpen) {
                // Close which ever other button is opened
                for (let j = 0; j < 4; j++) {
                    if (ButtonsList[j].classList.contains("opened")) {
                        ButtonsList[j].classList.remove("opened");
                        ContentList[j].classList.remove("opened");
                        break;
                    }
                }
                ButtonsList[i].classList.add("opened");
                ContentList[i].classList.add("opened");
                console.log(ContentList[i].classList)
            } 
        });
    }

    console.log("Finished")
});


