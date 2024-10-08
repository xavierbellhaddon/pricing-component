const slider = document.querySelector("input[type=checkbox]");

const prices = document.querySelectorAll(".price");

const values = {
  basic: {
    annually: "199.99",
    monthly: "19.99",
  },
  professional: {
    annually: "249.99",
    monthly: "24.99",
  },
  master: {
    annually: "399.99",
    monthly: "39.99",
  },
};

const togglePricing = () => {
  const billingCycle = slider.checked ? "monthly" : "annually";

  prices[0].innerText = values.basic[billingCycle];
  prices[1].innerText = values.professional[billingCycle];
  prices[2].innerText = values.master[billingCycle];
};

slider.addEventListener("click", togglePricing);
