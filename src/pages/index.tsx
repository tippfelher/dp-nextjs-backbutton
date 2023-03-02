import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {

  const [loading, setLoading] = useState(false);

  const [searchResults, setSearchResults] = useState<string[] | null>(null);

  useEffect(() => {
    setLoading(true);

    const timeoutId = setTimeout(() => {
      setSearchResults(['/post']);
      setLoading(false);
    }, 5000);
    return () => clearInterval(timeoutId);
  }, []);

  return (
    <>
      <h1>Search results..</h1>
      {loading && "loading (very expensive search operation ^^)..."}
      {(searchResults !== null) && searchResults.map((sr) => <Link href={sr} key={sr}>{sr}</Link>)}
    </>
  )
}
