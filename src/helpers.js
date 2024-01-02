import cookie from 'js-cookie';


// This function is for getting customersBarData, riders, merchants from the users throught theri userType 
export const getUserType = (data) => {
  let customers = [];
  let riders = [];
  let merchants = [];
  let companies = [];
  let noUserTypeArray = [];

  let userObject = {
    customers,
    riders,
    merchants,
    companies,
    noUserTypeArray
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i].userType == 'customer') {
      customers.push(data[i])
    } else if (data[i].userType == 'rider') {
      riders.push(data[i])
    } else if (data[i].userType == 'merchant') {
      merchants.push(data[i])
    } else if (data[i].userType == 'company') {
      companies.push(data[i])
    } else {
      noUserTypeArray.push(data[i])
    }
  }

  return userObject;
}


// Converting the created_at date string to a more readable human format.
export const formatDate = (db_date) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(db_date).toLocaleDateString(undefined, options)
}

// To get Cookie from our browser 
export const getCookie = (name) => {
  if (process.browser) {
    return JSON.parse(cookie.get(name))
  }
}

//capitalize only the first letter of the string. 
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Seperating the companiesMerchants into those with merchants and those without merchants.
export const getUsersWithMerchants = (data) => {
  const haveMerchantsArray = [];
  const notHaveMerchantsArray = [];
  const withAndWithoutMerchants = {
    haveMerchantsArray,
    notHaveMerchantsArray
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i].merchant != null) {
      haveMerchantsArray.push(data[i])
    } else {
      notHaveMerchantsArray.push(data[i])
    }
  }
  return withAndWithoutMerchants;
}

// To check if a user is active or suspended 
export const getUserStatus = (arr) => {
  let activeRiders = [];
  let suspendedRiders = [];
  let deletedRiders = [];
  let noStatusRiders = []

  let allRiders = {
    activeRiders,
    suspendedRiders,
    deletedRiders,
    noStatusRiders
  }

  arr.map(item => {
    if (item.attributes.status == null || item.attributes.status == 'active') {
      activeRiders.push(item)
    } else if (item.attributes.status == 'deleted') {
      deletedRiders.push(item)
    } else if (item.attributes.status == 'suspended') {
      suspendedRiders.push(item)
    } else {
      noStatusRiders.push(item)
    }
  })

  return allRiders;
}


// Making an axios GET request
export const getRiderInfo = async (id) => {
  try {
    let response = await fetch(`https://zebrra.itskillscenter.com/api/riders/${id}?populate=*`);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

// This helps decide if to greet morning, afternoon or evening 
export const greetAdmin = () => {
  let day = new Date();
  let hr = day.getHours();
  let greetings;

  if (hr >= 0 && hr < 12) {
    greetings = "Good morning"
  } else if (hr >= 12 && hr <= 17) {
    greetings = "Good afternoon"
  } else {
    greetings = "Good evening"
  }

  return greetings;
}

// Function to use to compare the delivery database date to the date of today.
export const getTodaysDeliveries = (arr) => {

  // Getting todays date and converting the format 
  let todaysDate = new Date();
  let todayDay = todaysDate.getDate();
  let todayMonth = todaysDate.getMonth();
  let todayYear = todaysDate.getFullYear();
  let todayDateSliced = todayYear + '-' + todayMonth + '-' + todayDay;

  // Array that will hold the deliveries done everyday.
  let todaysDeliveries = [];
  let otherDaysDeliveries = [];

  // Now we will loop through the entire deliveries array on the database.
  arr.map(item => {

    let deliveryDate = new Date(item.createdAt)
    let deliveryDay = deliveryDate.getDate();
    let deliveryMonth = deliveryDate.getMonth();
    let deliveryYear = deliveryDate.getFullYear();
    let deliveryDateSliced = deliveryYear + '-' + deliveryMonth + '-' + deliveryDay;

    if (deliveryDateSliced == todayDateSliced) {
      todaysDeliveries.push(item)
    } else {
      otherDaysDeliveries.push(item)
    }
  })

  const delObj = {
    todaysDeliveries,
    otherDaysDeliveries
  }

  return delObj;
}

// Function to convert the database pickup/delivery date and time to only hours and minutes
export const convertDateTime = (time) => {
  var date = new Date(parseInt(time));
  return date.toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Function to convert the database pickup/delivery date and time to only hours and minutes - 2
export const convertDateTime2 = (time) => {
  var humanReadableFormat = new Date(time).toLocaleString()
  return humanReadableFormat;
}

// Function to convert the database pickup/delivery date and time to only hours and minutes - 3
export const convertDateTime3 = (time) => {
  let date = new Date(time);
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0');
  let yyyy = date.getFullYear();
  let formattedDate = yyyy + '-' + dd + '-' + mm;

  return formattedDate;
}

// Function to help us get percentages of pending/delivered/intransit deliveries, and active/suspended riders.
export const getPercentage = (totalLength, arrLength) => {
  let calculation;
  
  if (totalLength == 0 && arrLength == 0) {
    calculation = 0;
  } else {
    calculation = arrLength / totalLength * 100;
  }

  return Math.floor(calculation);
}


// Function to make a get request 
export const getArray = async (url) => {
  let res = await axios.get(url);
  let data = res.data;

  console.log(data);

  return data;
}

// Function to get all customers under a particular merchant from the orders data. 
const getMerchantCustomers = (allOrders) => {
  let obj = {};

  for (let i = 0; i < allOrders.length; i++) {
      obj[allOrders[i].attributes.userId.data?.id] = allOrders[i]   
  }

  let allCustomers = new Array();

  for (const key in obj) {
      allCustomers.push(obj[key])
  }

  return allCustomers;
}


// Function to convert the database createdAt to a more readable format
// new Date(row.pickUpDate).toDateString()
// new Date(row.pickUpDate).toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
    
    // Function to help seperate the prices with comas 
    export const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    // To get the total of an array
    const totalPrice = (arr) => {
      let total = arr.reduce((a, b) => a + parseInt(b.price) * b.new_qty, 0);
      return total;
    }
    
    // To Remove Duplicates 
    export const removeDuplicates = (arr) => {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    }
    
    // To remove Duplicates 2 
    export const removeDuplicates2 = (arr) => {
      return [...new Set(arr)];
    }
    
    // To combine all objects in different arrays into a single array.
    let arrayOfArrays = [ 
      [ { id: 1, name: 'Daniel'} ], 
      [ { id: 2, name: 'Dave'} ]
    ]
    
    export let allOrders = arrayOfArrays.reduce((total, arr) => {
      return [...total, ...arr]
    }, [])
    
    // To get the month difference between two dates.
export const monthDiff1 = (d1, d2) => {
    let months;
  
    months = (new Date(d2).getFullYear() - new Date(d1).getFullYear()) * 12;
    months -= new Date(d1).getMonth();
    months += new Date(d2).getMonth();
  
    return months <= 0 ? 0 : months;
  }
  
  // To get the month difference between two dates. - 2
  export const monthDiff2 = (dateFrom, dateTo) => {
    return new Date(dateTo).getMonth() - new Date(dateFrom).getMonth() + (12 * (new Date(dateTo).getFullYear() - new Date(dateFrom).getFullYear()))
  }
    
    // Calculating the number of days between the start and end dates 
    // let date1 = new Date(d1);
    // let date2 = new Date(d2);
    
    // //calculate time difference  
    // var time_difference = date2.getTime() - date1.getTime();
    
    // //calculate days difference by dividing total milliseconds in a day  
    // var days_difference = time_difference / (1000 * 60 * 60 * 24);
    
    // console.log('day-difference', days_difference)