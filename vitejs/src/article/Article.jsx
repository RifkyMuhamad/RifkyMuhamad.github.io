import TabsComponent from "./tabs/TabsComponent";

const Article = () => {
  return (
    <div className="">
      <TabsComponent items={items}/>
    </div>
  );
};

export default Article;

const items = [
  {
    title: "Pemrograman",
    content: (
      <div className="">
        <h1 className="">Pemrograman</h1>
        <div className="">
          <h2 className="">Java</h2>
          <h2 className="">JavaScript</h2>
          <h2 className="">Golang</h2>
        </div>
      </div>
    ),
  },
  {
    title: "Bahasa Asing",
    content: (
      <div className="">
        <h1 className="">Bahasa Asing</h1>
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
      <div className="">
        <h1 className="">Matematika</h1>
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
      <div className="">
        <h1 className="">Fisika</h1>
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
      <div className="">
        <h1 className="">Kimia</h1>
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
      <div className="">
        <h1 className="">Sejarah</h1>
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
      <div className="">
        <h1 className="">Ekonomi</h1>
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
      <div className="">
        <h1 className="">Filsafat</h1>
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
