const FeedbackError = ({
  hasAProblem,
  problem,
}: {
  hasAProblem: boolean;
  problem: string;
}) => {
  return (
    hasAProblem && (
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {problem}
      </div>
    )
  );
};

export default FeedbackError;
