let _colors = ["#ff6699", "#E96D63", "#7FCA9F", "#F4BA70", "#85C1F5", "#4A789C", "#0583AC", "#728CB0", "#901850", "#c002ef", "#D01E23",
    "#0e64ef", "#53e9d0", "#E9CD1D", "#7FCA9F", "#F4BA70", "#A2C309", "#008C42", "#13A1CB", "#728CB0", "#15296A", "#15296A"
];

function getPartyColor(partyVotingNumber) {

    if (typeof partyVotingNumber !== 'number') {
        throw new Error('The number of the party provided in PartyColotPicker class is not valid');
    }

    if (0 > partyVotingNumber || partyVotingNumber > 21) {
        throw new Error('The number of the party provided in PartyColotPicker class either too big or too small');
    }

    return _colors[partyVotingNumber];
}

export { getPartyColor };