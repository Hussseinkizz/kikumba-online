import * as BiIcons from 'react-icons/bi';

// show this on load...🙂
export const LoaderUI = () => {
  return (
    <>
      <section className='w-full h-screen grid place-items-center'>
        <BiIcons.BiLoaderAlt className="text-yellow-200 faa-spin faa-fast animated h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16" />
      </section>
    </>
  );
};

// show this on error... 😠
export const ErrorUI = ({ error }) => {
  return (
    <>
      <p className="text-red-600">{error.message}</p>
    </>
  );
};

// show this on fetch...😦
export const FetchUI = ({ fetching }) => {
  return (
    <>
      <div>{fetching && 'Background Updating...'}</div>
    </>
  );
};
