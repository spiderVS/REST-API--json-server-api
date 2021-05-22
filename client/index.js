const baseUrl = "http://localhost:3000";

const path = {
  employees: "/employees",
  comments: "/comments"
};

// [{ key: 'active', value: 'true' }]
const generateQueryString = (queryParams = []) => queryParams.length 
  ? `?${queryParams.map(x => `${x.key}=${x.value}`).join('&')}` 
  : '';

// --------- getEmployees ----------
const getEmployees = async (queryParams) => {
  const response = await fetch(`${baseUrl}${path.employees}${generateQueryString(queryParams)}`);

  const items = await response.json();
  const count = Number(response.headers.get('X-Total-Count'));

  return { items, count };
};

// --------- getEmployee ----------
const getEmployee = async (id) => {
  const response = await fetch(`${baseUrl}${path.employees}/${id}`);
  const employee = await response.json();
  
  return {employee};
};

// --------- createEmployee ----------
const createEmployee = async (body) => {
  const response = await fetch(`${baseUrl}${path.employees}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  const employee = await response.json();
  return employee;
};

// --------- updateEmployee ----------
const updateEmployee = async (id, body) => {
  const response = await fetch(`${baseUrl}${path.employees}/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const employee = await response.json();
  return employee;
};

// --------- updateEmployeeParam ----------
const updateEmployeeParam = async (id, body) => {
  const response = await fetch(`${baseUrl}${path.employees}/${id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const employee = await response.json();
  return employee;
};

// --------- deleteEmployee ----------
const deleteEmployee = async (id) => {
  const response = await fetch(`${baseUrl}${path.employees}/${id}`, {
    method: 'DELETE',
  });
  const employee = await response.json();
  return employee;
};


// -----------------------------------------------

/* const main = async () => {
  const employees = await getEmployees([{ key: '_page', value: 1 }, { key: '_limit', value: 30 }]);
  console.log(employees);
}; */

/* const main = async () => {
  const employee = await getEmployee(75);
  console.log(employee);
}; */

/* const main = async () => {
  const employee = await createEmployee({ 
      name: "Dimon",
      role: "HR",
      salary: 1500,
      active: true,
    });
  console.log(employee);
}; */

/* const main = async () => {
  const employee = await updateEmployee(3, { 
      name: "Marina",
      role: "manager",
      salary: 1200,
      active: false,
    });

  console.log(employee);
}; */

const main = async () => {
  const employee = await updateEmployeeParam(3, { 
      role: "Product Manager",      
    });

  console.log(employee);
};

// const main = async () => {
//   const employee = await deleteEmployee(2);
//   console.log(employee);
// };

main();
