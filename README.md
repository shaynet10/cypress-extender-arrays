<h1> cypress-extender-arrays </h1>

<p>adds usual pure JS array to Cypress</p>


<h3> Installation </h3>
<p>To install the plugin to your project please use:</p>

```javascript
npm install cypress-extender-arrays
```

<p>or use:</p>


```
yarn add cypress-extender-arrays
```

<h3>Manual</h3>

Once cypress-extender-arrays is installed use:

``` javascript
        import 'cypress-extender-arrays';

```

Or use: 

``` javascript
        require('cypress-extender-arrays');

```


Or add it to the plugin file.

Once you done, you'll be able to enjoy the following Cypress commands:



<h2> Map function </h2>

<h3> What is map function ?</h3>
<p> Now when you get Cypress Chainable elements</p>
<p>you can use the map function, </p>
<p>exactly as you do in a normal JS</p>


``` javascript
        cy.get('li').map(e => e.text().trim()).then(texts => {
            cy.log('Texts are: ', texts);
        });
```


<h2> Reduce function </h2>

<h3> What is reduce function ?</h3>
<p> Now when you get Cypress Chainable elements</p>
<p>you can use the reduce function, </p>
<p>exactly as you do in a normal JS</p>


``` javascript
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
```



<h2> Every function </h2>

<h3> What is every function ?</h3>

<p> Now when you get Cypress Chainable elements</p>
<p>you can use the every function, </p>
<p>exactly as you do in a normal JS</p>

<p> which checks that a callback function's result</p>
<p> on each element is true</p>

Use: 


``` javascript
import { initCypressWithArrays } from 'cypress-extender';
initCypressWithArrays();

it('test that every from the prevSubjet is a string', () => {
    cy.get('a').map(e => e.text()).every(v => typeof v === 'string').should('be.true');
});

```


<h2> Join function </h2>

<h3> What is join function ?</h3>

<p> When you get Cypress Chainable elements with string values</p>
<p>you can use the join function, </p>
<p>exactly as you do in a normal JS</p>

<p> which returns a joined string from the array of strings</p>
<p><b>NOTICE: </b> when you use chainable which is not a strings array, the joined value will be ''</p>

Use: 


``` javascript
it('test join texts are given', () => {
    cy.get('a').map(e => e.text()).join("HOWAREYOU").should('include', 'HOWAREYOU');
});


```




<h2> Reverse function </h2>

<h3> What is reverse function ?</h3>

<p> When you get Cypress Chainable elements with values</p>
<p>you can use the reverse function, </p>
<p>exactly as you do in a normal JS</p>

<p> which returns an array with the values reversed</p>

Use: 


``` javascript

    it('test array reverse', () => {
        cy.get('a').map(e => e.text()).reverse().then(values => {
            cy.get('a').reverse().map(e => e.text()).should('deep.eq', values);
        });
    });


```

