interface ModelTest {
  name: string
  tests: TransportTest[]
}

interface TransportTest {
  name: string
  image: string
  without: number
  with: number
}

export type { ModelTest, TransportTest }