const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col gap-1  justify-center items-center">
      <p className="font-bold text-6xl text-cyan">{number}</p>
      <p className="font-bold text-lg text-lightGrey uppercase -mt-4">{text}</p>
    </div>
  );
};

export default ExperienceInfo;
