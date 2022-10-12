import Link from 'next/link';
const PageHero = props => {
  const { withLogo } = props;
  if (!props?.img?.cloudinaryId) {
    return <div className="my-24"></div>;
  }
  return (
    <div
      className="h-[400px] md:h-[575px] lg:h-[600px] bg-cover flex justify-end items-center relative  p-4 flex-col"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${props.img.cloudinaryId})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute  left-0 w-full h-1/2 bottom-0 from-gray-900 to-transparent bg-gradient-to-t"></div>
      {withLogo && (
        <div className="flex justify-center items-center mb-20">
          <Link href={'/'}>
            <a>
              <img src="/logo.png" className="max-w-[380px] w-full " />
            </a>
          </Link>
        </div>
      )}
      <h1 className="relative  text-3xl md:text-5xl lg:text-7xl text-primary font-display pb-8">
        {props.pageTitle}
      </h1>
    </div>
  );
};

export default PageHero;
