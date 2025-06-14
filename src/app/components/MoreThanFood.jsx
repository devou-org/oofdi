import Image from "next/image";
export default function MoreThanFood() {
  return (
    <>
      <section className="bg-white text-black px-2 md:px-8 mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-pink-600">More</span> Than Just Food
          </h2>
          <p className="text-xl md:text-2xl font-bold mt-4">
            At Oofdi, we care about your health as much as your hunger.
          </p>
          <p className="text-xl md:text-2xl font-bold">
            In addition to delivering fresh meals, groceries, and protein, we also provide fast and reliable medicine delivery — straight from trusted pharmacies near you.
          </p>
        </div>
      </section>
      <div className="w-full mt-8">
        <Image
          src="/images/Pharmacy2.jpg"
          alt="More Than Food"
          width={1173}
          height={390}
           className="w-full h-[400px] object-cover object-top"
          priority
        />
      </div>
    </>
  );
}