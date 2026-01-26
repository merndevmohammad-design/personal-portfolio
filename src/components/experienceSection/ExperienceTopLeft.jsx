import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>

      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="10" text="Websites" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="8" text="Dashboards" />
      </div>

      <p className="text-center text-lightGrey leading-relaxed">
        With 3 years of experience building dynamic, user-friendly web
        applications, including modern websites and interactive dashboards.
      </p>

      <ExperienceInfo number="$100k" text="Max Budget" />
    </div>
  );
};

export default ExperienceTopLeft;
