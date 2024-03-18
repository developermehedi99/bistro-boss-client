const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center mb-8">
      <h1 className="text-yellow-500">{subHeading}</h1>
      <h1 className="text-3xl border-y-4 p-4 uppercase my-4">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
