const greeting = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
    console.log(`Welcome ${userDisplay}!`);
  };
  
  greeting(); // Welcome pessoa usuária!
  
  const greetings = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

  greetings('Andre'); // // Welcome pessoa usuária!

  const multiply = (number = 0, value = 1) => number * value;
  
  console.log(multiply(5));
  