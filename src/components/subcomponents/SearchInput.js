const SearchInput = (props) => {
  const { onSubmitSearch, setInputValue, inputValue } = props
  return (
    <form className="pb-1 mb-2 px-2" onSubmit={onSubmitSearch}>
      <input
        autoFocus
        className="text-center border-2 rounded-2xl outline-none w-full h-[55px] bg-white text-black dark:bg-secondary dark:text-white border-primary"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  )
}

export default SearchInput
