const NEW_CUSTOMERS = [];
const OLD_CUSTOMERS = [];
const ALL_CUSTOMERS = [];

const TEXT = {
  add_customer: `Enter the first and last name then press ok`,
  customer_added: `has been added to the queue`,
  next_customer: `Now serving`,
  list_of_customers: `List of all customers:`,
  empty_queue: `There are no customers in this queue.`,
  syntax_error: `Syntax Error: Unrecognized charaters`,
};

const NODES = {
  add_customers: document.querySelector(".add-customers-button"),
  call_next_customers: document.querySelector(".next-customers-button"),
  cycle_recovered_customers: document.querySelector(
    ".cycle-recovered-customers-button"
  ),
  clear_queue: document.querySelector(".clear-current-customers-button"),
  clear_recovered_customers: document.querySelector(
    ".clear-recovered-customers-button"
  ),
  display_customers: document.querySelector(".display-customers"),
  display_old_customers: document.querySelector(".display-old-customers"),
  display_all_customers: document.querySelector(".display-all-customers"),
};

NODES.add_customers.addEventListener("click", () => {
  const DONE = "done";
  const VERIFY =
    /^[a-zA-Z0-9\s!@#$%^&*()_+{}\[\]:;"'<>,.?/~`-]|(IV|IX|XL|XC|CD|CM|I|V|X|L|C|D|M)+$/;

  while (true) {
    let newCustomer = prompt(TEXT.add_customer);

    if (newCustomer.match(VERIFY)) {
      NEW_CUSTOMERS.push(newCustomer.toLowerCase());
      OLD_CUSTOMERS.push(newCustomer.toLowerCase());
      ALL_CUSTOMERS.push(newCustomer.toLowerCase());
    } else {
      alert(`${TEXT.syntax_error}`);
    }

    if (newCustomer === DONE.toLowerCase()) {
      NEW_CUSTOMERS.pop();
      OLD_CUSTOMERS.pop();
      ALL_CUSTOMERS.pop();
      break;
    }
  }

  alert(`All customers have been added`);

  NODES.display_customers.textContent = NEW_CUSTOMERS.join(", ");
  NODES.display_old_customers.textContent = OLD_CUSTOMERS.join(", ");
  NODES.display_all_customers.textContent = ALL_CUSTOMERS.join(", ");
});

NODES.call_next_customers.addEventListener("click", () => {
  if (NEW_CUSTOMERS.length > 0) {
    let newCustomer = NEW_CUSTOMERS.shift();
    alert(`${TEXT.next_customer} ${newCustomer}`);
    NODES.display_customers.textContent = NEW_CUSTOMERS.join(", ");
  } else {
    alert(`${TEXT.empty_queue}`);
  }
});

NODES.clear_queue.addEventListener("click", () => {
  if (NEW_CUSTOMERS.length > 0) {
    NEW_CUSTOMERS.splice(0);
    NODES.display_customers.textContent = NEW_CUSTOMERS.join(", ");
  } else {
    alert(`${TEXT.empty_queue}`);
  }
});

NODES.cycle_recovered_customers.addEventListener("click", () => {
  if (OLD_CUSTOMERS.length > 0) {
    let previousCustomer = OLD_CUSTOMERS.shift();
    alert(`${TEXT.next_customer} ${previousCustomer}`);
    NODES.display_old_customers.textContent = OLD_CUSTOMERS.join(", ");
  } else {
    alert(`${TEXT.empty_queue}`);
  }
});

NODES.clear_recovered_customers.addEventListener("click", () => {
  if (OLD_CUSTOMERS.length > 0) {
    OLD_CUSTOMERS.splice(0);
    NODES.display_old_customers.textContent = OLD_CUSTOMERS.join(", ");
  } else {
    alert(`${TEXT.empty_queue}`);
  }
});
