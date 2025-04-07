export function Tags({ tags }) {
  return (
    <div className="tag-container">
      {tags?.map((tag, index) => {
        return (
          <div className="tag" key={index}>
            <p>{tag}</p>
          </div>
        );
      })}
    </div>
  );
}
