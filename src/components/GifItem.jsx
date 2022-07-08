//xport const GifItem = ({image:{title, url}}) => {
export const GifItem = ({title, url, id}) => {
  
  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}
