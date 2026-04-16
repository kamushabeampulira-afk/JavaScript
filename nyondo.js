//================================
//PART 1: VARIABLES & DATA TYPES
//=================================
QN 1

const storeName = "NYONDO General Hardwaer LTD"; // I used const because the store name will not change

const minimumStockLevel = 50; // used const because this threshold is a fixed business rule

let isStoreOpen = true; // used let because the store opens and closes daily therefore the value will change

let currentManagerName = ""; //I let because a manager can resign or be promoted therefore the value changes

let closedDepartments = null; //this value changes because departments open and close

QN 2
//typeof operator
console.log(`storeName is of type: ${typeof storeName}`);
console.log(`minimumStockLevel is of type: ${typeof minimumStockLevel}`);
console.log("isStoreOpen is of type:" + typeof isStoreOpen);
console.log("currentManagerName is of type: " + typeof currentManagerName);
console.log("closedDepartments is of type: " + typeof closedDepartments);


//============================
//PART 2: STRING MANIPULATION
//============================
QN 4
let supplierName = " john HARDWARE";
// Step 1: trim whitespace, then convert to Title Case
let cleanSupplierName = supplierName
  .trim()
  .toLowerCase()
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(`Supplier Name: ${cleanSupplierName}`);


//=================================
//Part 3: CONTROL FLOW & LOGIC
//==================================

 QN 5

if (cleanSupplierName && cleanSupplierName.length >= 2) {
  console.log("Valid supplier name");
  return true;
} else {
  console.log("Invalid supplier name");
  return false;
}


//=============
// FUNCTIONS
//=============

QN 6

let phoneNumber = "0780000008";

function validateUgandanPhoneNumber(phoneNumber) {
  let phoneStr = phoneNumber.toString();

  // Check if starts with 07 (10 digits total) OR starts with 256 (12 digits total)
  if (
    (phoneStr.startsWith("07") && phoneStr.length === 10) ||
    (phoneStr.startsWith("256") && phoneStr.length === 12)
  ) {
    console.log("valid ugandan phone number");
    return true;
  } else {
    console.log("Invalid phone number");
    return false;
  }
}

QN 7

let productDescription = "iron sheets - box of 20";


let trimmed = productDescription.trim();
let upperCase = trimmed.toUpperCase();

let formatted = upperCase.replace("-", ":");

console.log(formatted);

QN 8

const category = "ROOFINGS";
const itemId = 204;
const branchCode = "KLA";

// Remove the 'S' from ROOFINGS to get ROOFING
const formattedCategory = category.slice(0, -1);
const stockCode = `NYD-${formattedCategory}-${branchCode}-${itemId}`;

console.log(stockCode);


QN 9

let userRole = "Sales Attendant";
let quantityOrdered1 = 30;
let sellingPriceUgx1 = "45000";
let costPriceUgx1 = 38000;

// Rule 1: Check if user is authorized to register new stock
if (userRole !== "Store Manager" && userRole !== "Accounts/Admin") {
  console.log(
    "ERROR: Only Store Manager or Accounts/Admin may register new stock",
  );
  console.log(`Access denied for role: ${userRole}`);
  
} else if (quantityOrdered1 < 10) {
  // Rule 2: Check minimum order quantity
  console.log("ERROR: Minimum order quantity for bulk items is 10 units");
  console.log(
    `Quantity ordered1: ${quantityOrdered1} units (Minimum required: 10 units)`,
  );
} else {
  // Rule 3: Convert selling price to number and compare with cost price
  let sellingPriceNum = Number(sellingPriceUgx1);

  if (sellingPriceNum <= costPriceUgx1) {
    console.log("ERROR: Selling price must be greater than cost price");
    console.log(
      `Selling Price: ${sellingPriceNum} UGX | Cost Price: ${costPriceUgx} UGX`,
    );
    console.log(`Loss of ${costPriceUgx - sellingPriceNum} UGX per unit`);
  } else {
    // All validations passed
    let profitPerUnit = sellingPriceNum - costPriceUgx;
    let totalProfit = profitPerUnit * quantityOrdered;

    console.log("✓ Stock registration successful!");
    console.log(
      `Product: ${quantityOrdered} units at ${sellingPriceNum} UGX each`,
    );
    console.log(`Profit per unit: ${profitPerUnit} UGX`);
    console.log(`Total profit: ${totalProfit} UGX`);
  }
}


QN 10

let quantityOrdered = 30;
let sellingPriceUgx = "45000";
let costPriceUgx = 38000;

// Single Boolean expression using && operator
let isValid = quantityOrdered >= 10 && Number(sellingPriceUgx) > costPriceUgx;

// Log result
console.log(isValid ? "Stock entry valid" : "Stock entry invalid");

//======================
//PART5: ARRAYS & OBJECTS
//======================

QN 11

let hardwareStock = ['Iron Sheets', 'Cement Bags', 'Steel Rods', 'Paint (20L)', 'PVC Pipes'];

hardwareStock.push("Binding Wire");

hardwareStock.shift();

// Check if "Cement Bags" exists
let cementExists = hardwareStock.includes("Cement Bags");


console.log("Final hardwareStock:", hardwareStock);
console.log("Array length:", hardwareStock.length);
console.log("Cement Bags exists:", cementExists);

let branchStock = ['Nails', 'Bolts'];
let allStock = hardwareStock.concat(branchStock);
console.log("Merged allStock:", allStock);

QN 12

function calculateSaleAmount(quantityInUnits, pricePerUnit) {
   
  if(typeof quantityInUnits ! == 'number' || typeof pricePerUnit !== 'number' || quantityInUnits <0 || pricePerUnit <0) {
    return "Invalid input"
  }

  return quantityInUnits * pricePerUnit
}

QN 13

const validateNIN = (nin) => {
    // Check if NIN is exactly 14 characters and is not empty
    return nin && nin.length === 14;
};

// Test cases
console.log(validateNIN("CM123456789ABC"));  // true (14 chars)
console.log(validateNIN(""));                 // false (empty)
console.log(validateNIN("CM123456789AB"));    // false (13 chars)
console.log(validateNIN("CM123456789ABCD"));  // false (15 chars)
console.log(validateNIN(null));               // false (null)
console.log(validateNIN(undefined));          // false (undefined)

QN 14

function getUserPermissions(role) {
    switch(role) {
        case 'Store Manager':
            return "stock_and_pricing";
        case 'Sales Attendant':
            return "sales_and_receipts";
        case 'Accounts/Admin':
            return "full_reports";
        default:
            return "unauthorized";
    }
}

// Test cases
console.log(getUserPermissions('Store Manager'));     // "stock_and_pricing"
console.log(getUserPermissions('Sales Attendant'));   // "sales_and_receipts"
console.log(getUserPermissions('Accounts/Admin'));    // "full_reports"
console.log(getUserPermissions('Admin'));             // "unauthorized"
console.log(getUserPermissions('Stock Clerk'));       // "unauthorized"
console.log(getUserPermissions(''));                  // "unauthorized"

QN 15

function createSaleRecord(itemName, quantity, buyerContact, amountPaid) {
    return {
        receiptId: Math.floor(Math.random() * 9000) + 1000,
        itemName: itemName,
        quantityInUnits: quantity,
        buyerContact: buyerContact,
        amountPaid: amountPaid,
        saleDate: new Date(),
        isCredit: false
    };
}


let sale = createSaleRecord("Cement Bags", 100, "+256789123456", 3500000);

// Modifications
sale.branch = "Kampala Main";           // Dot notation
sale.isCredit = true;                   // Change to true
sale["dueDate"] = new Date();           // Bracket notation
sale.dueDate.setMonth(sale.dueDate.getMonth() + 1); // Due in 1 month

// Log all property names
console.log("Property Names:", Object.keys(sale));
console.log("Sale Record:", sale);



// ============================================
// PART 6: LOOPS
// ============================================

QN 16

// Create array weeklyDeposits with 7 numbers (daily deposit totals in UGX)
let weeklyDeposits = [250000, 320000, 180000, 450000, 380000, 290000, 410000];

console.log("=== PART 1: WEEKLY DEPOSITS ===");
console.log("Daily deposits (UGX):", weeklyDeposits);


let totalDeposits = 0;
for (let i = 0; i < weeklyDeposits.length; i++) {
    totalDeposits += weeklyDeposits[i];
}

let averageDeposit = totalDeposits / weeklyDeposits.length;

console.log(`Total deposits: ${totalDeposits.toLocaleString()} UGX`);
console.log(`Average daily deposit: ${averageDeposit.toLocaleString()} UGX`);
console.log("");



function createSaleRecord(itemName, quantity, buyerContact, amountPaid) {
    return {
        receiptId: Math.floor(Math.random() * 9000) + 1000,
        itemName: itemName,
        quantityInUnits: quantity,
        buyerContact: buyerContact,
        amountPaid: amountPaid,
        saleDate: new Date(),
        isCredit: false  // Default is false
    };
}


let saleRecords = [
    createSaleRecord("Iron Sheets", 50, "+256772123456", 2250000),
    createSaleRecord("Cement Bags", 100, "+256789123456", 3500000),
    createSaleRecord("Steel Rods", 30, "+256701234567", 1800000),
    createSaleRecord("Paint (20L)", 25, "+256782345678", 1250000),
    createSaleRecord("PVC Pipes", 200, "+256712345678", 800000)
];


saleRecords[0].isCredit = true;  // Iron Sheets - credit sale
saleRecords[2].isCredit = true;  // Steel Rods - credit sale
saleRecords[4].isCredit = true;  // PVC Pipes - credit sale

console.log("=== PART 2: SALE RECORDS (Credit Sales) ===");
console.log("All sale records:");
saleRecords.forEach((record, index) => {
    console.log(`  ${index + 1}. ${record.itemName} - Credit: ${record.isCredit ? "YES" : "NO"}`);
});
console.log("");


let creditSaleCount = 0;
for (let record of saleRecords) {
    if (record.isCredit === false) {
        continue;  // Skip non-credit sales
    }
    creditSaleCount++;
}

console.log(`Total credit sales: ${creditSaleCount}`);
console.log("");

// ============================================
// Inventory Array with For Loop and Break
// ============================================


let inventory = [
    { itemName: "Iron Sheets", quantity: 50 },
    { itemName: "Cement Bags", quantity: 0 },      // Out of stock
    { itemName: "Steel Rods", quantity: 30 },
    { itemName: "Paint (20L)", quantity: 0 },      // Out of stock (second one)
    { itemName: "PVC Pipes", quantity: 200 },
    { itemName: "Binding Wire", quantity: 0 }      // Out of stock (third one)
];

console.log("=== PART 3: INVENTORY (Out of Stock Alert) ===");
console.log("Current inventory:");
inventory.forEach(item => {
    console.log(`  ${item.itemName}: ${item.quantity} units`);
});
console.log("");

// Use for loop with break to find the first out-of-stock item
for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].quantity === 0) {
        console.log(`ALERT: ${inventory[i].itemName} is out of stock`);
        break;  // Stop at the first out-of-stock item
    }
}


let procurementRecords = [
    {
        id: 1001,
        supplierName: "Roofing Supplies Ltd",
        itemName: "Iron Sheets",
        quantityInUnits: 500,
        costInUgx: 37500000,
        deliveryDate: new Date(2026, 0, 10)
    },
    {
        id: 1002,
        supplierName: "Cement Distributors Ltd",
        itemName: "Cement Bags",
        quantityInUnits: 1000,
        costInUgx: 28000000,
        deliveryDate: new Date(2026, 0, 12)
    },
    {
        id: 1003,
        supplierName: "Steel Masters Ltd",
        itemName: "Steel Rods",
        quantityInUnits: 300,
        costInUgx: 42000000,
        deliveryDate: new Date(2026, 0, 15)
    },
    {
        id: 1004,
        supplierName: "Paint World Ltd",
        itemName: "Paint (20L)",
        quantityInUnits: 150,
        costInUgx: 9750000,
        deliveryDate: new Date(2026, 0, 18)
    },
    {
        id: 1005,
        supplierName: "PVC Solutions Ltd",
        itemName: "PVC Pipes",
        quantityInUnits: 800,
        costInUgx: 12000000,
        deliveryDate: new Date(2026, 0, 20)
    },
    {
        id: 1006,
        supplierName: "Hardware Distributors Ltd",
        itemName: "Binding Wire",
        quantityInUnits: 2000,
        costInUgx: 5000000,
        deliveryDate: new Date(2026, 0, 22)
    }
];

QN 17

function displayProcurementRecords(records) {
    console.log("=== PROCUREMENT RECORDS REPORT ===\n");
    console.log("ID\tSupplier\t\tItem\t\tQty\tCost (UGX)\tDelivery Date");
    console.log("--\t--------\t\t----\t\t---\t----------\t-------------");
    
    records.forEach(record => {
        console.log(`${record.id}\t${record.supplierName.substring(0, 15)}\t${record.itemName.substring(0, 12)}\t${record.quantityInUnits}\t${record.costInUgx.toLocaleString()}\t${record.deliveryDate.toDateString()}`);
    });
    
    console.log(`\nTotal Records: ${records.length}`);
}

displayProcurementRecords(procurementRecords);

// Filter bulk orders
let bulkOrders = procurementRecords.filter(record => record.quantityInUnits >= 50);

// Display as formatted table
console.log("=== BULK ORDERS REPORT (>= 50 units) ===");
console.table(bulkOrders);

console.log(`\n📊 SUMMARY:`);
console.log(`   Total records: ${procurementRecords.length}`);
console.log(`   Bulk orders: ${bulkOrders.length}`);
console.log(`   Regular orders: ${procurementRecords.length - bulkOrders.length}`);



QN 18

let procurementRecords = [
    {
        id: 1001,
        supplierName: "Roofing Supplies Ltd",
        itemName: "Iron Sheets",
        quantityInUnits: 500,
        costInUgx: 37500000,
        deliveryDate: new Date(2026, 0, 10)
    },
    {
        id: 1002,
        supplierName: "Cement Distributors Ltd",
        itemName: "Cement Bags",
        quantityInUnits: 1000,
        costInUgx: 28000000,
        deliveryDate: new Date(2026, 0, 12)
    },
    {
        id: 1003,
        supplierName: "Steel Masters Ltd",
        itemName: "Steel Rods",
        quantityInUnits: 300,
        costInUgx: 42000000,
        deliveryDate: new Date(2026, 0, 15)
    },
    {
        id: 1004,
        supplierName: "Paint World Ltd",
        itemName: "Paint (20L)",
        quantityInUnits: 150,
        costInUgx: 9750000,
        deliveryDate: new Date(2026, 0, 18)
    },
    {
        id: 1005,
        supplierName: "PVC Solutions Ltd",
        itemName: "PVC Pipes",
        quantityInUnits: 800,
        costInUgx: 12000000,
        deliveryDate: new Date(2026, 0, 20)
    },
    {
        id: 1006,
        supplierName: "Hardware Distributors Ltd",
        itemName: "Binding Wire",
        quantityInUnits: 2000,
        costInUgx: 5000000,
        deliveryDate: new Date(2026, 0, 22)
    }
];


QN 19


// Calculate total quantity using reduce()
let totalQuantity = procurementRecords.reduce((sum, record) => {
    return sum + record.quantityInUnits;
}, 0);

// Calculate total cost using reduce()
let totalCost = procurementRecords.reduce((sum, record) => {
    return sum + record.costInUgx;
}, 0);

// Log both using template literals
console.log(`Total quantity procured: ${totalQuantity} units`);
console.log(`Total cost: ${totalCost} UGX`);


// ========== SET TASKS ==========

// Function to get unique suppliers
function getUniqueSuppliers(procurementRecords) {
    let supplierSet = new Set();
    procurementRecords.forEach(record => supplierSet.add(record.supplierName));
    return Array.from(supplierSet);
}

// Create authorized roles Set
let authorizedRoles = new Set(['Store Manager', 'Accounts/Admin']);

// Function to check authorization
function canRegisterStock(role) {
    return authorizedRoles.has(role);
}

// ========== MAP TASKS ==========
 
 QN 20

let nyondoPriceList = new Map([
    ['Iron Sheets', 75000],
    ['Cement Bags', 28000],
    ['Steel Rods', 140000],
    ['Paint (20L)', 65000],
    ['PVC Pipes', 15000]
]);


function calculateSaleTotal(itemName, quantityInUnits) {
    let price = nyondoPriceList.get(itemName);
    return price ? price * quantityInUnits : "Item not found";
}


for (let [item, price] of nyondoPriceList) {
    console.log(`${item}: ${price} UGX`);
}


let highest = Array.from(nyondoPriceList.entries())
    .reduce((max, current) => current[1] > max[1] ? current : max);
console.log(`Highest: ${highest[0]} at ${highest[1]} UGX`);