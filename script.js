const makeChange = (c) => {
    const quarters = Math.floor(c/ 25);
    return c%= 25;
    const dimes = Math.floor(c/ 10);
    return c%= 10;
    const nickels = Math.floor(c / 5);
    return c %= 5;
    const pennies = c;
    return { q: quarters, d: dimes, n: nickels, p: pennies };
};

Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
