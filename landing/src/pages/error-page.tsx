import { Center } from "@mantine/core";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Center style={{ flexGrow: 1 }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {isRouteErrorResponse(error)
          ? <i>{error.statusText || error.data}</i>
          : (
            "Unknown Error Occurred"
          )}
      </p>
    </Center>
  );
}

export default ErrorPage;
