const FeedbackInProgress = ({ isLoading }: { isLoading: boolean }) => {
  return (
    isLoading && (
      <div
        style={{
          width: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: "5px",
          overflow: "hidden",
          height: "10px",
        }}
      >
        <div
          style={{
            width: "50%",
            backgroundColor: "#3b82f6",
            height: "100%",
          }}
        ></div>
      </div>
    )
  );
};

export default FeedbackInProgress;