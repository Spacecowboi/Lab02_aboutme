'use strict';

function fixInput(input) {

        return input.toLowerCase();
}

// Validating yes or no
function validaton(response) {

        response = fixInput(response);
        return response === 'yes' || response === 'no; 
}