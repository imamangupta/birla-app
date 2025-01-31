import { Play } from "lucide-react";
import CountUp from "@/components/CountUp";

export default function Hero() {
  return (
    <section className="pt-20 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Compassionate care,
                <br />
                exceptional results.
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                The heart of experienced medical professionals committed to
                providing exceptional healthcare services.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="#appointment"
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white hover:bg-blue-700"
              >
                Book Appointment
              </a>
              <button className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 px-8 text-sm font-medium hover:bg-gray-100">
                <Play className="mr-2 h-4 w-4" /> Watch Video
              </button>
            </div>
          </div>
          <img
            src={`/images/OIP2.webp`} // Update this URL to your JPEG image
            alt="Medical professionals caring for patient"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            width={800}
            height={400}
          />
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-600">
              <CountUp
                from={0}
                to={20}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </h3>
            <p className="text-sm text-gray-500">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-600"><CountUp
                from={0}
                to={95}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />%</h3>
            <p className="text-sm text-gray-500">Success Rate</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-600"><CountUp
                from={0}
                to={5000}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />+</h3>
            <p className="text-sm text-gray-500">Happy Patients</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-600"><CountUp
                from={0}
                to={10}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />+</h3>
            <p className="text-sm text-gray-500">Expert Doctors</p>
          </div>
        </div>
      </div>
    </section>
  );
}
