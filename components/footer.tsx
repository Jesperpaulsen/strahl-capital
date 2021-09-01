import Container from './container/container'
import Carbonbadge from "react-carbonbadge"

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="pt-4 flex flex-col lg:flex-row items-center">
        <Carbonbadge />
        </div>
      </Container>
    </footer>
  )
}
