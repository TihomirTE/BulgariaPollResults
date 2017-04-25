let _colors = ["#ff6699", "#E96D63", "#7FCA9F", "#F4BA70", "#85C1F5", "#4A789C", "#13A1CB", "#728CB0", "#C296B6", "#c002ef", "#f70e29",
                        "#0e64ef", "#53e9d0", "#E96D63", "#7FCA9F", "#F4BA70", "#b2fc3c", "#4A789C", "#13A1CB", "#728CB0", "#C296B6"];    

function getPartyColor(partyVotingNumber) {

    if (typeof partyVotingNumber !== 'number') {
            throw new Error('The number of the party provided in PartyColotPicker class is not valid');
    }

    if (0 > partyVotingNumber || partyVotingNumber > 21) {
            throw new Error('The number of the party provided in PartyColotPicker class either too big or too small');
    }

        return _colors[partyVotingNumber];
    }

export { getPartyColor }