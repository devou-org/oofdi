const About = () => {
  return (
    <section className="w-screen h-auto lg:h-[100vh] flex flex-col items-center justify-center bg-white text-black mt-10">
      <div className="w-full flex flex-col justify-center items-center p-4 lg:h-1/2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl  font-bold text-center mt-2 z-100">
          About <span className="text-[#FF1F52] p-2">OOFDI</span>
        </h1>
        <p className="text-xl md:text-2xl font-semibold max-w-4xl text-center p-4">
          At Oofdi, we believe quality living starts with convenience and trust. That’s why we
          deliver more than just meals — we bring you fresh harbor fish, premium meat and chicken,
          groceries, and even medicines right to your doorstep.
        </p>
      </div>

      <div className="w-full flex lg:h-3/4 h-64 sm:h-80 md:h-[28rem]">
        <img src="./images/about.webp" className="w-full h-full object-cover" alt="About Oofdi" />
      </div>
    </section>
  );
};
export default About;
