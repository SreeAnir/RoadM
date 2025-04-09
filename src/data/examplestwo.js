export const examplestwo = [
  {
    id:  100 ,
    title: "Example 1: Conditional Rendering Using if-else",
    description: "👉 Show a login button if the user is not logged in, otherwise show a logout button.",
    component: "AuthButton",
  },
  {
    id:  101 ,
    title: "Example 2: Conditional Rendering Using && (Short-circuit)",
    description: "👉 Only show a message when isAdmin is true.",
    component: "AdminMessage",
  },
  {
    id : 102 ,
    title :"Example 3: Using switch-case for Multiple Conditions",
    description: "👉 Display user role (Admin, Moderator, Guest).",
    component: "UserRole",
  },
  {
    id : 103 ,
    title :"Example 4: Conditional Rendering Based on API Data",
    description: "👉 Show 'Loading...' until data is fetched.",
    component: "DataFetcher",
  },
  
  {
    id : 104 ,
    title :"Example 5: Remove item from list (filter)",
    description: "👉 setItems((prevItems) => prevItems.filter((item) => item.id !== id)).",
    component: "ListRemoveExample",
  },
  
];
