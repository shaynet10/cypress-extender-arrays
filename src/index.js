const isOfType = (val, requiredType = 'string') => {
        let currentType = '';
        if (Array.isArray(val)) {
            currentType = 'array';
        } else {
            currentType = typeof val;
        }
        return currentType === requiredType;
};


Cypress.Commands.add('map', {
        prevSubject: ['element'],
    }, (subject, callbackFn) => {
        const results = [];
        cy.wrap(subject).each(e => {
            results.push(callbackFn(e));
        });
        return cy.wrap(results);
    });

Cypress.Commands.add('reduce', {
        prevSubject: ['Array'],
    }, (subject, callbackFn, initialValue = 0) => {
        return cy.wrap(subject).then(values => {
            return values.reduce(callbackFn, initialValue);
        });
    });


Cypress.Commands.add('every', {
        prevSubject: ['element', 'Array'],
    }, (subject, callbackFn) => {
        const results = [];
        cy.wrap(subject).each(e => {
            results.push(callbackFn(e));
        });
        return cy.wrap(results.every(v => v === true));
    });

Cypress.Commands.add('join', {
        prevSubject: ['Array'],
    }, (subject, delimiter = '') => {
        cy.wrap(subject).then((values) => {
            let joined = '';
            if (isOfType(values, 'array') && values.every(v => isOfType(v, 'string'))) { 
                joined = values.join(delimiter);
            }
            return cy.wrap(joined);
        });
    });

    