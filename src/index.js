const isOfType = (val, requiredType = 'string') => {
        let currentType = '';
        if (Array.isArray(val)) {
            currentType = 'array';
        } else {
            currentType = typeof val;
        }
        console.log('typeOf: ', currentType);
        return currentType === requiredType;
};


Cypress.Commands.add('map', {
        prevSubject: ['element', 'Array'],
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


Cypress.Commands.add('reverse', { 
    prevSubject: ['Array', 'element'],
}, (subject) => {
    return cy.wrap(Array.from(subject).reverse());
});

Cypress.Commands.add('flat', {
    prevSubject: ['Array', 'element'],
}, (subject, depth = 1) => {
    return cy.wrap(Array.from(subject).flat(depth));
});

Cypress.Commands.add('indexOf', {
    prevSubject: ['Array', 'element'],
}, (subject, value, fromIndex = 0) => {
    return cy.wrap(Array.from(subject).indexOf(value, fromIndex));
});

Cypress.Commands.add('lastIndexOf', {
    prevSubject: ['Array', 'element'],
}, (subject, value, fromIndex = null) => {
    const array = Array.from(subject);
    if (!fromIndex) {
        fromIndex = array.length - 1;
    }
    return cy.wrap(array.lastIndexOf(value, fromIndex));
});

Cypress.Commands.add('sort', {
    prevSubject: ['Array', 'element'],
}, (subject, compareFn = null) => {
    if (!compareFn) {
        return cy.wrap(Array.from(subject).sort());
    }
    return cy.wrap(Array.from(subject).sort(compareFn));
});
