const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const data = { message: 'Promise resolved!' };
    resolve(data);
  }, 1000);
});

promise
  .then(data => console.log(data.message))
  .catch(error => console.error(error));

  //promisewith asyc/awai

  async function myFunction() {
  try {
    const result1 = await Promise();
    const result2 = await Promise2(result1);
    return result2;
  } catch (error) {
    console.error(error);
  }
}

myFunction()
  .then(result => console.log(result))
  .catch(error => console.error(error));