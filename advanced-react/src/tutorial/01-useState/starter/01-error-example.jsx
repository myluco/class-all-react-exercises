const ErrorExample = () => {
  let count = 0;

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => (count + 1)}>Increment</button>
    </div>
  );
};

export default ErrorExample;
