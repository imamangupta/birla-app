import Navbar from "../landing/landing-page-component/Navbar"
import Hero from "../landing/landing-page-component/Hero"
import About from "../landing/landing-page-component/About"
import Departments from "../landing/landing-page-component/Departments"
import Appointment from "../landing/landing-page-component/Appointment"
import Footer from "../landing/landing-page-component/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <About />
        <Departments />
        <Appointment />
      </main>
      <Footer />
    </>
  )
}

