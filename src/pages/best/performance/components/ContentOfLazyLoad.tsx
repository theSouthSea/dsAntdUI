const ContentOfLazyLoad = () => {
  return (
    <>
      <div className="box-200-400">ContentOfLazyLoad</div>
      <button className="rounded bg-blue-500 px-4 py-2 text-base text-white">tailwindcss</button>
      <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        验证功能123
      </button>
    </>
  )
}
export default ContentOfLazyLoad

function MyButton({ children }) {
  return <button className="rounded bg-blue-500 px-4 py-2 text-base text-white">{children}</button>
}
