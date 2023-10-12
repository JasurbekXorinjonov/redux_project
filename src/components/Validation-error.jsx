import { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
  const { error } = useSelector((state) => state.auth);

  const errorMessage = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(", ");
      return `${name} - ${msg}`;
    });
  }, [error]);

  console.log(error !== null && errorMessage());

  return (
    error !== null &&
    errorMessage().map((error) => {
      <div className="alert alert-danger" role="alert" key={error}>
        {error.email}
      </div>;
    })
  );
};

export default ValidationError;
