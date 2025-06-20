import Image from "next/image";

export default function MoreThanFood() {
  return (
    <>
      <section className="bg-white text-black mt-12">
        <div className="max-w-3xl mx-auto text-center px-6 md:px-0">
          <h2 className="text-5xl md:text-5xl font-bold mb-6">
            <span style={{ color: "#FF1F52" }}>More</span> Than Just Food
          </h2>
          <p className="text-xl md:text-2xl font-semibold mt-4">
            At Oofdi, we care about your health as much as your hunger.
          </p>
          <p className="text-xl md:text-2xl font-semibold">
            In addition to delivering fresh meals, groceries, and protein, we also provide fast and
            reliable medicine delivery — straight from trusted pharmacies near you.
          </p>
        </div>
      </section>
      <div className="w-full mt-8">
        <Image
          src="/images/Pharmacy2.jpg"
          alt="More Than Food"
          width={1173}
          height={390}
          className="w-full h-64 md:h-96 object-cover object-top"
          priority
        />
      </div>
    </>
  );
}
