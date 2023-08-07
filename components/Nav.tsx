import Link from "next/link";

const Navbar = () => {
    const nav = [
        [
            "Home",
            "#"
        ],
        [
            "About",
            "#about"
        ],
        [
            "Projects",
            "#projects"
        ],
        [
            "Contact",
            "#contact"
        ]
    ]
    return (
        <section className="fixed top-0 w-full text-black bg-bggray py-1 flex justify-center items-center gap-2 md:gap-5 px-10">
            {nav.map((button, key) => (
                <div key={key}>
                    <Link href={button[1]}>
                        <button className=" border-b-4 border-bggray hover:border-orange-600 transition-all ease-in-out text-sm md:text-xl font-semibold">{button[0]}</button>
                    </Link>
                </div>
            ))}
        </section>
    );
}
 
export default Navbar;