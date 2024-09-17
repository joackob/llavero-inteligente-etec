const FeedbackInProgress = ({ isLoading }: { isLoading: boolean }) => {
  return (
    isLoading && (
      <div>
        <div>Cargando</div>
      </div>
    )
  );
};

export default FeedbackInProgress;
