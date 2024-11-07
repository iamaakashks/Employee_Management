const admin = [
    {
      "name": "admin",
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ]
  
  const employee = [
    {
      "id": 101,
      "firstName": "Alice",
      "email": "employee1@example.com",
      "password": "123",
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
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Task 3",
          "description": "Update the project roadmap",
          "date": "2024-10-28",
          "category": "Planning"
        }
      ],
      "taskSummary": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 102,
      "firstName": "Bob",
      "email": "employee2@example.com",
      "password": "123",
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
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Task 3",
          "description": "Review code for the new module",
          "date": "2024-10-29",
          "category": "Code Review"
        }
      ],
      "taskSummary": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 103,
      "firstName": "Charlie",
      "email": "employee3@example.com",
      "password": "123",
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
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Task 3",
          "description": "Prepare database migration plan",
          "date": "2024-10-30",
          "category": "Planning"
        }
      ],
      "taskSummary": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 104,
      "firstName": "Diana",
      "email": "employee4@example.com",
      "password": "123",
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
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Task 3",
          "description": "Prepare branding guidelines",
          "date": "2024-10-30",
          "category": "Design"
        }
      ],
      "taskSummary": {
        "active": 2,
        "newTask": 2,
        "completed": 0,
        "failed": 1
      }
    },
    {
      "id": 105,
      "firstName": "Eve",
      "email": "employee5@example.com",
      "password": "123",
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
        },
        {
          "active": false,
          "newTask": true,
          "completed": true,
          "failed": false,
          "title": "Task 3",
          "description": "Run regression tests",
          "date": "2024-10-29",
          "category": "Testing"
        }
      ],
      "taskSummary": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 106,
      "firstName": "Frank",
      "email": "employee6@example.com",
      "password": "123",
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
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Task 3",
          "description": "Refactor the front-end codebase",
          "date": "2024-10-31",
          "category": "Development"
        }
      ],
      "taskSummary": {
        "active": 2,
        "newTask": 2,
        "completed": 1,
        "failed": 0
      }
    }
];


  
  
export const setLocalStorage = ()=>{
    localStorage.setItem("employees", JSON.stringify(employee));
    localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = ()=>{
    const employee = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return {employee, admin};
}