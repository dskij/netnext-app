import Link from 'next/link'
import ModeToggle from './ModeToggle'

const Header = () => {
  return (
    <header className="border-b bg-background flex justify-between p-2">
      <Link href="/" className="text-xl font-bold text-primary">
        NetNext
      </Link>
      <ModeToggle />
    </header>
  )
}
export default Header
