import Image from 'next/image';

export default function People({ list }) {
  return (
    <>
      {list.map((person, index) => (
        <div key={index} className="flex items-center space-x-4">
          <Image
            src={person.image}
            alt={person.name}
            width={180}
            height={180}
          />
          <div>
            <h3>{person.name}</h3>
            <p>{person.title}</p>
            <p>
              <a href={person.link} target="_blank" rel="noreferrer" className="link">
                Website
              </a>
            </p>
          </div>
        </div>
      ))}
    </>
  )
}