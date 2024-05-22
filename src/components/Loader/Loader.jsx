import { InfinitySpin } from "react-loader-spinner";

export const Loader = () => {
  const loaderStyle = {
    position: "fixed",
    top: "10%",
    left: "50%",
  };
  return (
    <div style={loaderStyle}>
      <InfinitySpin
        visible={true}
        width="500"
        color="#0132b7"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};
