export function Color({ colors }){
    return(
        colors.map((item, index) => <li key={item.id}>{item.name}</li>)
    )
}