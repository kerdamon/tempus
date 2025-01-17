import { useQuery } from '@tanstack/react-query';
import './App.css';
import { Button } from './components/ui/button';

function App() {
  const { data, refetch } = useQuery({
    queryKey: ['asdf'],
    queryFn: () => fetch('http://localhost:8000').then((res) => res.json()),
  });

  return (
    <>
      <Button onClick={() => refetch()}>Refetch</Button>
      <p>Fetch result: {data}</p>
    </>
  );
}

export default App;
