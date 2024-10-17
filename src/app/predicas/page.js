export default function Page() {
  return (
    <main>
      <h1 className="mt-8 text-center text-3xl font-bold">Prédicas</h1>
      <div className="mx-auto max-w-[1000px]">
        <PredicaCard
          title="Perseverando en un sueño"
          speaker="Juan Serveleon"
          date="13-10-2024"
          url="https://www.youtube.com/watch?v=DY80FqO1kp4"
        />
        <PredicaCard
          title="Esperanza viva"
          speaker="Juan Serveleon"
          date="06-10-2024"
          url="https://www.youtube.com/watch?v=g353jG23kGk"
        />
        <PredicaCard
          title="Todo es tuyo"
          speaker="Juan Serveleon"
          date="29-09-2024"
          url="https://www.youtube.com/watch?v=14AGMUNcsNg"
        />
        <PredicaCard
          title="Crisis de fe"
          speaker="Juan Serveleon"
          date="22-09-2024"
          url="https://www.youtube.com/watch?v=UYMHfL3tvuA"
        />
        <PredicaCard
          title="No te olvides de Jehová"
          speaker="Juan Serveleon"
          date="15-09-2024"
          url="https://www.youtube.com/watch?v=mMIduY1ZXkM"
        />
        <PredicaCard
          title="Como un clavo en lugar firme"
          speaker="Juan Serveleon"
          date="08-09-2024"
          url="https://www.youtube.com/watch?v=7JToJPE1eAc"
        />
      </div>
    </main>
  );
}

function PredicaCard(props) {
  return (
    <div className="m-4 flex h-[100px] items-center bg-white">
      <a
        href={props.url}
        className="flex h-full w-[100px] flex-none items-center bg-slate-100 p-4 text-center text-xs hover:bg-slate-300"
        target="_blank"
      >
        Ver en YouTube
      </a>
      <div className="p-4">
        <a href={props.url} className="font-bold" target="_blank">
          {props.title}
        </a>
        <p className="text-sm">
          {props.speaker} · {props.date}
        </p>
      </div>
    </div>
  );
}
