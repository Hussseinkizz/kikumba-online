// show this on load...🙂 
export const LoaderUI = () => {
  return (
    <>
      <h1>Loading...</h1>
      {/* //todo this should be a spinner */}
    </>
  )
}

// show this on error... 😠 
export const ErrorUI = ({error}) => {
  return (
    <>
      <p className="text-red-600">{error.message}</p>
    </>
  )
}

// show this on fetch...😦 
export const FetchUI = ({ fetching }) => {
  return (
    <>
      <div>{fetching && "Background Updating..."}</div>
    </>
  )
}

