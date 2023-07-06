

function JobDetailsBody({ selectedjob }) {
  return (
    <article className="fade-in  py-[2.5rem] px-[1.5rem] tablet:px-[3rem] w-[327px] rounded-md bg-white dark:bg-vdblue text-dgray 
    tablet:w-[689px] desktop:w-[730px] text-justify mx-auto tablet:mt-[1rem] ">
      <div className="tablet:flex items-center justify-between tablet:mb-[2.5rem]">
      <div>
        <div className="text-dgray mb-[0.5rem]">
          <span>{selectedjob.postedAt}</span>  |  <span>{selectedjob.contract}</span>
        </div>
        <h2 className="text-h1-mb tablet:text-h1-dk text-midnight dark:text-white mb-[0.5rem]">
          {selectedjob.position}
        </h2>
        <p className="text-blue-500">{selectedjob.location}</p>
      </div>

      <div className="mt-[3rem] mb-[2rem] tablet:w-[141px]">
        <button className="w-full text-white bg-violet h-[48px] rounded-md text-[1rem] font-bold hover:bg-lightviolet">
          Apply Now
        </button>
      </div>
      </div>
      
      <div className="text-dgray text-body">{selectedjob.description}</div>

      <div className="mt-[2.5rem] text-body text-dgray mb-[2rem] tablet:mb-[2.5rem] ">
        <h3 className="text-h1-mb text-midnight dark:text-white mb-[1.5rem]">
          Requirements
        </h3>
        {selectedjob.requirements.content}
      </div>

      <ul className="text-dgray list-disc list-outside marker:text-violet ml-[1rem]">
        {selectedjob.requirements.items.map((item, index) => (
          <li className="mb-[0.5rem]" key={index}>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-[3rem] mb-[2rem]">
        <h4 className="text-h1-mb text-midnight dark:text-white mb-[1.5rem]">
          What You will Do
        </h4>
        {selectedjob.role.content}
      </div>

      <ol className="list-decimal list-outside marker:text-violet marker:font-bold  ml-[1rem]">
        {selectedjob.role.items.map((item, index) => (
          <li className="mb-[0.5rem]" key={index}>
            {item}
          </li>
        ))}
      </ol>
    </article>
  );
}

export default JobDetailsBody;
