const ContentOfLazyLoad = () => {
  return (
    <>
      <div className="box-200-400">ContentOfLazyLoad</div>
      <button className="rounded bg-blue-500 px-4 py-2 text-base text-white">tailwindcss</button>
      <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        验证功能123
      </button>
      <div className="w-64 rounded border bg-white p-6 shadow">
        <h5 className="mb-4 mt-0 text-3xl font-bold">My Title</h5>
        <p className="text-sm text-gray-700">Content goes here</p>
        <MyButton>tailwindcss的按钮</MyButton>
      </div>
    </>
  )
}
export default ContentOfLazyLoad

function MyButton({ children }: { children: React.ReactNode }) {
  return <button className="rounded bg-blue-500 px-4 py-2 text-base text-white">{children}</button>
}
