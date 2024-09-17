const FeedbackError = ({
  hasAProblem,
  problem,
}: {
  hasAProblem: boolean;
  problem: string;
}) => {
  return hasAProblem && <div>{problem}</div>;
};

export default FeedbackError;
