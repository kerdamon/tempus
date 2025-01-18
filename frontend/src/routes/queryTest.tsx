import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/queryTest')({
  component: QueryTest,
})

function QueryTest() {
  const { data, refetch } = useQuery({
    queryKey: ['asdf'],
    queryFn: () => fetch('http://localhost:8000').then((res) => res.json()),
  })

  return (
    <>
      <Button onClick={() => refetch()}>Refetch</Button>
      <p>Fetch result: {data}</p>
    </>
  )
}
