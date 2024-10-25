const resultElement = document.querySelector(".result");
const orderButton = document.getElementById("orderButton");

orderButton.addEventListener("click", () => {
  resultElement.textContent = "Оформлюємо ваше замовлення...";

  // Створення промісу для симуляції доставки
  const foodDelivery = new Promise((resolve, reject) => {
    setTimeout(() => {
      const deliveryOutcome = Math.random(); // Випадкове значення для визначення результату

      if (deliveryOutcome < 0.5) {
        resolve("Замовлення успішно доставлено! 🍕");
      } else if (deliveryOutcome < 0.8) {
        reject("Замовлення затримується. Вибачте за незручності! 🚚");
      } else {
        reject("Замовлення було скасовано через помилку. 😔");
      }
    }, 3000);
  });

  foodDelivery
    .then((message) => {
      resultElement.textContent = message;
      PNotify.success({
        text: message,
        delay: 3000,
      });
    })
    .catch((errorMessage) => {
      resultElement.textContent = errorMessage;
      PNotify.error({
        text: errorMessage,
        delay: 3000,
      });
    })
    .finally(() => {
      PNotify.info({
        text: "Процес доставки завершено!",
        delay: 3000,
      });
    });
});
