const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ]
  
  const employee = [
    {
      "id": 101,
      "email": "employee1@example.com",
      "password": "employee123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Task 1",
          "description": "Complete the project documentation",
          "date": "2024-10-21",
          "category": "Documentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Task 2",
          "description": "Fix bugs in the user interface",
          "date": "2024-10-18",
          "category": "Development"
        }
      ]
    },
    {
      "id": 102,
      "email": "employee2@example.com",
      "password": "employee456",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Task 1",
          "description": "Create a new feature module",
          "date": "2024-10-22",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Task 2",
          "description": "Prepare the feature demo",
          "date": "2024-10-25",
          "category": "Presentation"
        }
      ]
    },
    {
      "id": 103,
      "email": "employee3@example.com",
      "password": "employee789",
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Task 1",
          "description": "Optimize the database queries",
          "date": "2024-10-17",
          "category": "Database"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Task 2",
          "description": "Research new database structures",
          "date": "2024-10-26",
          "category": "Research"
        }
      ]
    },
    {
      "id": 104,
      "email": "employee4@example.com",
      "password": "employee101",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Task 1",
          "description": "Design a new logo for the project",
          "date": "2024-10-20",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": true,
          "title": "Task 2",
          "description": "Implement feedback on logo design",
          "date": "2024-10-21",
          "category": "Feedback"
        }
      ]
    },
    {
      "id": 105,
      "email": "employee5@example.com",
      "password": "employee202",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Task 1",
          "description": "Test the new API endpoints",
          "date": "2024-10-23",
          "category": "Testing"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Task 2",
          "description": "Prepare the test cases",
          "date": "2024-10-24",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 106,
      "email": "employee6@example.com",
      "password": "employee303",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Task 1",
          "description": "Develop the front-end of the application",
          "date": "2024-10-27",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Task 2",
          "description": "Submit the final report",
          "date": "2024-10-19",
          "category": "Report"
        }
      ]
    }
  ]
  
export const setLocalStorage = ()=>{
    localStorage.setItem("employees", JSON.stringify(employee));
    localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = ()=>{
    const employee = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return {employee, admin};
}