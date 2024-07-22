import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()

  return (
    <div>
      <div>Product: {JSON.stringify(query)}</div>
    </div>
  )
}