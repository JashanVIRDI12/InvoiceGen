import Nav from './Nav';
import Logo from './Logo';

const Navbar = () => {
    return (
        <header className="bg-black sticky top-0 z-[20] mx-auto flex w-full items-center justify-between  py-4 px-8">
            <Logo />
            <Nav />
        </header>
    )
}

export default Navbar;

