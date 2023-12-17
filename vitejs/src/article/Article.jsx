import TabsComponent from "./tabs/TabsComponent";

const Article = () => {
  return (
    <div className="px-[2rem] bg-lime-700">
      <TabsComponent items={items}/>
    </div>
  );
};

export default Article;

const items = [
  {
    title: "Pemrograman",
    content: (
      <div className="px-8 py-4">
        <h1 className="bg-lime-400 px-3 font-bold text-[2rem]">Pemrograman</h1>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-bold text-[1.5rem] bg-red-700">Java</h2>
          <h2 className="font-bold text-[1.5rem] bg-red-700">JavaScript</h2>
          <h2 className="font-bold text-[1.5rem] bg-red-700">Golang</h2>
        </div>
      </div>
    ),
  },
  {
    title: "Bahasa Asing",
    content: (
      <div className="px-8 py-4">
        <h1 className="bg-lime-400 px-3 font-bold text-[2rem]">Bahasa Asing</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem maiores,
          dolore doloribus eum ad earum ab! Inventore, placeat sequi. Aspernatur
          tempora velit iusto dolores perspiciatis voluptatibus quis
          exercitationem pariatur nemo?
        </p>
      </div>
    ),
  },
  {
    title: "Matematika",
    content: (
      <div className="px-8 py-4">
        <h1 className="bg-lime-400 px-3 font-bold text-[2rem]">Matematika</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem maiores,
          dolore doloribus eum ad earum ab! Inventore, placeat sequi. Aspernatur
          tempora velit iusto dolores perspiciatis voluptatibus quis
          exercitationem pariatur nemo?
        </p>
      </div>
    ),
  },
  {
    title: "Fisika",
    content: (
      <div className="px-8 py-4">
        <h1 className="bg-lime-400 px-3 font-bold text-[2rem]">Fisika</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem maiores,
          dolore doloribus eum ad earum ab! Inventore, placeat sequi. Aspernatur
          tempora velit iusto dolores perspiciatis voluptatibus quis
          exercitationem pariatur nemo?
        </p>
      </div>
    ),
  },
  {
    title: "Kimia",
    content: (
      <div className="px-8 py-4">
        <h1 className="bg-lime-400 px-3 font-bold text-[2rem]">Kimia</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem maiores,
          dolore doloribus eum ad earum ab! Inventore, placeat sequi. Aspernatur
          tempora velit iusto dolores perspiciatis voluptatibus quis
          exercitationem pariatur nemo?
        </p>
      </div>
    ),
  },
  {
    title: "Sejarah",
    content: (
      <div className="px-8 py-4">
        <h1 className="bg-lime-400 px-3 font-bold text-[2rem]">Sejarah</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem maiores,
          dolore doloribus eum ad earum ab! Inventore, placeat sequi. Aspernatur
          tempora velit iusto dolores perspiciatis voluptatibus quis
          exercitationem pariatur nemo?
        </p>
      </div>
    ),
  },
  {
    title: "Ekonomi",
    content: (
      <div className="px-8 py-4">
        <h1 className="bg-lime-400 px-3 font-bold text-[2rem]">Ekonomi</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem maiores,
          dolore doloribus eum ad earum ab! Inventore, placeat sequi. Aspernatur
          tempora velit iusto dolores perspiciatis voluptatibus quis
          exercitationem pariatur nemo?
        </p>
      </div>
    ),
  },
  {
    title: "Filsafat",
    content: (
      <div className="px-8 py-4">
        <h1 className="bg-lime-400 px-3 font-bold text-[2rem]">Filsafat</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem maiores,
          dolore doloribus eum ad earum ab! Inventore, placeat sequi. Aspernatur
          tempora velit iusto dolores perspiciatis voluptatibus quis
          exercitationem pariatur nemo?
        </p>
      </div>
    ),
  },
];
