import Loading from "../Loading";

const LoadingOverlay = () => {
  return (
    <div className="w-screen h-screen bg-slate-100 bg-opacity-50 flex justify-center items-center absolute top-0 -left-0">
      <Loading />
    </div>
  );
};

export default LoadingOverlay;
