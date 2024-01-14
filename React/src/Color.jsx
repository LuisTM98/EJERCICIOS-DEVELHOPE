export function Color({ colors }){
    return(
        colors.map((item, index) => <li>{item.name}</li>)
    )
}