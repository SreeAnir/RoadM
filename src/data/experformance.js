export const experformance = [
  {
    id : 401 ,
    title :"Example 8: Example: useMemo + useCallback in Action",
    description: "✅ MemoExample ,memoizes expensive computed values ,✅ useCallback — memoizes callback functions to prevent re-renders",
    component: "MemoExample"
  },
  {
    id : 402 ,
    title :"Example 9:  Memoized List Item Component",
    description: "You have a list of items and a click handler. Only the clicked item should re-render, not the entire list.",
    component: "MemoizedListExample"
  },
  {
    id : 403 ,
    title :"Example 9:  useCallback in action",
    description: "You have a list of items and a click handler. Only the clicked item should re-render, not the entire list.",
    component: "UseCallStackParent"
  },
  {
    id : 404 ,
    title :"Example 10: Expensive Calculation on Each List Item",
    description: "Render a list of 100 items.Each item calculates a fake 'heavy' value",
    component: "WithoutUseMemo"
  },
  {
    id : 405 ,
    title :"Example 11: Expensive Calculation useMemo",
    description: "Optimized version using useMemo to avoid recalculating the expensive slowFunction on every re-render.",
    component: "WithUseMemo"
  },
  {
    id : 406 ,
    title :"Example  useCallback with React.memo",
    description: "useCallback is a React Hook that memoizes a function, so that the function isn’t re-created on every render.",
    component: "ExUseCallback"
  },
  {
    id : 407 ,
    title :"Example  Without useCallback – Visual Behavior:",
    description: "useCallback with a visual-style explanation and then see how it plays with useEffect..",
    component: "ExNoUseCallback"
  },
];
