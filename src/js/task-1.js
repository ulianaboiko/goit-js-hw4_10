let counter = 0;

const message = setInterval(() => {
  counter++;
  console.log(`Якщо ти бачиш повідомлення №${counter} то все працює :) `);

  if (counter === 5) {
    clearInterval(message);
    console.log(`Усі ${counter} повідомлень відправлено!`);
  }
}, 1000);
