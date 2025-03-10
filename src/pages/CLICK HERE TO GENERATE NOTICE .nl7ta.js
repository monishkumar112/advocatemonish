import { generateLegalNotice } from 'backend/aiFunctions.jsw';

$w.onReady(function () {
    // Attach the click event listener
    $w("#button4").onClick(async () => {
        console.log("Button Clicked!"); // Debugging log

        let userNameAddress = $w("#input1").value;
        let userPhoneNumber = $w("#input2").value;
        let caseDetails = $w("#input3").value;
        let oppositePartyDetails = $w("#input4").value;
        let selectedDate = $w("#datepicker1").value;

        if (!userNameAddress || !userPhoneNumber || !caseDetails || !oppositePartyDetails || !selectedDate) {
            $w("#outputText").text = "Please fill in all fields before generating a notice.";
            return;
        }

        let userInput = `
            Name & Address: ${userNameAddress}
            Phone Number: ${userPhoneNumber}
            Case Details: ${caseDetails}
            Opposite Party: ${oppositePartyDetails}
            Date: ${selectedDate}
        `;

        $w("#outputText").text = "Generating notice...";
        let notice = await generateLegalNotice(userInput);
        $w("#outputText").text = notice;
    });
});
$w.onReady(function () {
    $w("#button4").onClick(async () => {
        console.log("Button Clicked!");  // Check if this appears in Developer Console
        try {
            let userInput = "Test Input";
            let notice = await generateLegalNotice(userInput);
            console.log("Generated Notice:", notice);
            $w("#outputText").text = notice;
        } catch (error) {
            console.error("Error generating notice:", error);
        }
    });
});
