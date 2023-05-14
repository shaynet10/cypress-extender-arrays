import '../../../src/index.js';

describe('arrays', () => {
    before(() => {
        cy.visit('https://www.google.com/');
    });
    
    it('test map', () => {
        cy.get('a').map(e => e.text()).then(array => {
            cy.wrap(array.every(v => typeof v === 'string')).should('be.true');
        });
    });

    it('test every prevSubjet is array', () => {
        cy.get('a').map(e => e.text()).every(v => typeof v === 'string').should('be.true');
    });

    it('test every prevSubjet is element', () => {
        cy.get('a').every(e => typeof e.text() === 'string').should('be.true');
    });

    it('test join texts are given', () => {
        cy.get('a').map(e => e.text()).join("HOWAREYOU").should('include', 'HOWAREYOU');
    });

    it('test join elements are given', () => {
        cy.get('a').join("HOWAREYOU").should('equal', '');
    });

    it('test array reduce with array', () => {
        cy.get('a').map(e => e.text()).reduce((acc, val) => {
            acc.push(val[0]);
            return acc;
        }, []).should('have.length.gt', 0);
    });

    it('test array reduce with string', () => {
        cy.get('a').map(e => e.text()).reduce((acc, val) => {
            acc += val[0] || '';
            return acc;
        }, '').should('have.length.gt', 0);
    });

    it('test array reduce with number', () => {
        cy.get('a').map(e => e.text()).reduce((acc, val) => acc += val.length, 0)
        .should('be.gt', 0);
    });
});

