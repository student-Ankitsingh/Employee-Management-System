const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    firstName: "Sneha",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Prepare weekly report",
        description: "Compile and summarize weekly team performance.",
        date: "2025-05-08",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix login bug",
        description: "Resolve authentication issue on user login page.",
        date: "2025-05-06",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client feedback call",
        description: "Attend call with client regarding dashboard feedback.",
        date: "2025-05-07",
        category: "Communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstName: "Amit",
    taskNumber: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Design landing page",
        description: "Create a responsive layout for new homepage.",
        date: "2025-05-09",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update project docs",
        description: "Revise documentation with latest project updates.",
        date: "2025-05-05",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team sync-up",
        description: "Join the sprint planning meeting.",
        date: "2025-05-06",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Review merge requests",
        description: "Check and approve pending merge requests.",
        date: "2025-05-08",
        category: "Code Review",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstName: "Ravi",
    taskNumber: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Database optimization",
        description: "Improve query performance for analytics.",
        date: "2025-05-09",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Security patching",
        description: "Apply latest patches to production servers.",
        date: "2025-05-06",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deployment verification",
        description: "Verify deployment status on all environments.",
        date: "2025-05-07",
        category: "DevOps",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Audit access logs",
        description: "Analyze access logs for suspicious activity.",
        date: "2025-05-08",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix email delivery issue",
        description: "Emails are failing to deliver to Gmail addresses.",
        date: "2025-05-10",
        category: "Bug Fixing",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    firstName: "Priya",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Add unit tests",
        description: "Increase test coverage for auth module.",
        date: "2025-05-09",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Improve UI accessibility",
        description: "Ensure color contrast meets standards.",
        date: "2025-05-06",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Backend code refactoring",
        description: "Clean up and modularize user controller logic.",
        date: "2025-05-07",
        category: "Refactoring",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    firstName: "Kiran",
    taskNumber: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Social media scheduling",
        description: "Plan and schedule next week’s posts.",
        date: "2025-05-05",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Product demo setup",
        description: "Prepare demo environment for new product.",
        date: "2025-05-08",
        category: "Demo",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Research competitor tools",
        description: "Gather insights on similar products in the market.",
        date: "2025-05-07",
        category: "Research",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Write blog article",
        description: "Draft a new article for company blog.",
        date: "2025-05-10",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
    firstName: "Raj"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  return {
    employees: JSON.parse(localStorage.getItem('employees')) || [],
    admin: JSON.parse(localStorage.getItem('admin')) || []
  };
};

export const updateEmployeesInStorage = (employees) => {
  localStorage.setItem('employees', JSON.stringify(employees));
};