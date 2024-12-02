

const Links = () => {
    const items = ["Home","About", "Technologies","Projects"];
  return (
    <div className="links">{items.map(item=>(
        <a href={`#${item}`} key={item}>
            {item}
        </a>
    ))}</div>
  )
}

export default Links