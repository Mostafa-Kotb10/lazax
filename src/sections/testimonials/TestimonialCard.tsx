import Image from "next/image";

type TestimonialCardProps = {
  data: {
    text: string;
    imageSrc: string;
    name: string;
    username: string;
  };
};

const TestimonialCard = ({
  data: { text, imageSrc, name, username },
}: TestimonialCardProps) => {
  return (
    <div className="card shadow-md">
      <div>{text}</div>
      <div className="mt-5 flex items-center gap-2">
        <Image
          src={imageSrc}
          alt={name}
          className="rounded-full"
          width={40}
          height={40}
        />

        <div className="flex flex-col">
          <div className="font-medium leading-5 tracking-tight">{name}</div>
          <div className="leading-5 tracking-tight">{username}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
