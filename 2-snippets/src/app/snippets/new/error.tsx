'use client';

interface ErrorPageProps {
   error: Error;
   reset: () => void;
}

export default function ErrorPage({ error }: ErrorPageProps) {
   return (
      <div>
         <h1>{error.message}</h1>
      </div>
   );
}
