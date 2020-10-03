import React from 'react';

// Let's checkout Template Literals

const greeting = 'Hello';
const subject = 'World';
console.log(`${greeting} ${subject}!`);

// It's the same thing as...
console.log(greeting + ' ' + subject + '!');

function GetLiteral({className, ...props}) {
  console.log(className, props);
  return <div className={`box ${className}`} {...props} />
}

export default GetLiteral;