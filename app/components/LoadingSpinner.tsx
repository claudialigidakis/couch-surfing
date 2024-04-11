import tw from 'tailwind-styled-components';

const Spinner = tw.div`
  animate-spin
  border-4 
  border-blue-500 
  border-t-transparent
  rounded-full
  w-12
  h-12
`;

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  );
}