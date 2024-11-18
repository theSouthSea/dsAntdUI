const CardPage = (props) => {
  const { projects } = props
  return (
    <section>
      <header className="space-y-4 bg-white p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">Projects</h2>
          <a
            href="/new"
            className="group flex items-center rounded-md bg-blue-500 py-2 pl-2 pr-3 text-sm font-medium text-white shadow-sm hover:bg-blue-400"
          >
            <svg width="20" height="20" fill="currentColor" className="mr-2" aria-hidden="true">
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            New
          </a>
        </div>
        <form className="group relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="pointer-events-none absolute left-3 top-1/2 -mt-2.5 text-slate-400 group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            aria-label="Filter projects"
            placeholder="Filter projects..."
          />
        </form>
      </header>
      <ul className="grid grid-cols-1 gap-4 bg-slate-50 p-4 text-sm leading-6 sm:grid-cols-2 sm:px-8 sm:pb-8 sm:pt-6 lg:grid-cols-1 lg:p-4 xl:grid-cols-2 xl:px-8 xl:pb-8 xl:pt-6">
        {projects?.map((project) => (
          <li key={project.title}>
            <a
              href={project.url}
              className="group rounded-md bg-white p-3 shadow-sm ring-1 ring-slate-200 hover:bg-blue-500 hover:shadow-md hover:ring-blue-500"
            >
              <dl className="grid grid-cols-2 grid-rows-2 items-center sm:block lg:grid xl:block">
                <div>
                  <dt className="sr-only">Title</dt>
                  <dd className="font-semibold text-slate-900 group-hover:text-white">
                    {project.title}
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Category</dt>
                  <dd className="group-hover:text-blue-200">{project.category}</dd>
                </div>
                <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                  <dt className="sr-only">Users</dt>
                  {project.users.map((user) => (
                    <dd
                      key={project.name}
                      className="flex justify-end -space-x-1.5 sm:justify-start lg:justify-end xl:justify-start"
                    >
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white"
                        loading="lazy"
                      />
                    </dd>
                  ))}
                </div>
              </dl>
            </a>
          </li>
        ))}
        <li className="flex">
          <a
            href="/new"
            className="group flex w-full flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 py-3 text-sm font-medium leading-6 text-slate-900 hover:border-solid hover:border-blue-500 hover:bg-white hover:text-blue-500"
          >
            <svg
              className="mb-1 text-slate-400 group-hover:text-blue-500"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            New project
          </a>
        </li>
      </ul>
    </section>
  )
}
const projects = [
  {
    title: "Project 1",
    category: "Category 1",
    users: [
      {
        name: "John Doe",
        avatar: "http://dummyimage.com/200x100/894FC4/FFF&text=Mock",
      },
      {
        name: "Jane Doe",
        avatar: "http://dummyimage.com/200x100/894FC4/FFF&text=Mock",
      },
      {
        name: "Bob Smith",
        avatar: "http://dummyimage.com/200x100/894FC4/FFF&text=Mock",
      },
    ],
    url: "/project/1",
  },
  {
    title: "Project 2",
    category: "Category 2",
    users: [
      {
        name: "John Doe",
        avatar: "http://dummyimage.com/200x100/894FC4/FFF&text=Mock",
      },
      {
        name: "Jane Doe",
        avatar: "http://dummyimage.com/200x100/894FC4/FFF&text=Mock",
      },
      {
        name: "Bob Smith",
        avatar: "http://dummyimage.com/200x100/894FC4/FFF&text=Mock",
      },
    ],
    url: "/project/2",
  },
]
export default function App() {
  return <CardPage projects={projects}></CardPage>
}
